import { SidebarDemo } from '@/components/layout/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen flex bg-gray-100 dark:bg-neutral-900">
      <SidebarDemo />
      <main className="flex-1 p-4 lg:p-8">
        {children}
      </main>
    </div>
  )
}
