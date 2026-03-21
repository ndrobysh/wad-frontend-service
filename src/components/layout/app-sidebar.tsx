'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/hooks/use-auth'
import {
  DashboardIcon,
  CollectionIcon,
  InvocationIcon,
  CombatIcon,
  BestiaryIcon,
  ProfileIcon,
} from '@/components/icons'

const navItems = [
  { href: '/dashboard',   label: 'Dashboard',   Icon: DashboardIcon },
  { href: '/collection',  label: 'Collection',  Icon: CollectionIcon },
  { href: '/invocation',  label: 'Invocation',  Icon: InvocationIcon },
  { href: '/combat',      label: 'Combat',      Icon: CombatIcon },
  { href: '/bestiary',    label: 'Bestiary',    Icon: BestiaryIcon },
  { href: '/profile',     label: 'Profile',     Icon: ProfileIcon },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { username, logout } = useAuth()

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-background border-r-2 border-border w-16 lg:w-60">
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start h-14 px-4 border-b-2 border-border shrink-0">
        <span className="font-mono text-xl font-bold text-primary tracking-widest">
          WAD
        </span>
      </div>

      {/* Player info */}
      <div className="flex items-center justify-center lg:justify-start gap-3 px-4 py-3 border-b-2 border-border shrink-0">
        <div className="w-8 h-8 rounded-sm bg-secondary border border-border shrink-0 flex items-center justify-center">
          <ProfileIcon size={14} className="text-muted-foreground" />
        </div>
        <div className="hidden lg:flex flex-col min-w-0">
          <span className="font-mono text-sm text-foreground truncate leading-tight">
            {username ?? '—'}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider leading-tight">
            Player
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-0.5 p-2 overflow-y-auto">
        {navItems.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={
                'flex items-center gap-3 px-2 py-2 rounded-sm transition-colors ' +
                (isActive
                  ? 'border-l-4 border-primary bg-secondary/50 text-foreground'
                  : 'border-l-4 border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30')
              }
            >
              <Icon
                size={16}
                className="shrink-0"
              />
              <span className="hidden lg:block font-mono text-xs uppercase tracking-wider">
                {label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t-2 border-border shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center lg:justify-start gap-3 px-2 py-2 rounded-sm border-l-4 border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors"
        >
          {/* Pixel door/exit icon inline */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            shapeRendering="crispEdges"
            className="shrink-0"
            aria-hidden="true"
          >
            <rect x="2"  y="2"  width="7" height="12" fill="currentColor" />
            <rect x="3"  y="3"  width="5" height="10" fill="currentColor" opacity="0.35" />
            <rect x="9"  y="7"  width="5" height="2"  fill="currentColor" />
            <rect x="12" y="5"  width="2" height="6"  fill="currentColor" />
            <rect x="6"  y="7"  width="2" height="2"  fill="currentColor" opacity="0.6" />
          </svg>
          <span className="hidden lg:block font-mono text-xs uppercase tracking-wider">
            Logout
          </span>
        </button>
      </div>
    </aside>
  )
}
