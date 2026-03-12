import WorkflowForm from "@/components/WorkflowForm"

export default function UploadPage(){
    return (
        <main className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl front-bold mb-6">
                Upload Workflow
            </h1>
            <WorkflowForm />
        </main>
    )
}