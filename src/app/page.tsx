import { SignInForm } from '@/components/auth/sign-in-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <SignInForm />
    </main>
  )
}
