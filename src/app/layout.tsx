import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://typesoul.robloxwikihub.com'),
  title: 'Type Soul Codes & Tier List — Roblox Type Soul Wiki',
  description: 'Updated Type Soul codes for free rerolls, weapon tier list, clan rarity guide, Bankai quest walkthrough, and item trading value list.',
  keywords: [
    'type soul codes',
    'type soul tier list',
    'type soul weapon tier list',
    'type soul clan tier list',
    'type soul trello',
    'how to get bankai type soul',
    'type soul value list',
    'type soul codes '
  ],
  authors: [{ name: 'Type Soul Wiki Team' }],
  openGraph: {
    title: 'Type Soul Codes & Tier List — Roblox Type Soul Wiki',
    description: 'Updated Type Soul codes for free rerolls, weapon tier list, clan rarity guide, Bankai quest walkthrough, and item trading value list.',
    url: 'https://typesoul.robloxwikihub.com',
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
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'K0YFUdYGQH2cucEllkbzoEcKAZoFJ7rGguAERbz2ZGM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Type Soul Wiki',
    url: 'https://typesoul.robloxwikihub.com',
    description: 'The ultimate Roblox Type Soul community database for reroll codes, weapon tier lists, and Bankai walkthroughs.',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#05050c] text-slate-100 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

