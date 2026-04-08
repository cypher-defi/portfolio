"use client"

import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/HeroSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/navigation/Footer"
import { Reveal } from "@/components/Reveal"

const PixelReveal = dynamic(
  () => import("@/components/PixelReveal").then((mod) => mod.PixelReveal),
  { ssr: false }
)

const HERO_DATA = {
  label: "FULL STACK ENGINEER",
  title: "Building at the Intersection of",
  titleItalic: "Blockchain, AI & Cloud",
  description: `I'm Enrique Ibarra. I build production systems across three domains: DeFi protocols and smart contracts, AI agent infrastructure, and full-stack web applications. From ERC-4626 vaults to autonomous agent marketplaces to cloud-backed lending platforms.`,
  primaryCTA: "View Work",
  secondaryCTA: "Get In Touch"
}

const STATS = [
  { value: "50+", label: "Smart Contracts" },
  { value: "600+", label: "Tests Written" },
  { value: "3", label: "Chains: EVM · Solana · Base" },
  { value: "15+", label: "Production Projects" }
]

export default function Home() {
  return (
    // Changed to #121214 (Charcoal) and text to #E5E5E5 (Soft Silver)
    <main className='bg-[#121214] text-[#E5E5E5] min-h-screen relative selection:bg-white/10 selection:text-white'>
      {/* CALM WATER & MIST BACKGROUND
          - Fixed position ensures it stays behind content
          - Z-index 0 keeps it behind the UI (Navigation/Hero)
          - GPU accelerated with transform3d for better performance
      */}
      <div
        className='fixed inset-0 pointer-events-none z-0 overflow-hidden'
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {/* 1. The Grain Layer (Aura Texture) - GPU accelerated with local asset */}
        <div
          className='absolute inset-0 opacity-[0.03] contrast-150 brightness-100 z-50'
          style={{
            backgroundImage: `url("/noise.svg")`,
            willChange: "opacity",
            transform: "translate3d(0,0,0)"
          }}
        />

        {/* 2. Primary "Mist" Spotlight (Top Left) - Optimized gradient */}
        <div
          className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10'
          style={{
            background:
              "radial-gradient(circle, rgba(148, 163, 184, 0.15) 0%, rgba(148, 163, 184, 0) 70%)",
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden"
          }}
        />

        {/* 3. Deep "Water" Glow (Bottom Right) - Optimized gradient */}
        <div
          className='absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-20'
          style={{
            background:
              "radial-gradient(circle, rgba(63, 63, 70, 0.3) 0%, rgba(63, 63, 70, 0) 70%)",
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden"
          }}
        />
      </div>

      {/* CONTENT LAYER 
          Wrapped in relative z-10 to sit above the background effects
      */}
      <div className='relative z-10'>
        <PixelReveal />

        <Navigation />

        <HeroSection {...HERO_DATA} />

        <TechStackSection />

        <StatsSection stats={STATS} />

        <ExpertiseSection />

        <WorkSection />

        <Reveal direction="up" delay={0.1}>
          <ContactSection />
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <Footer />
        </Reveal>
      </div>

      {/* Global Animations - Optimized for smooth, performant experience */}
      <style jsx>{`
        /* Smoother pulse animation using transform for GPU acceleration */
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 15s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
