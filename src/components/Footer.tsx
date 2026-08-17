import Link from 'next/link';
import { Flame, ExternalLink, Heart } from 'lucide-react';
import MatrixNav from './MatrixNav';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-purple-900/40 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Col */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-crimson-600 flex items-center justify-center border border-purple-500/30">
              <Flame className="w-4 h-4 text-purple-200" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              TYPE SOUL <span className="text-purple-400">WIKI</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            The ultimate community database for Roblox Type Soul. Get updated reroll codes, weapon tier lists, clan rankings, Bankai quest guides, and item trading value lists.
          </p>
          <div className="text-[11px] text-slate-500">
            Disclaimer: Type Soul Wiki is an unofficial fansite. Roblox and Type Soul are registered trademarks of their respective owners.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">Wiki Guides</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/codes" className="hover:text-purple-300 transition-colors">
                Type Soul Reroll Codes
              </Link>
            </li>
            <li>
              <Link href="/weapon-tier-list" className="hover:text-purple-300 transition-colors">
                Weapon & Shikai Tier List
              </Link>
            </li>
            <li>
              <Link href="/clan-tier-list" className="hover:text-purple-300 transition-colors">
                Clan Rarity & Buff Tier List
              </Link>
            </li>
            <li>
              <Link href="/bankai-guide" className="hover:text-purple-300 transition-colors">
                How to Unlock Bankai Guide
              </Link>
            </li>
            <li>
              <Link href="/value-list" className="hover:text-purple-300 transition-colors">
                Reroll & Item Value List
              </Link>
            </li>
          </ul>
        </div>

        {/* External Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">Official Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.roblox.com/games/11935914799/TYPE-SOUL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <span>Play Type Soul (Roblox)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://trello.com/b/e4G5aQ0P/type-soul-trello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <span>Official Type Soul Trello</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/typesoul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <span>Official Discord Server</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <MatrixNav />

      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} Type Soul Wiki. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Built for Roblox Type Soul players with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
        </div>
      </div>
    </footer>
  );
}

