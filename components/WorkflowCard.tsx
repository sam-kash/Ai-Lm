import Link from "next/link"

export type Workflow = {
  id: string
  title: string
  model: string
  runs: number
  example_output_url?:string
}

export default function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <Link href={`/workflow/${workflow.id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow cursor-pointer">

        {workflow.example_output_url && (
          <img
            src={workflow.example_output_url}
            alt={workflow.title}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-4">
          <h2 className="text-lg font-semibold">
            {workflow.title}
          </h2>

          <p className="text-sm text-gray-500">
            Model: {workflow.model}
          </p>

          <p className="text-sm">
            Runs: {workflow.runs}
          </p>
        </div>

      </div>
    </Link>
  )
}
