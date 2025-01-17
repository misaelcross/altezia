import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

// Cria um cliente Supabase para operações client-side
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
