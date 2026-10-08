"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Printer, 
  Maximize2, 
  Layers, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  SlidersHorizontal,
  Share2
} from "lucide-react";
import { INITIAL_SERVICES } from "@/lib/campaign-data";

interface AfficheViewerProps {
  headline: string;
  setHeadline: (h: string) => void;
  subheadline: string;
  setSubheadline: (s: string) => void;
  showBleedMarks: boolean;
  setShowBleedMarks: (b: boolean) => void;
  onPrint: () => void;
}

export function AfficheViewer({
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  showBleedMarks,
  setShowBleedMarks,
  onPrint
}: AfficheViewerProps) {
  const [frameStyle, setFrameStyle] = useState<"brass" | "walnut" | "deckle" | "minimal">("brass");
  const [showPricingOverlay, setShowPricingOverlay] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFrameClasses = () => {
    switch (frameStyle) {
      case "brass":
        return "p-6 sm:p-8 bg-[#EFEAE1] border-[12px] sm:border-[16px] border-[#C2A36B] shadow-2xl shadow-[#1F1C18]/15 ring-1 ring-[#94743C]/40";
      case "walnut":
        return "p-6 sm:p-8 bg-[#EFEAE1] border-[14px] sm:border-[18px] border-[#2C2117] shadow-2xl shadow-black/25 ring-1 ring-[#17110C]";
      case "deckle":
        return "p-4 sm:p-6 bg-[#FAF7F0] shadow-xl shadow-[#1F1C18]/10 border border-[#DDD5C5]";
      case "minimal":
      default:
        return "p-0 border border-[#24211E]/10 shadow-xl shadow-[#1F1C18]/10";
    }
  };

  return (
    <div className="space-y-8">
      {/* Control Bar for Print & Styling */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/70 backdrop-blur-md rounded-xl border border-[#24211E]/10 no-print">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#7A7268] font-medium">
            Finition Cadre :
          </span>
          <div className="flex items-center gap-1.5 p-1 bg-[#F5EFEB] rounded-lg">
            <button
              onClick={() => setFrameStyle("brass")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                frameStyle === "brass" ? "bg-white text-[#1F1C18] shadow-xs" : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              Laiton Brossé
            </button>
            <button
              onClick={() => setFrameStyle("walnut")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                frameStyle === "walnut" ? "bg-white text-[#1F1C18] shadow-xs" : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              Noyer Précieux
            </button>
            <button
              onClick={() => setFrameStyle("deckle")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                frameStyle === "deckle" ? "bg-white text-[#1F1C18] shadow-xs" : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              Papier Cuve
            </button>
            <button
              onClick={() => setFrameStyle("minimal")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                frameStyle === "minimal" ? "bg-white text-[#1F1C18] shadow-xs" : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              Plein Cadre
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPricingOverlay(!showPricingOverlay)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
              showPricingOverlay
                ? "bg-[#24211E] text-white border-[#24211E]"
                : "bg-white text-[#595248] border-[#24211E]/15 hover:border-[#24211E]/30"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{showPricingOverlay ? "Tarifs Masqués" : "Afficher Tarifs"}</span>
          </button>

          <button
            onClick={() => setShowBleedMarks(!showBleedMarks)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
              showBleedMarks
                ? "bg-[#8C6D3B] text-white border-[#8C6D3B]"
                : "bg-white text-[#595248] border-[#24211E]/15 hover:border-[#24211E]/30"
            }`}
            title="Repères de coupe et fond perdu pour imprimerie professionnelle"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Repères d&apos;impression</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white text-[#595248] border border-[#24211E]/15 hover:text-[#1F1C18] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Lien copié !" : "Partager"}</span>
          </button>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#24211E] text-[#FAF8F5] hover:bg-[#3D3730] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exporter / Print</span>
          </button>
        </div>
      </div>

      {/* Primary Affiche Artwork Container */}
      <div className="flex justify-center">
        <div className={`relative transition-all duration-300 max-w-[720px] w-full ${getFrameClasses()}`}>
          
          {/* Professional Bleed & Crop Marks (Visible when toggled) */}
          {showBleedMarks && (
            <div className="absolute inset-0 pointer-events-none z-40">
              {/* Corner Crop Marks */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#1F1C18]/60 -translate-x-3 -translate-y-3" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1F1C18]/60 translate-x-3 -translate-y-3" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1F1C18]/60 -translate-x-3 translate-y-3" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#1F1C18]/60 translate-x-3 translate-y-3" />
              
              {/* Bleed Guide Text */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest uppercase text-[#7A7268]">
                AFFICHE ÉDITION LIMITÉE · FORMAT 3:4 · CIBLE LUXE PHYSIQUE & DIGITAL
              </div>
            </div>
          )}

          {/* The Affiche Surface */}
          <div className="relative bg-[#FBF9F5] overflow-hidden rounded-xs border border-[#24211E]/5 aspect-[3/4] flex flex-col justify-between">
            
            {/* Background Master Visual */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/affiche.jpg"
                alt="Yousra Men Wellness Sanctuary Affiche"
                fill
                className="object-cover object-center"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Fine art gradient scrim for ultimate readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1F1C18]/60 via-transparent to-[#181512]/85" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(24,21,18,0.4)_100%)]" />
            </div>

            {/* Affiche Header Zone */}
            <div className="relative z-10 pt-10 sm:pt-14 px-8 sm:px-12 text-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#E8D4AA]/60" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#E8D4AA] font-light">
                  Sanctuaire de Soins Masculins
                </span>
                <span className="w-8 h-[1px] bg-[#E8D4AA]/60" />
              </div>

              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.22em] text-[#FAF8F5] drop-shadow-md">
                YOUSRA
              </h1>

              <p className="font-serif-luxury italic text-lg sm:text-2xl text-[#E8D4AA] mt-2 font-light tracking-wide text-balance">
                {headline || "L'Art de la Sérénité Masculine"}
              </p>

              <p className="text-xs sm:text-sm text-[#F5EFEB]/90 tracking-widest uppercase mt-1 font-light">
                {subheadline || "Tétouan · Maroc"}
              </p>
            </div>

            {/* Middle Section: Optional Luxury Treatment Récit Overlay */}
            {showPricingOverlay && (
              <div className="relative z-10 mx-6 sm:mx-10 my-auto p-4 sm:p-6 bg-[#1F1C18]/65 backdrop-blur-md rounded-lg border border-[#E8D4AA]/25 text-[#FAF8F5]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8D4AA]/20">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#E8D4AA] font-medium">
                    Rituels Thérapeutiques & Bien-Être
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#D6C7B2]/80">
                    Durée & Tarifs Privilège
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
                  {INITIAL_SERVICES.map((service) => (
                    <div key={service.id} className="flex items-center justify-between py-1 border-b border-white/5">
                      <div className="text-left">
                        <span className="font-medium text-[#FAF8F5] block">{service.name}</span>
                        <span className="text-[10px] text-[#C2B7A5] font-light">{service.subtitle}</span>
                      </div>
                      <div className="text-right pl-3 shrink-0">
                        <span className="font-serif-luxury text-sm text-[#E8D4AA] tabular-nums font-semibold">
                          {service.price30} DH <span className="text-[10px] text-white/50">/ 30m</span>
                        </span>
                        <span className="block text-[11px] text-[#FAF8F5] font-serif-luxury tabular-nums">
                          {service.price60} DH <span className="text-[10px] text-white/50">/ 1h</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Affiche Footer Zone: Editorial Trust & Booking */}
            <div className="relative z-10 pb-8 sm:pb-12 px-8 sm:px-12 text-center text-[#F5EFEB]">
              <div className="w-16 h-[1px] bg-[#E8D4AA]/50 mx-auto mb-4" />
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm tracking-widest text-[#E8D4AA]/95 uppercase font-light">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E8D4AA]" />
                  Tétouan, Maroc
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E8D4AA]" />
                  Sur Rendez-Vous Privé
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8D4AA]" />
                  Espace Exclusif Hommes
                </span>
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 mt-3 font-light">
                Huiles Végétales d&apos;Argan & Eucalyptus Pur · Praticiens Qualifiés · Discrétion Absolue
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Specifications for Print & Digital production */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#24211E]/10 no-print">
        <div className="p-4 bg-white/60 rounded-xl border border-[#24211E]/5">
          <span className="text-xs font-semibold text-[#1F1C18] block mb-1">Placement Physique Recommandé</span>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Format A1 / A2 sur papier d&apos;art mat 300g (Hahnemühle ou Vergé). Idéal pour hall d&apos;entrée de boutique-hôtel, salon VIP et encadrement doré discret.
          </p>
        </div>

        <div className="p-4 bg-white/60 rounded-xl border border-[#24211E]/5">
          <span className="text-xs font-semibold text-[#1F1C18] block mb-1">Placement Digital & Social</span>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Ratio 3:4 / 4:5 haute résolution optimisé pour Instagram Feed, Pinterest Editorial Luxury et campagnes display ciblées cadres & voyageurs à Tétouan.
          </p>
        </div>

        <div className="p-4 bg-white/60 rounded-xl border border-[#24211E]/5">
          <span className="text-xs font-semibold text-[#1F1C18] block mb-1">Harmonie & Textures</span>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Équilibre parfait entre le tadelakt marocain, le marbre blanc de Carrare, le gaufré lin et les pierres de basalte chaudes pour un luxe apaisant.
          </p>
        </div>
      </div>
    </div>
  );
}
