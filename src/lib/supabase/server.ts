import { createClient } from '@supabase/supabase-js'
import { headers } from 'next/headers'
import { Database } from '@/types/supabase'
import { withLogging } from './middleware'

// Cria um cliente Supabase com cookies para manter a sessão do usuário
export async function createServerSupabaseClient() {
  const headersList = await headers()
  const client = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      },
      global: {
        headers: {
          'x-forwarded-for': headersList.get('x-forwarded-for') ?? '',
        },
      },
    }
  )
  
  return withLogging(client)
}

// Cria um cliente Supabase com a chave de serviço para operações administrativas
export async function createServerAdminClient() {
  const client = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  )
  
  return withLogging(client)
}
