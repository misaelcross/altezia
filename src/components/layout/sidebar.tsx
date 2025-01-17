'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Users,
  UserPlus,
  Home,
  CalendarDays,
  BookOpen,
  DollarSign,
  MessageSquare,
  UserCog,
  Library,
  BarChart2,
  Building2,
  PrayingHands,
  LogOut,
  Menu,
} from 'lucide-react'
import { useState } from 'react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/dashboard',
    },
    {
      title: 'Membros',
      icon: Users,
      href: '/dashboard/members',
    },
    {
      title: 'Visitantes',
      icon: UserPlus,
      href: '/dashboard/visitors',
    },
    {
      title: 'Células',
      icon: Users,
      href: '/dashboard/cells',
    },
    {
      title: 'Eventos',
      icon: CalendarDays,
      href: '/dashboard/events',
    },
    {
      title: 'Discipulado',
      icon: BookOpen,
      href: '/dashboard/discipleship',
    },
    {
      title: 'Financeiro',
      icon: DollarSign,
      href: '/dashboard/financial',
    },
    {
      title: 'Comunicação',
      icon: MessageSquare,
      href: '/dashboard/communication',
    },
    {
      title: 'Voluntários',
      icon: UserCog,
      href: '/dashboard/volunteers',
    },
    {
      title: 'Biblioteca',
      icon: Library,
      href: '/dashboard/library',
    },
    {
      title: 'Relatórios',
      icon: BarChart2,
      href: '/dashboard/reports',
    },
    {
      title: 'Patrimônio',
      icon: Building2,
      href: '/dashboard/assets',
    },
    {
      title: 'Oração',
      icon: PrayingHands,
      href: '/dashboard/prayer',
    },
  ]

  return (
    <div
      className={cn(
        'relative flex flex-col h-screen border-r px-3 py-4 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4 px-2">
        {!isCollapsed && <h2 className="text-lg font-semibold">Altezia</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 -mx-3">
        <div className="space-y-1 p-3">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isCollapsed ? 'px-2' : 'px-4'
                )}
              >
                <item.icon className={cn('h-4 w-4', !isCollapsed && 'mr-2')} />
                {!isCollapsed && <span>{item.title}</span>}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-4 border-t pt-4">
        <Button
          variant="ghost"
          className={cn('w-full justify-start', isCollapsed ? 'px-2' : 'px-4')}
        >
          <LogOut className={cn('h-4 w-4', !isCollapsed && 'mr-2')} />
          {!isCollapsed && <span>Sair</span>}
        </Button>
      </div>
    </div>
  )
}
