import { HeroSection } from "@/components/sections/HeroSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ExpertiseSection } from "@/components/sections/ExpertiseSection"
import { WorkSection } from "@/components/sections/WorkSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/navigation/Footer"
import { Reveal } from "@/components/Reveal"

const HERO_DATA = {
  label: "FULL STACK ENGINEER",
  title: "Full-Stack Engineering",
  titleItalic: "AI, Blockchain and Cloud Services",
  description: `I'm Enrique Ibarra. I design and ship scalable backend APIs, database architectures, and full-stack applications — from financial SaaS platforms and mobile apps to automation services and smart contract integrations. Architecture-first. Production-grade. End to end.`,
  primaryCTA: "View Work",
  secondaryCTA: "Get In Touch"
}

const STATS = [
  { value: "20+", label: "Production Projects" },
  { value: "600+", label: "Tests Written" },
  { value: "5+", label: "Years Building" },
  { value: "3", label: "Cloud Platforms" }
]

export default function Home() {
  return (
    // Changed to #121214 (Charcoal) and text to #E5E5E5 (Soft Silver)
    <main className='bg-[#121214] text-[#E5E5E5] min-h-screen relative selection:bg-white/10 selection:text-white overflow-x-clip'>
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
        <Navigation />

        <HeroSection {...HERO_DATA} />

        <TechStackSection />

        <StatsSection stats={STATS} />

        <ExpertiseSection />

        <WorkSection />

        <Reveal direction='up' delay={0.1}>
          <ContactSection />
        </Reveal>

        <Reveal direction='up' delay={0.05}>
          <Footer />
        </Reveal>
      </div>

    </main>
  )
}
