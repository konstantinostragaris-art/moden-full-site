'use client'
import LangSwitch from '@/components/LangSwitch'
import ThemeToggle from '@/components/ThemeToggle'

import { useState, useEffect, useRef } from 'react'
import Section from '@/components/Section'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Nav() {
  const router = useRouter()
  const pathname = usePathname() || '/'
  const isEN = pathname.startsWith('/en')

  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number } | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const dict = isEN
    ? {
        home: 'Home',
        projects: 'Projects',
        philosophy: 'Philosophy',
        contact: 'Contact',
        cta: 'Request a Proposal',
        menu: 'Menu',
        close: 'Close',
      }
    : {
        home: 'Αρχική',
        projects: 'Έργα',
        philosophy: 'Φιλοσοφία',
        contact: 'Επικοινωνία',
        cta: 'Ζήτησε Πρόταση',
        menu: 'Μενού',
        close: 'Κλείσιμο',
      }

  const go = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  // helper που φτιάχνει σωστά τα href ανάλογα με locale
  const href = (elPath: string) => (isEN ? (elPath === '/' ? '/en' : `/en${elPath}`) : elPath)

  // close mobile με ESC / outside click
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

  // active underline
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('button[data-active="true"]')
    if (active) {
      const rect = (active as HTMLElement).getBoundingClientRect()
      const parentRect = navRef.current.getBoundingClientRect()
      setUnderlineProps({ left: rect.left - parentRect.left, width: rect.width })
    } else {
      setUnderlineProps(null)
    }
  }, [pathname, isEN])

  const linkData: Array<[string, string]> = [
    [dict.home, href('/')],
    [dict.projects, href('/projects')],
    [dict.philosophy, href('/philosophy')],
    [dict.contact, href('/contact')],
  ]

  const isActive = (path: string) => pathname === path || pathname === `${path}/`

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-white/10">
      <Section className="py-3 flex items-center justify-between">
        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-lg border bg-white shadow-sm dark:bg-neutral-900 dark:border-white/10">
            <Logo className="w-7 h-7" />
          </div>
          <div className="leading-tight">
            <div className="text-xl tracking-wide text-neutral-900 dark:text-neutral-100">
              MODEN <span className="opacity-70">Development</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-300">
              Luxury Meets Sustainability
            </div>
          </div>
        </div>

        {/* Desktop Navigation + Actions */}
        <div className="relative hidden md:flex items-center gap-3">
          <nav ref={navRef} className="flex items-center gap-6 text-sm relative">
            {linkData.map(([label, h]) => (
              <button
                key={h}
                onClick={() => go(h)}
                data-active={isActive(h)}
                className={clsx(
                  'relative transition-colors',
                  'text-neutral-600 hover:text-neutral-900',
                  'dark:text-neutral-300 dark:hover:text-neutral-100',
                  isActive(h) && 'font-medium text-neutral-900 dark:text-neutral-100'
                )}
              >
                {label}
              </button>
            ))}

            {underlineProps && (
              <motion.div
                className="absolute -bottom-2 h-[2px] bg-neutral-800 dark:bg-neutral-100 rounded-full"
                layout
                initial={false}
                animate={{ left: underlineProps.left, width: underlineProps.width }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </nav>

          {/* CTA */}
          <Button onClick={() => go(href('/contact'))} className="shadow-sm">
            {dict.cta}
          </Button>

          {/* ΜΟΝΟ αυτός ο switcher (δίπλα στο CTA) */}
          <LangSwitch className="ml-2" />

          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border bg-white/70 hover:bg-white transition
                     text-neutral-900 border-neutral-300
                     dark:bg-neutral-900/70 dark:hover:bg-neutral-900 dark:text-neutral-100 dark:border-white/10"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? (isEN ? 'Close' : 'Κλείσιμο') : (isEN ? 'Menu' : 'Μενού')}</span>
          <span className={`block h-[2px] w-5 bg-current transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-5 bg-current my-[5px] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[2px] w-5 bg-current transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </Section>

      {/* Mobile panel */}
      {open && (
        <div
          ref={panelRef}
          className="md:hidden border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80
                     dark:bg-neutral-950/90 dark:supports-[backdrop-filter]:bg-neutral-950/80
                     border-neutral-200/60 dark:border-white/10"
        >
          <div className="px-4 py-3 grid gap-2 text-sm">
            {linkData.map(([label, h]) => (
              <button
                key={h}
                onClick={() => go(h)}
                className={clsx(
                  'px-2 py-2 rounded-lg text-left hover:bg-neutral-100 text-neutral-600',
                  'dark:text-neutral-300 dark:hover:bg-white/5',
                  isActive(h) && 'bg-neutral-100 text-neutral-900 font-medium dark:bg-white/10 dark:text-neutral-100'
                )}
              >
                {label}
              </button>
            ))}

            <Button onClick={() => go(href('/contact'))} className="mt-2">
              {dict.cta}
            </Button>

            <div className="pt-2 border-t mt-2 flex items-center justify-between border-neutral-200/60 dark:border-white/10">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Language</span>
              <LangSwitch />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
