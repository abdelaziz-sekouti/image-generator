"use client";

import React from "react";
import { Download, Sparkles, SlidersHorizontal, Eye } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPrint: () => void;
  onOpenCustomizer?: () => void;
}

export function Navbar({ activeTab, setActiveTab, onPrint }: NavbarProps) {
  const navItems = [
    { id: "affiche", label: "Affiche Print" },
    { id: "banner", label: "Bannière Digitale" },
    { id: "rituals", label: "Carte des Soins" },
    { id: "simulation", label: "Simulateur In Situ" },
    { id: "generator", label: "Générateur IA" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#24211E]/10 transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Mark Single Element */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("affiche")}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-semibold tracking-[0.2em] text-[#1F1C18] block group-hover:text-[#8C6D3B] transition-colors">
              YOUSRA
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A7268] block -mt-0.5">
              Sanctuaire Masculin · Tétouan
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-md cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#24211E] text-[#FAF8F5] shadow-xs"
                    : "text-[#595248] hover:text-[#1F1C18] hover:bg-[#24211E]/5"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab("generator")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wide text-[#8C6D3B] border border-[#8C6D3B]/30 rounded-md hover:bg-[#8C6D3B]/10 transition-colors whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Créatif</span>
          </button>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#FAF8F5] bg-[#24211E] hover:bg-[#3D3730] rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Imprimer / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
