export type Workflow = {
  id: string
  title: string
  model: string
  runs: number
}

export default function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow">
      <h2 className="text-lg font-semibold">{workflow.title}</h2>
      <p className="text-sm text-gray-500">Model: {workflow.model}</p>
      <p className="text-sm">Runs: {workflow.runs}</p>
    </div>
  )
}

