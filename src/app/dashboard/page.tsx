export default function DashboardPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="text-sm font-medium">Total de Membros</div>
            <div className="text-2xl font-bold">1,234</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="text-sm font-medium">Células Ativas</div>
            <div className="text-2xl font-bold">45</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="text-sm font-medium">Eventos este Mês</div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="text-sm font-medium">Pedidos de Oração</div>
            <div className="text-2xl font-bold">78</div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Próximos Eventos</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium">Culto de Celebração</div>
                  <div className="text-sm text-muted-foreground">Domingo, 19 de Janeiro - 18:00</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium">Encontro de Jovens</div>
                  <div className="text-sm text-muted-foreground">Sábado, 25 de Janeiro - 19:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Últimos Visitantes</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium">Maria Silva</div>
                  <div className="text-sm text-muted-foreground">15 de Janeiro, 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium">João Santos</div>
                  <div className="text-sm text-muted-foreground">14 de Janeiro, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
