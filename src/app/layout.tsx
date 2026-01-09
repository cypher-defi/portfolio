import type { Metadata } from "next"
import "./globals.css"
import { MercuryCursor } from "@/components/ui/MercuryCursor"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Enrique | Protocol Engineer",
  description:
    "Institutional-grade DeFi infrastructure & Smart Contract Architecture.",
  icons: {
    // UPDATED: Silver/Mercury Favicon to match the greyish aesthetic
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 280'%3E%3Cdefs%3E%3ClinearGradient id='tf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23E5E5E5' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%23A0A0A0' stop-opacity='0.85'/%3E%3C/linearGradient%3E%3ClinearGradient id='rf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A0A0A0' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%23707070' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='lf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23C0C0C0' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%23808080' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='60,80 140,20 220,80 140,140' fill='url(%23tf)' stroke='%23FFFFFF' stroke-width='2' stroke-linejoin='round'/%3E%3Cpolygon points='220,80 220,200 140,260 140,140' fill='url(%23rf)' stroke='%23FFFFFF' stroke-width='2' stroke-linejoin='round'/%3E%3Cpolygon points='60,80 60,200 140,260 140,140' fill='url(%23lf)' stroke='%23FFFFFF' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* Preconnect to external domains for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Optimized font loading with font-display: swap for instant text rendering */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />

        {/* Preload critical assets for LCP optimization */}
        <link rel="preload" href="/noise.svg" as="image" type="image/svg+xml" />
      </head>
      {/* 1. MercuryCursor is placed here to stay on top of all pages.
          2. Updated body bg to match our new charcoal grey.
          3. Added cursor-none to hide the default pointer.
      */}
      <body className='bg-[#121214] selection:bg-white/10 cursor-none'>
        <Suspense fallback={null}>
          <MercuryCursor />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
