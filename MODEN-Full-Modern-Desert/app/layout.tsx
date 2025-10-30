export const metadata = {
  metadataBase: new URL('https://moden-full-site.vercel.app'),
  title: 'MODEN Development | Luxury Meets Sustainability',
  description:
    'Σχεδιάζουμε και αναπτύσσουμε σύγχρονες κατοικίες υψηλής αισθητικής, με καθαρή αρχιτεκτονική γραμμή, ποιότητα υλικών και net-zero φιλοσοφία. Luxury Meets Sustainability.',
  openGraph: {
    title: 'MODEN Development',
    description:
      'Luxury Meets Sustainability — Σύγχρονες, ενεργειακά αποδοτικές κατοικίες.',
    url: 'https://moden-full-site.vercel.app',
    siteName: 'MODEN Development',
    images: ['/og.jpg'],
    locale: 'el_GR',
    type: 'website',
  },
};
import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata={metadataBase:new URL('https://moden.gr'),title:'MODEN Development — Luxury Meets Sustainability',description:'Σύγχρονες κατοικίες με διαχρονική πολυτέλεια και καθαρό αποτύπωμα.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='el'><body className='min-h-screen'>{children}</body></html>}
