"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { AnimatedHero } from "@/components/AnimatedHero"

// Define the interface to satisfy TypeScript in page.tsx
interface HeroProps {
  label: string
  title: string
  titleItalic: string
  description: string
  primaryCTA: string
  secondaryCTA: string
}

export const HeroSection = ({
  label,
  title,
  titleItalic,
  description,
  primaryCTA,
  secondaryCTA
}: HeroProps) => {
  const router = useRouter()

  return (
    <section className='relative flex items-center justify-center pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden'>
      <div className='w-full max-w-400 mx-auto'>
        <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='relative z-20 space-y-4 sm:space-y-8'>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className='flex items-center gap-3'
            >
              <div className='w-6 sm:w-8 h-px bg-[#8A8A8A]' />
              <span className='text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A] font-light'>
                {label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.05] lg:leading-[0.95] text-[#E5E5E5]'>
                <span className='font-light tracking-tight'>{title}</span>
                <br />
                <span className='font-serif italic font-light tracking-tight'>
                  {titleItalic}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='text-[#8A8A8A] font-light leading-relaxed max-w-lg text-sm sm:text-base'
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='flex flex-wrap gap-3 sm:gap-4'
            >
              <button
                onClick={() => router.push("/#work")}
                className='group px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm bg-[#1a1a1c] text-[#E5E5E5] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#252527] transition-all duration-300 border border-white/5 flex items-center gap-2'
              >
                {primaryCTA}
                <svg
                  className='w-3 h-3 group-hover:translate-x-1 transition-transform'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
              <button
                onClick={() => router.push("/contact")}
                className='px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm bg-transparent text-[#E5E5E5] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white/5 transition-all duration-300 border border-white/10'
              >
                {secondaryCTA}
              </button>
            </motion.div>
          </div>

          {/* Right Visualization - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            className='hidden lg:block relative w-full aspect-square max-w-150 mx-auto lg:mx-0 lg:ml-auto overflow-hidden'
          >
            {/* Main visualization container */}
            <div className='w-full h-full relative'>
              <AnimatedHero />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
