import { supabase } from "@/lib/supabase"
import WorkflowCard, { type Workflow } from "@/components/WorkflowCard"

export default async function Home() {
  const { data: workflows, error } = await supabase
    .from("workflows")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  const workflowList = (workflows ?? []) as Workflow[]

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Explore Workflows
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {workflowList.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </main>
  )
}
