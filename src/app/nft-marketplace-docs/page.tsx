"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { DocsPageHeader } from "@/components/molecules/DocsHeader"

// IMPORT ICONS FROM CENTRALIZED LIBRARY
import {
  DocsIcon,
  GitHubIcon,
  SecurityIcon,
  TestIcon,
  MarketplaceIcon,
  AuctionIcon,
  RoyaltyIcon
} from "@/components/icons"

// --- II. UTILITY COMPONENTS (Reused) ---

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "display-lg" | "display-md" | "h1" | "h2" | "h3" | "h4"
  color?: "primary" | "accent-blue" | "accent-red" | "accent-green"
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  level = "h1",
  color = "primary",
  className = "",
  children,
  ...props
}) => {
  const levelMap = {
    "display-lg": { size: "text-[3.5rem]", weight: "font-bold" },
    "display-md": { size: "text-[2.5rem]", weight: "font-bold" },
    h1: { size: "text-[2rem]", weight: "font-bold" },
    h2: { size: "text-[1.5rem]", weight: "font-semibold" },
    h3: { size: "text-[1.25rem]", weight: "font-semibold" },
    h4: { size: "text-[1.125rem]", weight: "font-medium" }
  }

  const { size, weight } = levelMap[level]

  const colorMap = {
    primary: "text-[#FFFFFF]",
    "accent-blue": "text-[#A7C8FF]",
    "accent-red": "text-[#FF6B6B]",
    "accent-green": "text-[#6BFF95]"
  }

  const baseClassName = `${size} ${weight} ${colorMap[color]} ${className}`

  const Tag =
    level === "h2" || level === "h3" || level === "h4" ? level : ("h1" as any)

  return (
    <Tag className={baseClassName} {...props}>
      {children}
    </Tag>
  )
}

// --- Table Components (Reused) ---
const Table: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='overflow-x-auto my-6'>
    <table className='min-w-full divide-y divide-[#2A2A2E] border border-[#2A2A2E] rounded-lg'>
      {children}
    </table>
  </div>
)

const THead: React.FC<React.PropsWithChildren> = ({ children }) => (
  <thead>{children}</thead>
)

const Th: React.FC<React.PropsWithChildren> = ({ children }) => (
  <th className='px-6 py-3'>{children}</th>
)

const TBody: React.FC<React.PropsWithChildren> = ({ children }) => (
  <tbody className='divide-y divide-[#2A2A2E]'>{children}</tbody>
)

interface TrProps {
  isHeader?: boolean
}
const Tr: React.FC<React.PropsWithChildren<TrProps>> = ({
  children,
  isHeader = false
}) => {
  const headerClasses =
    "text-left text-xs font-medium uppercase tracking-wider text-[#A7C8FF] bg-[#161619]"
  const rowClasses = isHeader
    ? `bg-[#161619] hover:bg-[#161619] ${headerClasses}`
    : "hover:bg-[#161619]/50"

  return <tr className={rowClasses}>{children}</tr>
}

interface TdProps {
  className?: string
}
const Td: React.FC<React.PropsWithChildren<TdProps>> = ({
  children,
  className = ""
}) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm text-[#D4D4D4] ${className}`}
  >
    {children}
  </td>
)

interface CardProps extends React.PropsWithChildren {
  glow?: "blue" | "purple" | "green" | "red"
  className?: string
}

const Card: React.FC<CardProps> = ({
  children,
  glow = "blue",
  className = ""
}) => {
  const glowColor = {
    blue: "hover:border-[#A7C8FF]",
    purple: "hover:border-[#C3A6FF]",
    green: "hover:border-[#6BFF95]",
    red: "hover:border-[#FF6B6B]"
  }[glow]

  return (
    <div
      className={`bg-[#161619] p-6 rounded-xl border border-[#2A2A2E] transition duration-300 ${glowColor} ${className}`}
    >
      {children}
    </div>
  )
}

// --- III. MAIN DOCUMENTATION COMPONENT ---

