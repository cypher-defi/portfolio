import React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined"
  glow?: "blue" | "green" | "purple" | "red" | false
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  glow = "blue",
  className = "",
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#1A1B1E] border border-[#2A2A2E]",
    outlined: "bg-transparent border border-[#2A2A2E]"
  }

  const glowMap = {
    blue: "hover:shadow-[0_0_20px_rgba(167,200,255,0.3)] hover:border-[rgba(167,200,255,0.5)]",
    green:
      "hover:shadow-[0_0_20px_rgba(107,255,149,0.3)] hover:border-[rgba(107,255,149,0.5)]",
    purple:
      "hover:shadow-[0_0_20px_rgba(195,166,255,0.3)] hover:border-[rgba(195,166,255,0.5)]",
    red: "hover:shadow-[0_0_20px_rgba(255,107,107,0.3)] hover:border-[rgba(255,107,107,0.5)]",
    false: ""
  }

  return (
    <div
      className={`
        rounded-xl p-6
        transition-all duration-300
        ${variantStyles[variant]}
        ${glow ? glowMap[glow] : ""}
        ${className}
      `}
      {...props}
    />
  )
}
