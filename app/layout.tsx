import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <nav className="border-b bg-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

            <Link href="/" className="font-bold text-xl">
              AI Workflows
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/">Explore</Link>
              <Link href="/upload">Upload</Link>
            </div>

          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>

      </body>
    </html>
  )
}