export default function NFTMarketplaceDocs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className='bg-[#0C0C0E] text-white min-h-screen'>
      {/* RESPONSIVE HEADER - Replace the old navigation */}
      <DocsPageHeader
        protocolName='NFT Marketplace'
        protocolIcon={<MarketplaceIcon />}
        githubLink='https://github.com/Enricrypto/nft-marketplace'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Auctions", href: "#auctions" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      {/* Main Content Container */}
      <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>
        {/* --- Header / Protocol Title --- */}
        <header className='space-y-4 pb-16 border-b border-[#2A2A2E]'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0'>
              NFT Marketplace
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit'>
              Smart Contract System
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#D4D4D4]'>
            A comprehensive NFT marketplace system supporting fixed-price
            listings, English auctions, and peer-to-peer offers with
            institutional-grade security.
          </p>

          {/* Protocol Badges */}
          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              NFT
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] min-w-fit hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              Marketplace
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] min-w-fit hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              ERC-721
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Auction System
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.3)] rounded-full text-sm text-[#C3A6FF] min-w-fit hover:bg-[rgba(153,69,255,0.2)] transition'
            >
              Royalties
            </a>
            <a
              href='https://getfoundry.sh/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] rounded-full text-sm text-[#FF6B6B] min-w-fit hover:bg-[rgba(255,107,107,0.2)] transition'
            >
              Tested With Foundry
            </a>
            <a
              href='https://sepolia.etherscan.io'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit'
            >
              Sepolia Testnet
            </a>
          </div>
        </header>

        {/* --- Overview Section --- */}
        <section id='overview' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-8 text-[#A7C8FF] flex items-center gap-3'
          >
            <MarketplaceIcon /> Core Features
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                Fixed-Price Listings
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Direct NFT sales with instant purchase capability at fixed
                prices set by sellers.
              </p>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                English Auctions
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Time-based auction system with competitive bidding and automatic
                winner settlement.
              </p>
            </Card>

            <Card glow='purple'>
              <Heading level='h4' className='mb-3 text-[#C3A6FF]'>
                Royalty System
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Creator royalties on secondary sales with automatic distribution
                to designated addresses.
              </p>
            </Card>
          </div>
        </section>

        {/* --- Auction Systems Section --- */}
        <section id='auctions' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <AuctionIcon /> Auction Mechanisms
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                English Auction Details
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Ascending bid mechanism</li>
                <li>Configurable duration</li>
                <li>Minimum bid increments</li>
                <li>Automatic winner settlement</li>
              </ul>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Buyout Options
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Immediate buyout price</li>
                <li>Auction termination on buyout</li>
                <li>Seller flexibility</li>
                <li>Buyer convenience</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* --- Security Section --- */}
        <section id='security' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-6 text-[#FF6B6B] flex items-center gap-3'
          >
            <SecurityIcon /> Security Features
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Protection Mechanisms
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>
                  <i>ReentrancyGuard</i> on all transfers
                </li>
                <li>
                  <i>CEI Pattern</i> enforcement
                </li>
                <li>
                  <i>Approval Validation</i> checks
                </li>
                <li>
                  <i>Auction State Verification</i>
                </li>
              </ul>
            </Card>

            <Card glow='red'>
              <Heading level='h4' className='mb-3 text-[#FF6B6B]'>
                Risk Mitigation
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Double-spend prevention</li>
                <li>Invalid auction state handling</li>
                <li>Unauthorized access prevention</li>
                <li>Royalty manipulation resistance</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* --- Testing Section --- */}
        <section id='testing' className='py-16'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <TestIcon /> Comprehensive Testing
          </Heading>

          <p className='max-w-4xl mb-8 text-[#D4D4D4]'>
            Full test coverage for all marketplace operations including
            listings, auctions, offers, and royalty distributions.
          </p>

          <Table>
            <THead>
              <Tr isHeader={true}>
                <Th>Feature</Th>
                <Th>Tests</Th>
                <Th>Scope</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td className='font-medium text-[#FFC36B]'>Fixed Listings</Td>
                <Td>25+</Td>
                <Td>Create, cancel, purchase listings</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#A7C8FF]'>English Auctions</Td>
                <Td>35+</Td>
                <Td>Bidding, settlement, buyout logic</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#6BFF95]'>Royalties</Td>
                <Td>20+</Td>
                <Td>Distribution, calculations, edge cases</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#C3A6FF]'>Security</Td>
                <Td>15+</Td>
                <Td>Reentrancy, state validation</Td>
              </Tr>
            </TBody>
          </Table>
        </section>

        {/* --- Footer --- */}
        <footer className='max-w-6xl mx-auto px-6 py-8 border-t border-[#2A2A2E] mt-16'>
          <div className='text-center text-sm text-[#8A8A8A] space-y-2'>
            <p>
              NFT Marketplace Documentation. Institutional-grade market
              infrastructure.
            </p>
            <p className='text-[#A7C8FF]'>
              <a
                href='https://github.com/Enricrypto'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                github.com/Enricrypto
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
