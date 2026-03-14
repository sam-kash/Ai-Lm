import type { ReactNode } from "react"
import Link from "next/link"
import "./globals.css"


export const metadata = {
  title: "AI Workflows",
  description: "Explore saved AI workflows.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <nav className="border-b p-4">
          <div className="max-w-4xl mx-auto flex justify-between">

            <Link href="/" className="font-bold">
              AI Workflows
            </Link>

            <div className="space-x-4">
              <Link href="/">Explore</Link>
              <Link href="/upload">Upload</Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}