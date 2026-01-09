"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

interface TechItem {
  name: string
  category: "Frontend" | "Blockchain" | "Tools" | "Testing"
  iconifyIcon?: string
  customSvg?: React.ReactNode
}

const techStack: TechItem[] = [
  // Blockchain
  {
    name: "Solidity",
    category: "Blockchain",
    iconifyIcon: "simple-icons:solidity"
  },
  {
    name: "Rust",
    category: "Blockchain",
    iconifyIcon: "simple-icons:rust"
  },
  // Frontend
  {
    name: "TypeScript",
    category: "Frontend",
    iconifyIcon: "simple-icons:typescript"
  },
  {
    name: "React",
    category: "Frontend",
    iconifyIcon: "simple-icons:react"
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconifyIcon: "simple-icons:nextdotjs"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconifyIcon: "simple-icons:tailwindcss"
  },
  // Tools
  {
    name: "Viem",
    category: "Tools",
    customSvg: (
      <svg viewBox='0 0 160 224' fill='currentColor' className='w-full h-full'>
        <path d='M83.3 220.4L135.66 96.98C142.8 79.64 145.52 77.94 160.14 77.94V70.8H107.1V77.94C120.7 77.94 127.16 78.62 127.16 85.76C127.16 88.48 126.48 91.88 124.44 96.98L94.18 172.46L61.54 95.96C59.84 91.2 58.82 87.8 58.82 85.42C58.82 78.62 65.28 77.94 76.84 77.94V70.8H1.02V77.94C14.96 77.94 17 80.66 23.8 95.62L81.26 220.4H83.3Z' />
      </svg>
    )
  },
  {
    name: "Wagmi",
    category: "Tools",
    iconifyIcon: "simple-icons:web3dotjs"
  },
  {
    name: "Ethers.js",
    category: "Tools",
    iconifyIcon: "simple-icons:ethereum"
  },
  {
    name: "Anchor",
    category: "Tools",
    customSvg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path d='M12 2C10.07 2 8.5 3.57 8.5 5.5C8.5 6.5 8.93 7.4 9.64 8.03L7 15H9.5L10.25 13H13.75L14.5 15H17L14.36 8.03C15.07 7.4 15.5 6.5 15.5 5.5C15.5 3.57 13.93 2 12 2M12 4C12.83 4 13.5 4.67 13.5 5.5C13.5 6.33 12.83 7 12 7C11.17 7 10.5 6.33 10.5 5.5C10.5 4.67 11.17 4 12 4M11 9H13L12 11.5L11 9M5 17V22H19V17H5Z' />
      </svg>
    )
  },
  {
    name: "Foundry",
    category: "Tools",
    customSvg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path d='M18 2H6C4.9 2 4 2.9 4 4V8H2V10H4V14H2V16H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V16H22V14H20V10H22V8H20V4C20 2.9 19.1 2 18 2M18 20H6V4H18V20M16 6H8V8H10V18H14V8H16V6Z' />
      </svg>
    )
  },
  {
    name: "Slither",
    category: "Tools",
    customSvg: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-full h-full'>
        <path d='M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M14.8,11L12,8.19L9.2,11L8,9.8L12,5.8L16,9.8L14.8,11M9.2,13L12,15.81L14.8,13L16,14.2L12,18.2L8,14.2L9.2,13Z' />
      </svg>
    )
  }
]

export const TechStackSection = () => {
  return (
    <section className='relative py-16 sm:py-12 px-4 sm:px-6 border-t border-white/5'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-10 sm:mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-3 mb-4'
          >
            <div className='w-8 h-px bg-[#8A8A8A]' />
            <span className='text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A] font-light'>
              TECHNOLOGY STACK
            </span>
            <div className='w-8 h-px bg-[#8A8A8A]' />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-3xl md:text-4xl font-light text-[#E5E5E5] mb-3'
          >
            Built with Modern Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-[#8A8A8A] text-sm max-w-2xl mx-auto'
          >
            Production-grade development with industry-standard frameworks and
            tools
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12'>
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className='group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-white/1 border border-white/5 hover:border-white/10 transition-all duration-300'
            >
              {/* Icon with grayscale filter */}
              <div className='mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100'>
                {tech.customSvg ? (
                  <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
                    {tech.customSvg}
                  </div>
                ) : tech.iconifyIcon ? (
                  <Icon
                    icon={tech.iconifyIcon}
                    className='w-10 h-10 sm:w-12 sm:h-12'
                  />
                ) : null}
              </div>

              {/* Name */}
              <h3 className='text-[#E5E5E5] text-sm font-medium text-center mb-1'>
                {tech.name}
              </h3>

              {/* Category */}
              <span className='text-[10px] uppercase tracking-wider text-[#8A8A8A]/60'>
                {tech.category}
              </span>

              {/* Hover glow effect */}
              <div className='absolute inset-0 rounded-lg bg-linear-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
