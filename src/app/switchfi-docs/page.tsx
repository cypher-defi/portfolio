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
  SwapIcon,
  PoolIcon,
  LiquidityIcon,
  UIIcon,
  SecurityIcon
} from "@/components/icons"

export default function SwitchFiDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='SwitchFi'
        protocolIcon={<SwapIcon />}
        githubLink='https://github.com/Enricrypto/SwitchFi'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Features", href: "#features" },
          { label: "Tech Stack", href: "#stack" }
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
              SwitchFi
            </Heading>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              DEX Frontend
            </span>
            <span className='px-3 py-1 bg-[rgba(167,200,255,0.1)] border border-[rgba(167,200,255,0.3)] rounded-full text-sm text-[#A7C8FF]'>
              Full Stack
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            A decentralized exchange frontend with token swaps, liquidity
            management, and real-time on-chain interactions. Built with Next.js,
            TailwindCSS, wagmi, and viem for a seamless Web3 user experience.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "Next.js", color: "blue" },
              { label: "TailwindCSS", color: "blue" },
              { label: "wagmi", color: "purple" },
              { label: "viem", color: "purple" },
              { label: "TypeScript", color: "blue" },
              { label: "DEX", color: "green" },
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
            <UIIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(167,200,255,0.05)] border border-[rgba(167,200,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#A7C8FF]'>What it does:</strong> SwitchFi
              provides a clean, production-grade frontend for interacting with
              on-chain DEX contracts. Users can swap tokens, add and remove
              liquidity, and track their positions: all with wallet-native
              signing via wagmi and low-level EVM interactions via viem.
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
                <Heading level='h4' color='accent-blue' className='mb-3'>Token Swaps</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Real-time price quotes with slippage tolerance, swap preview,
                  and one-click execution via connected wallet.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Liquidity Management</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Add and remove liquidity to pools with LP token tracking,
                  share percentage display, and pool health indicators.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>On-Chain Interactions</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  All actions write directly to smart contracts via viem: no
                  intermediary, no API, pure on-chain execution.
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
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Frontend (Next.js)</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>App Router architecture</li>
                  <li>Server and client components</li>
                  <li>TailwindCSS design system</li>
                  <li>Responsive layout</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Web3 Layer (wagmi + viem)</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>wagmi for wallet connection</li>
                  <li>viem for contract calls</li>
                  <li>Multi-wallet support</li>
                  <li>Network switching</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>State Management</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Real-time price feeds</li>
                  <li>Position tracking</li>
                  <li>Transaction status updates</li>
                  <li>Optimistic UI updates</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>Contract Integration</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>ERC-20 token approval flow</li>
                  <li>Swap router integration</li>
                  <li>Liquidity pair management</li>
                  <li>Event-based UI sync</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='features' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <LiquidityIcon /> Core Features
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
                <Heading level='h4' color='accent-blue' className='mb-3'>Swap Interface</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Token selector with search</li>
                  <li>Live price impact display</li>
                  <li>Slippage tolerance setting</li>
                  <li>Deadline configuration</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Liquidity Interface</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Pool creation and joining</li>
                  <li>LP token balance display</li>
                  <li>Share percentage calculation</li>
                  <li>Removal with preview</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='stack' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-purple' className='mb-6 flex items-center gap-3'>
            <PoolIcon /> Tech Stack
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              { name: "Next.js", desc: "React framework with App Router", glow: "blue" as const, color: "accent-blue" as const },
              { name: "TailwindCSS", desc: "Utility-first styling", glow: "blue" as const, color: "accent-blue" as const },
              { name: "wagmi", desc: "React hooks for Web3", glow: "purple" as const, color: "accent-purple" as const },
              { name: "viem", desc: "TypeScript EVM client", glow: "purple" as const, color: "accent-purple" as const }
            ].map(({ name, desc, glow, color }) => (
              <motion.div key={name} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
                <Card glow={glow}>
                  <Heading level='h4' color={color} className='mb-2'>{name}</Heading>
                  <p className='text-sm text-[#E5E5E5]'>{desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
