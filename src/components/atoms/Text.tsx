import React from "react"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "body" | "body-sm"
  color?: "primary" | "secondary"
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  size = "body",
  color = "primary",
  className = "",
  children,
  ...props
}) => {
  const sizeMap = {
    body: "text-[1rem] leading-[1.5]",
    "body-sm": "text-[0.875rem] leading-[1.6]"
  }

  const colorMap = {
    primary: "text-[#FFFFFF]",
    secondary: "text-[#8A8A8A]"
  }

  const baseClassName = [sizeMap[size], colorMap[color], className]
    .filter(Boolean)
    .join(" ")

  return (
    <p className={baseClassName} {...props}>
      {children}
    </p>
  )
}
