import type { Metadata } from 'next';
import { BookOpen, CheckCircle, ArrowRight, Zap, Target, ShieldCheck, Flame } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get Bankai in Type Soul — Quest & Boss Walkthrough',
  description: 'Complete step-by-step quest guide to unlock Bankai (Shinigami), Second Etapa (Arrancar), and Voltstanding (Quincy) in Roblox Type Soul.',
};

export default function BankaiGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-700/50">
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          <span>Stage 1 to Stage 3 Walkthrough</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          How to Get <span className="text-purple-400">Bankai</span> in Type Soul
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Complete guide for unlocking your Bankai fight, meeting Kisuke Urahara, and defeating your inner Zanpakuto spirit.
        </p>
      </div>

      {/* Step by Step Quest */}
      <div className="space-y-8">
        {/* Stage 1 */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-900/50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Stage 1: Reach Grade 1 & Speak to Kisuke</h2>
              <span className="text-xs text-purple-400">Prerequisite</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            First, you must reach <strong>Grade 1</strong> as a Shinigami by grinding Division Quests (Division 5 or Division 12 recommended). Once Grade 1, head to Karakura Town and locate <strong>Kisuke Urahara</strong> inside the shop to initiate your Bankai progression quest.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-900/50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Stage 2: The Grievous Kills Requirement</h2>
              <span className="text-xs text-amber-400">Main Grind</span>
            </div>
          </div>
          <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
            <p>You must complete three distinct kill requirements in Karakura Town or Hueco Mundo:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-purple-200">
              <li>Defeat 80 Hollows or 15 Bazz-B / Quincy NPCs</li>
              <li>Gripped 15 Enemy Players in Faction Wars</li>
              <li>Defeat 1 Clan Boss or BawaBawa / Jushiro Boss</li>
            </ul>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-900/50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg">
              3
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Stage 3: Inner Zanpakuto Spirit Boss Fight</h2>
              <span className="text-xs text-emerald-400">Final Test</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Meditate by pressing 'M' for 30 minutes inside Soul Society. Once teleported to the inner dimension, interact with your Zanpakuto. You must fight and defeat your own Bankai clone. Tip: Use high mobility Speed moves and block counter their initial burst.
          </p>
        </div>
      </div>
    </div>
  );
}
