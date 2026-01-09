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
  AuctionIcon,
  ClockIcon,
  PriceIcon,
  RefundIcon
} from "@/components/icons"

export default function TokenLaunchpadDocs() {
  return (
    <>
      <Navigation
        variant="docs"
        protocolName="Token Launchpad"
        protocolIcon={<AuctionIcon />}
        githubLink="https://github.com/Enricrypto"
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Pricing", href: "#pricing" },
          { label: "Security", href: "#security" },
          { label: "Testing", href: "#testing" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading level='display-lg' color='accent-blue' className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              Token Launchpad
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Descending Price Auction
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A sophisticated Token Launchpad using a Dutch auction system with
            descending prices, time-based mechanics, and instant settlement
            capabilities.
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
              Auction
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(255,149,0,0.1)] border border-[rgba(255,149,0,0.3)] rounded-full text-sm text-[#FF9500] hover:bg-[rgba(255,149,0,0.2)] transition'
            >
              Pricing
            </a>
            <a
              href='#'
              className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95] hover:bg-[rgba(107,255,149,0.2)] transition'
            >
              Time-Based
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
            <PriceIcon /> Key Features
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
                  Price Decay Mechanism
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Prices descend over time from starting price to reserve price,
                  incentivizing early purchases.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Time Management
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Precise time-based mechanics with configurable auction duration
                  and price schedules.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Instant Settlement
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Immediate execution and settlement upon purchase with automatic
                  refunds.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='pricing' className='py-20 border-t border-white/5'>
          <Heading
            level='h2'
            color='accent-green'
            className='mb-6 flex items-center gap-3'
          >
            <ClockIcon /> Time & Pricing
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
                  Price Calculation
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Linear price decay</li>
                  <li>Time-based computation</li>
                  <li>Reserve price floors</li>
                  <li>Maximum price caps</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Auction Lifecycle
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Auction initialization</li>
                  <li>Active bidding window</li>
                  <li>Settlement period</li>
                  <li>Refund processing</li>
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
                    <i>ReentrancyGuard</i> on all transfers
                  </li>
                  <li>
                    <i>Time Validation</i> enforcement
                  </li>
                  <li>
                    <i>Price Verification</i> checks
                  </li>
                  <li>
                    <i>Refund Safety</i> mechanisms
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
                  <li>Price manipulation resistance</li>
                  <li>Time manipulation prevention</li>
                  <li>Double-spend prevention</li>
                  <li>Auction state validation</li>
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
            Extensive testing for price calculations, time mechanics,
            settlements, and edge cases.
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
                    Price Calculations
                  </Td>
                  <Td>35+</Td>
                  <Td>Decay formulas, edge cases</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Time Management</Td>
                  <Td>25+</Td>
                  <Td>Duration handling, timestamps</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Settlement Logic</Td>
                  <Td>20+</Td>
                  <Td>Execution, refunds, transfers</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Security</Td>
                  <Td>15+</Td>
                  <Td>Reentrancy, state validation</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>
      </DocsLayout>
    </>
  )
}
