"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export const MercuryCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Highly responsive spring config - follows cursor closely
  const springConfig = { damping: 25, stiffness: 500, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Detect if the hovered element is a link or button
      const target = e.target as HTMLElement
      const isInteractive = target.closest("a, button")
      setIsHovered(!!isInteractive)
    }

    window.addEventListener("mousemove", moveMouse)
    return () => window.removeEventListener("mousemove", moveMouse)
  }, [mouseX, mouseY, isVisible])

  return (
    <motion.div
      className='fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full mix-blend-difference flex items-center justify-center'
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        scale: isHovered ? 2.5 : 1
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {/* The Core "Drop" */}
      <div className='absolute inset-0 bg-white rounded-full opacity-80 blur-[1px]' />

      {/* The Outer Ring (Becomes more visible on hover) */}
      <motion.div
        className='absolute inset-[-4px] border border-white/20 rounded-full'
        animate={{
          opacity: isHovered ? 0.5 : 0.2,
          scale: isHovered ? 1.2 : 1.1
        }}
      />

      {/* Small Reflection Highlight */}
      <div className='absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 blur-[0.5px]' />
    </motion.div>
  )
}
