'use client'
import * as React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

export function Button({
  asChild = false,
  variant = 'solid',
  size = 'md',
  className,
  children,
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
  } as const

  const variants = {
    // Light: μαύρο, Dark: λευκό — πάντα full contrast
    solid:
      'bg-neutral-900 text-white hover:bg-neutral-800 ' +
      'dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',

    // Στο dark: text-neutral-200 + border-white/20 + hover bg-white/10
    outline:
      'bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 ' +
      'dark:border-white/20 dark:text-neutral-200 dark:hover:bg-white/10',

    // Text-only κουμπί με ομοιόμορφο hover
    ghost:
      'bg-transparent text-neutral-700 hover:bg-neutral-100 ' +
      'dark:text-neutral-200 dark:hover:bg-white/10',
  } as const

  const classes = clsx(base, sizes[size], variants[variant], className)

  // Αν asChild=true και το child είναι π.χ. <a> ή <Link>, κλωνοποίησέ το και πέρασε className
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: clsx(classes, (children as any).props?.className),
    })
  }

  // default: <button>
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

