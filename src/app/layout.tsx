import Navbar from "@/app/components/navbar"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

