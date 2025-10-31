// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en'] as const
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // A. Αν το path έχει ήδη locale (/en ή /el), δεν κάνουμε τίποτα
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return

  // B. Redirect ΜΟΝΟ από την αρχική "/"
  if (pathname !== '/') return

  // C. Αν υπάρχει cookie προτίμησης, το σεβόμαστε (και ΜΟΝΟ αυτό)
  const pref = request.cookies.get('prefLocale')?.value
  if (pref === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }
  if (pref === 'el') {
    // μείνε στο ελληνικό "/"
    return
  }

  // D. Πρώτη επίσκεψη χωρίς cookie: ρίξε μια ματιά στη γλώσσα browser
  const acceptLang = request.headers.get('accept-language') || ''
  const browserLang = acceptLang.split(',')[0]?.split('-')[0] || defaultLocale
  if (browserLang === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }

  // default: ελληνικά
  return
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}

