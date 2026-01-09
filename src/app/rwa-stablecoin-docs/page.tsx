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
  PropertyIcon,
  CollateralIcon
} from "@/components/icons"

export default function RWAStablecoinDocs() {
  return (
    <>
      <Navigation
        variant="docs"
        protocolName="RWA Stablecoin"
        protocolIcon={<PropertyIcon />}
        githubLink="https://github.com/Enricrypto"
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Collateral", href: "#collateral" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              RWA Stablecoin
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Real-World Assets
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A CDP-style stablecoin system backed by real-world assets with
            comprehensive collateralization and governance mechanisms.
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
              Stablecoin
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              RWA
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Collateralized
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(153,69,255,0.1)] border border-[rgba(153,69,255,0.3)] rounded-full text-sm text-[#C3A6FF] hover:bg-[rgba(153,69,255,0.2)] transition'
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
            <PropertyIcon /> Key Features
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
                  RWA Backing
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Stablecoins backed by real-world assets including properties,
                  income streams, and tangible collateral.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  150% Collateralization
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Over-collateralization requirements ensure system stability and
                  protect all stakeholders.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Governance Control
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Decentralized governance over collateral management and system
                  parameters.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='collateral' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <CollateralIcon /> Collateralization System
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
                  Multi-Asset Support
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Real estate properties</li>
                  <li>Income streams</li>
                  <li>Verified assets</li>
                  <li>Diversified backing</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Monitoring & Validation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-[#E5E5E5]'>
                  <li>Continuous asset valuation</li>
                  <li>Collateral health checks</li>
                  <li>Oracle-based pricing</li>
                  <li>Risk assessment</li>
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
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Risk Mitigation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-[#E5E5E5]'>
                  <li>Oracle manipulation resistance</li>
                  <li>Under-collateralization prevention</li>
                  <li>Emergency pause mechanisms</li>
                  <li>Liquidation incentives</li>
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
            Extensive testing for collateralization logic, minting/burning,
            liquidations, and asset validation scenarios.
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
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
