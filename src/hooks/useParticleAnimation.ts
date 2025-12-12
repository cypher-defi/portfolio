import { useEffect } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  life: number
  maxLife: number
}

interface CanvasConfig {
  particleCount: number
  connectionDistance: number
  connectionOpacity: number
  maxSpeed: number
  driftAmount: number
  motionBlurOpacity: number
}

const DEFAULT_CONFIG: CanvasConfig = {
  particleCount: 60,
  connectionDistance: 150,
  connectionOpacity: 0.4,
  maxSpeed: 1,
  driftAmount: 0.05,
  motionBlurOpacity: 0.15
}

const PARTICLE_COLORS = [
  "rgba(167, 200, 255, ", // blue
  "rgba(107, 255, 149, ", // green
  "rgba(195, 166, 255, ", // purple
  "rgba(255, 207, 163, " // orange
]

const getRandomColor = (): string => {
  return PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
}

const initializeParticles = (
  width: number,
  height: number,
  count: number
): Particle[] => {
  const particles: Particle[] = []
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 0.8,
      color: getRandomColor(),
      life: Math.random() * 0.6 + 0.4,
      maxLife: 1
    })
  }
  return particles
}

const updateParticles = (
  particles: Particle[],
  width: number,
  height: number,
  config: CanvasConfig
): void => {
  particles.forEach((particle) => {
    particle.x += particle.vx
    particle.y += particle.vy

    // Wrap around edges
    if (particle.x < 0) particle.x = width
    if (particle.x > width) particle.x = 0
    if (particle.y < 0) particle.y = height
    if (particle.y > height) particle.y = 0

    // Drift
    particle.vx += (Math.random() - 0.5) * config.driftAmount
    particle.vy += (Math.random() - 0.5) * config.driftAmount

    // Speed limiting
    const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2)
    if (speed > config.maxSpeed) {
      particle.vx = (particle.vx / speed) * config.maxSpeed
      particle.vy = (particle.vy / speed) * config.maxSpeed
    }
  })
}

const drawConnections = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  config: CanvasConfig
): void => {
  particles.forEach((particle, i) => {
    for (let j = i + 1; j < particles.length; j++) {
      const other = particles[j]
      const dx = particle.x - other.x
      const dy = particle.y - other.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < config.connectionDistance) {
        const opacity =
          (1 - distance / config.connectionDistance) * config.connectionOpacity
        const baseColor = particle.color.substring(
          0,
          particle.color.lastIndexOf(",")
        )

        ctx.strokeStyle = `${baseColor}${opacity})`
        ctx.lineWidth = 0.8
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(other.x, other.y)
        ctx.stroke()
      }
    }
  })
}

const drawGlowAndParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[]
): void => {
  particles.forEach((particle) => {
    // Glow effect
    const glowGradient = ctx.createRadialGradient(
      particle.x,
      particle.y,
      0,
      particle.x,
      particle.y,
      particle.radius * 3
    )
    const colorWithoutParen = particle.color.substring(
      0,
      particle.color.lastIndexOf(",")
    )
    glowGradient.addColorStop(0, `${colorWithoutParen}${particle.life * 0.6})`)
    glowGradient.addColorStop(1, `${colorWithoutParen}0)`)

    ctx.fillStyle = glowGradient
    ctx.fillRect(
      particle.x - particle.radius * 3,
      particle.y - particle.radius * 3,
      particle.radius * 6,
      particle.radius * 6
    )

    // Core particle
    ctx.fillStyle = `${particle.color}${particle.life})`
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx.fill()
  })
}

export const useParticleAnimation = (
  canvasId: string,
  config: Partial<CanvasConfig> = {}
): void => {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const finalConfig = { ...DEFAULT_CONFIG, ...config }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()

    const particles = initializeParticles(
      canvas.width,
      canvas.height,
      Math.min(finalConfig.particleCount, Math.floor(canvas.width / 15))
    )

    const animate = () => {
      // Motion blur
      ctx.fillStyle = `rgba(12, 12, 14, ${finalConfig.motionBlurOpacity})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw
      updateParticles(particles, canvas.width, canvas.height, finalConfig)
      drawConnections(ctx, particles, finalConfig)
      drawGlowAndParticles(ctx, particles)

      requestAnimationFrame(animate)
    }

    const resizeHandler = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", resizeHandler)
    animate()

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [canvasId, config])
}
