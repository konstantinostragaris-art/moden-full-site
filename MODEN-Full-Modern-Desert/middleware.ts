// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en'] as const
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // 1) Αν υπάρχει ήδη locale στο path (/el ή /en), δεν πειράζουμε τίποτα
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return

  // 2) Redirect ΜΟΝΟ από την αρχική "/"
  if (pathname !== '/') return

  // 3) Αν ο χρήστης έχει προτίμηση σε cookie, σεβόμαστε αυτήν
  const pref = request.cookies.get('prefLocale')?.value
  if (pref && locales.includes(pref as any) && pref !== defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${pref}`
    return NextResponse.redirect(url)
  }

  // 4) Αλλιώς, ρίξε μια ματιά στη γλώσσα browser
  const acceptLang = request.headers.get('accept-language') || ''
  const browserLang = acceptLang.split(',')[0]?.split('-')[0] || defaultLocale

  if (browserLang === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = `/en`
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
