import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
})

export const metadata: Metadata = {
  title: "Happy 1st Anniversary ❤️",
  description: "Celebrating our beautiful journey together - 2 Desember 2024",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${cormorant.className} ${inter.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
