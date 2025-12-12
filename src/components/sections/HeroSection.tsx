"use client"

import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Button } from "@/components/atoms/Button"
import { TechStackSection } from "@/components/sections/TeckStackSection"
import { useParticleAnimation } from "@/hooks/useParticleAnimation"
import { useRouter } from "next/navigation"

const TECH_STACK = [
  "Solidity",
  "Rust",
  "TypeScript",
  "React",
  "Foundry",
  "Anchor",
  "Viem",
  "Wagmi",
  "Web3",
  "Testing",
  "Audits"
]

interface HeroProps {
  title: string
  description: string
  primaryCTA: string
  secondaryCTA: string
}

export const HeroSection = ({
  title,
  description,
  primaryCTA,
  secondaryCTA
}: HeroProps) => {
  useParticleAnimation("particleCanvas", {
    particleCount: 60,
    connectionDistance: 150
  })

  const router = useRouter()

  return (
    <section className='relative min-h-screen lg:h-screen flex items-stretch overflow-hidden bg-[#0C0C0E]'>
      {/* Right-side particle animation canvas */}
      <div className='absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block'>
        <canvas
          id='particleCanvas'
          className='w-full h-full block bg-[#0C0C0E]'
        />
      </div>

      {/* Left-side content */}
      <div className='w-full lg:w-1/2 relative z-10 flex flex-col justify-center lg:pt-0 pb-16 lg:pb-0'>
        {/* CHANGED: Removed mx-auto from here */}
        <div className='px-4 sm:px-6 w-full'>
          {/* CHANGED: Added mx-auto here instead (only for the heading/description) */}
          <div className='max-w-3xl mx-auto space-y-6'>
            {/* Title */}
            <div className='animate-fade-in'>
              <Heading
                level='display-lg'
                className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
              >
                {title}
              </Heading>
            </div>

            {/* Description */}
            <div className='animate-fade-in-up delay-100'>
              <Text
                size='body'
                color='secondary'
                className='text-base sm:text-lg lg:text-lg leading-relaxed'
              >
                {description}
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in-up delay-200'>
              <Button
                variant='primary'
                size='lg'
                onClick={() => router.push("/#work")}
                className='w-full sm:w-auto'
              >
                {primaryCTA}
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={() => router.push("/contact")}
                className='w-full sm:w-auto'
              >
                {secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Tech Stack - NOW LEFT ALIGNED */}
          <div className='flex justify-start pt-12 sm:flex'>
            <TechStackSection badges={TECH_STACK} />
          </div>
        </div>
      </div>
    </section>
  )
}
