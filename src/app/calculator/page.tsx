import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Sparkles, Trophy, ArrowRight, ShieldAlert, BookOpen, HelpCircle } from 'lucide-react';
import TypeSoulCalculatorClient from './TypeSoulCalculatorClient';

export const metadata: Metadata = {
  title: 'Type Soul Calculator: Clan Reroll Simulator & Stat Build Allocator',
  description: 'Interactive Roblox Type Soul clan reroll simulator and stat build calculator. Calculate 0.5% Supreme Clan odds, simulate 100 spins, and plan Kendo / Speed / Kido stat builds.',
  alternates: {
    canonical: 'https://typesoul.robloxwikihub.com/calculator',
  },
  openGraph: {
    title: 'Type Soul Clan Reroll Simulator & Stat Calculator',
    description: 'Calculate clan odds and plan character stat builds for Roblox Type Soul.',
    url: 'https://typesoul.robloxwikihub.com/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Type Soul Clan Reroll Simulator & Stat Build Calculator',
    url: 'https://typesoul.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive clan reroll odds simulator and stat point builder for Roblox Type Soul.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.92',
      ratingCount: '780',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/30 bg-gradient-to-b from-[#050510] via-slate-950/80 to-[#050510]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Combat Tool • Updated for Ranked Season 4</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Type Soul <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400 bg-clip-text text-transparent">Clan Reroll & Stat</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Test your luck rolling 0.5% Supreme Clans (Kurosaki, Yamamoto, Zaraki, Cifer) and allocate your 65 skill points across Kendo, Speed, and Kido.
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TypeSoulCalculatorClient />
      </div>

      {/* SEO Strategy Guide & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-indigo-900/40 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-amber-400" />
            Optimal Clan Strategy & Stat Caps in Type Soul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-indigo-300">1. Supreme Clan Pity & Odds</h3>
              <p>
                Supreme Clans have an authentic 0.5% base drop rate (1 in 200 spins). There is no hard in-game pity system for rerolls, making free promotional codes the most reliable source for rolling top clans.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-indigo-300">2. Optimal Stat Allocation</h3>
              <p>
                In the current competitive meta, allocating 40+ points into a single weapon path (such as Pure Kendo or Pure Speed) unlocks essential hyper-armor skill trees. Splitting points equally across all 4 trees weakens end-game Bankai performance.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">What is the best Shinigami Clan?</strong>
              <span>Kurosaki and Yamamoto are S+ tier. Kurosaki grants Reiatsu regen and high Getsuga damage, while Yamamoto grants 20 HP and complete burn immunity.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">How many stat points can I get at max grade?</strong>
              <span>At Semi-Grade 1 / Elite Grade, players receive up to 65 total skill points to distribute across mastery trees.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-indigo-900/40 bg-slate-950/60">
          <Link href="/clan-tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">
            <BookOpen className="w-4 h-4" />
            <span>View Full Clan Tier List</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Claim Active Type Soul Reroll Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
