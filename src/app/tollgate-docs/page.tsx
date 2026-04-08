"use client"

import React from "react"
import { Heading } from "@/components/atoms/Heading"
import { DocsLayout } from "@/components/layout/DocsLayout"
import { Navigation } from "@/components/navigation/Navigation"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/components/animations/variants"
import { Card } from "@/components/molecules/Card"
import {
  SecurityIcon,
  ArchitectureIcon,
  GatewayIcon,
  VPNIcon,
  AgentIcon,
  AtomicIcon
} from "@/components/icons"

export default function TollgateDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Tollgate'
        protocolIcon={<VPNIcon />}
        githubLink='https://github.com/Enricrypto/tollgate'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Payment Flow", href: "#payment" },
          { label: "Security", href: "#security" }
        ]}
      />

      <DocsLayout>
        <header className='space-y-4 pt-6 pb-16 border-t border-white/5'>
          <div className='flex items-center gap-4 flex-wrap'>
            <Heading
              level='display-lg'
              color='accent-blue'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              Tollgate
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              AI Agent Infrastructure
            </span>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Base Network
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            Pay-per-use WireGuard VPN gateway for autonomous agents. No
            subscriptions, no pre-auth: each access is gated by a USDC
            micropayment verified on Base, enabling agents to purchase network
            access atomically without human intervention.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "AI Agents", color: "blue" },
              { label: "x402 Payments", color: "blue" },
              { label: "WireGuard", color: "blue" },
              { label: "Base", color: "blue" },
              { label: "USDC", color: "green" },
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
          <Heading level='h2' color='accent-blue' className='mb-8 flex items-center gap-3'>
            <AgentIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(167,200,255,0.05)] border border-[rgba(167,200,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#A7C8FF]'>Core Concept:</strong> Tollgate
              removes the need for pre-registered credentials or subscriptions when
              autonomous agents need network access. Each WireGuard session is
              unlocked only after a USDC micropayment is verified on Base: making
              network access a composable, payable primitive for AI agents.
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
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  Pay-Per-Use Access
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  No subscriptions or upfront registration. Agents pay only for
                  the network sessions they actually use via USDC micropayments.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Atomic Verification
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Payment is verified on-chain before the WireGuard tunnel is
                  provisioned. No partial access, no trust required.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  Agent-Native Design
                </Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Built specifically for autonomous agents: no human interaction
                  required at any point in the access flow.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='architecture' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-blue' className='mb-6 flex items-center gap-3'>
            <ArchitectureIcon /> Architecture
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            Tollgate combines a WireGuard VPN layer with an x402 payment
            middleware and an on-chain verifier on Base, creating a fully
            autonomous access control system.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>
                  VPN Layer
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>WireGuard tunnel provisioning</li>
                  <li>Session lifecycle management</li>
                  <li>Per-agent key generation</li>
                  <li>Automatic session expiry</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>
                  Payment Middleware
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>x402 payment protocol</li>
                  <li>USDC on Base</li>
                  <li>Backend wallet via Openfort</li>
                  <li>Atomic charge + provision</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>
                  On-Chain Verifier
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Base network verification</li>
                  <li>Payment receipt validation</li>
                  <li>Tamper-proof audit trail</li>
                  <li>No trusted intermediary</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>
                  Agent Interface
                </Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Headless API endpoints</li>
                  <li>Wallet abstraction layer</li>
                  <li>TypeScript SDK</li>
                  <li>Zero human touch-points</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='payment' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <AtomicIcon /> Payment Flow
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The entire access flow: from payment request to tunnel provision : 
            is atomic and requires no human interaction.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
          >
            {[
              { step: "01", title: "Agent Requests Access", desc: "Autonomous agent sends an access request to the Tollgate endpoint.", glow: "blue" as const, color: "accent-blue" as const },
              { step: "02", title: "x402 Payment Issued", desc: "Tollgate responds with a 402 Payment Required. Agent pays USDC via backend wallet on Base.", glow: "green" as const, color: "accent-green" as const },
              { step: "03", title: "Tunnel Provisioned", desc: "Payment verified on-chain. WireGuard tunnel is provisioned and keys returned to the agent.", glow: "purple" as const, color: "accent-purple" as const }
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
                <Heading level='h4' color='accent-blue' className='mb-3'>Payment Security</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>On-chain payment verification</li>
                  <li>No pre-auth credentials stored</li>
                  <li>Per-session unique keys</li>
                  <li>Replay attack prevention</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Network Security</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>WireGuard encryption</li>
                  <li>Session expiry enforcement</li>
                  <li>Isolated agent tunnels</li>
                  <li>No shared credentials</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
