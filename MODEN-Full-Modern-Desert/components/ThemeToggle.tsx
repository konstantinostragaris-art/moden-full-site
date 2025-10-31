'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="ml-2 p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition
                 dark:border-white/15 dark:text-neutral-200 dark:hover:bg-white/5"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light' : 'Switch to dark'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
