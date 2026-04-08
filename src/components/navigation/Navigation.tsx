"use client"

import { Logo } from "@/components/atoms/Logo"
import { useState, useEffect } from "react"
import { Menu, X, ArrowLeft } from "lucide-react"
import { GitHubIcon } from "@/components/icons"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  variant?: "home" | "docs"
  protocolName?: string
  protocolIcon?: React.ReactNode
  githubLink?: string
  liveUrl?: string
  navItems?: NavItem[]
}

export const Navigation: React.FC<NavigationProps> = ({
  variant = "home",
  protocolName,
  protocolIcon,
  githubLink,
  liveUrl,
  navItems = []
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.substring(2)

      if (pathname === "/") {
        // Same page - just scroll
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ block: "start" })
        }
      } else {
        // Different page - navigate then scroll
        router.push("/")
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }
  }

  // Track scroll position to adjust the "floating" intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Default nav items for home variant
  const homeNavItems: NavItem[] = [
    { label: "Work", href: "/#work" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Contact", href: "/#contact" }
  ]

  const displayNavItems = variant === "docs" ? navItems : homeNavItems

  const socialLinks = [
    {
      href: "https://github.com/Enricrypto",
      label: "GitHub",
      icon: <Icon icon='simple-icons:github' className='w-4 h-4' />
    },
    {
      href: "https://x.com/Enricrypto",
      label: "X",
      icon: <Icon icon='simple-icons:x' className='w-4 h-4' />
    },
    {
      href: "https://linkedin.com/in/enrique-ibarra",
      label: "LinkedIn",
      icon: <Icon icon='simple-icons:linkedin' className='w-4 h-4' />
    }
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-100 flex justify-center p-6 pointer-events-none'>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          flex items-center justify-between w-full max-w-5xl px-6 py-3
          transition-all duration-700 ease-in-out
          rounded-full border
          ${
            isScrolled
              ? "bg-[#121214]/90 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "bg-transparent border-transparent"
          }
        `}
      >
        {/* Left Side */}
        <div className='flex items-center gap-3 shrink-0'>
          {variant === "docs" ? (
            <>
              {/* Back button for docs */}
              <Link
                href='/'
                className='hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#E5E5E5]/70 hover:text-white transition-all duration-300'
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </Link>
              {/* Protocol name and icon */}
              <div className='flex items-center gap-2'>
                {protocolIcon && <div className='w-6 h-6'>{protocolIcon}</div>}
                <span className='text-[#E5E5E5] font-light text-sm tracking-[0.2em] uppercase'>
                  {protocolName}
                </span>
              </div>
            </>
          ) : (
            <>
              <Logo />
              <span className='text-[#E5E5E5] font-light text-sm tracking-[0.4em] uppercase'>
                CYPHER
              </span>
            </>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {displayNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className='text-[10px] uppercase tracking-[0.2em] text-[#E5E5E5]/50 hover:text-white transition-all duration-300'
            >
              {item.label}
            </Link>
          ))}
          {variant === "home" && (
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector("#contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className='px-5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] bg-[#4353ff] hover:bg-[#5a6aff] transition-all duration-300 text-white'
            >
              Connect
            </a>
          )}
          {/* Social Links */}
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.label}
              className='flex items-center justify-center w-8 h-8 text-[#A8A8A8] hover:text-[#A7C8FF] transition-all duration-300'
            >
              {social.icon}
            </a>
          ))}

          {variant === "docs" && githubLink && (
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 transition-all text-white'
            >
              <div className='w-3.5 h-3.5'>
                <GitHubIcon />
              </div>
              <span>Code</span>
            </a>
          )}
          {variant === "docs" && liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 transition-all text-white'
            >
              <Icon icon='solar:monitor-smartphone-bold' className='w-3.5 h-3.5' />
              <span>Live App</span>
            </a>
          )}
        </div>

        {/* Mobile Burger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden flex items-center justify-center w-10 h-10 text-[#E5E5E5] hover:bg-white/5 rounded-full transition'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='fixed top-25 inset-x-6 md:hidden bg-[#121214]/95 border border-white/10 rounded-3xl overflow-hidden z-101 pointer-events-auto'
          >
            <div className='flex flex-col p-8 space-y-6 items-center'>
              {variant === "docs" && (
                <Link
                  href='/'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#E5E5E5]/70 hover:text-white transition'
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </Link>
              )}
              {displayNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setIsMenuOpen(false)
                    handleNavClick(e, item.href)
                  }}
                  className='text-sm uppercase tracking-[0.3em] text-[#E5E5E5]/70 hover:text-white transition'
                >
                  {item.label}
                </Link>
              ))}
              {variant === "docs" && githubLink && (
                <a
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#E5E5E5]/70 hover:text-white transition'
                >
                  <div className='w-4 h-4'>
                    <GitHubIcon />
                  </div>
                  <span>Code</span>
                </a>
              )}
              {variant === "docs" && liveUrl && (
                <a
                  href={liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#E5E5E5]/70 hover:text-white transition'
                >
                  <Icon icon='solar:monitor-smartphone-bold' className='w-4 h-4' />
                  <span>Live App</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
