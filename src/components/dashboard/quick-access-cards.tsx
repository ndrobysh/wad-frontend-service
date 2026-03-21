import Link from 'next/link'
import { InvocationIcon, CombatIcon, BestiaryIcon, ProfileIcon } from '@/components/icons'

const cards = [
  {
    href: '/invocation',
    icon: InvocationIcon,
    title: 'Invocation',
    description: 'Invoquez de nouveaux monstres',
    borderLeft: 'border-l-[#ffcd75]',
    iconColor: 'text-[#ffcd75]',
  },
  {
    href: '/combat',
    icon: CombatIcon,
    title: 'Combat',
    description: 'Lancez des combats entre vos monstres',
    borderLeft: 'border-l-[#f77622]',
    iconColor: 'text-[#f77622]',
  },
  {
    href: '/bestiary',
    icon: BestiaryIcon,
    title: 'Bestiaire',
    description: 'Explorez tous les monstres disponibles',
    borderLeft: 'border-l-[#38b764]',
    iconColor: 'text-[#38b764]',
  },
  {
    href: '/profile',
    icon: ProfileIcon,
    title: 'Profil',
    description: 'Gérez votre progression et statistiques',
    borderLeft: 'border-l-[#ffcd75]',
    iconColor: 'text-[#ffcd75]',
  },
] as const

export function QuickAccessCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <Link
            key={card.href}
            href={card.href}
            className={`group bg-card border-2 border-border rounded-sm border-l-4 ${card.borderLeft} p-6 transition-colors hover:border-primary/50`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-secondary rounded-sm">
                  <Icon className={`h-5 w-5 ${card.iconColor}`} size={20} />
                </div>
                <div>
                  <p className="font-mono font-semibold uppercase tracking-wide text-white">
                    {card.title}
                  </p>
                  <p className="text-sm text-slate-400">{card.description}</p>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors mt-1 font-mono text-sm">
                &gt;
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
