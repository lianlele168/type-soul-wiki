'use client';

import { useState, useMemo } from 'react';
import { Flame, Sparkles, Dices, Shield, Zap, Check, Copy, Trophy, RefreshCw } from 'lucide-react';

interface RollResult {
  clan: string;
  rarity: 'Supreme' | 'Legendary' | 'Rare' | 'Common';
  buffs: string;
}

const SUPREME_CLANS = [
  { clan: 'Kurosaki (Shinigami)', buffs: '+15 Reiatsu, +10 HP, Fast Reiatsu Regen, Getsuga Boost' },
  { clan: 'Yamamoto (Shinigami)', buffs: '+20 HP, +10 Stance Break, Burn Immunity' },
  { clan: 'Zaraki (Shinigami)', buffs: '+25 HP, +15 Posture, Stun Resistance' },
  { clan: 'Cifer (Arrancar)', buffs: '+15 Spirit, +10 Reiatsu, Second Etapa Passive' },
  { clan: 'Jaegerjaquez (Arrancar)', buffs: '+15 Speed, +10 HP, Flash Step Multiplier' },
  { clan: 'Vandenreich (Quincy)', buffs: '+20 Spirit, +15 Reiatsu, Reishi Arrow +25%' },
];

const LEGENDARY_CLANS = [
  { clan: 'Shiba (Shinigami)', buffs: '+10 HP, +5 Spirit, Fireworks Knockback' },
  { clan: 'Hitsugaya (Shinigami)', buffs: '+10 Spirit, Freeze Duration +10%' },
  { clan: 'Lousenbarn (Quincy)', buffs: '+10 Speed, Quincy Bow Range +15%' },
];

const COMMON_CLANS = [
  { clan: 'Asano', buffs: '+2 HP' },
  { clan: 'Kojima', buffs: '+2 Spirit' },
  { clan: 'Honjo', buffs: '+2 Speed' },
  { clan: 'Inoue', buffs: '+3 Healing' },
];

