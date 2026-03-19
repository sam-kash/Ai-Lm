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
      className="border border-gray-300 bg-white px-3 py-1 rounded text-sm text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}
