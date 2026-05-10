"use client"

import { useEffect, useRef } from "react"

const CELL = 22       // px per square
const GAP  = 2        // px gap between squares
const ACTIVE_RATIO = 0.13  // fraction of cells that animate

export const PixelGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    interface Cell {
      phase: number
      speed: number
      amplitude: number
    }

    let cols = 0, rows = 0
    let canvasW = 0, canvasH = 0
    let cells: Cell[] = []

    const initCells = (w: number, h: number) => {
      cols = Math.ceil(w / CELL)
      rows = Math.ceil(h / CELL)
      cells = Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const xBias = col / cols
        const yBias = 1 - row / rows
        const bias  = xBias * 0.6 + yBias * 0.4
        const isActive = Math.random() < ACTIVE_RATIO * (0.4 + bias * 1.2)
        return {
          phase:     Math.random() * Math.PI * 2,
          speed:     0.25 + Math.random() * 0.45,
          amplitude: isActive ? 0.04 + Math.random() * 0.07 : 0
        }
      })
    }

    const resize = () => {
      // Cap DPR at 2 — avoids 3–4× overdraw on high-density displays
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasW = canvas.offsetWidth
      canvasH = canvas.offsetHeight
      canvas.width  = canvasW * dpr
      canvas.height = canvasH * dpr
      ctx.scale(dpr, dpr)
      initCells(canvasW, canvasH)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const startTime = performance.now()
    let rafId: number
    let visible = true

    const draw = (now: number) => {
      const t = (now - startTime) / 1000
      ctx.clearRect(0, 0, canvasW, canvasH)

      // Single fill colour; use globalAlpha per-cell — no string allocation per frame
      ctx.fillStyle = "#ffffff"
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        if (cell.amplitude === 0) continue

        const t2 = t * cell.speed * Math.PI * 2
        const opacity = ((Math.sin(t2 + cell.phase) + 1) / 2) * cell.amplitude

        ctx.globalAlpha = opacity
        ctx.fillRect((i % cols) * CELL, Math.floor(i / cols) * CELL, CELL - GAP, CELL - GAP)
      }
      ctx.globalAlpha = 1

      if (visible) rafId = requestAnimationFrame(draw)
    }

    // Pause the loop when the hero scrolls out of view
    const io = new IntersectionObserver(([entry]) => {
      const wasVisible = visible
      visible = entry.isIntersecting
      if (!wasVisible && visible) rafId = requestAnimationFrame(draw)
    }, { threshold: 0 })
    io.observe(canvas)

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
