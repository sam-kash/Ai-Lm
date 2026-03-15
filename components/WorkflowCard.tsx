import Link from "next/link"

export type Workflow = {
  id: string
  title: string
  model: string
  runs: number
  example_output_url?: string | null
}

export default function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <Link href={`/workflow/${workflow.id}`}>
      <div className="rounded-xl border hover:shadow-lg transition overflow-hidden bg-white">

        {workflow.example_output_url && (
          <img
            src={workflow.example_output_url}
            alt={workflow.title}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-4">

          <h2 className="font-semibold text-lg line-clamp-1">
            {workflow.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {workflow.model}
          </p>

          <div className="flex justify-between mt-3 text-sm text-gray-600">

            <span> {workflow.runs} runs</span>

            {workflow.title.includes("(Fork)") && (
              <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                Fork
              </span>
            )}

          </div>

        </div>

      </div>
    </Link>
  )
}
