"use client"

import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Card } from "@/components/molecules/Card"
import { useState } from "react"

// --- ICONS ---
const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

const DocsIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
  </svg>
)

const DashboardIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='18'
    height='18'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14' />
  </svg>
)

// --- INTERFACES ---
interface ProjectMetadata {
  status: "PRODUCTION" | "DEVELOPMENT"
  label1: string
  value1: string
  label2: string
  value2: string
  label3: string
  value3: string
  label4: string
  value4: string
}

interface ProjectTag {
  label: string
  color: "blue" | "purple" | "green" | "red"
}

interface ProjectProps {
  title: string
  description: string
  github: string
  docs: string
  docsIcon?: "docs" | "dashboard"
  liveUrl?: string
  metadata: ProjectMetadata
  tags: ProjectTag[]
  glow: "blue" | "purple" | "green" | "red"
}

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({
  title,
  description,
  github,
  docs,
  docsIcon = "docs",
  liveUrl,
  metadata,
  tags,
  glow
}: ProjectProps) => {
  return (
    <div className='group relative'>
      {/* We keep your original glow color logic but the styling will be 'Calm' via globals.css */}
      <Card glow={glow}>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4'>
          <div className='flex-1'>
            <Heading
              level='h3'
              className='mb-2 font-light tracking-widest uppercase text-[#E5E5E5]'
            >
              {title}
            </Heading>
            <Text className='text-[#A8A8A8] font-light leading-relaxed max-w-2xl'>
              {description}
            </Text>
          </div>
          <div className='flex gap-3 shrink-0'>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 sm:p-2.5 rounded-full border border-white/5 bg-white/2 text-[#A8A8A8] hover:text-white transition-all duration-500'
              aria-label={`View ${title} on GitHub`}
            >
              <GitHubIcon />
            </a>
            <a
              href={docs}
              target={docs.startsWith("http") ? "_blank" : undefined}
              rel={docs.startsWith("http") ? "noopener noreferrer" : undefined}
              className='p-3 sm:p-2.5 rounded-full border border-white/5 bg-white/2 text-[#A8A8A8] hover:text-white transition-all duration-500'
              aria-label={`View ${title} ${docsIcon === "dashboard" ? "dashboard" : "documentation"}`}
            >
              {docsIcon === "dashboard" ? <DashboardIcon /> : <DocsIcon />}
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 sm:p-2.5 rounded-full border border-white/5 bg-white/2 text-[#A8A8A8] hover:text-white transition-all duration-500'
                aria-label={`Open ${title} live app`}
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 py-6 border-y border-white/3'>
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <p className='text-[10px] tracking-[0.2em] text-[#757575] uppercase mb-1'>
                {(metadata as any)[`label${num}`]}
              </p>
              <p className='text-xs font-light text-[#B0B0B0] tracking-wider'>
                {(metadata as any)[`value${num}`]}
              </p>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag.label}
              className='px-3 py-1 rounded-full text-[10px] font-light uppercase tracking-widest border border-white/5 bg-white/2 text-[#909090]'
            >
              {tag.label}
            </span>
          ))}
        </div>
      </Card>
    </div>
  )
}

