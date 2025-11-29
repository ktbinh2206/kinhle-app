import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kính Lễ - Lịch Việt & Lễ Hội Truyền Thống",
  description:
    "Khám phá lịch âm Việt Nam, lễ hội truyền thống và phong tục tập quán. Tìm hiểu về Tết Nguyên Đán, Tết Trung Thu và các ngày lễ quan trọng.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
