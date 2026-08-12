'use client';

import { useState } from 'react';
import { Dices, Sparkles, RefreshCw, Trophy, AlertCircle } from 'lucide-react';

interface RollResult {
  clan: string;
  rarity: 'Supreme' | 'Legendary' | 'Rare' | 'Common';
  buffs: string;
}

export default function ClanSimulator() {
  const [totalRolls, setTotalRolls] = useState(0);
  const [currentResult, setCurrentResult] = useState<RollResult | null>(null);
  const [history, setHistory] = useState<RollResult[]>([]);
  const [isRolling, setIsRolling] = useState(false);

  const supremeClans = [
    { clan: 'Kurosaki (Shinigami)', buffs: '+15 Reiatsu, +10 HP, Fast Reiatsu Regeng, Getsuga Boost' },
    { clan: 'Yamamoto (Shinigami)', buffs: '+20 HP, +10 Stance Break, Burn Immunity' },
    { clan: 'Zaraki (Shinigami)', buffs: '+25 HP, +15 Posture, Stun Resistance' },
    { clan: 'Cifer (Arrancar)', buffs: '+15 Spirit, +10 Reiatsu, Second Etapa Passive' },
    { clan: 'Jaegerjaquez (Arrancar)', buffs: '+15 Speed, +10 HP, Flash Step Multiplier' },
    { clan: 'Vandenreich (Quincy)', buffs: '+20 Spirit, +15 Reiatsu, Reishi Arrow +25%' },
  ];

  const legendaryClans = [
    { clan: 'Shiba (Shinigami)', buffs: '+10 HP, +5 Spirit, Fireworks Knockback' },
    { clan: 'Hitsugaya (Shinigami)', buffs: '+10 Spirit, Freeze Duration +10%' },
    { clan: 'Lousenbarn (Quincy)', buffs: '+10 Speed, Quincy Bow Range +15%' },
  ];

  const commonClans = [
    { clan: 'Asano (Common)', buffs: '+2 HP' },
    { clan: 'Kojima (Common)', buffs: '+2 Spirit' },
    { clan: 'Honjo (Common)', buffs: '+2 Speed' },
  ];

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      setTotalRolls((prev) => prev + 1);
      const rand = Math.random() * 100;

      let result: RollResult;
      if (rand < 0.5) {
        // Supreme (0.5%)
        const rolled = supremeClans[Math.floor(Math.random() * supremeClans.length)];
        result = { clan: rolled.clan, rarity: 'Supreme', buffs: rolled.buffs };
      } else if (rand < 3.5) {
        // Legendary (3%)
        const rolled = legendaryClans[Math.floor(Math.random() * legendaryClans.length)];
        result = { clan: rolled.clan, rarity: 'Legendary', buffs: rolled.buffs };
      } else {
        // Common (96.5%)
        const rolled = commonClans[Math.floor(Math.random() * commonClans.length)];
        result = { clan: rolled.clan, rarity: 'Common', buffs: rolled.buffs };
      }

      setCurrentResult(result);
      setHistory((prev) => [result, ...prev.slice(0, 4)]);
      setIsRolling(false);
    }, 200);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-900/60 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/40 pb-4">
        <div>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Dices className="w-5 h-5 text-purple-400" />
            <span>Interactive Clan Reroll Simulator</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Test your luck with official 0.5% Supreme Clan drop rates before spending real rerolls in-game!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Total Rolls:</span>
          <span className="px-3 py-1 rounded-lg bg-purple-950 text-purple-300 font-mono font-bold border border-purple-800">
            {totalRolls}
          </span>
        </div>
      </div>

      {/* Simulator Display Box */}
      <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-800/40 text-center space-y-4 min-h-[160px] flex flex-col justify-center items-center">
        {currentResult ? (
          <div className="space-y-2 animate-fade-in">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentResult.rarity} Clan Drop!</span>
            </div>
            <div className="text-2xl font-black text-white">{currentResult.clan}</div>
            <div className="text-xs text-purple-200 max-w-md mx-auto">{currentResult.buffs}</div>
          </div>
        ) : (
          <div className="text-slate-400 text-xs space-y-1">
            <Trophy className="w-8 h-8 mx-auto text-purple-500/50 mb-2" />
            <div>Click "Roll Reroll" to simulate a Type Soul Clan Roll</div>
            <div className="text-[11px] text-slate-500">Supreme (0.5%) | Legendary (3%) | Common (96.5%)</div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleRoll}
          disabled={isRolling}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-crimson-600 hover:from-purple-500 hover:to-crimson-500 shadow-lg shadow-purple-950/80 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
          <span>{isRolling ? 'Rolling...' : 'Roll Clan Reroll'}</span>
        </button>
      </div>

      {/* History Log */}
      {history.length > 0 && (
        <div className="pt-2 space-y-2 border-t border-purple-950">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Recent Pulls History</div>
          <div className="flex flex-wrap gap-2">
            {history.map((item, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded text-[11px] border ${
                  item.rarity === 'Supreme'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                    : item.rarity === 'Legendary'
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                {item.clan}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
