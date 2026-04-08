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
  AlertIcon,
  GrafanaIcon,
  MonitoringIcon,
  SecurityIcon,
  NetworkIcon
} from "@/components/icons"

export default function OnchainRiskMonitorDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='Onchain Risk Monitor'
        protocolIcon={<MonitoringIcon />}
        githubLink='https://github.com/Enricrypto/onchain-risk-monitor'
        navItems={[
          { label: "Overview", href: "#overview" },
          { label: "Architecture", href: "#architecture" },
          { label: "Metrics", href: "#metrics" },
          { label: "Alerts", href: "#alerts" }
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
              Onchain Risk Monitor
            </Heading>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Testnet Ready
            </span>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Aave V3
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            Testnet-ready on-chain risk monitoring system for Aave V3. Collects
            blockchain metrics, visualizes them in Grafana dashboards, and
            generates real-time alerts via email and Telegram: with full
            auditability, structured logging, and operational documentation.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "Aave V3", color: "green" },
              { label: "Grafana", color: "green" },
              { label: "TypeScript", color: "blue" },
              { label: "Monitoring", color: "green" },
              { label: "Email Alerts", color: "blue" },
              { label: "Telegram Alerts", color: "blue" },
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
            <GrafanaIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(107,255,149,0.05)] border border-[rgba(107,255,149,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#6BFF95]'>Purpose:</strong> The Onchain Risk
              Monitor provides DeFi teams and treasury managers with real-time
              visibility into Aave V3 protocol health. It tracks position health
              factors, liquidity metrics, and risk indicators: surfacing anomalies
              before they become incidents via automated email and Telegram alerts.
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
                <Heading level='h4' color='accent-green' className='mb-3'>Real-Time Metrics</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Continuously collects on-chain data from Aave V3 and streams
                  metrics into Grafana for live dashboard visualization.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Multi-Channel Alerts</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Threshold-based alerting delivers notifications via both email
                  and Telegram, ensuring oncall teams are always informed.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Full Auditability</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Structured logging and operational documentation provide a
                  complete audit trail of all monitored events and alerts.
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
                <Heading level='h4' color='accent-green' className='mb-3'>Data Collection</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Aave V3 subgraph queries</li>
                  <li>On-chain RPC calls</li>
                  <li>Health factor polling</li>
                  <li>Liquidity depth snapshots</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Visualization</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Grafana dashboard integration</li>
                  <li>Time-series metric storage</li>
                  <li>Custom panel configurations</li>
                  <li>Historical trend analysis</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='purple'>
                <Heading level='h4' color='accent-purple' className='mb-3'>Alert Engine</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Configurable thresholds</li>
                  <li>Alert deduplication</li>
                  <li>Severity classification</li>
                  <li>Cooldown management</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='red'>
                <Heading level='h4' color='accent-red' className='mb-3'>Logging & Audit</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Structured JSON logs</li>
                  <li>Event timestamping</li>
                  <li>Operational runbooks</li>
                  <li>Incident replay support</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='metrics' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <NetworkIcon /> Tracked Metrics
          </Heading>

          <p className='max-w-4xl mb-8 text-[#E5E5E5]'>
            The system tracks a comprehensive set of Aave V3 risk indicators
            across positions, liquidity, and protocol health.
          </p>

          <div className='overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0'>
            <Table>
              <THead>
                <Tr isHeader={true}>
                  <Th>Metric</Th>
                  <Th>Source</Th>
                  <Th>Alert Threshold</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td className='font-medium text-[#6BFF95]'>Health Factor</Td>
                  <Td>Aave V3 on-chain</Td>
                  <Td>Below 1.2 triggers warning</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#A7C8FF]'>Liquidity Depth</Td>
                  <Td>Reserve data RPC</Td>
                  <Td>Drop &gt; 20% triggers alert</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#C3A6FF]'>Utilization Rate</Td>
                  <Td>Aave V3 subgraph</Td>
                  <Td>Above 90% triggers warning</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FFC36B]'>Borrow APY</Td>
                  <Td>Reserve data RPC</Td>
                  <Td>Spike &gt; 50% triggers alert</Td>
                </Tr>
                <Tr>
                  <Td className='font-medium text-[#FF6B6B]'>At-Risk Positions</Td>
                  <Td>Position query</Td>
                  <Td>HF &lt; 1.05 triggers critical</Td>
                </Tr>
              </TBody>
            </Table>
          </div>
        </section>

        <section id='alerts' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-blue' className='mb-6 flex items-center gap-3'>
            <AlertIcon /> Alert Channels
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
                <Heading level='h4' color='accent-blue' className='mb-3'>Email Alerts</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Configurable recipient list</li>
                  <li>HTML formatted reports</li>
                  <li>Severity-based routing</li>
                  <li>Digest mode support</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Telegram Alerts</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Bot-based message delivery</li>
                  <li>Channel and DM support</li>
                  <li>Rich markdown formatting</li>
                  <li>Instant push notifications</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </DocsLayout>
    </>
  )
}
