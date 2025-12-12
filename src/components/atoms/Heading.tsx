import React, { createElement } from "react"
// Assuming you are using a clean template literal approach to avoid the 'tailwind-merge' error
// If you installed tailwind-merge, replace the class construction with twMerge(size, weight, colorMap[color], className)

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "display-lg" | "display-md" | "h1" | "h2" | "h3" | "h4"
  color?: "primary" | "accent-blue"
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
      size: "text-[3.5rem] md:text-[4.5rem]",
      weight: "font-bold"
    },
    "display-md": { size: "text-[2.5rem] md:text-[3rem]", weight: "font-bold" },
    h1: { size: "text-[2rem]", weight: "font-bold" },
    h2: { size: "text-[1.5rem]", weight: "font-semibold" },
    h3: { size: "text-[1.25rem]", weight: "font-semibold" },
    h4: { size: "text-[1.125rem]", weight: "font-medium" }
  }

  const colorMap = {
    primary: "text-[#FFFFFF]",
    "accent-blue": "text-[#A7C8FF]"
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
