"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { AfficheViewer } from "@/components/AfficheViewer";
import { BannerViewer } from "@/components/BannerViewer";
import { RitualsMenu } from "@/components/RitualsMenu";
import { PlacementSimulator } from "@/components/PlacementSimulator";
import { AiCampaignGenerator } from "@/components/AiCampaignGenerator";
import { DesignStory } from "@/components/DesignStory";
import { 
  Sparkles, 
  Printer, 
  Layers, 
  MapPin, 
  ChevronRight, 
  Compass, 
  CheckCircle2,
  SlidersHorizontal,
  Info
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("affiche");
  const [headline, setHeadline] = useState("L'Art de la Sérénité Masculine");
  const [subheadline, setSubheadline] = useState("Tétouan · Maroc");
  const [showBleedMarks, setShowBleedMarks] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleApplyHeadline = (newHeadline: string, newSubheadline: string) => {
    setHeadline(newHeadline);
    setSubheadline(newSubheadline);
    setActiveTab("affiche");
    // Scroll smoothly to top
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] selection:bg-[#D4AF37]/20 flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-[#24211E]/10 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFEB] to-[#FAF8F5] no-print">
        {/* Soft Ambient Texture */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8D4AA]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#24211E]/10 text-xs tracking-widest uppercase text-[#8C6D3B] font-medium shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A38048]" />
            <span>Direction Artistique Campagne 2026 · Tétouan</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1F1C18] text-balance max-w-4xl mx-auto">
            Campagne de Marque <span className="italic font-serif-luxury text-[#8C6D3B]">Minimaliste &amp; Luxe</span>
          </h1>

          <p className="text-sm sm:text-base text-[#665D50] max-w-2xl mx-auto font-light leading-relaxed">
            Élévation de l&apos;identité visuelle de <strong>Yousra Massage Pour Hommes</strong> vers un positionnement de sanctuaire de bien-être haut de gamme, décliné pour supports physiques et digitaux.
          </p>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "affiche", label: "Affiche Print (3:4)" },
              { id: "banner", label: "Bannière Digitale (16:9)" },
              { id: "rituals", label: "Carte des Soins & Tarifs" },
              { id: "simulation", label: "Mise en Situation Réelle" },
              { id: "generator", label: "Générateur IA de Slogans" },
              { id: "story", label: "Manifeste de Marque" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#24211E] text-[#FAF8F5] shadow-xs"
                    : "bg-white/80 hover:bg-white text-[#6B6358] hover:text-[#1F1C18] border border-[#24211E]/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {activeTab === "affiche" && (
          <div className="space-y-12">
            <AfficheViewer
              headline={headline}
              setHeadline={setHeadline}
              subheadline={subheadline}
              setSubheadline={setSubheadline}
              showBleedMarks={showBleedMarks}
              setShowBleedMarks={setShowBleedMarks}
              onPrint={handlePrint}
            />
          </div>
        )}

        {activeTab === "banner" && (
          <div className="space-y-12">
            <BannerViewer onPrint={handlePrint} />
          </div>
        )}

        {activeTab === "rituals" && (
          <div className="space-y-12">
            <RitualsMenu />
          </div>
        )}

        {activeTab === "simulation" && (
          <div className="space-y-12">
            <PlacementSimulator />
          </div>
        )}

        {activeTab === "generator" && (
          <div className="space-y-12">
            <AiCampaignGenerator onApplyHeadline={handleApplyHeadline} />
          </div>
        )}

        {activeTab === "story" && (
          <div className="space-y-12">
            <DesignStory />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#24211E]/10 bg-[#F4EFEB] py-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7268]">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-semibold tracking-widest text-[#1F1C18]">YOUSRA</span>
            <span>·</span>
            <span>Sanctuaire Masculin de Soins Thérapeutiques · Tétouan, Maroc</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("story")}
              className="hover:text-[#1F1C18] transition-colors cursor-pointer"
            >
              Direction Artistique
            </button>
            <button
              onClick={() => setActiveTab("rituals")}
              className="hover:text-[#1F1C18] transition-colors cursor-pointer"
            >
              Carte des Tarifs
            </button>
            <button
              onClick={handlePrint}
              className="hover:text-[#1F1C18] transition-colors cursor-pointer"
            >
              Imprimer l&apos;Affiche
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
