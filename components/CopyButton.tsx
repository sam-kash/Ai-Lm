"use client"

import { supabase } from "@/lib/supabase"

export default function CopyButton({
  text,
  workflowId,
}: {
  text: string
  workflowId: string
}) {

  const copy = async () => {

    await navigator.clipboard.writeText(text)

    // increase run count
    await supabase.rpc("increment_runs", {
      workflow_id: workflowId
    })

    alert("Prompt copied")
  }

  return (
    <button
      onClick={copy}
      className="px-4 py-2 bg-black text-white rounded"
    >
      Copy Prompt
    </button>
  )
}
