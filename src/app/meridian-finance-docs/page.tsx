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
  YieldIcon
} from "@/components/icons"

export default function MeridianVaultDocs() {
  return (
    <>
      <Navigation
        variant="docs"
        protocolName="Meridian Vault"
        protocolIcon={<VaultIcon />}
        githubLink="https://github.com/Enricrypto/meridian-finance-yield-farming"
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Features", href: "#overview" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              Meridian Vault
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              ERC-4626 Yield Farming
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A comprehensive ERC-4626 compliant vault system with MRD governance
            token rewards and auto-compounding features.
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
              Smart Contracts
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              ERC-4626
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Yield Farming
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(153,69,255,0.2)] transition'
            >
              ERC-20
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,107,107,0.1)] border border-[rgba(255,107,107,0.3)] rounded-full text-sm text-[#FF6B6B] hover:bg-[rgba(255,107,107,0.2)] transition'
            >
              Governance
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
            <VaultIcon /> Key Features
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
                  ERC-4626 Compliance
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Fully compliant with the ERC-4626 standard for tokenized vaults,
                  enabling seamless integration with the DeFi ecosystem.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Auto-Compounding Rewards
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Automatic reinvestment of MRD governance token rewards for
                  exponential growth without manual intervention.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Governance Integration
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Holders earn MRD tokens that grant voting rights in protocol
                  governance and strategic decisions.
                </p>
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
                  Comprehensive Protections
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>
                    <i>ReentrancyGuard</i> (via OpenZeppelin)
                  </li>
                  <li>
                    <i>CEI Pattern</i> (Checks-Effects-Interactions)
                  </li>
                  <li>
                    <i>Pausable</i> functionality for emergency stops
                  </li>
                  <li>
                    <i>First Depositor</i> attack mitigation
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Attack Vectors Considered
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Vault inflation attacks</li>
                  <li>Reentrancy exploits</li>
                  <li>Rounding errors & precision loss</li>
                  <li>Integer overflow/underflow</li>
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
            <TestIcon /> Testing & Quality Assurance
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Over 100+ comprehensive tests with 100% pass rate, ensuring
            production-grade reliability and security.
          </p>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Test Suite</Th>
                  <Th>Coverage</Th>
                  <Th>Focus Area</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Unit Tests</Td>
                  <Td>75+</Td>
                  <Td>Core vault operations, deposit/withdraw logic</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Integration</Td>
                  <Td>20+</Td>
                  <Td>Multi-contract interactions, reward distribution</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Security</Td>
                  <Td>10+</Td>
                  <Td>Reentrancy protection, edge cases</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
