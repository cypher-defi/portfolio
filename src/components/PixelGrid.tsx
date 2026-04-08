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
      phase: number    // random phase offset
      speed: number    // oscillation speed (cycles/sec)
      amplitude: number // 0 = off, >0 = max opacity when fully lit
    }

    let cols = 0, rows = 0
    let cells: Cell[] = []

    const initCells = (w: number, h: number) => {
      cols = Math.ceil(w / CELL)
      rows = Math.ceil(h / CELL)
      cells = Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        // Cells on the right half and top are more active
        const xBias = col / cols           // 0 (left) → 1 (right)
        const yBias = 1 - row / rows       // 1 (top) → 0 (bottom)
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
      const dpr = window.devicePixelRatio || 1
      const w   = canvas.offsetWidth
      const h   = canvas.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      initCells(w, h)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const startTime = performance.now()
    let rafId: number

    const draw = (now: number) => {
      const t  = (now - startTime) / 1000
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      ctx.clearRect(0, 0, cw, ch)

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        if (cell.amplitude === 0) continue

        const col = i % cols
        const row = Math.floor(i / cols)
        const x   = col * CELL
        const y   = row * CELL

        // Sine wave mapped to [0, amplitude]
        const t2      = t * cell.speed * Math.PI * 2
        const opacity = ((Math.sin(t2 + cell.phase) + 1) / 2) * cell.amplitude

        ctx.fillStyle = `rgba(255,255,255,${opacity.toFixed(3)})`
        ctx.fillRect(x, y, CELL - GAP, CELL - GAP)
      }

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
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
