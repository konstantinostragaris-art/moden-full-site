'use client'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl font-medium transition-colors ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brass)] ' +
    'disabled:opacity-50 disabled:pointer-events-none'

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  }

  const variants = {
    // Light: μαύρο, Dark: λευκό — πάντα full contrast
    solid:
      'bg-neutral-900 text-white hover:bg-neutral-800 ' +
      'dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',

    // FIX: στο dark δίνουμε text-neutral-200 + border-white/20 + hover bg-white/10
    outline:
      'bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 ' +
      'dark:border-white/20 dark:text-neutral-200 dark:hover:bg-white/10',

    // Text-only κουμπί με ομοιόμορφο hover
    ghost:
      'bg-transparent text-neutral-700 hover:bg-neutral-100 ' +
      'dark:text-neutral-200 dark:hover:bg-white/10',
  } as const

  return (
    <button
      {...props}
      className={clsx(base, sizes[size], variants[variant], className)}
    />
  )
}
