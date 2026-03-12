import type { ReactNode } from "react"

export const metadata = {
  title: "AI Workflows",
  description: "Explore saved AI workflows.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
