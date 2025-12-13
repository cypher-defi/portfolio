"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/navigation/Footer"

const HERO_DATA = {
  title: "Building Next-Gen Blockchain Finance",
  description:
    "Modular and composable blockchain infrastructure and Solidity smart contracts for DeFi applications. With nearly three years of production experience, I've built sophisticated institutional-grade protocols across lending, yield farming, and arbitrage systems.",
  primaryCTA: "View Work",
  secondaryCTA: "Get In Touch"
}

const STATS = [
  { value: "8", label: "DeFi Protocols" },
  { value: "50+", label: "Smart Contracts" },
  { value: "6+", label: "Deployed Contracts" },
  { value: "600+", label: "Comprehensive Tests" }
]

export default function Home() {
  return (
    <main className='bg-[#0C0C0E] text-white min-h-screen'>
      {/* Particle Background Effect */}
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#A7C8FF]/5 via-transparent to-transparent' />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection {...HERO_DATA} />

      {/* Stats Section */}
      <StatsSection stats={STATS} />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Work Section */}
      <WorkSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Global Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </main>
  )
}
