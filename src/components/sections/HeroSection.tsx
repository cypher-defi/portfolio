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
  // Initialize particle animation on right side
  useParticleAnimation("particleCanvas", {
    particleCount: 60,
    connectionDistance: 150
  })

  const router = useRouter()

  return (
    <section className='relative h-screen flex items-stretch overflow-hidden bg-[#0C0C0E]'>
      {/* Right-side particle animation canvas - spreads freely */}
      <div className='absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block'>
        <canvas
          id='particleCanvas'
          className='w-full h-full block bg-[#0C0C0E]'
        />
      </div>

      {/* Left-side content - takes full width on mobile, 50% on desktop */}
      <div className='w-full lg:w-1/2 relative z-10 flex flex-col justify-center'>
        <div className='max-w-6xl mx-auto px-6 w-full'>
          <div className='space-y-6 max-w-3xl'>
            {/* Title */}
            <div className='animate-fade-in'>
              <Heading level='display-lg'>{title}</Heading>
            </div>

            {/* Description */}
            <div className='animate-fade-in-up delay-100'>
              <Text
                size='body'
                color='secondary'
                className='text-lg leading-relaxed'
              >
                {description}
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className='flex gap-4 pt-4 animate-fade-in-up delay-200 flex-wrap'>
              <Button
                variant='primary'
                size='lg'
                onClick={() => router.push("/#work")}
              >
                {primaryCTA}
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={() => router.push("/contact")}
              >
                {secondaryCTA}
              </Button>
            </div>
          </div>
          <TechStackSection badges={TECH_STACK} />
        </div>
      </div>
    </section>
  )
}