// --- DATA ---
const PRODUCTION_PROJECTS: ProjectProps[] = [
  {
    title: "Meridian Finance",
    description:
      "Institutional-grade yield automation for DeFi treasury management. ERC-4626 compliant vaults with auto-compounding strategies.",
    github: "https://github.com/Enricrypto/meridian-finance-yield-farming",
    docs: "/meridian-finance-docs",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "STANDARD",
      value2: "ERC-4626",
      label3: "CONTRACTS",
      value3: "5",
      label4: "TESTS",
      value4: "117"
    },
    tags: [
      { label: "ERC-4626", color: "blue" },
      { label: "Yield Farming", color: "blue" },
      { label: "Governance", color: "blue" },
      { label: "Foundry", color: "blue" }
    ],
    glow: "blue"
  },
  {
    title: "LendCore Protocol",
    description:
      "Isolated lending protocol with UUPS upgradeable contracts, multi-sig Timelock governance, ERC-4626 vaults, and a Next.js monitoring dashboard backed by an event-driven indexer (viem + Supabase).",
    github: "https://github.com/Enricrypto/Isolated-Lending-Market",
    docs: "/lendcore-protocol-docs",
    liveUrl: "https://frontend-ashen-omega-89.vercel.app/",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "SEPOLIA LIVE",
      label2: "STANDARD",
      value2: "ERC-4626",
      label3: "CONTRACTS",
      value3: "5",
      label4: "TESTS",
      value4: "91+"
    },
    tags: [
      { label: "Lending", color: "blue" },
      { label: "UUPS Upgradeable", color: "blue" },
      { label: "Timelock Governance", color: "blue" },
      { label: "Event-Driven Indexer", color: "blue" },
      { label: "Supabase", color: "blue" },
      { label: "Next.js", color: "blue" }
    ],
    glow: "blue"
  },
  {
    title: "SwapHub DEX",
    description:
      "Battle-tested DEX infrastructure for institutional swap execution and liquidity provision. Multi-hop routing optimizes trade paths across liquidity pools.",
    github: "https://github.com",
    docs: "/swaphub-dex-docs",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "MODEL",
      value2: "UNISWAP V2",
      label3: "CONTRACTS",
      value3: "3",
      label4: "FEATURES",
      value4: "Multi-Hop"
    },
    tags: [
      { label: "DEX", color: "purple" },
      { label: "Liquidity Pools", color: "purple" },
      { label: "AMM", color: "purple" },
      { label: "Constant Product", color: "purple" }
    ],
    glow: "purple"
  },
  {
    title: "VaultForge",
    description:
      "Time-locked yield optimization for institutional liquidity planning. Tiered lock periods provide dynamic APY rates up to 8% with penalty redistribution.",
    github: "https://github.com/Enricrypto/vault-forge-crypto-bank",
    docs: "/vault-forge-docs",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "ARCHITECTURE",
      value2: "TIERED LOCK",
      label3: "CONTRACTS",
      value3: "6",
      label4: "FEATURES",
      value4: "Referral"
    },
    tags: [
      { label: "Staking", color: "green" },
      { label: "APY", color: "green" },
      { label: "Rewards", color: "green" },
      { label: "EIP-4626", color: "green" }
    ],
    glow: "green"
  },
  {
    title: "NFT Marketplace",
    description:
      "Institutional-grade NFT trading infrastructure with comprehensive order types and automated settlement. Supports fixed-price listings, English auctions, and buy offers.",
    github: "https://github.com/Enricrypto/nft-marketplace",
    docs: "/nft-marketplace-docs",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "TYPE",
      value2: "MARKETPLACE",
      label3: "CONTRACTS",
      value3: "3",
      label4: "TESTS",
      value4: "140+"
    },
    tags: [
      { label: "NFT Trading", color: "purple" },
      { label: "Auctions", color: "purple" },
      { label: "ERC-2981 Royalties", color: "purple" },
      { label: "Sepolia Live", color: "purple" }
    ],
    glow: "purple"
  }
]

const DEVELOPMENT_PROJECTS: ProjectProps[] = [
  {
    title: "ArbWave",
    description:
      "Institutional-grade flash loan arbitrage system with atomic execution across multiple DEXes.",
    github: "https://github.com/Enricrypto/arb-wave-flashloans-arbitrage",
    docs: "/arbwave-docs",
    metadata: {
      status: "DEVELOPMENT",
      label1: "STATUS",
      value1: "DEVELOPMENT",
      label2: "ARCHITECTURE",
      value2: "ATOMIC",
      label3: "CONTRACTS",
      value3: "8",
      label4: "TESTS",
      value4: "168"
    },
    tags: [
      { label: "Flash Loans", color: "blue" },
      { label: "Arbitrage", color: "blue" },
      { label: "Aave V3", color: "blue" },
      { label: "Risk Engine", color: "blue" }
    ],
    glow: "blue"
  },
  {
    title: "Token Launchpad",
    description:
      "Dutch auction launchpad for token sales with linear price discovery, automatic refunds, and seller-friendly settlement mechanics.",
    github: "https://github.com",
    docs: "/token-launchpad-docs",
    metadata: {
      status: "DEVELOPMENT",
      label1: "STATUS",
      value1: "DEVELOPMENT",
      label2: "TYPE",
      value2: "DUTCH AUCTION",
      label3: "CONTRACTS",
      value3: "1",
      label4: "MECHANISM",
      value4: "Linear Price"
    },
    tags: [
      { label: "Auction", color: "purple" },
      { label: "Token Sale", color: "purple" },
      { label: "Price Discovery", color: "purple" },
      { label: "Fair Launch", color: "purple" }
    ],
    glow: "purple"
  },
  {
    title: "RWA Stablecoin",
    description:
      "Real World Asset backed stablecoin collateralized by tokenized real estate properties. Automatic rental yield distribution with 70% LTV.",
    github: "https://github.com",
    docs: "/rwa-stablecoin-docs",
    metadata: {
      status: "DEVELOPMENT",
      label1: "STATUS",
      value1: "DEVELOPMENT",
      label2: "ASSET",
      value2: "REAL ESTATE",
      label3: "LTV",
      value3: "70%",
      label4: "FEATURES",
      value4: "KYC/AML"
    },
    tags: [
      { label: "Stablecoin", color: "green" },
      { label: "RWA", color: "green" },
      { label: "Real Estate", color: "green" },
      { label: "Yield Distribution", color: "green" }
    ],
    glow: "green"
  }
]

