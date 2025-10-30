import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://moden-full-site.vercel.app/en'),
  title: 'MODEN Development | Luxury Meets Sustainability',
  description:
    'We design and develop modern luxury homes with timeless architecture and net-zero philosophy. Luxury Meets Sustainability.',
  openGraph: {
    title: 'MODEN Development',
    description:
      'Luxury Meets Sustainability — Modern, energy-efficient residences.',
    url: 'https://moden-full-site.vercel.app/en',
    siteName: 'MODEN Development',
    images: ['/og.jpg'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
