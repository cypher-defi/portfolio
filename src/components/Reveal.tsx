"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  once?: boolean
}

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.6,
  once = true
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-60px" })

  const directionOffset = {
    up:    { x: 0,         y: distance  },
    down:  { x: 0,         y: -distance },
    left:  { x: distance,  y: 0         },
    right: { x: -distance, y: 0         },
    none:  { x: 0,         y: 0         }
  }

  const { x, y } = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }}
    >
      {children}
    </motion.div>
  )
}
