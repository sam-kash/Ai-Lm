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
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    let imageUrl = null

    if (image) {
      const fileName = `${Date.now()}-${image.name}`

      const { data, error } = await supabase.storage
        .from("workflow-images")
        .upload(fileName, image)

      if (error) {
        //alert("Image upload failed")
        console.log(error)
        alert(error?.message)
        return
      }

      const { data: publicUrl } = supabase
        .storage
        .from("workflow-images")
        .getPublicUrl(fileName)

      imageUrl = publicUrl.publicUrl
    }

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
          variables: variableArray,
          example_output_url: imageUrl
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
        className="w-full border p-2 rounded bg-white text-gray-900 placeholder:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
        required
      />

      <textarea
        placeholder="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 rounded bg-white text-gray-900 placeholder:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
        rows={4}
        required
      />

      <input
        type="text"
        placeholder="Model (ex: Midjourney)"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="w-full border p-2 rounded bg-white text-gray-900 placeholder:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
        required
      />

      <input
        type="text"
        placeholder="Variables (comma separated)"
        value={variables}
        onChange={(e) => setVariables(e.target.value)}
        className="w-full border p-2 rounded bg-white text-gray-900 placeholder:text-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full text-gray-700 dark:text-gray-300 file:mr-4 file:rounded file:border-0 file:bg-gray-200 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-300 dark:file:bg-gray-700 dark:file:text-gray-100 dark:hover:file:bg-gray-600"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Upload Workflow
      </button>

    </form>
  )
}
