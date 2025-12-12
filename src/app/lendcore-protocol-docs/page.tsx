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
  LendingIcon
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

export default function LendCoreDocs() {
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
      {/* ✅ NEW RESPONSIVE HEADER - Replace the old navigation */}
      <DocsPageHeader
        protocolName='LendCore'
        protocolIcon={<BankIcon />}
        githubLink='https://github.com/Enricrypto/Isolated-Lending-Market'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Features", href: "#overview" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>
        <header className='space-y-4 pb-16 border-b border-[#2A2A2E]'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0'>
              LendCore
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] min-w-fit'>
              Lending Protocol
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#D4D4D4]'>
            A sophisticated institutional-grade lending protocol enabling
            efficient capital deployment with comprehensive risk management.
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
              Lending
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] min-w-fit hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Risk Management
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] min-w-fit hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Capital Efficiency
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
            <BankIcon /> Key Features
          </Heading>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card glow='blue'>
              <Heading level='h4' className='mb-3 text-[#A7C8FF]'>
                Multi-Collateral Support
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Accept diverse asset classes as collateral with dynamic LTV
                ratios and risk-adjusted pricing mechanisms.
              </p>
            </Card>

            <Card glow='green'>
              <Heading level='h4' className='mb-3 text-[#6BFF95]'>
                Variable Interest Rates
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Dynamic interest rate calculation based on utilization ratios
                and market conditions for optimal capital allocation.
              </p>
            </Card>

            <Card glow='purple'>
              <Heading level='h4' className='mb-3 text-[#C3A6FF]'>
                Advanced Risk Management
              </Heading>
              <p className='text-sm text-[#D4D4D4]'>
                Comprehensive risk assessment with liquidation mechanisms and
                collateral monitoring systems.
              </p>
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
                Safety Mechanisms
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>
                  <i>Pause Mechanism</i> for emergency protocol halts
                </li>
                <li>
                  <i>Collateral Validation</i> on every interaction
                </li>
                <li>
                  <i>Liquidation Guards</i> to prevent edge cases
                </li>
                <li>
                  <i>Rate Caps</i> to prevent rate manipulation
                </li>
              </ul>
            </Card>

            <Card glow='red'>
              <Heading level='h4' className='mb-3 text-[#FF6B6B]'>
                Risk Mitigation
              </Heading>
              <ul className='list-disc list-inside space-y-2 text-sm text-[#D4D4D4]'>
                <li>Oracle price manipulation resistance</li>
                <li>Collateral ratio maintenance enforcement</li>
                <li>Liquidation incentive mechanisms</li>
                <li>Over-collateralization requirements</li>
              </ul>
            </Card>
          </div>
        </section>

        <section id='testing' className='py-16'>
          <Heading
            level='h2'
            className='mb-6 text-[#6BFF95] flex items-center gap-3'
          >
            <TestIcon /> Testing & Validation
          </Heading>

          <p className='max-w-4xl mb-8 text-[#D4D4D4]'>
            Comprehensive test coverage across lending operations, interest
            calculations, liquidations, and risk scenarios.
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
                <Td className='font-medium text-[#FFC36B]'>Lending Logic</Td>
                <Td>45+</Td>
                <Td>Deposit, withdraw, borrow operations</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#A7C8FF]'>Interest Rates</Td>
                <Td>25+</Td>
                <Td>Rate calculations, utilization curves</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#6BFF95]'>Liquidations</Td>
                <Td>30+</Td>
                <Td>Collateral health, liquidation triggers</Td>
              </Tr>
              <Tr>
                <Td className='font-medium text-[#C3A6FF]'>Risk Edge Cases</Td>
                <Td>20+</Td>
                <Td>Rounding errors, precision loss</Td>
              </Tr>
            </TBody>
          </Table>
        </section>

        <footer className='max-w-6xl mx-auto px-6 py-8 border-t border-[#2A2A2E] mt-16'>
          <div className='text-center text-sm text-[#8A8A8A] space-y-2'>
            <p>
              LendCore Documentation. Institutional-grade lending
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
