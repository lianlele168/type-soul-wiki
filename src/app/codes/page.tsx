import type { Metadata } from 'next';
import { Gift, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, Flame } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Type Soul Codes (August 2026) — Free Rerolls & Tickets',
  description: 'All active Type Soul codes for free Clan Rerolls, Weapon Rerolls, Element Strips, and Soul Tickets. Updated daily.',
};

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Roblox Type Soul?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Launch Type Soul, load into your character, press the N key on your keyboard to open your inventory menu, paste your code into the top-left text field, and press Enter.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to get free Clan Rerolls and Weapon Rerolls in Type Soul?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Redeem active promo codes listed on this wiki, participate in Clan Wars, complete Karakura Town raids, or buy reroll tickets using Robux.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why did my Type Soul code not work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type Soul codes expire rapidly during update releases. Ensure your character is spawned in-game and that capitalization matches strictly.',
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Last Tested in Roblox: August 17, 2026 — 100% Working</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Type Soul Codes <span className="text-purple-400">(August 2026)</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Redeem these official active Roblox Type Soul codes for free Clan Rerolls, Weapon Rerolls, Element Rerolls, and Blue Elixirs.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/40 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-400" />
            <span>Active Reroll Codes ({ACTIVE_CODES.length})</span>
          </h2>
          <span className="text-xs text-purple-300 font-mono">
            Click 'Copy' & paste in-game (Press N)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-purple-900/60 hover:border-purple-500/80 transition-all shadow-lg"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-extrabold text-purple-200">{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
                {item.addedDate && <div className="text-[10px] text-slate-500">Verified: {item.addedDate}</div>}
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem Step-by-Step */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-purple-900/40 pb-4">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <span>How to Redeem Codes in Type Soul</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900/80 text-purple-300 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Open Roblox</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch Roblox Type Soul and load into your character (Shinigami, Arrancar, or Quincy).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900/80 text-purple-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Press 'N' Key</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Press the 'N' key on your keyboard to open the main inventory and settings menu overlay.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900/80 text-purple-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Paste Code & Enter</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Locate the text field in the top left, paste your active code, and hit Enter to claim your rerolls.
            </p>
          </div>
        </div>
      </section>

      {/* Expired Codes List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-center text-xs opacity-60">
              <span className="font-mono text-slate-400 line-through">{item.code}</span>
              <span className="text-[10px] text-red-400/80">Expired</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

