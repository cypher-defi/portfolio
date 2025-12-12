"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronLeft } from "lucide-react"
import { GitHubIcon } from "../icons"

interface NavItem {
  label: string
  href: string
}

interface DocsPageHeaderProps {
  protocolName: string
  protocolIcon: React.ReactNode
  githubLink?: string
  navItems?: NavItem[]
}

export const DocsPageHeader = ({
  protocolName,
  protocolIcon,
  githubLink = "#",
  navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "Testing", href: "#testing" }
  ]
}: DocsPageHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-[#0C0C0E]/95 border-b border-[#2A2A2E]'>
      <div className='mx-auto px-4 sm:px-6 py-4 flex items-center justify-between w-full'>
        {/* Left: Back Link (Desktop only) + Logo + Protocol Name */}
        <div className='flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0'>
          {/* Back Link - Desktop only */}
          <Link
            href='/'
            className='hidden lg:inline-flex items-center justify-center w-10 h-10 text-[#A7C8FF] hover:text-[#6BFF95] hover:bg-[#2A2A2E] rounded transition flex-shrink-0'
            title='Back to portfolio'
          >
            <ChevronLeft size={20} />
          </Link>

          {/* Logo */}
          <div className='text-[#A7C8FF] flex-shrink-0'>{protocolIcon}</div>

          {/* Protocol Name */}
          <span className='text-[#A7C8FF] font-bold text-sm sm:text-base lg:text-lg truncate'>
            {protocolName}
          </span>
        </div>

        {/* Middle: Desktop Navigation */}
        <nav className='hidden lg:flex gap-6 mx-6'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='text-[#8A8A8A] hover:text-[#A7C8FF] transition text-sm'
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: GitHub Icon + Burger Menu */}
        <div className='flex items-center gap-2 sm:gap-3'>
          {/* GitHub Icon - Always visible */}
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition p-2 hover:bg-[#2A2A2E] rounded'
            aria-label='GitHub'
          >
            <GitHubIcon />
          </a>

          {/* Mobile Burger Menu - Show only on mobile and tablet */}
          <button
            onClick={toggleMenu}
            className='lg:hidden flex items-center justify-center w-10 h-10 text-[#A7C8FF] hover:bg-[#2A2A2E] rounded transition'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Show only when isMenuOpen is true */}
      {isMenuOpen && (
        <div className='lg:hidden bg-[#0C0C0E] border-t border-[#2A2A2E]'>
          <nav className='px-4 sm:px-6 py-4 space-y-2'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className='block text-[#8A8A8A] hover:text-[#A7C8FF] transition py-2 px-2 hover:bg-[#2A2A2E] rounded'
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
