import { supabase } from "@/lib/supabase"
import CopyButton from "@/components/CopyButton"
import ForkButton from "@/components/ForkButton"
type Props = {
  params: Promise<{ id: string }>
}

export default async function WorkflowPage({ params }: Props) {
  const { id } = await params

  const { data: workflow } = await supabase
    .from("workflows")
    .select("*")
    .eq("id", id)
    .single()

  if (!workflow) {
    return <div className="p-8">Workflow not found</div>
  }

  return (
    <main className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-4">
        {workflow.title}
      </h1>

      <p className="text-gray-500 mb-4">
        Model: {workflow.model}
      </p>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Prompt</h2>

        <pre className="bg-gray-100 p-4 rounded">
          {workflow.prompt}
        </pre>


        <div className="mt-3">
          <CopyButton text={workflow.prompt} />
        </div>

      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Variables</h2>
        <p>{workflow.variables?.join(", ")}</p>
      </div>

      <div className="flex gap-3 mt-3">
      <CopyButton text={workflow.prompt} />
      <ForkButton workflow={workflow} />
      </div>

    </main>
  )
}
