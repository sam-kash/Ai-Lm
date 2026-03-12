import { createClient } from "@supabase/supabase-js"

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!rawSupabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables.")
}

const supabaseUrl = rawSupabaseUrl.startsWith("http")
  ? rawSupabaseUrl
  : `https://${rawSupabaseUrl}.supabase.co`

export const supabase = createClient(supabaseUrl, supabaseKey)
