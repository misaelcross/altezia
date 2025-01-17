import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function CheckEmailPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Verifique seu email</CardTitle>
          <CardDescription>
            Enviamos um link de confirmação para o seu email. Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Não recebeu o email? Verifique sua pasta de spam ou solicite um novo link de confirmação.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/" className="w-full">
            <Button variant="ghost" className="w-full">
              Voltar para o login
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}
