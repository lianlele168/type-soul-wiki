import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import Link from 'next/link';
import { Gift, Sword, Shield, BookOpen, DollarSign, ExternalLink, Flame, CheckCircle2, ArrowRight, Zap, Trophy, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, WEAPON_TIER_DATA, CLAN_TIER_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import AuthorCard from '@/components/AuthorCard';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Hlele',
      jobTitle: 'Editor',
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the active Type Soul codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `There are ${ACTIVE_CODES.length} working Type Soul codes right now: ${ACTIVE_CODES.map((c) => c.code).join(', ')}. Most of them pay out locked rerolls, elixirs and skill box choosers.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How do you redeem codes in Roblox Type Soul?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Launch Type Soul and wait until you load into the main area, then click the Gift Box icon in the top-left corner of the screen. Paste one code into the text field and press Enter. You must reach Semi-Grade 2 before the game accepts any code, so new characters cannot redeem them at all. Rewards land in your inventory rather than applying automatically, and codes are case-sensitive.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best weapon in Type Soul?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kyoka Suigetsu (Shinigami), Gluttony (Arrancar), and Antithesis (Quincy) are currently S+ tier weapons in the Type Soul meta.',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-purple-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-slate-950/80 to-[#05050c] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-900/40 text-purple-300 border border-purple-700/50 shadow-inner">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>Updated for Meta Patch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Roblox Type Soul <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-crimson-400 bg-clip-text text-transparent">
              Codes, Tier Lists & Guides
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your ultimate database for <strong className="text-purple-300">Roblox Type Soul</strong>. Redeem free rerolls, check weapon & clan tier rankings, unlock Bankai, and stay ahead in the Soul Society.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-purple-300">100K+</div>
              <div className="text-[11px] text-slate-400">Monthly Searches</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">{ACTIVE_CODES.length} Active</div>
              <div className="text-[11px] text-slate-400">Reroll Codes</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-pink-400">S+ Tier</div>
              <div className="text-[11px] text-slate-400">Weapon Ratings</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-amber-400">0.5%</div>
              <div className="text-[11px] text-slate-400">Supreme Clan Odds</div>
            </div>
          </div>

          {/* Author Card */}
          <div className="max-w-3xl mx-auto text-left">
            <AuthorCard
              authorName="Hlele"
              role="Editor"
              experience="AI-assisted research, human-reviewed"
              patchVersion="Soul Society Meta Patch Verified"
              editorialNote="All data is cross-verified from multiple sources; unverified values are explicitly labeled."
            />
          </div>

          {/* Combat Screenshot Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
            <img
              src="/images/type-soul-combat.webp"
              alt="Roblox Type Soul Shinigami vs Quincy Rooftop Combat and Bankai Awakening"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                <span className="text-purple-400 font-bold">Rooftop Duel</span> — Shinigami Reiatsu slash vs Quincy Reishi arrow deflection
              </div>
              <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-[11px] rounded-lg border border-purple-500/30">
                Grade 1 Competitive
              </span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-crimson-600 hover:from-purple-500 hover:to-crimson-500 shadow-xl shadow-purple-950/80 hover:scale-[1.02] transition-all"
            >
              <Gift className="w-4 h-4 text-purple-200" />
              <span>Get Active Codes (7)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/weapon-tier-list"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-purple-800/40 hover:border-purple-600 transition-all"
            >
              <Sword className="w-4 h-4 text-purple-400" />
              <span>Weapon Tier List</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reroll Codes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Flame className="w-6 h-6 text-purple-400" />
              <span>Latest Active Type Soul Codes</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Copy free Clan, Weapon, and Element Reroll codes</p>
          </div>
          <Link href="/codes" className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVE_CODES.slice(0, 6).map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-purple-900/50 hover:border-purple-600/60 transition-all shadow-md"
            >
              <div className="space-y-1">
                <div className="font-mono text-base font-extrabold text-purple-200 tracking-wide flex items-center gap-2">
                  <span>{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Main Wiki Navigation Hub Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Explore Type Soul Guides</h2>
          <p className="text-sm text-slate-400">Everything you need for Shinigami, Arrancar, and Quincy progression</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/codes" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Reroll Codes
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Free Clan Rerolls, Weapon Rerolls, Element Strips, and Soul Tickets.
              </p>
            </div>
            <div className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Redeem Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link href="/weapon-tier-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sword className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Weapon Tier List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                S+ to F rankings for Kyoka Suigetsu, Ryujin Jakka, Gluttony, and Bows.
              </p>
            </div>
            <div className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>View Tier List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link href="/clan-tier-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Clan Rarity & Buffs
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Supreme (Kurosaki, Yamamoto, Zaraki) and Legendary clan stat boosts.
              </p>
            </div>
            <div className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Check Clan Rarity</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link href="/bankai-guide" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Bankai Quest Guide
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Step-by-step quest guide for Bankai, Resurreccion Etapa, and Voltstanding.
              </p>
            </div>
            <div className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Read Walkthrough</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* SEO Content & Game Overview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-extrabold text-white border-b border-purple-900/40 pb-4">
            What is Roblox Type Soul?
          </h2>
          <div className="text-sm text-slate-300 space-y-4 leading-relaxed">
            <p>
              <strong className="text-purple-300">Type Soul</strong> is a flagship action-RPG game created on Roblox by the Type Soul Development Team, inspired by Tite Kubo’s legendary anime series <em>Bleach</em>. In Type Soul, players can choose between three distinct factions: <strong className="text-purple-200">Shinigami (Soul Reapers)</strong>, <strong className="text-red-300">Arrancar (Hollows)</strong>, and <strong className="text-blue-300">Quincy</strong>.
            </p>
            <p>
              Progression requires completing quests, defeating boss Hollows in Hueco Mundo, engaging in intense Faction Wars in Karakura Town, and unlocking powerful release forms such as <strong>Shikai, Bankai, Resurreccion, and Voltstanding</strong>.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="glass-panel p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2 border-b border-purple-900/40 pb-4">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            <span>Frequently Asked Questions (FAQ)</span>
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <h3 className="text-sm font-bold text-white">How do I redeem codes in Type Soul?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Join the game on Roblox, press N on your keyboard to open the main menu, type or paste the code into the text input box located at the top-left, and press Enter to receive your free rerolls instantly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <h3 className="text-sm font-bold text-white">Where can I find the Official Type Soul Trello?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                The Official Type Soul Trello board provides detailed breakdowns of move scaling, skill tree costs, and item drop rates. You can access it directly from our official links section below.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/50">
              <h3 className="text-sm font-bold text-white">What are Supreme Clans in Type Soul?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Supreme Clans are the rarest clan rolls in the game with a 0.5% drop rate. They grant top-tier passive buffs such as +15-20 HP, +15 Reiatsu, and unique passive skills like Kurosaki’s Getsuga Tensho boost or Yamamoto’s burn immunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
