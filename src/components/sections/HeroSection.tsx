"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"

const PixelGrid = dynamic(
  () => import("@/components/PixelGrid").then((mod) => mod.PixelGrid),
  { ssr: false }
)

interface HeroProps {
  label: string
  title: string
  titleItalic: string
  description: string
  primaryCTA: string
  secondaryCTA: string
}

// Word-by-word blur-to-sharp reveal
const BlurRevealText = ({
  text,
  delay = 0,
  className = ""
}: {
  text: string
  delay?: number
  className?: string
}) => {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Character-by-character decode for the label \u2014 CSS-only, zero Framer Motion overhead
const DecodeLabel = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-0"
        style={{
          animation: "charReveal 0.03s ease-out forwards",
          animationDelay: `${delay + i * 0.03}s`
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </span>
)

export const HeroSection = ({
  label,
  title,
  titleItalic,
  description,
  primaryCTA,
  secondaryCTA
}: HeroProps) => {
  const router = useRouter()
  const titleWordCount = title.split(" ").length

  return (
    <section
      className="
        relative flex items-center
        lg:min-h-[calc(100vh-80px)]
        pt-24
        lg:pt-32
        xl:pt-40
        pb-12
        lg:pb-0
        px-4 sm:px-6 lg:px-12 xl:px-24
        overflow-hidden
      "
    >
      {/* Pixel grid — ambient background texture */}
      <div className="absolute inset-0 z-0">
        <PixelGrid />
      </div>

      <div className="relative z-10 w-full mx-auto">
        <div className="max-w-2xl space-y-4 sm:space-y-8">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-6 sm:w-8 h-px bg-[#A8A8A8]" />
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#A8A8A8] font-light">
              <DecodeLabel text={label} delay={0.25} />
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.05] lg:leading-[0.95] tracking-[-0.03em] text-[#E5E5E5]">
            {title && (
              <span className="font-light block">
                <BlurRevealText text={title} delay={0.35} />
              </span>
            )}
            <span className="font-serif italic font-light block">
              <BlurRevealText
                text={titleItalic}
                delay={title ? 0.35 + titleWordCount * 0.08 - 0.1 : 0.35}
              />
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
            className="text-[#A8A8A8] font-light leading-relaxed max-w-lg text-sm sm:text-base"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById("work")
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="group px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm bg-[#4353ff] text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#5a6aff] transition-all duration-300 flex items-center gap-2"
            >
              {primaryCTA}
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm bg-transparent text-[#E5E5E5] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white/5 transition-all duration-300 border border-white/10"
            >
              {secondaryCTA}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
