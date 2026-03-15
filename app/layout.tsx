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

        <nav className="bg-white border-b">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

            <Link href="/" className="font-bold text-xl">
               AI Workflows
            </Link>

            <div className="flex gap-6 text-sm font-medium">

              <Link
                href="/"
                className="hover:text-blue-600"
              >
                Explore
              </Link>

              <Link
                href="/upload"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Upload
              </Link>

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
