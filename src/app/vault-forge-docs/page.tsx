"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { DocsPageHeader } from "@/components/molecules/DocsHeader"

import {
  DocsIcon,
  GitHubIcon,
  SecurityIcon,
  TestIcon,
  BankIcon,
  VaultIcon,
  TierIcon,
  GasIcon
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

export default function VaultForgeDocs() {
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
        protocolName='VaultForge'
        protocolIcon={<VaultIcon />}
        githubLink='https://github.com/Enricrypto/vault-forge-crypto-bank'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Tiers", href: "#tiers" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>
        <header className='space-y-4 pb-16 border-b border-[#2A2A2E]'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0'>
              VaultForge
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit'>
              Multi-Tier Savings Protocol
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#D4D4D4]'>
            A comprehensive multi-tier crypto savings system with lock periods,
            tiered APY rates, and penalty redistribution mechanisms.
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
              Savings
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] min-w-fit hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Tiered
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit hover:bg-[rgba(107,255,149,0.2)] transition'
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
            <TierIcon /> Key Features
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                Four-Tier System
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Flexible four-tier vault structure with varying lock periods and
                corresponding APY incentives.
              </p>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Lock Period Protection
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Configurable lock durations enforce savings discipline while
                maximizing yield for committed capital.
              </p>
            </Card>

            <Card glow='purple'>
              <Heading level='h4' className='mb-3 text-[#C3A6FF]'>
                Penalty Redistribution
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Early withdrawal penalties are redistributed to remaining vault
                participants as rewards.
              </p>
            </Card>
          </div>
        </section>

        <section id='tiers' className='py-16 border-b border-[#2A2A2E]'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <BankIcon /> Vault Tiers
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                Tier Configuration
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Tier 1: 30-day lock</li>
                <li>Tier 2: 90-day lock</li>
                <li>Tier 3: 180-day lock</li>
                <li>Tier 4: 365-day lock</li>
              </ul>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                APY Structure
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Higher APY for longer locks</li>
                <li>Penalty scaling with tiers</li>
                <li>Operator commission tracking</li>
                <li>Dynamic reward distribution</li>
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
                  <i>Lock Time Enforcement</i> on withdrawals
                </li>
                <li>
                  <i>Penalty Validation</i> calculations
                </li>
                <li>
                  <i>State Consistency</i> checks
                </li>
                <li>
                  <i>Access Control</i> enforcement
                </li>
              </ul>
            </Card>

            <Card glow='red'>
              <Heading level='h4' className='mb-3 text-[#FF6B6B]'>
                Risk Mitigation
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Premature withdrawal prevention</li>
                <li>Penalty calculation integrity</li>
                <li>Reward distribution safety</li>
                <li>Commission tracking accuracy</li>
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
            Extensive testing for tier operations, lock period enforcement,
            penalty calculations, and withdrawal scenarios.
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
                <Td className='font-medium text-[#FFC36B]'>Tier Operations</Td>
                <Td>40+</Td>
                <Td>Deposits, withdrawals per tier</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#A7C8FF]'>
                  Lock Period Logic
                </Td>
                <Td>30+</Td>
                <Td>Time validation, enforcement</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#6BFF95]'>
                  Withdrawal Management
                </Td>
                <Td>25+</Td>
                <Td>Early exit, penalty processing</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#C3A6FF]'>
                  Penalty Calculations
                </Td>
                <Td>15+</Td>
                <Td>Scaling, distribution, edge cases</Td>
              </Tr>
            </TBody>
          </Table>
        </section>

        <footer className='max-w-6xl mx-auto px-6 py-8 border-t border-[#2A2A2E] mt-16'>
          <div className='text-center text-sm text-[#8A8A8A] space-y-2'>
            <p>VaultForge Documentation. Multi-tier savings infrastructure.</p>
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
