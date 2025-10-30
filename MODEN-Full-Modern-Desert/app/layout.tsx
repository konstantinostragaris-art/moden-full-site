// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moden-full-site.vercel.app"),
  title: {
    default: "MODEN Development — Luxury Meets Sustainability",
    template: "%s | MODEN Development",
  },
  description:
    "Σύγχρονες κατοικίες με διαχρονική πολυτέλεια και καθαρό αποτύπωμα.",
  openGraph: {
    title: "MODEN Development",
    description:
      "Luxury Meets Sustainability — Σύγχρονες, ενεργειακά αποδοτικές κατοικίες.",
    url: "https://moden-full-site.vercel.app",
    siteName: "MODEN Development",
    images: ["/og.jpg"],
    locale: "el_GR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
