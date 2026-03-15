import WorkflowForm from "@/components/WorkflowForm"

export default function UploadPage(){
    return (
        <main className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Upload Workflow
            </h1>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
                <WorkflowForm />
            </div>
        </main>
    )
}
