import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Suspense } from "react" 
export const dynamic = "force-dynamic"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yu-Gi-Oh Duel Links Catalog",
  description: "Comprehensive catalog of Yu-Gi-Oh Duel Links cards, decks, and meta tier lists",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/iconD.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/iconD.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/iconD.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.jpg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Yu-Gi-Oh Duel Links",
  },
  formatDetection: {
    telephone: false,
  },

}


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0e27",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ... meta tags tetap sama ... */}
        <meta name="application-name" content="Yu-Gi-Oh Catalog" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="YGO Catalog" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        
        <Suspense fallback={<div className="h-16 bg-[#0a0e27]" />}>
           <Header />
        </Suspense>

        <div className="pt-20 md:pt-10 min-h-screen"> 
          {children}
        </div>
        
        <Analytics />
      </body>
    </html>
  )
}