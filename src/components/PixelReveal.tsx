"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const COLS = 20
const ROWS = 14
const STAGGER = 0.032  // delay per diagonal step (seconds)
const DURATION = 0.38  // animation duration per square (seconds)
const INITIAL_HOLD = 0.2  // seconds before wave starts

export const PixelReveal = () => {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Remove from DOM after all squares finish animating
    const maxDelay = INITIAL_HOLD + (COLS + ROWS - 2) * STAGGER + DURATION + 0.1
    const timer = setTimeout(() => setIsDone(true), maxDelay * 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isDone) return null

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`
      }}
    >
      {Array.from({ length: COLS * ROWS }, (_, i) => {
        const col = i % COLS
        const row = Math.floor(i / COLS)
        // Diagonal wave: top-left → bottom-right
        const delay = INITIAL_HOLD + (col + row) * STAGGER

        return (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: DURATION,
              delay,
              ease: [0.32, 0, 0.67, 0]
            }}
            style={{ transformOrigin: "top", backgroundColor: "#121214" }}
          />
        )
      })}
    </div>
  )
}
