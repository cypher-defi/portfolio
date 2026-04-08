"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface StatItem {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: StatItem[]
}

// Parses "50+" into { number: 50, suffix: "+" }
function parseStat(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: value }
  return { number: parseInt(match[1], 10), suffix: match[2] }
}

function CountUp({ value, suffix, duration = 1.6 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(value)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className='w-full bg-[#F7F7F8] border-b border-black/6'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat) => {
            const { number, suffix } = parseStat(stat.value)
            return (
              <div key={stat.label} className='text-center'>
                <div className='font-mono text-4xl md:text-5xl font-bold text-[#4353ff]'>
                  <CountUp value={number} suffix={suffix} />
                </div>
                <p className='text-sm text-[#555555] mt-2'>
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
