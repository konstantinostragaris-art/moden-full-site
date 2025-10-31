'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LangSwitch() {
  const pathname = usePathname() || '/'

  // αφαίρεσε το /en στην αρχή (αν υπάρχει)
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/'

  const toEL = base                      // π.χ. /projects
  const toEN = base === '/' ? '/en' : `/en${base}` // π.χ. /en/projects

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={toEL}
        className={pathname.startsWith('/en') ? 'opacity-80 hover:opacity-100' : 'font-semibold'}
      >
        EL
      </Link>
      <span className="opacity-40">/</span>
      <Link
        href={toEN}
        className={!pathname.startsWith('/en') ? 'opacity-80 hover:opacity-100' : 'font-semibold'}
      >
        EN
      </Link>
    </div>
  )
}
