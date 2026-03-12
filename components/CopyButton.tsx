"use client"

export default function CopyButton({ text }: { text: string }) {

  const copy = async () => {
    await navigator.clipboard.writeText(text)
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