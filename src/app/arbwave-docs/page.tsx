"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Heading } from "@/components/atoms/Heading"
import { Table, THead, TBody, Tr, Th, Td } from "@/components/molecules/DocsTable"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"

import {
  DocsIcon,
  GitHubIcon,
  SecurityIcon,
  TestIcon,
  WaveIcon,
  FlashIcon,
  ArchitectureIcon,
  StrategyIcon
} from "@/components/icons"

export default function ArbWaveDocs() {
  return (
    <>
      <Navigation
        variant="docs"
        protocolName="ArbWave"
        protocolIcon={<WaveIcon />}
        githubLink="https://github.com/Enricrypto/arb-wave-flashloans-arbitrage"
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Strategy", href: "#strategy" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              ArbWave
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Flash Loan Arbitrage
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A sophisticated flash loan arbitrage system capturing yield spreads
            across DeFi protocols with zero capital requirements and
            comprehensive risk management.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              DeFi
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              Arbitrage
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Flash Loans
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Zero Capital
            </a>
            <a
              href='https://getfoundry.sh/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] rounded-full text-sm text-[#FF6B6B] hover:bg-[rgba(255,107,107,0.2)] transition'
            >
              Tested With Foundry
            </a>
            <a
              href='https://opensource.org/licenses/MIT'
              target='_blank'
              rel='noopener noreferrer'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'
            >
              License: MIT
            </a>
          </div>
        </header>

        <section id='overview' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-8 flex items-center gap-3'
          >
            <FlashIcon /> Key Features
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Flash Loans
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Zero capital requirement arbitrage using flash loan mechanics to
                  capture instantaneous price spreads across protocols.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Multi-Protocol Integration
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Sophisticated routing across multiple DeFi protocols to identify
                  and exploit arbitrage opportunities in real-time.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Risk Management
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Comprehensive risk assessment and mitigation ensuring profitable
                  execution with institutional safety standards.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='architecture' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <ArchitectureIcon /> System Architecture
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Flash Loan Execution
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Loan request initiation</li>
                  <li>Atomic execution</li>
                  <li>Instant settlement</li>
                  <li>Premium calculation</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Protocol Integration
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>DEX pair routing</li>
                  <li>Price oracle validation</li>
                  <li>Liquidity sourcing</li>
                  <li>Slippage management</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='strategy' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-6 flex items-center gap-3'
          >
            <StrategyIcon /> Arbitrage Strategies
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Multiple arbitrage strategies capturing spreads across protocols,
            leveraging price discrepancies and yield opportunities.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Cross-Exchange Arbitrage
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>DEX pair comparison</li>
                  <li>Price spread detection</li>
                  <li>Instant execution</li>
                  <li>Profit extraction</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Yield Optimization
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Rate spread identification</li>
                  <li>Lending/borrowing leverage</li>
                  <li>Yield curve arbitrage</li>
                  <li>Opportunity aggregation</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='security' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-red'
            className='mb-6 flex items-center gap-3'
          >
            <SecurityIcon /> Security Features
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Protection Mechanisms
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>
                    <i>Atomic Execution</i> guarantees
                  </li>
                  <li>
                    <i>Slippage Limits</i> enforcement
                  </li>
                  <li>
                    <i>Price Validation</i> checks
                  </li>
                  <li>
                    <i>Profit Verification</i> logic
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Mitigation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Flash loan attack resistance</li>
                  <li>Price manipulation prevention</li>
                  <li>Front-running protection</li>
                  <li>Liquidity availability checks</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='testing' className='py-20'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <TestIcon /> Comprehensive Testing
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Extensive testing for flash loan execution, arbitrage calculations,
            multi-protocol integration, and risk scenarios.
          </p>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
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
                  <Td className='font-medium text-[#FFC36B]'>
                    Flash Loan Execution
                  </Td>
                  <Td>35+</Td>
                  <Td>Requests, callbacks, settlement</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>
                    Arbitrage Calculations
                  </Td>
                  <Td>30+</Td>
                  <Td>Spreads, profits, fees</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>
                    Multi-Protocol Integration
                  </Td>
                  <Td>25+</Td>
                  <Td>DEX interactions, routing</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Risk Management</Td>
                  <Td>20+</Td>
                  <Td>Slippage, validation, safety</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
