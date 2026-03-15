import Link from "next/link"
import DarkModeToggle from "@/components/DarkModeToggle"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">

        <nav className="bg-white border-b dark:bg-gray-950 dark:border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

            <Link href="/" className="font-bold text-xl text-gray-900 dark:text-gray-100">
               AI Workflows
            </Link>

            <div className="flex gap-6 text-sm font-medium items-center">

              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                Explore
              </Link>

              <div className="flex gap-4 items-center">
                <DarkModeToggle />

                <Link
                  href="/upload"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Upload
                </Link>
              </div>

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
