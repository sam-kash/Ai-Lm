"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function WorkflowForm() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [prompt, setPrompt] = useState("")
  const [model, setModel] = useState("")
  const [variables, setVariables] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const variableArray = variables
      .split(",")
      .map(v => v.trim())

    const { error } = await supabase
      .from("workflows")
      .insert([
        {
          title,
          prompt,
          model,
          variables: variableArray
        }
      ])

    if (error) {
      alert("Error uploading workflow")
      return
    }

    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        placeholder="Workflow Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        placeholder="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 rounded"
        rows={4}
        required
      />

      <input
        type="text"
        placeholder="Model (ex: Midjourney)"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="Variables (comma separated)"
        value={variables}
        onChange={(e) => setVariables(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Upload Workflow
      </button>

    </form>
  )
}