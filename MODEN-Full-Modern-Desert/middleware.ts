import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en']
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return

  const acceptLang = request.headers.get('accept-language') || ''
  const browserLang = acceptLang.split(',')[0].split('-')[0]

  if (locales.includes(browserLang) && browserLang !== defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${browserLang}${pathname}`
    return NextResponse.redirect(url)
  }

  return
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
