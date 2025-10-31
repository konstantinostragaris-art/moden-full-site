// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en'] as const
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Αν υπάρχει ήδη locale στο path, μην κάνεις τίποτα
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return

  // Redirect ΜΟΝΟ από την αρχική "/"
  if (pathname !== '/') return

  // Αν υπάρχει cookie προτίμησης, υπερισχύει
  const pref = request.cookies.get('prefLocale')?.value
  if (pref === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }
  if (pref === 'el') return

  // Πρώτη επίσκεψη χωρίς cookie: κοίτα Accept-Language
  const acceptLang = request.headers.get('accept-language') || ''
  const browserLang = acceptLang.split(',')[0]?.split('-')[0] || defaultLocale
  if (browserLang === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }

  // default: μείνε στο ελληνικό "/"
  return
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
