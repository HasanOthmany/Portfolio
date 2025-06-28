import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hasan Othmany – Full-Stack Developer Portfolio",
  description: "A portfolio site by Hasan Othmany",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-clip">{children}</body>
    </html>
  )
}