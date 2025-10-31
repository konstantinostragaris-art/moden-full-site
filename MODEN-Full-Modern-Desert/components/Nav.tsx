'use client'

import { useState, useEffect, useRef } from 'react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Nav({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  const dict =
    lang === 'el'
      ? {
          home: 'Αρχική',
          projects: 'Έργα',
          philosophy: 'Φιλοσοφία',
          contact: 'Επικοινωνία',
          cta: 'Ζήτησε Πρόταση',
          switch: 'EN',
          menu: 'Μενού',
          close: 'Κλείσιμο',
        }
      : {
          home: 'Home',
          projects: 'Projects',
          philosophy: 'Philosophy',
          contact: 'Contact',
          cta: 'Request a Proposal',
          switch: 'EL',
          menu: 'Menu',
          close: 'Close',
        }

  const go = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  const switchLang = () => {
    const current = pathname || '/'
    const isEnglish = current.startsWith('/en')
    const target = isEnglish ? current.replace(/^\/en/, '') || '/' : `/en${current}`
    setOpen(false)
    router.push(target)
  }

  // Close mobile on ESC / outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // Active link check
  const isActive = (path: string) =>
    pathname === path || pathname === `${path}/` || pathname === `/en${path}`

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => go(lang === 'el' ? '/' : '/en')}
            className={clsx(
              'hover:text-neutral-900 transition-colors',
              isActive('/') ? 'text-neutral-900 font-medium' : 'text-neutral-600'
            )}
          >
            {dict.home}
          </button>

          <button
            onClick={() => go(lang === 'el' ? '/projects' : '/en/projects')}
            className={clsx(
              'hover:text-neutral-900 transition-colors',
              isActive('/projects') ? 'text-neutral-900 font-medium' : 'text-neutral-600'
            )}
          >
            {dict.projects}
          </button>

          <button
            onClick={() => go(lang === 'el' ? '/philosophy' : '/en/philosophy')}
            className={clsx(
              'hover:text-neutral-900 transition-colors',
              isActive('/philosophy') ? 'text-neutral-900 font-medium' : 'text-neutral-600'
            )}
          >
            {dict.philosophy}
          </button>

          <button
            onClick={() => go(lang === 'el' ? '/contact' : '/en/contact')}
            className={clsx(
              'hover:text-neutral-900 transition-colors',
              isActive('/contact') ? 'text-neutral-900 font-medium' : 'text-neutral-600'
            )}
          >
            {dict.contact}
          </button>

          <Button
            onClick={() => go(lang === 'el' ? '/contact' : '/en/contact')}
            className="shadow-sm"
          >
            {dict.cta}
          </Button>

          <button
            onClick={switchLang}
            className="text-xs ml-2 px-3 py-1 rounded-2xl border hover:bg-neutral-100 transition"
            aria-label="Switch language"
          >
            {dict.switch}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border bg-white/70 hover:bg-white transition"
          aria-label={open ? dict.close : dict.menu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? dict.close : dict.menu}</span>
          <span
            className={`block h-[2px] w-5 bg-neutral-900 transition-transform ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-neutral-900 my-[5px] transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-neutral-900 transition-transform ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </Section>

      {/* Mobile Panel */}
      {open && (
        <div
          ref={panelRef}
          className="md:hidden border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
        >
          <div className="px-4 py-3 grid gap-2 text-sm">
            {[
              [dict.home, lang === 'el' ? '/' : '/en'],
              [dict.projects, lang === 'el' ? '/projects' : '/en/projects'],
              [dict.philosophy, lang === 'el' ? '/philosophy' : '/en/philosophy'],
              [dict.contact, lang === 'el' ? '/contact' : '/en/contact'],
            ].map(([label, href]) => (
              <button
                key={label}
                onClick={() => go(href)}
                className={clsx(
                  'px-2 py-2 rounded-lg text-left hover:bg-neutral-100',
                  isActive(href.toString())
                    ? 'bg-neutral-100 font-medium text-neutral-900'
                    : 'text-neutral-600'
                )}
              >
                {label}
              </button>
            ))}

            <Button
              onClick={() => go(lang === 'el' ? '/contact' : '/en/contact')}
              className="mt-2"
            >
              {dict.cta}
            </Button>

            <div className="pt-2 border-t mt-2 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Language</span>
              <button
                onClick={switchLang}
                className="text-xs px-3 py-1 rounded-2xl border hover:bg-neutral-100 transition"
              >
                {dict.switch}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
