import { createServerSupabaseClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logger'

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient()
    const body = await request.json()
    const { email, password } = body

    logger.info('Tentativa de login', { email })

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      logger.error('Falha no login', { email, error: error.message })
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      })
    }

    logger.info('Login realizado com sucesso', { email, userId: data.user?.id })
    return new Response(JSON.stringify(data))
  } catch (error) {
    logger.error('Erro inesperado no login', { error })
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
