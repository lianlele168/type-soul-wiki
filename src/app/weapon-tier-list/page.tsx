import type { Metadata } from 'next';
import { Sword, Trophy, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import { WEAPON_TIER_DATA, WeaponTierItem } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/weapon-tier-list',
  },

  title: 'Type Soul Weapon Tier List — Best Weapons & Shikai',
  description: 'Complete Type Soul weapon and Shikai / Resurreccion tier list. Compare S+ tier weapons, scaling, and key PvP abilities.',
};

export default function WeaponTierListPage() {
  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'S+':
        return 'bg-gradient-to-r from-amber-500 to-crimson-500 text-white font-black border-amber-400/50';
      case 'S':
        return 'bg-purple-600/30 text-purple-300 font-bold border-purple-500/40';
      case 'A':
        return 'bg-blue-600/30 text-blue-300 font-bold border-blue-500/40';
      default:
        return 'bg-slate-700/30 text-slate-300 border-slate-600/40';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-700/50">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span> Meta Rankings</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Type Soul Weapon <span className="text-purple-400">Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Comprehensive ranking of all Shinigami, Arrancar, and Quincy weapons and Shikai releases based on PvP burst damage, crowd control, and scaling.
        </p>
      </div>

      {/* Tier Breakdown Cards */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {WEAPON_TIER_DATA.map((weapon: WeaponTierItem) => (
            <div
              key={weapon.name}
              className="glass-panel p-6 rounded-2xl border border-purple-900/50 hover:border-purple-500/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs border ${getTierBadge(weapon.tier)}`}>
                    Tier {weapon.tier}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-purple-300 border border-slate-700">
                    {weapon.race}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Scaling: {weapon.scaling}</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">{weapon.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{weapon.description}</p>
              </div>

              <div className="space-y-2 md:text-right">
                <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">Key Moves</div>
                <div className="flex flex-wrap md:justify-end gap-1.5">
                  {weapon.keyAbilities.map((ability) => (
                    <span key={ability} className="px-2.5 py-1 rounded-md text-[11px] bg-purple-950/60 text-purple-200 border border-purple-800/40">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
