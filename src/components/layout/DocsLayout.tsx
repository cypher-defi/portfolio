"use client"

import React from "react"
import { Footer } from "@/components/navigation/Footer"

interface DocsLayoutProps {
  children: React.ReactNode
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  return (
    <main className='bg-[#121214] text-white min-h-screen relative'>
      {/* Grain texture overlay */}
      <div className='fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url("/noise.png")]' />

      {/* Content */}
      <div className='relative z-10'>
        <div className='max-w-6xl mx-auto px-6 py-16 md:py-24'>
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
