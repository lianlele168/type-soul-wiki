import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Zap, Target, ShieldCheck, Flame, HelpCircle, Skull, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/bankai-guide',
  },

  title: 'How to Get Bankai in Type Soul — Stage 1 to Stage 3 Complete Guide',
  description: 'Complete Roblox Type Soul Bankai walkthrough. Step-by-step quest requirements, grip farming strategies, Zanpakuto boss fight mechanics, and cheese tactics.',
  keywords: ['how to get bankai type soul', 'type soul bankai quest', 'type soul bankai stage 2', 'type soul bankai boss fight', 'type soul progression guide']
};

export default function BankaiGuidePage() {
  const bankaiStages = [
    {
      stage: '1',
      title: 'Stage 1: Attaining Grade 1 & Kisuke Activation',
      tag: 'Prerequisite Requirement',
      desc: 'To begin the Bankai trials, your Shinigami character must attain Grade 1. Grind Division Quests—specifically Division 5 (Hollow purging) or Division 12 (research minigames)—to rapidly accumulate required experience. Once Grade 1 is confirmed in your status menu, journey to Karakura Town and locate Kisuke Urahara behind the counter in the Urahara Shop. Interact with him until he comments on your spiritual pressure, which officially activates your Stage 2 kill trackers.',
      proTip: 'Do not attempt Stage 2 kills before speaking with Kisuke; unactivated kills will not count toward your progression meter.'
    },
    {
      stage: '2',
      title: 'Stage 2: The Grievous Kills & Faction War Trophies',
      tag: 'The Core Combat Grind',
      desc: 'Stage 2 requires fulfilling three distinct combat quotas across Karakura Town and Hueco Mundo. You must execute 80 Hollow NPC kills (or 15 elite Bazz-B / Quincy raid enemies), survive and grip 15 opposing faction players in active Faction Wars, and defeat at least 1 Bawabawa world boss in Hueco Mundo or Jawabawa in the Soul Society. Dying resets your partial kill streaks in certain game versions, so travel in coordinated player parties.',
      proTip: 'Join Clan Raids and Faction Wars during peak server hours. Gripping downed opponents during Clan Wars is the fastest, safest method to complete the 15-player grip requirement.'
    },
    {
      stage: '3',
      title: 'Stage 3: Meditation & The Zanpakuto Inner Boss Duel',
      tag: 'The Final Boss Encounter',
      desc: 'After satisfying all Stage 2 kill quotas, find a tranquil sanctuary in the Soul Society and initiate Meditation (press M). Meditate through three full cycles (lasting approximately 45 minutes total) until you are teleported into the inner realm of your Zanpakuto spirit. Here, you must face your own spirit in a 1v1 duel. The boss possesses your exact skill tree, speed, and Reiatsu capacity, but deals 1.5x scaled damage.',
      proTip: 'Equip Kido spells with heavy knockback like Senka or Haien. Maintain mid-range spacing to bait out the boss dashes, parry their third light attack, and punish with guaranteed True Combo rotations.'
    }
  ];

  const alternativeUnlocks = [
    { race: 'Shinigami (Soul Reaper)', awakening: 'Bankai', stages: 'Grade 1 ➔ 15 Grips + Bawabawa ➔ Zanpakuto Boss Fight' },
    { race: 'Arrancar (Hollow)', awakening: 'Full Res / Segunda', stages: 'Grade 1 ➔ 10 Elite Grips + Hueco Mundo Raids ➔ Inner Hollow Minigame' },
    { race: 'Quincy (Wandenreich)', awakening: 'Voltstanding', stages: 'Grade 1 ➔ 15 Shinigami Grips + Wandenreich Quota ➔ Glare Boss Duel' },
  ];

  const faqs = [
    {
      q: 'Do you lose your Bankai if you die in Type Soul?',
      a: 'No. Once unlocked, your Bankai is permanently bound to your character slot. However, during the Stage 3 boss duel, failing the fight places your inner realm on a 1-hour cooldown before you can challenge your spirit again.'
    },
    {
      q: 'Can you cheese the Type Soul Bankai boss fight?',
      a: 'Yes. The most consistent cheese strategy is investing in Hakuda or Speed builds. By equipping Geppo and dashing onto the perimeter pillars within the meditation arena, you can bait the AI into repetitive recovery loops and whittle its health down safely.'
    },
    {
      q: 'How many grips do you need for Bankai in Type Soul?',
      a: 'You need exactly 15 player grips in Faction Wars or Clan Raids, alongside 80 Hollow kills and 1 World Boss kill (Bawabawa or Jawabawa).'
    },
    {
      q: 'What does Bankai Mode activate in combat?',
      a: 'Pressing G at full Reiatsu bar unleashes your Bankai, granting a 35% damage reduction aura, custom mythical weapon movesets, hyperarmor on heavy swings, and amplified elemental status effects.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-purple-900/50 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple-900/30 border border-purple-700/40 rounded-full text-purple-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span>Complete Stage 1-3 Awakening Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How to Get <span className="text-purple-400">Bankai</span> in Type Soul
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          The ultimate master guide for awakening your Bankai in Roblox Type Soul. Learn the exact requirements from Grade 1 progression, Faction War grip farming techniques, meditation cycles, and how to defeat your inner Zanpakuto spirit.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-xl text-xs hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Clan Reroll & Stat Allocator</span>
          </Link>
          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-purple-800/40 text-slate-200 font-bold rounded-xl text-xs hover:bg-purple-950/50 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Free Reroll Codes</span>
          </Link>
        </div>
      </div>

      {/* Awakening Screenshot Showcase */}
      <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
        <img
          src="/images/type-soul-shikai.webp"
          alt="Roblox Type Soul Weapon Awakening Ceremony Shikai and Bankai Meditation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
          <div className="text-xs sm:text-sm text-slate-200 font-medium">
            <span className="text-purple-400 font-bold">Inner Sanctum</span> — Stage 3 Zanpakuto spirit meditation & Bankai awakening
          </div>
          <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-[11px] rounded-lg border border-cyan-500/30">
            Ascended Ritual
          </span>
        </div>
      </div>

      {/* 3-Stage Progression Walkthrough */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Three-Stage Bankai Progression Pathway</h2>
          <p className="text-xs text-slate-400 mt-1">
            Carefully follow these chronological phases to prevent wasted combat kills and reset progress:
          </p>
        </div>

        <div className="space-y-6">
          {bankaiStages.map((st) => (
            <div key={st.stage} className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-900/40 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-extrabold text-xl shrink-0">
                  {st.stage}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{st.title}</h3>
                  <span className="text-xs text-purple-400 font-medium">{st.tag}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{st.desc}</p>
              <div className="bg-purple-950/50 border border-purple-800/40 rounded-xl p-3.5 text-xs text-purple-200 flex items-start gap-2.5">
                <Target className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-purple-300">Tactical Tip: </span>
                  <span>{st.proTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faction Comparison Table */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Awakening Pathways Across All Factions</h2>
          <p className="text-xs text-slate-400 mt-1">
            Compare progression mechanics for Shinigami, Arrancar, and Quincy branches:
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-x-auto border border-purple-900/40">
          <table className="w-full text-left text-xs">
            <thead className="bg-purple-950/80 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-purple-900/60">
              <tr>
                <th className="p-4">Faction Archetype</th>
                <th className="p-4">Ultimate Awakening Form</th>
                <th className="p-4">Full Progression Pipeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-900/40 text-slate-300">
              {alternativeUnlocks.map((u) => (
                <tr key={u.race} className="hover:bg-purple-950/30 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{u.race}</td>
                  <td className="p-4 text-purple-300 font-semibold">{u.awakening}</td>
                  <td className="p-4 text-slate-300">{u.stages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          <span>Frequently Asked Questions (Type Soul Bankai FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border border-purple-900/40 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
