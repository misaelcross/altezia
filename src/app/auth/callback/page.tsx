'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function AuthCallback() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code')
        if (!code) {
          setStatus('error')
          return
        }

        // Troca o código de autenticação por uma sessão
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (error) {
          console.error('Erro na confirmação:', error.message)
          setStatus('error')
          return
        }

        setStatus('success')
      } catch (err) {
        console.error('Erro inesperado:', err)
        setStatus('error')
      }
    }

    handleCallback()
  }, [searchParams])

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Confirmando...</CardTitle>
            <CardDescription>
              Por favor, aguarde enquanto confirmamos seu email.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </CardContent>
        </Card>
      </main>
    )
  }

  if (status === 'error') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Erro na confirmação</CardTitle>
            <CardDescription>
              Não foi possível confirmar seu email. O link pode ter expirado ou ser inválido.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              className="w-full" 
              onClick={() => router.push('/')}
            >
              Voltar para o login
            </Button>
          </CardFooter>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Email confirmado!</CardTitle>
          <CardDescription>
            Seu email foi confirmado com sucesso. Você já pode acessar o sistema.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={() => router.push('/dashboard')}
          >
            Ir para o sistema
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCallback />
    </Suspense>
  )
}
