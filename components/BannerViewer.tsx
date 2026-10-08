"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Sparkles, ExternalLink, Calendar, MapPin, CheckCircle2, Copy } from "lucide-react";

interface BannerViewerProps {
  onPrint: () => void;
  onOpenBooking?: () => void;
}

export function BannerViewer({ onPrint, onOpenBooking }: BannerViewerProps) {
  const [aspectRatioMode, setAspectRatioMode] = useState<"16-9" | "21-9" | "square">("16-9");
  const [headlineText, setHeadlineText] = useState("L'Éveil des Sens · Sérénité Masculine");
  const [sublineText, setSublineText] = useState("Sanctuaire de Soins Thérapeutiques & Bien-Être Privé à Tétouan");
  const [copiedCode, setCopiedCode] = useState(false);

  const embedCode = `<a href="https://yousra-spa-tetouan.ma" target="_blank" rel="noopener noreferrer">
  <img src="/images/banner.jpg" alt="Yousra Men Wellness Sanctuary Tetouan" style="width:100%;max-width:1200px;border-radius:12px;display:block;" />
</a>`;

  const copyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Banner Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/70 backdrop-blur-md rounded-xl border border-[#24211E]/10 no-print">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#7A7268] font-medium">
            Format Bannière :
          </span>
          <div className="flex items-center gap-1.5 p-1 bg-[#F5EFEB] rounded-lg">
            <button
              onClick={() => setAspectRatioMode("16-9")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                aspectRatioMode === "16-9"
                  ? "bg-white text-[#1F1C18] shadow-xs"
                  : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              16:9 Web & Display
            </button>
            <button
              onClick={() => setAspectRatioMode("21-9")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                aspectRatioMode === "21-9"
                  ? "bg-white text-[#1F1C18] shadow-xs"
                  : "text-[#7A7268] hover:text-[#1F1C18]"
              }`}
            >
              21:9 Ultra-Wide Billboard
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyEmbed}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white text-[#595248] border border-[#24211E]/15 hover:text-[#1F1C18] transition-colors cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copiedCode ? "Code HTML copié !" : "Copier balise Embed"}</span>
          </button>
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md bg-[#24211E] text-[#FAF8F5] hover:bg-[#3D3730] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exporter en Haute Résolution</span>
          </button>
        </div>
      </div>

      {/* Main Banner Presentation */}
      <div className="w-full max-w-6xl mx-auto">
        <div
          className={`relative w-full rounded-2xl overflow-hidden border border-[#24211E]/15 shadow-2xl transition-all duration-300 ${
            aspectRatioMode === "16-9" ? "aspect-[16/9]" : "aspect-[21/9]"
          }`}
        >
          {/* Background Photography */}
          <Image
            src="/images/banner.jpg"
            alt="Yousra Men Wellness Panoramic Luxury Banner"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />

          {/* Luxury Editorial Overlay Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171411]/85 via-[#171411]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />

          {/* Banner Content Layout */}
          <div className="absolute inset-0 p-8 sm:p-12 md:p-16 flex flex-col justify-between z-10 text-[#FAF8F5]">
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#FAF8F5] block">
                  YOUSRA
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37] block mt-0.5">
                  Men Wellness Sanctuary · Tétouan
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] tracking-wider uppercase text-[#E8D4AA]">
                  Édition Campagne 2026
                </span>
              </div>
            </div>

            {/* Center / Lower Headline & Copy */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D4AF37]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium">
                  Soins D&apos;Exception & Espace Thérapeutique
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-light">
                {headlineText}
              </h2>

              <p className="text-sm sm:text-base text-[#D4C8B8] font-light leading-relaxed max-w-xl">
                {sublineText}. Une invitation au ressourcement absolu au cœur d&apos;une architecture épurée en tadelakt et pierre chaude.
              </p>

              {/* Ritual Badges / Key Moroccan Pricing */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#FAF8F5]/90">
                <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                  5 Protocoles de Massage Dédiés
                </span>
                <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                  Dès <strong className="text-[#D4AF37] font-serif-luxury text-sm">250 DH</strong> / séance
                </span>
                <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                  Huiles Pures &amp; Serviettes Gauffrées
                </span>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-[#D4C8B8]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Tétouan, Maroc
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  Sur Rendez-Vous Privé Uniquement
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#rituals"
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#D4AF37] hover:bg-[#C29E2E] text-[#1F1C18] rounded-md transition-colors shadow-lg cursor-pointer"
                >
                  Découvrir la Carte des Soins
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#24211E]/10">
        <div className="bg-white/80 p-5 rounded-xl border border-[#24211E]/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">
            <CheckCircle2 className="w-4 h-4 text-[#8C6D3B]" />
            Site Web &amp; Landing Page
          </div>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Format héro ultra-immersif créant instantanément l&apos;émotion d&apos;un sanctuaire exclusif dès la première seconde de visite.
          </p>
        </div>

        <div className="bg-white/80 p-5 rounded-xl border border-[#24211E]/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">
            <CheckCircle2 className="w-4 h-4 text-[#8C6D3B]" />
            Affichage Panoramique &amp; DOOH
          </div>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Parfaitement calibré pour les écrans dynamiques des aéroports régionaux, clubs de sport haut de gamme et resorts de la côte tétouanaise.
          </p>
        </div>

        <div className="bg-white/80 p-5 rounded-xl border border-[#24211E]/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F1C18]">
            <CheckCircle2 className="w-4 h-4 text-[#8C6D3B]" />
            Campagne Meta &amp; LinkedIn Ads
          </div>
          <p className="text-xs text-[#6B6358] leading-relaxed">
            Contraste et esthétique raffinée qui tranchent radicalement avec les publicités génériques bruyantes pour captiver les CSP+.
          </p>
        </div>
      </div>
    </div>
  );
}
