import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Type Soul Codes & Tier List (August 2026) — Roblox Type Soul Wiki',
  description: 'Updated Type Soul codes for free rerolls, weapon tier list, clan rarity guide, Bankai quest walkthrough, and item trading value list.',
  keywords: [
    'type soul codes',
    'type soul tier list',
    'type soul weapon tier list',
    'type soul clan tier list',
    'type soul trello',
    'how to get bankai type soul',
    'type soul value list',
    'type soul codes august 2026'
  ],
  authors: [{ name: 'Type Soul Wiki Team' }],
  openGraph: {
    title: 'Type Soul Codes & Tier List (August 2026) — Roblox Type Soul Wiki',
    description: 'Updated Type Soul codes for free rerolls, weapon tier list, clan rarity guide, Bankai quest walkthrough, and item trading value list.',
    url: 'https://type-soul-wiki.vercel.app',
    siteName: 'Type Soul Wiki',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Type Soul Codes & Tier List — Roblox Type Soul Wiki',
    description: 'Get updated Type Soul codes, weapon tier lists, clan buffs, and Bankai guides.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#05050c] text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
