import type { Metadata } from "next"
import "./globals.css"
import { Inter, Roboto_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter"
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: "Enrique | Full-Stack Engineer",
  description:
    "Backend-focused full-stack engineer building production-grade systems across cloud, mobile, and blockchain environments.",
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
    <html lang='en' className={`${inter.variable} ${robotoMono.variable}`}>
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
