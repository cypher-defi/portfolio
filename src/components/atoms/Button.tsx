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
    "font-sans font-medium transition-all duration-300 ease-out rounded-lg cursor-pointer border focus:outline-none focus:ring-2 focus:ring-offset-2"

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-base"
  }

  const variantStyles = {
    primary: `
      bg-[var(--color-accent-primary)]
      text-white
      border-[var(--color-accent-primary)]
      hover:bg-[var(--color-accent-primary-hover)]
      hover:border-[var(--color-accent-primary-hover)]
      active:scale-95
    `,
    secondary: `
      bg-[var(--color-bg-card)]
      text-[var(--color-text-primary)]
      border-[var(--color-border)]
      hover:border-[var(--color-accent-blue)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-text-primary)]
      border-[var(--color-accent-blue)]
      hover:shadow-[0_0_20px_rgba(167,200,255,0.3)]
    `,
    ghost: `
      bg-transparent
      text-[var(--color-text-secondary)]
      border-transparent
      hover:text-[var(--color-accent-blue)]
    `
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
