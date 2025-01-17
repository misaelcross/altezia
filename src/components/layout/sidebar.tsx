'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { motion } from 'framer-motion'
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
  Church,
  LogOut,
} from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface SidebarDemoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarDemo({ className }: SidebarDemoProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <Home className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Membros',
      href: '/dashboard/members',
      icon: <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Visitantes',
      href: '/dashboard/visitors',
      icon: <UserPlus className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Células',
      href: '/dashboard/cells',
      icon: <Users className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Eventos',
      href: '/dashboard/events',
      icon: <CalendarDays className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Discipulado',
      href: '/dashboard/discipleship',
      icon: <BookOpen className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Financeiro',
      href: '/dashboard/financial',
      icon: <DollarSign className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Comunicação',
      href: '/dashboard/communication',
      icon: <MessageSquare className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Voluntários',
      href: '/dashboard/volunteers',
      icon: <UserCog className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Biblioteca',
      href: '/dashboard/library',
      icon: <Library className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Relatórios',
      href: '/dashboard/reports',
      icon: <BarChart2 className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Patrimônio',
      href: '/dashboard/assets',
      icon: <Building2 className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
    {
      label: 'Oração',
      href: '/dashboard/prayer',
      icon: <Church className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
    },
  ]

  return (
    <Sidebar open={open} setOpen={setOpen} className={className}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <SidebarLink 
                key={idx} 
                link={item}
                open={open}
                className={cn(
                  pathname === item.href && "bg-neutral-100 dark:bg-neutral-800"
                )}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Sair",
              href: "/auth/sign-out",
              icon: <LogOut className="h-5 w-5 text-neutral-700 dark:text-neutral-200 flex-shrink-0" />,
            }}
            open={open}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  )
}

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Altezia
      </motion.span>
    </Link>
  )
}

const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  )
}
