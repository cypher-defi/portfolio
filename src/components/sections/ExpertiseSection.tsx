import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { Card } from "@/components/molecules/Card"

// Icons for expertise cards
const SmartContractsIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M9 4L4 9L9 14M15 4L20 9L15 14M12 2V20' />
  </svg>
)

const DeFiIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <rect x='3' y='15' width='18' height='4' rx='1' />
    <rect x='4' y='10' width='16' height='3' rx='1' />
    <rect x='5' y='5' width='14' height='3' rx='1' />
    <path d='M12 2L18 5L12 8L6 5Z' />
  </svg>
)

const SecurityIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <path d='M12 2L4 5V11C4 16 12 21 12 21C12 21 20 16 20 11V5L12 2Z' />
    <path d='M9 12L11 14L15 10' />
  </svg>
)

const InfrastructureIcon = () => (
  <svg
    viewBox='0 0 24 24'
    width='32'
    height='32'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
  >
    <rect x='3' y='4' width='18' height='4' rx='1' />
    <rect x='3' y='10' width='18' height='4' rx='1' />
    <rect x='3' y='16' width='18' height='4' rx='1' />
    <line x1='12' y1='8' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='16' />
  </svg>
)

interface ExpertiseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  glow: "blue" | "purple" | "green" | "red"
}

interface IconWrapperProps {
  children: React.ReactNode
  glow: "blue" | "purple" | "green" | "red"
}

const IconWrapper = ({ children, glow }: IconWrapperProps) => {
  const getColorClass = (glow: string) => {
    const colors: Record<string, string> = {
      blue: "text-[#A7C8FF]",
      purple: "text-[#C3A6FF]",
      green: "text-[#6BFF95]",
      red: "text-[#FF6B6B]"
    }
    return colors[glow] || colors.blue
  }

  return (
    <div
      className={`${getColorClass(
        glow
      )} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
    >
      {children}
    </div>
  )
}

const ExpertiseCard = ({
  icon,
  title,
  description,
  glow
}: ExpertiseCardProps) => (
  <Card glow={glow} className='group'>
    <div className='flex items-start justify-between mb-4'>
      <IconWrapper glow={glow}>{icon}</IconWrapper>
    </div>
    <Heading level='h3' className='mb-2'>
      {title}
    </Heading>
    <Text color='secondary' size='body-sm'>
      {description}
    </Text>
  </Card>
)

const EXPERTISE_CARDS: ExpertiseCardProps[] = [
  {
    icon: <SmartContractsIcon />,
    title: "Smart Contracts",
    description:
      "Solidity and Rust contract development with emphasis on security, gas optimization, and upgradeability patterns.",
    glow: "blue"
  },
  {
    icon: <DeFiIcon />,
    title: "DeFi Architect",
    description:
      "Advanced decentralized finance solutions including lending, yield farming, arbitrage, and token launches.",
    glow: "purple"
  },
  {
    icon: <SecurityIcon />,
    title: "Protocol Security",
    description:
      "Security audits and best practices implementation. Threat modeling and exploit mitigation for production systems.",
    glow: "green"
  },
  {
    icon: <InfrastructureIcon />,
    title: "Infrastructure",
    description:
      "System design and execution. Building production-grade infrastructure for institutional capital flows.",
    glow: "red"
  }
]

export const ExpertiseSection = () => {
  return (
    <section
      id='expertise'
      className='max-w-6xl mx-auto px-6 py-24 border-t border-[#2A2A2E]'
    >
      {/* Section Header */}
      <div className='mb-12'>
        <Text
          size='body-sm'
          color='secondary'
          className='text-[#A7C8FF] uppercase tracking-wider mb-2'
        >
          / CAPABILITIES
        </Text>
        <Heading level='h2' className='mb-4'>
          Specialised Expertise
        </Heading>
        <Text color='secondary' className='max-w-2xl'>
          Focusing on building production-grade DeFi infrastructure with
          emphasis on security, atomic execution, composability for integration
          and institutional-grade risk management.
        </Text>
      </div>

      {/* Expertise Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {EXPERTISE_CARDS.map((card) => (
          <ExpertiseCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
