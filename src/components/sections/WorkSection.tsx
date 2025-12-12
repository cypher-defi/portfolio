import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Card } from "@/components/molecules/Card"
import { useState } from "react"

// Icons
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
  metadata: ProjectMetadata
  tags: ProjectTag[]
  glow: "blue" | "purple" | "green" | "red"
}

const getTagStyles = (color: string) => {
  const styles: Record<string, { bg: string; border: string; text: string }> = {
    blue: {
      bg: "rgba(167,200,255,0.1)",
      border: "rgba(167,200,255,0.3)",
      text: "#A7C8FF"
    },
    purple: {
      bg: "rgba(195,166,255,0.1)",
      border: "rgba(195,166,255,0.3)",
      text: "#C3A6FF"
    },
    green: {
      bg: "rgba(107,255,149,0.1)",
      border: "rgba(107,255,149,0.3)",
      text: "#6BFF95"
    },
    red: {
      bg: "rgba(255,107,107,0.1)",
      border: "rgba(255,107,107,0.3)",
      text: "#FF6B6B"
    }
  }
  return styles[color] || styles.blue
}

const getStatusColor = (status: string) => {
  if (status === "PRODUCTION") {
    return {
      bg: "rgba(107,255,149,0.1)",
      border: "rgba(107,255,149,0.3)",
      text: "#6BFF95"
    }
  }
  return {
    bg: "rgba(195,166,255,0.1)",
    border: "rgba(195,166,255,0.3)",
    text: "#C3A6FF"
  }
}

