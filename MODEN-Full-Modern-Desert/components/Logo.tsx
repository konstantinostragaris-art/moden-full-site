'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <Image
      src={isDark ? '/logo-dark.png' : '/logo-light.png'}
      alt="MODEN Development Logo"
      width={120}
      height={120}
      priority
      className={className}
    />
  )
}
