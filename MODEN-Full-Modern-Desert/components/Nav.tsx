'use client'

import Section from '@/components/Section'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui'
import { useRouter, usePathname } from 'next/navigation'

export default function Nav({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const router = useRouter()
  const pathname = usePathname()

  // Text dictionary
  const dict =
    lang === 'el'
      ? ['Αρχική', 'Έργα', 'Φιλοσοφία', 'Επικοινωνία', 'Ζήτησε Πρόταση', 'EN']
      : ['Home', 'Projects', 'Philosophy', 'Contact', 'Request a Proposal', 'EL']

  // Handle navigation respecting language
  const go = (path: string) => router.push(path)

  // Smooth language switcher — keeps current route
  const switchLang = () => {
    const current = pathname || '/'
    const isEnglish = current.startsWith('/en')
    const target = isEnglish ? current.replace(/^\/en/, '') || '/' : `/en${current}`
    router.push(target)
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
      <Section className="py-3 flex items-center justify-between">
        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-lg border bg-white shadow-sm">
            <Logo className="w-7 h-7" />
          </div>
          <div className="leading-tight">
            <div className="text-xl tracking-wide">
              MODEN <span className="opacity-70">Development</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-600">
              Luxury Meets Sustainability
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => go(lang === 'el' ? '/' : '/en')}
            className="hover:text-neutral-900 text-neutral-600"
          >
            {dict[0]}
          </button>
          <button
            onClick={() => go(lang === 'el' ? '/projects' : '/en/projects')}
            className="hover:text-neutral-900 text-neutral-600"
          >
            {dict[1]}
          </button>
          <button
            onClick={() => go(lang === 'el' ? '/philosophy' : '/en/philosophy')}
            className="hover:text-neutral-900 text-neutral-600"
          >
            {dict[2]}
          </button>
          <button
            onClick={() => go(lang === 'el' ? '/contact' : '/en/contact')}
            className="hover:text-neutral-900 text-neutral-600"
          >
            {dict[3]}
          </button>

          <Button
            onClick={() => go(lang === 'el' ? '/contact' : '/en/contact')}
            className="shadow-sm"
          >
            {dict[4]}
          </Button>

          {/* Language switch */}
          <button
            onClick={switchLang}
            className="text-xs ml-2 px-3 py-1 rounded-2xl border hover:bg-neutral-100 transition"
            aria-label="Switch language"
          >
            {dict[5]}
          </button>
        </nav>
      </Section>
    </div>
  )
}
