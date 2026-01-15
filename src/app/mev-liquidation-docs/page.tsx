"use client"

import React from "react"
import { Heading } from "@/components/atoms/Heading"
import {
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td
} from "@/components/molecules/DocsTable"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"

import {
  SecurityIcon,
  TestIcon,
  ArchitectureIcon,
  MEVIcon,
  SimulationIcon,
  BotIcon,
  ResearchIcon,
  SafetyIcon
} from "@/components/icons"

export default function MEVLiquidationDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='MEV Liquidation'
        protocolIcon={<MEVIcon />}
        githubLink='https://github.com/Enricrypto/mev-liquidation-phase-a'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Bot Archetypes", href: "#bots" },
          { label: "Safety", href: "#safety" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pt-6 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading
              level='display-lg'
              color='accent-purple'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              MEV Liquidation Engine
            </Heading>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              Phase A Research
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            Production-grade research system for validating liquidation MEV hypotheses
            on Aave v3 Arbitrum. Monte Carlo simulation with deterministic reproducibility
            and safety-first design.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(195,166,255,0.2)] transition'
            >
              MEV Research
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF] hover:bg-[rgba(167,200,255,0.2)] transition'
            >
              Aave V3
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Arbitrum
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Monte Carlo
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] rounded-full text-sm text-[#FF6B6B] hover:bg-[rgba(255,107,107,0.2)] transition'
            >
              157 Tests
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
            color='accent-purple'
            className='mb-8 flex items-center gap-3'
          >
            <ResearchIcon /> Core Findings
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(195,166,255,0.05)] border border-[rgba(195,166,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#C3A6FF]'>Primary Discovery:</strong> Latency creates an insurmountable
              barrier for non-privileged liquidators. A liquidator operating at ~75ms latency achieves
              approximately 0% capture probability against frontrunners executing at effective latencies
              around 25ms. This represents a <em>structural constraint</em> rather than an optimization
              problem—no programming language choice or incremental improvements can overcome
              network-level timing disadvantages.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Deterministic Simulation
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Monte Carlo-based framework with explicit random seeding
                  enabling full reproducibility of all experimental results.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Rolling-Window Backtesting
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Out-of-sample validation preventing overfitting with
                  comprehensive historical data analysis.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Safety-First Design
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  SAFE_MODE enforcement limiting execution to testnets and forks
                  with hash-chained logging for auditability.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='architecture' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-blue'
            className='mb-6 flex items-center gap-3'
          >
            <ArchitectureIcon /> System Architecture
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Layered architecture designed for research integrity, reproducibility,
            and comprehensive auditability across all simulation components.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Safety Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Environment verification</li>
                  <li>SAFE_MODE enforcement</li>
                  <li>Testnet-only execution</li>
                  <li>Hash-chained logging</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Data Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Position loading (multi-format)</li>
                  <li>Health factor calculations</li>
                  <li>Aave V3 protocol data</li>
                  <li>Arbitrum network state</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Simulation Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Core Monte Carlo engine</li>
                  <li>Bot implementations</li>
                  <li>Latency modeling</li>
                  <li>Competition dynamics</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Analysis Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Backtesting framework</li>
                  <li>Opportunity detection</li>
                  <li>Statistical analysis</li>
                  <li>Performance metrics</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Interface Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>CLI interaction</li>
                  <li>Jupyter dashboard</li>
                  <li>Result visualization</li>
                  <li>Report generation</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='bots' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-purple'
            className='mb-6 flex items-center gap-3'
          >
            <BotIcon /> Ten Bot Archetypes
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Diverse competitor models simulating real-world MEV competition dynamics,
            from aggressive frontrunners to conservative tail-event strategists.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 mb-8'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Archetype</Th>
                  <Th>Strategy</Th>
                  <Th>Latency Profile</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>Frontrunner</Td>
                  <Td>Aggressive pre-execution targeting</Td>
                  <Td>~25ms (privileged)</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Backrunner</Td>
                  <Td>Post-transaction opportunity capture</Td>
                  <Td>~40ms</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Gas-Sensitive</Td>
                  <Td>Dynamic gas optimization</Td>
                  <Td>~60ms</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Tail-Event</Td>
                  <Td>High-value opportunity focus</Td>
                  <Td>~75ms</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Conservative</Td>
                  <Td>Risk-adjusted execution</Td>
                  <Td>~100ms</Td>
                </Tr>
              </TBody>
            </Table>
          </div>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Competition Dynamics
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Multi-bot simultaneous targeting</li>
                  <li>Gas price auction modeling</li>
                  <li>Priority fee competition</li>
                  <li>MEV-Share integration analysis</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Latency Analysis
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Network propagation modeling</li>
                  <li>Block builder relationships</li>
                  <li>Geographic positioning effects</li>
                  <li>Infrastructure advantages</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='safety' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <SafetyIcon /> Safety & Auditability
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  SAFE_MODE Enforcement
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Testnet-only transaction execution</li>
                  <li>Fork environment validation</li>
                  <li>Mainnet protection guards</li>
                  <li>Environment variable checks</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Hash-Chained Logging
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Tamper-evident audit trail</li>
                  <li>Cryptographic integrity</li>
                  <li>Full reproducibility</li>
                  <li>Research verification</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Documentation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>7 comprehensive research documents</li>
                  <li>Hypothesis documentation</li>
                  <li>Experimental design specs</li>
                  <li>Failure analysis reports</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Controls
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Pydantic data validation</li>
                  <li>Type-safe implementations</li>
                  <li>Comprehensive error handling</li>
                  <li>Graceful degradation</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='testing' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <TestIcon /> Comprehensive Testing
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            157 passing tests across 10 test files with 100% coverage of critical paths,
            ensuring research integrity and reproducibility.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
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
                  <Td className='font-medium text-[#FF6B6B]'>Safe Mode</Td>
                  <Td>15+</Td>
                  <Td>Environment, guards, enforcement</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Logging</Td>
                  <Td>20+</Td>
                  <Td>Hash chains, integrity, audit</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Data Models</Td>
                  <Td>25+</Td>
                  <Td>Positions, validation, parsing</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Health Factor</Td>
                  <Td>20+</Td>
                  <Td>Calculations, edge cases, precision</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Bot Behavior</Td>
                  <Td>30+</Td>
                  <Td>Archetypes, strategies, competition</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Simulation Engine</Td>
                  <Td>25+</Td>
                  <Td>Monte Carlo, seeding, reproducibility</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Opportunity Detection</Td>
                  <Td>15+</Td>
                  <Td>Identification, filtering, ranking</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Backtesting</Td>
                  <Td>12+</Td>
                  <Td>Rolling window, validation, metrics</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        <section className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-purple'
            className='mb-6 flex items-center gap-3'
          >
            <SimulationIcon /> Future Phases
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Phase A establishes that honest, reactive liquidation strategies face structural
            disadvantages in latency-driven markets. Future phases will explore alternative approaches.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Phase B: Pre-positioned Strategies
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Exploration of predictive positioning and proactive capital deployment
                  to circumvent latency disadvantages.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Phase C: Cross-Protocol
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Analysis of liquidation opportunities across multiple lending protocols
                  and their competitive dynamics.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
