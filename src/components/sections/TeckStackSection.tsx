interface BadgeGroupProps {
  badges: string[]
}

const BadgeGroup = ({ badges }: BadgeGroupProps) => {
  // Group badges into rows of 4
  const rows = []
  for (let i = 0; i < badges.length; i += 4) {
    rows.push(badges.slice(i, i + 4))
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-2 flex-wrap ${
            rowIndex === 0 ? "pt-6" : "pt-3"
          } animate-fade-in-up ${
            rowIndex === 0
              ? "delay-300"
              : rowIndex === 1
              ? "delay-400"
              : "delay-500"
          }`}
        >
          {row.map((badge) => (
            <Badge key={badge} label={badge} />
          ))}
        </div>
      ))}
    </>
  )
}

interface BadgeProps {
  label: string
}

const Badge = ({ label }: BadgeProps) => {
  const getBadgeStyles = (label: string) => {
    const lowerLabel = label.toLowerCase()

    if (lowerLabel === "solidity") {
      return {
        bg: "rgba(167,200,255,0.1)",
        border: "rgba(167,200,255,0.3)",
        text: "#A7C8FF"
      }
    }
    if (lowerLabel === "rust" || lowerLabel === "web3") {
      return {
        bg: "rgba(255,149,0,0.1)",
        border: "rgba(255,149,0,0.3)",
        text: "#FF9500"
      }
    }
    if (lowerLabel === "typescript") {
      return {
        bg: "rgba(49,120,198,0.1)",
        border: "rgba(49,120,198,0.3)",
        text: "#3178C6"
      }
    }
    if (lowerLabel === "foundry") {
      return {
        bg: "rgba(255,107,107,0.1)",
        border: "rgba(255,107,107,0.3)",
        text: "#FF6B6B"
      }
    }
    if (
      lowerLabel === "testing" ||
      lowerLabel === "viem" ||
      lowerLabel === "wagmi"
    ) {
      return {
        bg: "rgba(198,255,0,0.1)",
        border: "rgba(198,255,0,0.3)",
        text: "#C6FF00"
      }
    }
    if (lowerLabel === "audits") {
      return {
        bg: "rgba(195,166,255,0.1)",
        border: "rgba(195,166,255,0.3)",
        text: "#C3A6FF"
      }
    }

    // Default for unknown badges
    return {
      bg: "rgba(0,0,0,0.3)",
      border: "rgba(255,255,255,0.3)",
      text: "#FFFFFF"
    }
  }

  const styles = getBadgeStyles(label)

  return (
    <span
      className='px-3 py-1 rounded-full text-sm min-w-fit font-medium'
      style={{
        backgroundColor: styles.bg,
        borderColor: styles.border,
        color: styles.text,
        border: `1px solid ${styles.border}`
      }}
    >
      {label}
    </span>
  )
}

interface TechStackSectionProps {
  badges: string[]
}

export const TechStackSection = ({ badges }: TechStackSectionProps) => {
  return (
    <section className='pt-16'>
      <BadgeGroup badges={badges} />
    </section>
  )
}
