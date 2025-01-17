import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  setOpen: (open: boolean) => void
  children?: React.ReactNode
}

export function Sidebar({ open, setOpen, className, children, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-screen sticky top-0 flex flex-col p-4 border-r border-neutral-200 dark:border-neutral-700",
        open ? "w-64" : "w-16",
        "transition-all duration-300",
        className
      )}
      {...props}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </aside>
  )
}

interface SidebarBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarBody({ className, children, ...props }: SidebarBodyProps) {
  return (
    <div className={cn("h-full flex flex-col", className)} {...props}>
      {children}
    </div>
  )
}

interface SidebarLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: {
    label: string
    href: string
    icon: React.ReactNode
  }
  open?: boolean
}

export function SidebarLink({ link, className, open = true, ...props }: SidebarLinkProps) {
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-150 group",
        className
      )}
      {...props}
    >
      {link.icon}
      {open && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-sm text-neutral-700 dark:text-neutral-200 whitespace-pre group-hover:translate-x-1 transition-transform duration-200"
        >
          {link.label}
        </motion.span>
      )}
    </a>
  )
}
