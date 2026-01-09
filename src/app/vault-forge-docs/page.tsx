"use client"

import React from "react"
import { Heading } from "@/components/atoms/Heading"
import { Table, THead, TBody, Tr, Th, Td } from "@/components/molecules/DocsTable"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"

import {
  SecurityIcon,
  TestIcon,
  VaultIcon,
  BankIcon,
  TierIcon,
  GasIcon
} from "@/components/icons"

export default function VaultForgeDocs() {
  return (
    <>
      <Navigation
        variant="docs"
        protocolName="VaultForge"
        protocolIcon={<VaultIcon />}
        githubLink="https://github.com/Enricrypto/vault-forge-crypto-bank"
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Tiers", href: "#tiers" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              VaultForge
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Multi-Tier Savings Protocol
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A comprehensive multi-tier crypto savings system with lock periods,
            tiered APY rates, and penalty redistribution mechanisms.
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
              Savings
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Tiered
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              ERC-20
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
            <TierIcon /> Key Features
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
                  Four-Tier System
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Flexible four-tier vault structure with varying lock periods and
                  corresponding APY incentives.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Lock Period Protection
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Configurable lock durations enforce savings discipline while
                  maximizing yield for committed capital.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Penalty Redistribution
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Early withdrawal penalties are redistributed to remaining vault
                  participants as rewards.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='tiers' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <BankIcon /> Vault Tiers
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
                  Tier Configuration
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Tier 1: 30-day lock</li>
                  <li>Tier 2: 90-day lock</li>
                  <li>Tier 3: 180-day lock</li>
                  <li>Tier 4: 365-day lock</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  APY Structure
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Higher APY for longer locks</li>
                  <li>Penalty scaling with tiers</li>
                  <li>Operator commission tracking</li>
                  <li>Dynamic reward distribution</li>
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
            <SecurityIcon /> Security Architecture
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
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Mitigation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Premature withdrawal prevention</li>
                  <li>Penalty calculation integrity</li>
                  <li>Reward distribution safety</li>
                  <li>Commission tracking accuracy</li>
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
            Extensive testing for tier operations, lock period enforcement,
            penalty calculations, and withdrawal scenarios.
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
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