const FULLSTACK_PROJECTS: ProjectProps[] = [
  {
    title: "Lenda Finance",
    description:
      "Full-stack lending platform where users deposit real-world collateral (property, crypto, vehicles), borrow credit against it, and track their financial position in real time.",
    github: "https://github.com/Enricrypto/lenda_finance",
    docs: "/lenda-finance-docs",
    liveUrl: "https://lenda-finance.vercel.app/",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "LIVE",
      label2: "STACK",
      value2: "FastAPI + Next.js 16",
      label3: "DATABASE",
      value3: "PostgreSQL / AWS RDS",
      label4: "AUTH",
      value4: "NextAuth.js"
    },
    tags: [
      { label: "FastAPI", color: "green" },
      { label: "Next.js 16", color: "green" },
      { label: "TypeScript", color: "green" },
      { label: "TanStack Query", color: "green" },
      { label: "PostgreSQL", color: "green" },
      { label: "AWS RDS", color: "green" }
    ],
    glow: "green"
  }
]

const BOT_PROJECTS: ProjectProps[] = [
  {
    title: "Yield Guard Bot",
    description:
      "Modular Python bot for DeFi treasury strategy simulation. Fetches protocol metrics from Aave and Morpho, calculates financial performance with automated daily simulations.",
    github: "https://github.com/Enricrypto/yield-guard-bot",
    docs: "https://yield-guard-bot.streamlit.app/",
    docsIcon: "dashboard",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "LANGUAGE",
      value2: "PYTHON",
      label3: "DASHBOARD",
      value3: "STREAMLIT",
      label4: "PROTOCOLS",
      value4: "AAVE + MORPHO"
    },
    tags: [
      { label: "Python", color: "purple" },
      { label: "Streamlit", color: "purple" },
      { label: "Treasury Strategy", color: "purple" },
      { label: "Aave", color: "purple" },
      { label: "Morpho", color: "purple" },
      { label: "CI/CD", color: "purple" }
    ],
    glow: "purple"
  },
  {
    title: "MEV Liquidation Engine",
    description:
      "Production-grade research system for validating liquidation MEV hypotheses on Aave v3 Arbitrum. Monte Carlo simulation with 10 bot archetypes, rolling-window backtesting, and safety-first design with hash-chained logging.",
    github: "https://github.com/Enricrypto/mev-liquidation-phase-a",
    docs: "/mev-liquidation-docs",
    metadata: {
      status: "DEVELOPMENT",
      label1: "STATUS",
      value1: "RESEARCH",
      label2: "NETWORK",
      value2: "ARBITRUM",
      label3: "TESTS",
      value3: "157",
      label4: "BOT TYPES",
      value4: "10"
    },
    tags: [
      { label: "MEV", color: "purple" },
      { label: "Liquidations", color: "purple" },
      { label: "Monte Carlo", color: "purple" },
      { label: "Aave V3", color: "purple" },
      { label: "Python", color: "purple" },
      { label: "Research", color: "purple" }
    ],
    glow: "purple"
  }
]

// --- MAIN SECTION ---
export const WorkSection = () => {
  const [activeTab, setActiveTab] = useState<
    "PRODUCTION" | "DEVELOPMENT" | "BOTS" | "FULLSTACK"
  >("PRODUCTION")
  const projects =
    activeTab === "PRODUCTION"
      ? PRODUCTION_PROJECTS
      : activeTab === "DEVELOPMENT"
        ? DEVELOPMENT_PROJECTS
        : activeTab === "FULLSTACK"
          ? FULLSTACK_PROJECTS
          : BOT_PROJECTS

  return (
    <section id='work' className='max-w-6xl mx-auto px-6 py-32 relative'>
      <div className='mb-20'>
        <span className='text-[10px] text-white/30 uppercase tracking-[0.5em] mb-4 block'>
          {activeTab === "FULLSTACK"
            ? "/ Selected Projects"
            : "/ Selected Protocols"}
        </span>
        <Heading
          level='h2'
          className='text-4xl md:text-5xl font-extralight tracking-tighter text-[#E5E5E5] mb-6'
        >
          {activeTab === "PRODUCTION"
            ? "Blockchain Projects"
            : activeTab === "DEVELOPMENT"
              ? "Experimental Research"
              : activeTab === "FULLSTACK"
                ? "Full Stack Projects"
                : "Automation & Analytics"}
        </Heading>

        <div className='inline-flex p-1 bg-white/2 border border-white/5 rounded-full mb-8'>
          {["PRODUCTION", "DEVELOPMENT", "FULLSTACK", "BOTS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                activeTab === tab
                  ? "bg-white/10 text-white"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className='space-y-6'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
