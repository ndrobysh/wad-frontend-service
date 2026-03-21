'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  DashboardIcon,
  CollectionIcon,
  InvocationIcon,
  CombatIcon,
  BestiaryIcon,
} from '@/components/icons'

const navItems = [
  { href: '/dashboard',  label: 'Home',    Icon: DashboardIcon },
  { href: '/collection', label: 'Collect', Icon: CollectionIcon },
  { href: '/invocation', label: 'Invoke',  Icon: InvocationIcon },
  { href: '/combat',     label: 'Combat',  Icon: CombatIcon },
  { href: '/bestiary',   label: 'Bestiary',Icon: BestiaryIcon },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t-2 border-border">
      <div className="flex items-stretch h-16">
        {navItems.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={
                'flex-1 flex flex-col items-center justify-center gap-1 transition-colors ' +
                (isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground')
              }
            >
              <Icon size={18} className="shrink-0" />
              <span className="font-mono text-[9px] uppercase tracking-wider leading-none">
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
