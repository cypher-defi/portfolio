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
  OrchestrationIcon,
  AtomicIcon,
  SecurityIcon,
  MicropaymentIcon
} from "@/components/icons"

export default function LedgerlingDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Ledgerling'
        protocolIcon={<MicropaymentIcon />}
        githubLink='https://github.com/Enricrypto/ledgerling'
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
              color='accent-purple'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              Ledgerling
            </Heading>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              x402 Orchestration
            </span>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              TypeScript
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            Orchestration engine for x402 micropayments. Ledgerling classifies
            natural-language requests into paid service calls, estimates costs
            before charging, and executes them atomically: users are never
            silently charged for partial work.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "x402 Protocol", color: "purple" },
              { label: "Micropayments", color: "purple" },
              { label: "NLP Classification", color: "blue" },
              { label: "TypeScript", color: "purple" },
              { label: "Atomic Execution", color: "green" },
              { label: "Orchestration", color: "blue" },
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
            <OrchestrationIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(195,166,255,0.05)] border border-[rgba(195,166,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#C3A6FF]'>Core Guarantee:</strong> Ledgerling
              ensures that a user is never charged for work that was not completed.
              It classifies the intent of a natural-language request, determines
              which paid services it maps to, presents a cost estimate, and only
              charges after successful atomic execution: making x402 payments
              safe and predictable for end users.
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
                <Heading level='h4' color='accent-purple' className='mb-3'>NLP Classification</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Natural-language requests are classified into structured service
                  call graphs before any payment is issued.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Cost Estimation</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  The engine calculates the total cost across all service calls
                  before execution, giving users full visibility into charges.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Atomic Execution</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  All service calls in a request execute atomically: either
                  everything succeeds and payment is collected, or nothing is
                  charged.
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
                <Heading level='h4' color='accent-purple' className='mb-3'>Classification Layer</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Natural-language intent parsing</li>
                  <li>Service call graph generation</li>
                  <li>Dependency resolution</li>
                  <li>Ambiguity handling</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Estimation Layer</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Per-service cost lookup</li>
                  <li>Total cost aggregation</li>
                  <li>User confirmation gate</li>
                  <li>Budget cap enforcement</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Execution Layer</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Atomic service call dispatch</li>
                  <li>x402 payment issuance</li>
                  <li>Rollback on partial failure</li>
                  <li>Result aggregation</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>Payment Layer (x402)</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>HTTP 402 protocol compliance</li>
                  <li>Charge only on success</li>
                  <li>Receipt storage</li>
                  <li>Refund on failure</li>
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
            The full lifecycle from natural-language input to settled payment.
          </p>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              { step: "01", title: "Classify", desc: "NLP engine maps the request to a set of paid service calls.", glow: "purple" as const, color: "accent-purple" as const },
              { step: "02", title: "Estimate", desc: "Total cost calculated and presented to the user before any charge.", glow: "blue" as const, color: "accent-blue" as const },
              { step: "03", title: "Execute", desc: "Services dispatched atomically via x402 micropayments.", glow: "green" as const, color: "accent-green" as const },
              { step: "04", title: "Settle", desc: "Payment collected only after successful completion. Failed work triggers a rollback.", glow: "red" as const, color: "accent-red" as const }
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
            <SecurityIcon /> Security & Guarantees
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
                <Heading level='h4' color='accent-purple' className='mb-3'>User Protections</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>No silent charges</li>
                  <li>Pre-execution cost disclosure</li>
                  <li>Atomic all-or-nothing billing</li>
                  <li>Budget cap enforcement</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Payment Integrity</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>x402 receipt verification</li>
                  <li>Tamper-evident charge log</li>
                  <li>Idempotent execution</li>
                  <li>Replay attack prevention</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
