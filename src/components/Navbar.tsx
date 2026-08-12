'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Flame, Gift, Sword, Shield, BookOpen, DollarSign, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Codes', href: '/codes', icon: Gift },
    { name: 'Weapon Tier List', href: '/weapon-tier-list', icon: Sword },
    { name: 'Clan Tier List', href: '/clan-tier-list', icon: Shield },
    { name: 'Bankai Guide', href: '/bankai-guide', icon: BookOpen },
    { name: 'Value List', href: '/value-list', icon: DollarSign },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-crimson-600 flex items-center justify-center shadow-lg shadow-purple-950/80 group-hover:scale-105 transition-transform border border-purple-500/30">
              <Flame className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-purple-300 transition-colors">
                TYPE SOUL <span className="text-purple-400">WIKI</span>
              </span>
              <span className="block text-[10px] text-purple-400/80 font-mono -mt-1 uppercase tracking-widest">
                Codes & Tier Lists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-purple-900/40 border border-transparent hover:border-purple-800/50 transition-all"
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Play CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.roblox.com/games/11935914799/TYPE-SOUL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-crimson-600 hover:from-purple-500 hover:to-crimson-500 shadow-lg shadow-purple-950/80 border border-purple-400/30 hover:scale-[1.02] transition-all"
            >
              <span>Play on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-900/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-purple-900/40 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-purple-900/50 hover:text-white"
              >
                <Icon className="w-4 h-4 text-purple-400" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://www.roblox.com/games/11935914799/TYPE-SOUL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-purple-600 hover:bg-purple-500"
            >
              <span>Play Type Soul on Roblox</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
