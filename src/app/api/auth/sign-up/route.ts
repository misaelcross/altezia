import { createServerSupabaseClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logger'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    const supabase = createServerSupabaseClient()

    logger.info('Tentativa de criação de conta', { email })

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${request.headers.get('origin')}/auth/callback`,
      },
    })

    if (error) {
      logger.error('Erro na criação de conta', { error, email })
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    // Criar registro do usuário na tabela users com role inicial
    const { error: userError } = await supabase
      .from('users')
      .insert([
        {
          id: data.user?.id,
          email: data.user?.email,
          role: 'member',
        },
      ])

    if (userError) {
      logger.error('Erro ao criar registro do usuário', { userError, email })
    }

    logger.info('Conta criada com sucesso', { email })
    return NextResponse.json({ data })
  } catch (err) {
    logger.error('Erro inesperado na criação de conta', { err })
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    )
  }
}
