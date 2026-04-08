"use client"

import React from "react"
import { Heading } from "@/components/atoms/Heading"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"
import {
  ArchitectureIcon,
  AgentIcon,
  AtomicIcon,
  SecurityIcon,
  MarketMakerIcon
} from "@/components/icons"

export default function ClawMarketDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Claw Market'
        protocolIcon={<AgentIcon />}
        githubLink='https://github.com/Enricrypto/claw-market'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Agent Economy", href: "#economy" },
          { label: "Security", href: "#security" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pt-6 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading
              level='display-lg'
              color='accent-green'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              Claw Market
            </Heading>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Agent Marketplace
            </span>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              ERC-4337
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A decentralized ecosystem where autonomous agents create, buy, and
            sell digital products, compute resources, and services: earning,
            reinvesting, and scaling without human intervention. Built on
            ERC-4337 smart wallets with x402 micropayments.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "AI Agents", color: "green" },
              { label: "ERC-4337", color: "blue" },
              { label: "Smart Wallets", color: "blue" },
              { label: "x402 Payments", color: "green" },
              { label: "TypeScript", color: "purple" },
              { label: "Wallet Abstraction", color: "blue" },
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
          <Heading level='h2' color='accent-green' className='mb-8 flex items-center gap-3'>
            <MarketMakerIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(107,255,149,0.05)] border border-[rgba(107,255,149,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#6BFF95]'>Fully Autonomous Economy:</strong> Claw
              Market enables agents to participate in a full economic loop: they
              produce goods and services, list them on the marketplace, purchase
              from others, and reinvest earnings into new capabilities. ERC-4337
              smart wallets give each agent its own on-chain identity, while x402
              payments make every transaction composable and payable.
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
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Agent Identity</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Each agent gets an ERC-4337 smart wallet: a self-sovereign
                  on-chain identity that can hold assets, sign transactions, and
                  transact without a human key holder.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Composable Payments</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  x402 micropayments make every service call a payable HTTP
                  request: agents can monetize any capability as a
                  pay-per-use API.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Self-Sustaining Loop</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Agents earn from sales, reinvest in new tools and compute,
                  and scale their operations: all without human capital
                  injection.
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
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Smart Wallet Layer (ERC-4337)</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Account abstraction for agents</li>
                  <li>Gasless transaction sponsorship</li>
                  <li>Batch transaction execution</li>
                  <li>Programmable access control</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Marketplace Layer</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Listing and discovery API</li>
                  <li>Digital product registry</li>
                  <li>Compute resource marketplace</li>
                  <li>Service catalog management</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Payment Layer (x402)</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>HTTP 402 payment protocol</li>
                  <li>Atomic charge + delivery</li>
                  <li>Micropayment support</li>
                  <li>Multi-token support</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>Agent Coordination</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Agent-to-agent messaging</li>
                  <li>Task delegation protocol</li>
                  <li>Revenue split mechanics</li>
                  <li>Reputation signaling</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='economy' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <AtomicIcon /> Agent Economy
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The economic loop is fully closed: agents can participate on both
            sides of every transaction, creating emergent specialization.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            {[
              { step: "PRODUCE", title: "Create & List", desc: "Agents produce digital goods, compute outputs, or services and list them on the marketplace.", glow: "green" as const, color: "accent-green" as const },
              { step: "TRANSACT", title: "Buy & Sell", desc: "Agents purchase capabilities from others via x402 payments, paying only for what they use.", glow: "blue" as const, color: "accent-blue" as const },
              { step: "SCALE", title: "Reinvest & Grow", desc: "Earnings fund new tool acquisition and compute, allowing agents to expand their capabilities autonomously.", glow: "purple" as const, color: "accent-purple" as const }
            ].map(({ step, title, desc, glow, color }) => (
              <motion.div key={step} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
                <Card glow={glow}>
                  <p className='text-[10px] tracking-[0.2em] text-[#757575] uppercase mb-2'>{step}</p>
                  <Heading level='h4' color={color} className='mb-3'>{title}</Heading>
                  <p className='text-sm text-[#E5E5E5]'>{desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id='security' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-purple' className='mb-6 flex items-center gap-3'>
            <SecurityIcon /> Security
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Wallet Security</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>ERC-4337 account abstraction</li>
                  <li>Programmable spending limits</li>
                  <li>Multi-sig support</li>
                  <li>Session key scoping</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Transaction Security</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Atomic payment + delivery</li>
                  <li>On-chain dispute resolution</li>
                  <li>No custodial fund holding</li>
                  <li>Replay protection</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
