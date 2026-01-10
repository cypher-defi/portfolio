import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

// Load Inter font with all weights and define a CSS variable
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Enrique | Protocol Engineer",
  description:
    "Institutional-grade DeFi infrastructure & Smart Contract Architecture.",
  icons: {
    icon: "/favicon.svg"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.variable}>
      <head>
        {/* Preload critical assets for LCP optimization */}
        <link rel='preload' href='/noise.svg' as='image' type='image/svg+xml' />
      </head>
      <body className='bg-primary selection:bg-white/10'>
        {/* Noise grain layer */}
        <div className='noise-bg' />

        {/* Page content */}
        {children}
      </body>
    </html>
  )
}
