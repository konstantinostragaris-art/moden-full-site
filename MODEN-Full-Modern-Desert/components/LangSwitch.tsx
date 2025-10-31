'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function LangSwitch({ className }: { className?: string }) {
  const pathname = usePathname() || '/'

  // αφαίρεσε το /en μόνο αν είναι στην αρχή του path
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/'

  const isEN = pathname.startsWith('/en')
  const toEL = base                               // π.χ. /projects
  const toEN = base === '/' ? '/en' : `/en${base}` // π.χ. /en/projects

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <Link
        href={toEL}
        className={clsx(
          'px-3 py-1 rounded-full text-xs border transition',
          isEN
            ? 'opacity-80 hover:opacity-100 border-neutral-400/40'
            : 'font-medium border-neutral-400/40 bg-white/5'
        )}
        aria-current={!isEN ? 'true' : 'false'}
      >
        EL
      </Link>
      <Link
        href={toEN}
        className={clsx(
          'px-3 py-1 rounded-full text-xs border transition',
          isEN
            ? 'font-medium border-neutral-400/40 bg-white/5'
            : 'opacity-80 hover:opacity-100 border-neutral-400/40'
        )}
        aria-current={isEN ? 'true' : 'false'}
      >
        EN
      </Link>
    </div>
  )
}
