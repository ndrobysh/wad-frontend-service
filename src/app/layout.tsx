import type { Metadata } from 'next'
import { Providers } from './providers'
import { bodyFont, monoFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAD Gacha Game',
  description: 'Jeu de type Gacha - Projet WAD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`dark ${bodyFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
