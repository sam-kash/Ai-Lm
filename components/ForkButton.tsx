"use client"

import {supabase} from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ForkButton({workflow}: any){
    const router = useRouter()

    const forkWorkflow = async () => {
        const {data, error} = await supabase
        .from("workflows")
        .insert([
            {
                title: workflow.title + "(Fork)",
                prompt: workflow.prompt,
                model: workflow.model,
                variables: workflow.variables,
                runs: 0
            }
        ])
        .select()
        .single()

        if(error){
            //alert("Fork failed")
            console.log(error)
            alert(error.message)
            return
        }

        router.push(`/workflow/${data.id}`)
    }

    return (
        <button
        onClick={forkWorkflow}
        className="px-4 py-2 bg-gray-800 text-white rounded"
        >
            Fork Workflow
        </button>
    )
}