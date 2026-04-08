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
  RocketIcon,
  AIIcon,
  UIIcon,
  AgentIcon,
  SecurityIcon
} from "@/components/icons"

export default function RiverLabsDocs() {
  return (
    <>
      <Navigation
        variant='docs'
        protocolName='River Labs'
        protocolIcon={<AIIcon />}
        githubLink='https://github.com/Enricrypto/river-labs'
        liveUrl='https://www.riverlabs-ai.com/'
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
              color='accent-purple'
              className='mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            >
              River Labs
            </Heading>
            <span className='px-3 py-1 bg-[rgba(195,166,255,0.1)] border border-[rgba(195,166,255,0.3)] rounded-full text-sm text-[#C3A6FF]'>
              AI Platform
            </span>
            <span className='px-3 py-1 bg-[rgba(107,255,149,0.1)] border border-[rgba(107,255,149,0.3)] rounded-full text-sm text-[#6BFF95]'>
              Live
            </span>
          </div>
          <p className='text-lg leading-relaxed max-w-4xl text-[#E5E5E5]'>
            AI-powered platform for autonomous agent infrastructure and tooling.
            A full-stack Next.js application with a production-grade interface,
            designed to help teams build, deploy, and manage AI agents at scale.
          </p>

          <div className='flex flex-wrap gap-2 pt-4'>
            {[
              { label: "Next.js", color: "purple" },
              { label: "TailwindCSS", color: "purple" },
              { label: "AI Agents", color: "blue" },
              { label: "TypeScript", color: "purple" },
              { label: "Live", color: "green" }
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
            <AgentIcon /> Overview
          </Heading>

          <div className='mb-8 p-6 bg-[rgba(195,166,255,0.05)] border border-[rgba(195,166,255,0.2)] rounded-lg'>
            <p className='text-[#E5E5E5] leading-relaxed'>
              <strong className='text-[#C3A6FF]'>Mission:</strong> River Labs
              provides the infrastructure layer for teams building with autonomous
              agents. The platform offers tooling, documentation, and deployment
              utilities that make agent development faster and more reliable : 
              available live at{" "}
              <a
                href='https://www.riverlabs-ai.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#C3A6FF] hover:underline'
              >
                riverlabs-ai.com
              </a>
              .
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
                <Heading level='h4' color='accent-purple' className='mb-3'>Agent Infrastructure</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Tools and primitives for building, deploying, and scaling
                  autonomous agents in production environments.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Production-Grade UI</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Clean, responsive Next.js interface built for developer
                  productivity and clear information architecture.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='green'>
                <Heading level='h4' color='accent-green' className='mb-3'>Live Platform</Heading>
                <p className='text-sm text-[#E5E5E5]'>
                  Deployed and accessible at riverlabs-ai.com: a fully
                  operational platform serving real users.
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
                <Heading level='h4' color='accent-purple' className='mb-3'>Frontend</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Next.js App Router</li>
                  <li>TailwindCSS styling system</li>
                  <li>TypeScript throughout</li>
                  <li>Responsive design</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Deployment</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Vercel deployment pipeline</li>
                  <li>Custom domain (riverlabs-ai.com)</li>
                  <li>Edge network delivery</li>
                  <li>Continuous deployment</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='features' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-green' className='mb-6 flex items-center gap-3'>
            <RocketIcon /> Features
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
                <Heading level='h4' color='accent-purple' className='mb-3'>Agent Tooling</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Agent configuration management</li>
                  <li>Deployment utilities</li>
                  <li>Monitoring integrations</li>
                  <li>SDK documentation</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }}>
              <Card glow='blue'>
                <Heading level='h4' color='accent-blue' className='mb-3'>Platform Interface</Heading>
                <ul className='list-disc list-inside space-y-2 text-sm text-[#E5E5E5]'>
                  <li>Clean dashboard design</li>
                  <li>Documentation portal</li>
                  <li>Developer resources</li>
                  <li>API reference</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        <section id='stack' className='py-20 border-t border-white/5'>
          <Heading level='h2' color='accent-purple' className='mb-6 flex items-center gap-3'>
            <UIIcon /> Tech Stack
          </Heading>

          <motion.div
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              { name: "Next.js", desc: "React framework with App Router", glow: "purple" as const, color: "accent-purple" as const },
              { name: "TailwindCSS", desc: "Utility-first styling", glow: "purple" as const, color: "accent-purple" as const },
              { name: "TypeScript", desc: "Type-safe development", glow: "blue" as const, color: "accent-blue" as const },
              { name: "Vercel", desc: "Production deployment", glow: "green" as const, color: "accent-green" as const }
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
