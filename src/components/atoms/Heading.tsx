import React, { createElement } from "react"
// Assuming you are using a clean template literal approach to avoid the 'tailwind-merge' error
// If you installed tailwind-merge, replace the class construction with twMerge(size, weight, colorMap[color], className)

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "display-lg" | "display-md" | "h1" | "h2" | "h3" | "h4"
  color?: "primary" | "accent-blue" | "accent-green" | "accent-red" | "accent-purple"
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
      weight: "font-extralight" // Changed from font-bold
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
      size: "text-[1rem] tracking-[0.2em] uppercase font-light text-white/80",
      weight: "font-light"
    },
    h4: {
      size: "text-[0.875rem] tracking-[0.1em] uppercase",
      weight: "font-medium"
    }
  }

  const colorMap = {
    primary: "text-[#E5E5E5]",
    "accent-blue": "text-[#A7C8FF]",
    "accent-green": "text-[#6BFF95]",
    "accent-red": "text-[#FF6B6B]",
    "accent-purple": "text-[#C3A6FF]"
  }

  const { size, weight } = styleMap[level]

  // 1. Determine the actual HTML tag name string
  let Tag: "h1" | "h2" | "h3" | "h4"

  if (level === "display-lg" || level === "display-md" || level === "h1") {
    Tag = "h1"
  } else if (level === "h2") {
    Tag = "h2"
  } else if (level === "h3") {
    Tag = "h3"
  } else if (level === "h4") {
    Tag = "h4"
  } else {
    Tag = "h1"
  }

  // 2. Construct the final class string. Using a simple template literal and .trim().
  const finalClassName =
    `${size} ${weight} ${colorMap[color]} ${className}`.trim()

  // 3. FIX: Use React.createElement to dynamically create the tag.
  // We pass the Tag string, the combined props (including className and spread props),
  // and the children as the last argument. This explicitly tells TypeScript
  // how to construct the element with all the expected props.

  return createElement(
    Tag,
    {
      className: finalClassName,
      ...props
    },
    children
  )
}
