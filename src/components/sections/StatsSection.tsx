import { Text } from "@/components/atoms/Text"

interface StatItem {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: StatItem[]
}

export const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className='w-full bg-[#0C0C0E]'>
      <div className='max-w-6xl mx-auto px-6 py-12 mt-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-600'>
          {stats.map((stat) => (
            <div key={stat.label} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-[#6BFF95]'>
                {stat.value}
              </div>
              <Text
                size='body-sm'
                color='secondary'
                className='text-base md:text-lg mt-2'
              >
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
