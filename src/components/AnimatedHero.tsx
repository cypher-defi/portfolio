"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const AnimatedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Use IntersectionObserver to only start animation when visible
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true })
    if (!ctx) return

    // Set canvas size with high DPI support
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }
    updateSize()

    const rect = canvas.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = Math.min(rect.width, rect.height) * 0.45 // Max radius to stay within bounds
    const ringCount = 8
    const ringThickness = 40
    const minRadius = ringThickness * 1.2 // Ensure inner radius is always positive
    const ringSpacing = (maxRadius - minRadius) / (ringCount - 1) // Evenly space rings

    // Create wave/ring structure
    class Ring {
      angle: number
      radius: number
      baseRadius: number
      thickness: number
      rotation: number
      rotationSpeed: number

      constructor(index: number, total: number) {
        this.angle = (index / total) * Math.PI * 2
        this.baseRadius = minRadius + index * ringSpacing
        this.radius = this.baseRadius
        this.thickness = Math.min(ringThickness, this.baseRadius * 0.8) // Ensure thickness doesn't exceed radius
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.002
      }

      update(time: number) {
        this.rotation += this.rotationSpeed
        // Subtle breathing effect
        this.radius = this.baseRadius + Math.sin(time * 0.0008 + this.angle) * 8
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(this.rotation)

        // Create chrome gradient effect
        const gradient = ctx.createLinearGradient(
          -this.radius,
          -this.radius,
          this.radius,
          this.radius
        )

        // Chrome-like gradient stops
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.02)")
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.15)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.25)")
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.15)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.02)")

        // Draw curved band (ensure inner radius is always positive)
        const innerRadius = Math.max(1, this.radius - this.thickness)
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
        ctx.arc(0, 0, innerRadius, Math.PI * 2, 0, true)
        ctx.fillStyle = gradient
        ctx.fill()

        // Highlight edge
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.restore()
      }
    }

    // Create multiple rings
    const rings: Ring[] = []
    for (let i = 0; i < ringCount; i++) {
      rings.push(new Ring(i, ringCount))
    }

    let animationId: number
    const startTime = Date.now()

    const animate = () => {
      const time = Date.now() - startTime

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw central glow
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        maxRadius * 0.5
      )
      glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.15)")
      glowGradient.addColorStop(0.4, "rgba(255, 255, 255, 0.05)")
      glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, rect.width, rect.height)

      // Update and draw rings from back to front
      rings.forEach((ring) => {
        ring.update(time)
        ring.draw(ctx, time)
      })

      // Draw center sphere highlight
      const centerGlow = ctx.createRadialGradient(
        centerX,
        centerY - 20,
        0,
        centerX,
        centerY,
        minRadius * 0.6
      )
      centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.4)")
      centerGlow.addColorStop(0.5, "rgba(255, 255, 255, 0.1)")
      centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = centerGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, minRadius * 0.6, 0, Math.PI * 2)
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateSize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [isVisible])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className='relative w-full h-full'
    >
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ background: "transparent" }}
      />
    </motion.div>
  )
}
