import type { Metadata } from 'next';
import { DollarSign, Search, Filter } from 'lucide-react';
import { VALUE_LIST_DATA, ValueItem } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Type Soul Value List (August 2026) — Reroll & Essence Item Values',
  description: 'Updated Type Soul trading value list. Check values in rerolls for Hallow Essence, Form Rerolls, Skill Boxes, and Elixirs.',
};

export default function ValueListPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-700/50">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          <span>Trading Values in Reroll Equivalents</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Type Soul <span className="text-purple-400">Value List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Current market trade values for rare essences, skill boxes, and reroll strips in Type Soul.
        </p>
      </div>

      {/* Value Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-purple-900/50 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-purple-950/80 text-purple-300 uppercase tracking-wider font-bold border-b border-purple-900/60">
              <tr>
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Estimated Value</th>
                <th className="px-6 py-4">Demand</th>
                <th className="px-6 py-4">Trading Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-950/60">
              {VALUE_LIST_DATA.map((item: ValueItem) => (
                <tr key={item.itemName} className="hover:bg-purple-950/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white text-sm">{item.itemName}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-slate-800 text-purple-300 border border-slate-700">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-emerald-400">{item.valueInRerolls}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      item.demand === 'Very High' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {item.demand}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 max-w-xs">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
