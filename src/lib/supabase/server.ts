import { createClient } from '@supabase/supabase-js'
import { headers } from 'next/headers'
import { Database } from '@/types/supabase'

// Cria um cliente Supabase com a chave de serviço para operações server-side
export function createServerSupabaseClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  )
}

// Cria um cliente Supabase com cookies para manter a sessão do usuário
export function createServerActionClient() {
  const headersList = headers()
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
      global: {
        headers: {
          'x-forwarded-for': headersList.get('x-forwarded-for') ?? '',
        },
      },
    }
  )
}
