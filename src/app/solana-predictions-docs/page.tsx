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
  ArchitectureIcon,
  OrderBookIcon,
  MarketMakerIcon,
  PredictionIcon,
  SecurityIcon,
  AtomicIcon
} from "@/components/icons"

export default function SolanaPredictionsDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Solana Predictions SDK'
        protocolIcon={<PredictionIcon />}
        githubLink='https://github.com/Enricrypto/solana-predictions-sdk'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Order Matching", href: "#order-matching" },
          { label: "Settlement", href: "#settlement" }
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
              Solana Predictions SDK
            </Heading>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              AI Agent SDK
            </span>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              Solana
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            TypeScript SDK enabling AI agents to act as market makers on a
            hybrid predictions market built on Solana. Off-chain CLOB order
            matching is combined with on-chain SPL token settlement for
            performance without sacrificing trustlessness.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "Solana", color: "purple" },
              { label: "AI Agents", color: "purple" },
              { label: "Market Making", color: "blue" },
              { label: "CLOB", color: "blue" },
              { label: "SPL Tokens", color: "green" },
              { label: "TypeScript", color: "purple" },
              { label: "License: MIT", color: "green" }
            ].map(({ label, color }) => {
              const styles: Record<string, string> = {
                blue: "bg-[rgba(167,200,255,0.1)] border-[rgba(167,200,255,0.3)] text-[#A7C8FF]",
                green: "bg-[rgba(107,255,149,0.1)] border-[rgba(107,255,149,0.3)] text-[#6BFF95]",
                purple: "bg-[rgba(195,166,255,0.1)] border-[rgba(195,166,255,0.3)] text-[#C3A6FF]"
              }
              return (
                <span key={label} className={`px-3 py-1 border rounded-full text-sm ${styles[color]}`}>
                  {label}
                </span>
              )
            })}
          </div>
        </header>

        <section id='overview' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-purple' className='mb-8 flex items-center gap-3'>
            <MarketMakerIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(195,166,255,0.05)] border border-[rgba(195,166,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#C3A6FF]'>Hybrid Design:</strong> The SDK
              separates matching from settlement. Order matching runs off-chain via
              a Central Limit Order Book (CLOB) for high throughput and low latency,
              while settlement is fully on-chain using SPL tokens on Solana: so
              agents keep the speed of CEX mechanics with the trust of DEX settlement.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Agent Market Making</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  SDK exposes primitives for AI agents to place, cancel, and
                  manage orders on prediction markets autonomously.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Off-Chain CLOB</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Central Limit Order Book runs off-chain for CEX-grade matching
                  speed, enabling tight spreads and high-frequency agent strategies.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>On-Chain Settlement</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  All settlements are executed on-chain via SPL tokens, ensuring
                  trustless finality and full auditability.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='architecture' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-blue' className='mb-6 flex items-center gap-3'>
            <ArchitectureIcon /> Architecture
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>SDK Layer</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>TypeScript client library</li>
                  <li>Market maker agent primitives</li>
                  <li>Order lifecycle management</li>
                  <li>Position tracking utilities</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Matching Engine</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Off-chain CLOB engine</li>
                  <li>Price-time priority matching</li>
                  <li>Bid/ask spread management</li>
                  <li>Order book state sync</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Solana Programs</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>SPL token settlement</li>
                  <li>On-chain escrow</li>
                  <li>Market resolution logic</li>
                  <li>Trustless payout distribution</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>Agent Integration</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Headless operation mode</li>
                  <li>Strategy plugin interface</li>
                  <li>Risk parameter config</li>
                  <li>Real-time market feed hooks</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='order-matching' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-purple' className='mb-6 flex items-center gap-3'>
            <OrderBookIcon /> Order Matching
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The CLOB engine processes orders with price-time priority, enabling
            agent market makers to compete on spread tightness and fill speed.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Order Type</Th>
                  <Th>Matching</Th>
                  <Th>Settlement</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Limit Order</Td>
                  <Td>Price-time priority, off-chain</Td>
                  <Td>On-chain SPL transfer</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Market Order</Td>
                  <Td>Immediate fill at best price</Td>
                  <Td>On-chain SPL transfer</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Cancel Order</Td>
                  <Td>Immediate removal from book</Td>
                  <Td>Escrow release on-chain</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        <section id='settlement' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <AtomicIcon /> On-Chain Settlement
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
                <Heading level='h4' color='accent-green' className='mb-3'>SPL Token Settlement</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Atomic fund transfer</li>
                  <li>Escrow-based position locking</li>
                  <li>Trustless market resolution</li>
                  <li>Automatic payout on outcome</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Security Properties</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Non-custodial design</li>
                  <li>On-chain audit trail</li>
                  <li>No off-chain fund custody</li>
                  <li>Permissionless resolution</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
