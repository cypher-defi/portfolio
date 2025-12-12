"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import {
  DocsIcon,
  GitHubIcon,
  SecurityIcon,
  TestIcon,
  PropertyIcon,
  CollateralIcon,
  IncomeIcon,
  WhitelistIcon
} from "@/components/icons"

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

export default function RWAStablecoinDocs() {
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
      <nav className='sticky top-0 z-50 backdrop-blur-md bg-[#0C0C0E]/80 border-b border-[#2A2A2E]'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <PropertyIcon />
            <span className='text-[#A7C8FF] font-bold text-lg'>
              RWA Stablecoin Docs
            </span>
          </div>
          <div className='flex gap-6'>
            <a
              href='#overview'
              className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
            >
              Overview
            </a>
            <a
              href='https://github.com/Enricrypto'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#8A8A8A] hover:text-[#A7C8FF] transition flex items-center gap-1'
            >
              <GitHubIcon /> GitHub
            </a>
            <Link
              href='/'
              className='text-[#A7C8FF] hover:text-[#6BFF95] transition font-medium'
            >
              ← Back
            </Link>
          </div>
        </div>
      </nav>

      <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>
        <header className='space-y-4 pb-16 border-b border-[#2A2A2E]'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0'>
              RWA Stablecoin
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit'>
              Real-World Assets
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#D4D4D4]'>
            A CDP-style stablecoin system backed by real-world assets with
            comprehensive collateralization and governance mechanisms.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              DeFi
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] min-w-fit hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              Stablecoin
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] min-w-fit hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              RWA
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Collateralized
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.3)] rounded-full text-sm text-[#C3A6FF] min-w-fit hover:bg-[rgba(153,69,255,0.2)] transition'
            >
              ERC-20
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
              href='https://opensource.org/licenses/MIT'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit'
            >
              License: MIT
            </a>
          </div>
        </header>

        <section id='overview' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-8 text-[#A7C8FF] flex items-center gap-3'
          >
            <PropertyIcon /> Key Features
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                RWA Backing
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Stablecoins backed by real-world assets including properties,
                income streams, and tangible collateral.
              </p>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                150% Collateralization
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Over-collateralization requirements ensure system stability and
                protect all stakeholders.
              </p>
            </Card>

            <Card glow='purple'>
              <Heading level='h4' className='mb-3 text-[#C3A6FF]'>
                Governance Control
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Decentralized governance over collateral management and system
                parameters.
              </p>
            </Card>
          </div>
        </section>

        <section id='collateral' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <CollateralIcon /> Collateralization System
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                Multi-Asset Support
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Real estate properties</li>
                <li>Income streams</li>
                <li>Verified assets</li>
                <li>Diversified backing</li>
              </ul>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Monitoring & Validation
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Continuous asset valuation</li>
                <li>Collateral health checks</li>
                <li>Oracle-based pricing</li>
                <li>Risk assessment</li>
              </ul>
            </Card>
          </div>
        </section>

        <section id='security' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-6 text-[#FF6B6B] flex items-center gap-3'
          >
            <SecurityIcon /> Security Architecture
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Protection Mechanisms
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>
                  <i>Collateral Validation</i> on minting
                </li>
                <li>
                  <i>Liquidation Guards</i> for defaults
                </li>
                <li>
                  <i>Rate Limiting</i> on operations
                </li>
                <li>
                  <i>Access Control</i> for governance
                </li>
              </ul>
            </Card>

            <Card glow='red'>
              <Heading level='h4' className='mb-3 text-[#FF6B6B]'>
                Risk Mitigation
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Oracle manipulation resistance</li>
                <li>Under-collateralization prevention</li>
                <li>Emergency pause mechanisms</li>
                <li>Liquidation incentives</li>
              </ul>
            </Card>
          </div>
        </section>

        <section id='testing' className='py-16'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <TestIcon /> Comprehensive Testing
          </Heading>

          <p className='max-w-4xl mb-8 text-[#D4D4D4]'>
            Extensive testing for collateralization logic, minting/burning,
            liquidations, and asset validation scenarios.
          </p>

          <Table>
            <THead>
              <Tr isHeader={true}>
                <Th>Test Category</Th>
                <Th>Count</Th>
                <Th>Coverage</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td className='font-medium text-[#FFC36B]'>Collateral Logic</Td>
                <Td>40+</Td>
                <Td>Validation, minting, burning</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#A7C8FF]'>Liquidations</Td>
                <Td>25+</Td>
                <Td>Trigger conditions, settlement</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#6BFF95]'>Oracle Safety</Td>
                <Td>20+</Td>
                <Td>Price validation, edge cases</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#C3A6FF]'>Risk Scenarios</Td>
                <Td>15+</Td>
                <Td>Market stress, failures</Td>
              </Tr>
            </TBody>
          </Table>
        </section>

        <footer className='max-w-6xl mx-auto px-6 py-8 border-t border-[#2A2A2E] mt-16'>
          <div className='text-center text-sm text-[#8A8A8A] space-y-2'>
            <p>RWA Stablecoin Documentation. Backed by real-world assets.</p>
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
