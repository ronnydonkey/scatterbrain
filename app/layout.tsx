import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Scatterbrain AI - Your thoughts, organized",
  description: "Capture anything, anywhere. Scatterbrain turns it into something real.",
  generator: "v0.dev",
  metadataBase: new URL("https://scatterbrainai.com"),
  openGraph: {
    title: "Scatterbrain AI - Your thoughts, organized",
    description: "Capture anything, anywhere. Scatterbrain turns it into something real.",
    url: "https://scatterbrainai.com",
    siteName: "Scatterbrain AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scatterbrain AI - Your thoughts, organized",
    description: "Capture anything, anywhere. Scatterbrain turns it into something real.",
    creator: "@dreamberg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
