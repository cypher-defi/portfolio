"use client"

import { Logo } from "@/components/atoms/Logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md bg-[#0C0C0E]/80 border-b border-[#2A2A2E]'>
      <div className='mx-auto px-6 py-4 flex items-center justify-between w-full'>
        {/* Logo - Left */}
        <div className='flex items-center gap-3 flex-shrink-0'>
          <Logo />
          <span className='text-[#A7C8FF] font-bold text-lg sm:inline'>
            CYPHER
          </span>
        </div>

        {/* Desktop Navigation - Hide on mobile */}
        <nav className='hidden md:flex gap-6'>
          <a
            href='#work'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
          >
            Work
          </a>
          <a
            href='#expertise'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
          >
            Expertise
          </a>
          <a
            href='#contact'
            className='text-[#8A8A8A] hover:text-[#A7C8FF] transition'
          >
            Contact
          </a>
        </nav>

        {/* Mobile Burger Menu - Show on mobile */}
        <button
          onClick={toggleMenu}
          className='md:hidden flex items-center justify-center w-10 h-10 text-[#A7C8FF] hover:bg-[#2A2A2E] rounded transition'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Show when isMenuOpen is true */}
      {isMenuOpen && (
        <div className='md:hidden bg-[#0C0C0E] border-t border-[#2A2A2E]'>
          <div className='px-6 py-4 space-y-3'>
            <a
              href='#work'
              onClick={closeMenu}
              className='block text-[#8A8A8A] hover:text-[#A7C8FF] transition py-2'
            >
              Work
            </a>
            <a
              href='#expertise'
              onClick={closeMenu}
              className='block text-[#8A8A8A] hover:text-[#A7C8FF] transition py-2'
            >
              Expertise
            </a>
            <a
              href='#contact'
              onClick={closeMenu}
              className='block text-[#8A8A8A] hover:text-[#A7C8FF] transition py-2'
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