const ProjectCard = ({
  title,
  description,
  github,
  docs,
  metadata,
  tags,
  glow
}: ProjectProps) => {
  const statusColor = getStatusColor(metadata.status)

  return (
    <Card glow={glow}>
      <div className='flex justify-between items-start mb-6'>
        <div className='flex-1'>
          <Heading level='h3' className='mb-2'>
            {title}
          </Heading>
          <Text color='secondary' size='body-sm'>
            {description}
          </Text>
        </div>
        <div className='flex gap-2 ml-4 flex-shrink-0'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-lg border hover:opacity-80 transition'
            style={{
              backgroundColor: getTagStyles(glow).bg,
              borderColor: getTagStyles(glow).border,
              color: getTagStyles(glow).text
            }}
            title='GitHub'
          >
            <GitHubIcon />
          </a>
          <a
            href={docs}
            className='p-2 rounded-lg border hover:opacity-80 transition'
            style={{
              backgroundColor: getTagStyles(glow).bg,
              borderColor: getTagStyles(glow).border,
              color: getTagStyles(glow).text
            }}
            title='Documentation'
          >
            <DocsIcon />
          </a>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className='grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#2A2A2E]'>
        <div>
          <Text size='body-sm' color='secondary' className='text-xs mb-1'>
            {metadata.label1}
          </Text>
          <span
            className='px-3 py-1 rounded-xl text-xs font-medium inline-block'
            style={{
              backgroundColor: statusColor.bg,
              borderColor: statusColor.border,
              color: statusColor.text,
              border: `1px solid ${statusColor.border}`
            }}
          >
            {metadata.value1}
          </span>
        </div>
        <div>
          <Text size='body-sm' color='secondary' className='text-xs mb-1'>
            {metadata.label2}
          </Text>
          <span
            className='px-3 py-1 rounded-xl text-xs font-medium inline-block'
            style={{
              ...getTagStyles(glow),
              border: `1px solid ${getTagStyles(glow).border}`
            }}
          >
            {metadata.value2}
          </span>
        </div>
        <div>
          <Text size='body-sm' color='secondary' className='text-xs mb-1'>
            {metadata.label3}
          </Text>
          <span
            className='px-3 py-1 rounded-xl text-xs font-medium inline-block'
            style={{
              ...getTagStyles(glow),
              border: `1px solid ${getTagStyles(glow).border}`
            }}
          >
            {metadata.value3}
          </span>
        </div>
        <div>
          <Text size='body-sm' color='secondary' className='text-xs mb-1'>
            {metadata.label4}
          </Text>
          <span
            className='px-3 py-1 rounded-xl text-xs font-medium inline-block'
            style={{
              ...getTagStyles(glow),
              border: `1px solid ${getTagStyles(glow).border}`
            }}
          >
            {metadata.value4}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <span
            key={tag.label}
            className='px-3 py-1 rounded-full text-xs min-w-fit font-medium'
            style={{
              ...getTagStyles(tag.color),
              border: `1px solid ${getTagStyles(tag.color).border}`
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </Card>
  )
}

// Production Projects Data
const PRODUCTION_PROJECTS: ProjectProps[] = [
  {
    title: "Meridian Finance",
    description:
      "ERC-4626 compliant vault system with auto-compounding strategies, governance token (MRD), and rewards distribution system.",
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
      "Multi-collateral lending platform with dynamic interest rates, health factor-based liquidations, and ERC-4626 vault integration. Jump rate model for efficient capital allocation.",
    github: "https://github.com/Enricrypto/defi-lending-platform",
    docs: "/lendcore-protocol-docs",
    metadata: {
      status: "PRODUCTION",
      label1: "STATUS",
      value1: "PRODUCTION",
      label2: "ARCHITECTURE",
      value2: "MULTI-COLLATERAL",
      label3: "CONTRACTS",
      value3: "4",
      label4: "TESTS",
      value4: "58"
    },
    tags: [
      { label: "Lending", color: "blue" },
      { label: "Chainlink", color: "blue" },
      { label: "Jump Rate", color: "blue" },
      { label: "Sepolia Live", color: "blue" }
    ],
    glow: "blue"
  },
  {
    title: "SwapHub DEX",
    description:
      "Uniswap V2 model implementation with liquidity pools, multi-hop swaps, and factory-based pair management. Core DEX infrastructure with constant product formula.",
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
      "Multi-token crypto savings bank with tiered lock periods (0-180 days), dynamic APY rates (0%-8%), penalty redistribution, and referral system.",
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
      "Comprehensive NFT trading platform supporting fixed-price listings, English auctions, and buy offers. Full order management with settlement mechanisms and escrow functionality across any ERC-721 collection.",
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

// Development Projects Data
const DEVELOPMENT_PROJECTS: ProjectProps[] = [
  {
    title: "ArbWave",
    description:
      "Institutional-grade flash loan arbitrage system with atomic execution across multiple DEXes. Zero capital requirements with pluggable adapter architecture for protocol integration.",
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
      "Dutch auction launchpad for token sales with linear price discovery, automatic refunds, and seller-friendly settlement mechanics. Used for fair token distribution.",
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
      "Real World Asset backed stablecoin collateralized by tokenized real estate properties. Automatic rental yield distribution with 70% LTV and KYC/AML compliance.",
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

export const WorkSection = () => {
  const [activeTab, setActiveTab] = useState<"PRODUCTION" | "DEVELOPMENT">(
    "PRODUCTION"
  )

  const projects =
    activeTab === "PRODUCTION" ? PRODUCTION_PROJECTS : DEVELOPMENT_PROJECTS

  return (
    <section
      id='work'
      className='max-w-6xl mx-auto px-6 py-24 border-t border-[#2A2A2E]'
    >
      {/* Section Header */}
      <div className='mb-12'>
        <Text
          size='body-sm'
          color='secondary'
          className='text-[#A7C8FF] uppercase tracking-wider mb-2'
        >
          / PORTFOLIO
        </Text>
        <Heading level='h2' className='mb-8'>
          Production & Development
        </Heading>

        {/* Toggle Buttons */}
        <div className='flex gap-4 mb-8'>
          <button
            onClick={() => setActiveTab("PRODUCTION")}
            className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
              activeTab === "PRODUCTION"
                ? "bg-[#6BFF95] text-[#0C0C0E]"
                : "bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)]"
            }`}
          >
            Production
          </button>
          <button
            onClick={() => setActiveTab("DEVELOPMENT")}
            className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
              activeTab === "DEVELOPMENT"
                ? "bg-[#C3A6FF] text-[#0C0C0E]"
                : "bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)]"
            }`}
          >
            Development
          </button>
        </div>

        <Text color='secondary'>
          {activeTab === "PRODUCTION"
            ? "DeFi protocols, yield systems, trading platforms, and tokenized assets ready for production."
            : "Advanced protocols and systems currently in development with cutting-edge features."}
        </Text>
      </div>

      {/* Dynamic Projects Section */}
      <div className='space-y-8 animate-fade-in'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
