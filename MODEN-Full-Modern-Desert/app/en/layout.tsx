// app/en/layout.tsx
import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes' // αν το χρησιμοποιείς στο root, κράτα το κι εδώ
import './globals.css' // ίδιο με root

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