export default function TypeSoulCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'reroll' | 'stats'>('reroll');

  // Reroll Simulator State
  const [totalRolls, setTotalRolls] = useState(0);
  const [supremeCount, setSupremeCount] = useState(0);
  const [legendaryCount, setLegendaryCount] = useState(0);
  const [history, setHistory] = useState<RollResult[]>([]);
  const [isRolling, setIsRolling] = useState(false);

  // Stat Allocator State (Max 65 Points)
  const MAX_POINTS = 65;
  const [kendo, setKendo] = useState(40);
  const [speed, setSpeed] = useState(15);
  const [kido, setKido] = useState(10);
  const [hakuda, setHakuda] = useState(0);
  const [copied, setCopied] = useState(false);

  const usedPoints = kendo + speed + kido + hakuda;
  const remainingPoints = MAX_POINTS - usedPoints;

  const derivedStats = useMemo(() => {
    const baseHp = 100 + kendo * 2.5 + hakuda * 3;
    const basePosture = 80 + kendo * 1.8 + hakuda * 1.5;
    const baseReiatsu = 120 + kido * 3.5;
    const flashSteps = Math.min(5, 2 + Math.floor(speed / 15));

    let archetype = 'Hybrid Warrior';
    if (kendo >= 40) archetype = 'Pure Kendo Blade Master';
    else if (speed >= 40) archetype = 'Flash-Step Speed Assassin';
    else if (kido >= 40) archetype = 'Cero / Hado Sorcerer';
    else if (hakuda >= 40) archetype = 'Hakuda Iron Brawler';

    return {
      baseHp: Math.round(baseHp),
      basePosture: Math.round(basePosture),
      baseReiatsu: Math.round(baseReiatsu),
      flashSteps,
      archetype,
    };
  }, [kendo, speed, kido, hakuda]);

  const handleRoll = (count: number) => {
    setIsRolling(true);
    setTimeout(() => {
      let newSupreme = 0;
      let newLeg = 0;
      const rolls: RollResult[] = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        let res: RollResult;
        if (rand < 0.5) {
          newSupreme++;
          const rolled = SUPREME_CLANS[Math.floor(Math.random() * SUPREME_CLANS.length)];
          res = { clan: rolled.clan, rarity: 'Supreme', buffs: rolled.buffs };
        } else if (rand < 3.5) {
          newLeg++;
          const rolled = LEGENDARY_CLANS[Math.floor(Math.random() * LEGENDARY_CLANS.length)];
          res = { clan: rolled.clan, rarity: 'Legendary', buffs: rolled.buffs };
        } else {
          const rolled = COMMON_CLANS[Math.floor(Math.random() * COMMON_CLANS.length)];
          res = { clan: rolled.clan, rarity: 'Common', buffs: rolled.buffs };
        }
        if (rolls.length < 5) rolls.push(res);
      }

      setTotalRolls((prev) => prev + count);
      setSupremeCount((prev) => prev + newSupreme);
      setLegendaryCount((prev) => prev + newLeg);
      setHistory((prev) => [...rolls, ...prev.slice(0, 5)]);
      setIsRolling(false);
    }, 200);
  };

  const copyBuild = () => {
    const text = `Type Soul Meta Build (${derivedStats.archetype}):\n• Kendo: ${kendo}\n• Speed: ${speed}\n• Kido: ${kido}\n• Hakuda: ${hakuda}\n• Derived HP: ${derivedStats.baseHp} | Posture: ${derivedStats.basePosture} | Reiatsu: ${derivedStats.baseReiatsu}\nCalculated on https://typesoul.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('reroll')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'reroll'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Dices className="w-4 h-4" />
          <span>Clan Reroll Simulator</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('stats')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'stats'
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Stat Build Allocator</span>
        </button>
      </div>

      {/* 1. Reroll Simulator */}
      {activeTab === 'reroll' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-indigo-400" />
                <span>Simulate Clan Rerolls (0.5% Supreme Odds)</span>
              </h2>
              <span className="text-xs text-slate-400">1 in 200 Probability</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                disabled={isRolling}
                onClick={() => handleRoll(1)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 1x
              </button>
              <button
                disabled={isRolling}
                onClick={() => handleRoll(10)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400 shadow-md shadow-indigo-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 10x
              </button>
              <button
                disabled={isRolling}
                onClick={() => handleRoll(100)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Reroll 100x Speed
              </button>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400">Supreme Clans Available (0.5%)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SUPREME_CLANS.map((c) => (
                  <div key={c.clan} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-0.5">
                    <span className="font-bold text-indigo-300 block">{c.clan}</span>
                    <span className="text-[11px] text-slate-400 block">{c.buffs}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/40 p-6 rounded-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Roll Statistics</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Spins</span>
                <span className="text-xl font-black text-white">{totalRolls}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-indigo-400 block">Supreme Clans</span>
                <span className="text-xl font-black text-indigo-300">{supremeCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-yellow-400 block">Legendary Clans</span>
                <span className="text-xl font-black text-yellow-300">{legendaryCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Reroll Cost Est.</span>
                <span className="text-xl font-black text-amber-400">R$ {totalRolls * 50}</span>
              </div>
            </div>

            {history.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-400">Recent Rerolls:</span>
                <div className="space-y-1">
                  {history.map((h, idx) => (
                    <div key={idx} className="text-xs p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-200 font-medium">{h.clan}</span>
                      <span className={`text-[11px] font-bold ${h.rarity === 'Supreme' ? 'text-indigo-400' : h.rarity === 'Legendary' ? 'text-yellow-400' : 'text-slate-500'}`}>
                        {h.rarity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Stat Allocator */}
      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" />
                <span>Distribute Skill Points (Max 65)</span>
              </h2>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${remainingPoints >= 0 ? 'bg-slate-950 text-indigo-300 border-indigo-700' : 'bg-rose-950 text-rose-300 border-rose-700'}`}>
                Remaining: {remainingPoints} Pts
              </span>
            </div>

            <div className="space-y-4">
              {/* Kendo */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Kendo (Swordsmanship & Posture)</span>
                  <span className="text-indigo-400 font-bold">{kendo} / 65</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="65"
                  value={kendo}
                  onChange={(e) => setKendo(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              {/* Speed */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Speed (Flash Steps & Evasion)</span>
                  <span className="text-indigo-400 font-bold">{speed} / 65</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="65"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              {/* Kido */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Kido (Reiatsu Spells & Blast Damage)</span>
                  <span className="text-indigo-400 font-bold">{kido} / 65</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="65"
                  value={kido}
                  onChange={(e) => setKido(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>

              {/* Hakuda */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Hakuda (Hand-to-Hand & Stun Posture)</span>
                  <span className="text-indigo-400 font-bold">{hakuda} / 65</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="65"
                  value={hakuda}
                  onChange={(e) => setHakuda(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Derived Stats Panel */}
          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-900/40 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">Derived Combat Stats</h3>
              <button
                onClick={copyBuild}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>

            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
              <span className="text-[11px] text-indigo-400 font-semibold block">Build Classification</span>
              <span className="text-base font-bold text-white">{derivedStats.archetype}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Health</span>
                <span className="text-xl font-black text-emerald-400">{derivedStats.baseHp} HP</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Posture Cap</span>
                <span className="text-xl font-black text-cyan-400">{derivedStats.basePosture}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Reiatsu Pool</span>
                <span className="text-xl font-black text-purple-400">{derivedStats.baseReiatsu}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Flash Steps</span>
                <span className="text-xl font-black text-yellow-400">{derivedStats.flashSteps}x</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
