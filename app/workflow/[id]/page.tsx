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

      <div className="bg-white border rounded-lg p-6 mb-6">
        <h2 className="font-semibold mb-3">
          Prompt
        </h2>

        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {workflow.prompt}
        </pre>

        <div className="flex gap-3 mt-4">
          <CopyButton text={workflow.prompt} workflowId={workflow.id} />
          <ForkButton workflow={workflow} />
        </div>
      </div>

      {workflow.example_output_url && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Example Output</h2>

          <img
            src={workflow.example_output_url}
            alt="workflow result"
            className="rounded border"
          />
        </div>
      )}

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Variables</h2>
        <p>{workflow.variables?.join(", ")}</p>
      </div>

    </main>
  )
}
