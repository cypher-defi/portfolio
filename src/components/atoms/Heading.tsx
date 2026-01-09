import React, { createElement } from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "display-lg" | "display-md" | "h1" | "h2" | "h3" | "h4"
  color?:
    | "primary"
    | "accent-blue"
    | "accent-green"
    | "accent-red"
    | "accent-purple"
  className?: string
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  level = "h1",
  color = "primary",
  className = "",
  children,
  ...props
}) => {
  const styleMap = {
    "display-lg": {
      size: "text-[3rem] md:text-[4rem] leading-[1.1] tracking-[-0.04em]",
      weight: "font-extralight"
    },
    "display-md": {
      size: "text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.02em]",
      weight: "font-extralight"
    },
    h1: {
      size: "text-[1.75rem] md:text-[2rem] tracking-tight",
      weight: "font-light"
    },
    h2: {
      size: "text-[1.25rem] md:text-[1.5rem] tracking-wide uppercase font-light",
      weight: "font-light"
    },
    h3: {
      size: "text-[1rem] tracking-[0.2em] uppercase font-light",
      weight: "font-light"
    },
    h4: {
      size: "text-[0.875rem] tracking-[0.1em] uppercase",
      weight: "font-medium"
    }
  }

  const colorMap = {
    primary: "text-[var(--color-text-primary)]",
    "accent-blue": "text-[var(--color-accent-blue)]",
    "accent-green": "text-[var(--color-accent-green)]",
    "accent-red": "text-[var(--color-accent-red)]",
    "accent-purple": "text-[var(--color-accent-purple)]"
  }

  const { size, weight } = styleMap[level]

  let Tag: "h1" | "h2" | "h3" | "h4" =
    level === "h2" ? "h2" : level === "h3" ? "h3" : level === "h4" ? "h4" : "h1" // default for display-lg, display-md, and h1

  const finalClassName =
    `${size} ${weight} ${colorMap[color]} ${className}`.trim()

  return createElement(Tag, { className: finalClassName, ...props }, children)
}
