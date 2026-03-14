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

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full"
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