import type { Metadata } from 'next';
import { Shield, Sparkles, Star, Zap } from 'lucide-react';
import { CLAN_TIER_DATA, ClanItem } from '@/data/wikiData';
import ClanSimulator from '@/components/ClanSimulator';

export const metadata: Metadata = {
  alternates: {
    canonical: '/clan-tier-list',
  },

  title: 'Type Soul Clan Tier List (September 2026) — Supreme & Legendary Rarity',
  description: 'Complete Type Soul Clan Tier List. Supreme (Kurosaki, Yamamoto, Zaraki) and Legendary clan drop rates, buffs, and interactive simulator.',
};

export default function ClanTierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-700/50">
          <Shield className="w-3.5 h-3.5 text-purple-400" />
          <span>0.5% Supreme Drop Rates</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Type Soul Clan <span className="text-purple-400">Tier List & Simulator</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Detailed breakdown of all Shinigami, Arrancar, and Quincy clans. Test your luck with our interactive simulator below!
        </p>
      </div>

      {/* Interactive Clan Simulator Component */}
      <ClanSimulator />

      {/* Clan Rarity Breakdown Cards */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-purple-900/40 pb-3">
          All Supreme & Legendary Clan Buffs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLAN_TIER_DATA.map((clan: ClanItem) => (
            <div
              key={clan.name}
              className="glass-panel p-6 rounded-2xl border border-purple-900/50 hover:border-purple-500/60 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-white">{clan.name}</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {clan.rarity}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 border border-slate-700">
                  {clan.race}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-1">
                <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">Clan Buffs & Passives</div>
                <p className="text-xs text-slate-200 leading-relaxed">{clan.buffs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
