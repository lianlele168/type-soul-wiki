import type { Metadata } from 'next';
import { Gift, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, Flame } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  alternates: {
    canonical: '/codes',
  },

  title: `Type Soul Codes — ${ACTIVE_CODES.length} Working Codes + ${EXPIRED_CODES.length} Expired`,
  description: `The ${ACTIVE_CODES.length} working Type Soul codes for locked clan, element and weapon rerolls, elixirs and skill boxes, plus a ${EXPIRED_CODES.length}-entry archive of retired codes.`,
};

const faqs = [
  {
    q: 'How do I redeem codes in Roblox Type Soul?',
    a: 'Launch Type Soul and wait until you have loaded into the main area, then click the Gift Box icon in the top-left corner of the screen. Paste one code into the text field and press Enter. Rewards go to your inventory rather than applying automatically, so check there if nothing seems to happen.',
  },
  {
    q: 'Why is the code box rejecting everything I type?',
    a: 'You are below Semi-Grade 2. Type Soul gates code redemption behind that rank, so a brand-new character cannot redeem any code at all — this catches out most players who arrive straight from a codes page. Expect an hour or two of quests and mob clearing to get there. Once you are past the gate, the other three causes are case sensitivity, a trailing space picked up while copying, and a code that has already been used on your account.',
  },
  {
    q: 'How do I get free clan and weapon rerolls in Type Soul?',
    a: 'Redeem the working codes above first, because rerolls are the entire progression system — your clan, element, weapon and Shikai all come out of a roll. Beyond codes, the repeatable sources are Clan Wars, Karakura Town raids and event milestones. Since the game added permadeath, a bad roll costs far more than it used to, which makes every free reroll worth claiming.',
  },
  {
    q: 'How many Type Soul codes are working right now?',
    a: `${ACTIVE_CODES.length}. Type Soul retires codes faster than most Roblox games its size: the developer issues one to mark a milestone and often pulls it within the week. Anything that stops redeeming is moved to the archive below rather than deleted, so a code you half-remember from a stream can be confirmed dead here in seconds.`,
  },
  {
    q: 'Where do new Type Soul codes appear first?',
    a: 'The official Type Soul Discord, usually attached to a patch post in the update-log or announcements channel rather than posted on their own. The public Type Soul Info V2 Trello board is the better resource for mechanics, but not for codes.',
  },
];

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Working Type Soul Codes',
    numberOfItems: ACTIVE_CODES.length,
    itemListElement: ACTIVE_CODES.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Type Soul Code: ${c.code}`,
      description: c.reward,
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Cross-checked against four public code trackers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Type Soul Codes
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {ACTIVE_CODES.length} working Type Soul codes for locked clan, element and weapon rerolls, elixirs and skill box choosers. Below them sits an archive of {EXPIRED_CODES.length} retired codes.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/40 pb-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-purple-400" />
            <span>Working Codes ({ACTIVE_CODES.length})</span>
          </h2>
          <span className="text-xs text-purple-300 font-mono">
            Case-sensitive — copy rather than type
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
            <h3 className="text-sm font-bold text-white">Reach Semi-Grade 2</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Load into your character and grind to Semi-Grade 2 first. Below that rank the code box rejects every entry.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900/80 text-purple-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Open the Gift Box</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the Gift Box icon in the top-left corner of the screen to open the redemption field.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-900/80 text-purple-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Paste &amp; Enter</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paste one code and hit Enter. Check your inventory — rewards land there rather than equipping themselves.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-900/40">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Server state:</strong> codes issued during or just after a shutdown sometimes only register on freshly started servers. If a code fails with no error message, rejoin before assuming it is dead.
          </p>
        </div>
      </section>

      {/* Expired Codes List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <p className="text-xs text-slate-500 -mt-2">
          Kept rather than deleted, so a code you remember from a stream can be confirmed dead in one glance. The developer rarely publishes what a retired code paid out, so where no payout was documented we say so instead of inventing one.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-start gap-2 text-xs opacity-70">
              <div className="space-y-0.5">
                <div className="font-mono text-slate-400 line-through">{item.code}</div>
                <div className="text-[10px] text-slate-500">{item.reward}</div>
              </div>
              <span className="text-[10px] text-red-400/80 shrink-0">Expired</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-purple-900/40 pb-4">
          <CheckCircle2 className="w-6 h-6 text-purple-400" />
          <span>Type Soul Codes FAQ</span>
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-bold text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel p-6 rounded-2xl border border-purple-900/40">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Where new codes come from</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
          Codes appear first in the official Type Soul Discord, usually attached to a patch post in the update-log channel rather than announced on their own. The developer pulls them quickly, so redeem on the day you find them rather than saving a list for later.
        </p>
      </section>
    </div>
  );
}
