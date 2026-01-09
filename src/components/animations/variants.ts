import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05, y: -5 },
  transition: { duration: 0.3, ease: "easeOut" }
}

export const cardHover = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  whileHover: { scale: 1.05, y: -5 },
  transition: { duration: 0.5, ease: "easeOut" }
}

// Animation configuration presets
export const animationConfig = {
  fast: { duration: 0.3 },
  normal: { duration: 0.6 },
  slow: { duration: 0.9 },
  easeOut: { ease: "easeOut" },
  spring: { type: "spring", stiffness: 100, damping: 10 }
}
