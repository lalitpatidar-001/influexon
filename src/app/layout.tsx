import Navbar from "@/app/components/navbar"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React
import { Providers } from "./providers"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

