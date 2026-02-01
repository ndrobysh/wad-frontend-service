import Link from 'next/link'
import { BookOpen, User, ArrowRight } from 'lucide-react'

const cards = [
  {
    href: '/bestiary',
    icon: BookOpen,
    title: 'Bestiaire',
    description: 'Explorez tous les monstres disponibles',
    color: 'emerald',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/30',
  },
  {
    href: '/profile',
    icon: User,
    title: 'Profil',
    description: 'Gérez votre progression et statistiques',
    color: 'violet',
    iconBg: 'bg-violet-500/20',
    iconColor: 'text-violet-400',
    hoverBorder: 'hover:border-violet-500/30',
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
            className={`group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors ${card.hoverBorder}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className={`h-5 w-5 ${card.iconColor}`} />
                </div>
                <div>
                  <p className="font-semibold text-white">{card.title}</p>
                  <p className="text-sm text-slate-400">{card.description}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors mt-1" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
