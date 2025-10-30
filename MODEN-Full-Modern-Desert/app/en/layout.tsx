import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://moden-full-site.vercel.app'),
  title: {
    default: 'MODEN Development | Luxury Meets Sustainability',
    template: '%s | MODEN Development',
  },
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
  icons: {
    icon: '/icon.png',             // αν το έχεις ανεβάσει
    // shortcut: '/favicon.ico',    // βάλε αν έχεις favicon.ico
    // apple: '/apple-icon.png',    // βάλε αν έχεις apple icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
