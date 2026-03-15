"use client"

import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("dark")

    if (saved === "true") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("dark", "false")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("dark", "true")
    }

    setDark(!dark)
  }

  return (
    <button
      onClick={toggle}
      className="border px-3 py-1 rounded text-sm"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
