import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Enrique | Blockchain Developer",
  description: "Smart contract architect & DeFi builder.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 280'%3E%3Cdefs%3E%3ClinearGradient id='tf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A7C8FF' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%23BFD9FF' stop-opacity='0.85'/%3E%3C/linearGradient%3E%3ClinearGradient id='rf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A7C8FF' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%238FB0FF' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='lf' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%239BBBFF' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%237FA0FF' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='60,80 140,20 220,80 140,140' fill='url(%23tf)' stroke='%23A7C8FF' stroke-width='3' stroke-linejoin='round'/%3E%3Cpolygon points='220,80 220,200 140,260 140,140' fill='url(%23rf)' stroke='%23A7C8FF' stroke-width='3' stroke-linejoin='round'/%3E%3Cpolygon points='60,80 60,200 140,260 140,140' fill='url(%23lf)' stroke='%23A7C8FF' stroke-width='3' stroke-linejoin='round'/%3E%3C/svg%3E"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        {/* Google Fonts */}
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='bg-[#0C0C0E]'>{children}</body>
    </html>
  )
}
