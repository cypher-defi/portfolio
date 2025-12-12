import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Enrique | Blockchain Developer",
  description: "Smart contract architect & DeFi builder.",
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
