import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-sans font-medium transition-all duration-300 ease-out cursor-pointer border rounded-lg"

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-base"
  }

  const variantStyles = {
    primary:
      "bg-[#A7C8FF] text-[#0C0C0E] border-[#A7C8FF] hover:shadow-[0_0_20px_rgba(167,200,255,0.3)] active:scale-95",
    secondary:
      "bg-[#1A1B1E] text-[#FFFFFF] border-[#2A2A2E] hover:border-[#A7C8FF]",
    outline:
      "bg-transparent text-[#FFFFFF] border-[#A7C8FF] hover:shadow-[0_0_20px_rgba(167,200,255,0.3)]",
    ghost:
      "bg-transparent text-[#8A8A8A] border-transparent hover:text-[#A7C8FF]"
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    />
  )
}
