'use client'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

export default function LangSwitch({ className }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname() || '/'

  // Βρες τη “βάση” του path (χωρίς /en prefix)
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  const isEN = pathname.startsWith('/en')

  const toEL = base                          // π.χ. /projects
  const toEN = base === '/' ? '/en' : `/en${base}` // π.χ. /en/projects

  const go = (href: string) => {
    if (href !== pathname) router.push(href)
  }

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <button
        type="button"
        onClick={() => go(toEL)}
        className={clsx(
          'px-3 py-1 rounded-full text-xs border transition',
          isEN
            ? 'opacity-80 hover:opacity-100 border-neutral-400/40'
            : 'font-medium border-neutral-400/40 bg-white/5'
        )}
        aria-current={!isEN ? 'true' : 'false'}
      >
        EL
      </button>
      <button
        type="button"
        onClick={() => go(toEN)}
        className={clsx(
          'px-3 py-1 rounded-full text-xs border transition',
          isEN
            ? 'font-medium border-neutral-400/40 bg-white/5'
            : 'opacity-80 hover:opacity-100 border-neutral-400/40'
        )}
        aria-current={isEN ? 'true' : 'false'}
      >
        EN
      </button>
    </div>
  )
}
