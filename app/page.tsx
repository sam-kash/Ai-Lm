import { supabase } from "@/lib/supabase"
import WorkflowCard, { type Workflow } from "@/components/WorkflowCard"

export default async function Home() {
  const { data: workflows, error } = await supabase
    .from("workflows")
    .select("*")
    .order("runs", { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  const workflowList = (workflows ?? []) as Workflow[]

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Discover AI Workflows
        </h1>

        <p className="text-gray-600 mb-6 max-w-xl">
          Share, discover and fork powerful AI prompts and workflows.
        </p>

        <input
          placeholder="Search workflows..."
          className="w-full md:w-96 border rounded-lg p-3"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {workflowList.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </main>
  )
}
