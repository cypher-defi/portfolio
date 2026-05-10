"use client"

import { motion } from "framer-motion"

const SmartContractsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 4L4 9L9 14M15 4L20 9L15 14M12 2V20" />
  </svg>
)

const AIAgentIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="3" />
    <path d="M12 11v3M9 18h6M7 18c0-2.2 1.3-4 3-5M17 18c0-2.2-1.3-4-3-5M5 8H3M21 8h-2M12 5V3" />
    <circle cx="3" cy="8" r="1" />
    <circle cx="21" cy="8" r="1" />
  </svg>
)

const FullStackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="5" rx="1" />
    <rect x="2" y="10" width="20" height="5" rx="1" />
    <rect x="2" y="17" width="20" height="4" rx="1" />
    <path d="M6 5.5h.01M6 12.5h.01M6 19h.01" />
  </svg>
)

const ObservabilityIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L4 5V11C4 16 12 21 12 21C12 21 20 16 20 11V5L12 2Z" />
    <path d="M8 12l2 2 4-4" />
  </svg>
)

const accentColors: Record<string, string> = {
  blue:   "text-[#A7C8FF]",
  purple: "text-[#C3A6FF]",
  green:  "text-[#6BFF95]",
  red:    "text-[#FF6B6B]"
}

interface ExpertiseItem {
  number: string
  icon: React.ReactNode
  title: string
  description: string
  accent: string
  tags: string[]
}

const ITEMS: ExpertiseItem[] = [
  {
    number: "01",
    icon: <FullStackIcon />,
    title: "Full Stack Development",
    description:
      "End-to-end applications with Next.js frontends, FastAPI backends, PostgreSQL and Supabase databases, and AWS cloud infrastructure.",
    accent: "green",
    tags: ["TypeScript", "React", "React Native", "Python", "Node.js"]
  },
  {
    number: "02",
    icon: <AIAgentIcon />,
    title: "AI Agent Infrastructure",
    description:
      "On-chain payment gateways (x402), autonomous agent marketplaces, SDK tooling for predictions markets, and NLP-driven payment orchestration.",
    accent: "purple",
    tags: ["x402", "TypeScript", "Solana", "ERC-4337"]
  },
  {
    number: "03",
    icon: <ObservabilityIcon />,
    title: "Security & Observability",
    description:
      "Foundry test suites, Slither static analysis, event-driven indexers, Grafana monitoring dashboards, and multi-sig Timelock governance.",
    accent: "red",
    tags: ["Slither", "Grafana", "Timelock", "viem"]
  },
  {
    number: "04",
    icon: <SmartContractsIcon />,
    title: "Smart Contracts & DeFi",
    description:
      "ERC-4626 vaults, isolated lending markets, DEX infrastructure, and flash loan systems. Solidity and Rust deployed across EVM-compatible chains.",
    accent: "blue",
    tags: ["Solidity", "Foundry", "EVM", "Rust"]
  }
]

const ExpertiseRow = ({ item, index }: { item: ExpertiseItem; index: number }) => (
  <motion.div
    className="group grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_auto] gap-x-6 md:gap-x-10 py-8 border-b border-white/5 cursor-default"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }}
  >
    {/* Number */}
    <div className="font-mono text-4xl md:text-5xl font-light text-white/20 group-hover:text-white/40 transition-colors duration-500 leading-none pt-1 select-none">
      {item.number}
    </div>

    {/* Content */}
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className={accentColors[item.accent]}>{item.icon}</span>
        <h3 className="text-lg md:text-xl font-light tracking-tight text-[#E5E5E5] group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
      </div>
      <p className="text-[#A8A8A8] text-sm leading-relaxed max-w-xl mb-4">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50 border border-white/20 px-2.5 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Hover arrow — desktop only */}
    <div className="hidden md:flex items-start pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 transform">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  </motion.div>
)

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="border-t border-[#2A2A2E]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.5em] mb-6 block">
            / Capabilities
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-0">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter text-[#E5E5E5]">
              What I Build
            </h2>
            <p className="text-[#A8A8A8] text-sm max-w-sm md:text-right leading-relaxed">
              Three domains. One engineer.
              <br className="hidden md:block" />
              Production-grade, end to end.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-0" />

        {/* Rows */}
        {ITEMS.map((item, i) => (
          <ExpertiseRow key={item.number} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
