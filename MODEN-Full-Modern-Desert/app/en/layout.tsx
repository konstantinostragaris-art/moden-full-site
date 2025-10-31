// app/en/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://moden-full-site.vercel.app"),
  title: { default: "MODEN Development — Luxury Meets Sustainability", template: "%s | MODEN Development" },
  description: "Modern minimal luxury homes with a net-zero mindset. Design • Build • Renovate.",
  alternates: { canonical: "/en", languages: { "el-GR": "/", "en-US": "/en" } },
  openGraph: {
    title: "MODEN Development",
    description: "Luxury Meets Sustainability — Modern, energy-efficient residences.",
    url: "https://moden-full-site.vercel.app/en",
    siteName: "MODEN Development",
    images: ["/og.jpg"],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
