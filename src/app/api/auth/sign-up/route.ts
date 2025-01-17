import { createServerSupabaseClient, createServerAdminClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logger'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()
    const supabase = await createServerSupabaseClient()
    const adminClient = await createServerAdminClient()

    logger.info('Tentativa de criação de conta', { email, name })

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
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
    if (data.user?.id) {
      const { error: userError } = await adminClient
        .from('users')
        .insert([
          {
            id: data.user.id,
            email: data.user.email,
            role: 'member',
          },
        ])

      if (userError) {
        logger.error('Erro ao criar registro do usuário', { userError, email })
      }
    }

    logger.info('Conta criada com sucesso', { 
      email, 
      userId: data.user?.id,
      emailConfirmed: data.user?.confirmed_at ? true : false 
    })
    
    return NextResponse.json({ data })
  } catch (err) {
    logger.error('Erro inesperado na criação de conta', { err })
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' },
      { status: 500 }
    )
  }
}
