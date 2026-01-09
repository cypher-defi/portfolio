"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AuraHero() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* 1. The floating animation for your render */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className='relative z-10'
      >
        <Image
          src='/your-rendered-image.png'
          alt='Cypher Digital Render'
          width={800}
          height={600}
          className='grayscale contrast-125 brightness-90 shadow-[0_0_50px_rgba(255,255,255,0.05)]'
        />
      </motion.div>

      {/* 2. The "Calm Water" Background Effect */}
      <div className='absolute inset-0 bg-linear-to-b from-transparent via-[#1a1a1a] to-[#121212] opacity-50' />
    </section>
  )
}
