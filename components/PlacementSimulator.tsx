"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, Store, Tv, Smartphone, Check, Sparkles } from "lucide-react";

export function PlacementSimulator() {
  const [activeScene, setActiveScene] = useState<"lobby" | "reception" | "digital-totem" | "mobile">("lobby");

  return (
    <div className="space-y-8">
      {/* Selector Tabs */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="font-cinzel text-3xl sm:text-4xl text-[#1F1C18] tracking-wider">
          Mise en Situation Réelle
        </h2>
        <p className="text-sm text-[#6E6659]">
          Visualisez le rendu de vos affiches et bannières dans des environnements d&apos;exception physiques et digitaux.
        </p>
      </div>

      <div className="flex justify-center no-print">
        <div className="inline-flex p-1.5 bg-[#EFEAE1] rounded-xl gap-1">
          <button
            onClick={() => setActiveScene("lobby")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeScene === "lobby"
                ? "bg-white text-[#1F1C18] shadow-sm"
                : "text-[#6E6659] hover:text-[#1F1C18]"
            }`}
          >
            <Building2 className="w-4 h-4 text-[#A38048]" />
            <span>Hall d&apos;Hôtel 5★ Tétouan</span>
          </button>
          <button
            onClick={() => setActiveScene("reception")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeScene === "reception"
                ? "bg-white text-[#1F1C18] shadow-sm"
                : "text-[#6E6659] hover:text-[#1F1C18]"
            }`}
          >
            <Store className="w-4 h-4 text-[#A38048]" />
            <span>Accueil Spa Privé</span>
          </button>
          <button
            onClick={() => setActiveScene("digital-totem")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeScene === "digital-totem"
                ? "bg-white text-[#1F1C18] shadow-sm"
                : "text-[#6E6659] hover:text-[#1F1C18]"
            }`}
          >
            <Tv className="w-4 h-4 text-[#A38048]" />
            <span>Écran Digital 4K 16:9</span>
          </button>
          <button
            onClick={() => setActiveScene("mobile")}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              activeScene === "mobile"
                ? "bg-white text-[#1F1C18] shadow-sm"
                : "text-[#6E6659] hover:text-[#1F1C18]"
            }`}
          >
            <Smartphone className="w-4 h-4 text-[#A38048]" />
            <span>Mobile &amp; VIP Pass</span>
          </button>
        </div>
      </div>

      {/* Simulator Viewport */}
      <div className="max-w-5xl mx-auto bg-[#24211E] rounded-3xl p-6 sm:p-12 text-white shadow-2xl overflow-hidden relative border border-white/10">
        
        {/* Background architectural ambiance */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/banner.jpg"
            alt="Ambiance architecturale"
            fill
            className="object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10">
          
          {/* Scene 1: Hotel Lobby Wall Mount */}
          {activeScene === "lobby" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 flex justify-center">
                {/* Travertine Wall Simulation with Spotlight */}
                <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#EAE2D5] to-[#D5CABB] rounded-2xl shadow-inner border border-white/20 w-full max-w-[420px]">
                  {/* Subtle Spot Lighting */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-white/40 blur-2xl pointer-events-none" />
                  
                  {/* The Framed Affiche on the Wall */}
                  <div className="relative rounded-sm overflow-hidden border-[10px] border-[#9E7D46] shadow-2xl aspect-[3/4]">
                    <Image
                      src="/images/affiche.jpg"
                      alt="Affiche en situation hall"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Brass Plaque */}
                  <div className="mt-4 mx-auto w-32 py-1 bg-[#8C6D3B] text-center rounded-xs shadow-md">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#FAF8F5] block font-mono">
                      YOUSRA · SUITE BIEN-ÊTRE
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                  Cadre Physique · Résidences &amp; Hôtels de Prestige
                </span>
                <h3 className="font-cinzel text-2xl font-bold tracking-wide">
                  Intégration Murale en Tadelakt &amp; Laiton
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                  L&apos;affiche s&apos;intègre harmonieusement sur les parements de marbre beige, de tadelakt ciré et d&apos;arches mauresques des meilleurs établissements de la région de Tétouan et Tamuda Bay.
                </p>
                <div className="pt-2 space-y-2 text-xs text-[#E8DEC8]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Format Recommandé : 60 × 80 cm ou A1 (59,4 × 84,1 cm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Verre musée antireflet 99% anti-UV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Éclairage ponctuel chaud 2700K orienté à 30°</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scene 2: Reception Chevalet */}
          {activeScene === "reception" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 flex justify-center">
                <div className="relative p-6 sm:p-10 bg-[#352F27] rounded-2xl w-full max-w-[420px] shadow-2xl border border-white/10">
                  {/* Chevalet / Desk Standee */}
                  <div className="relative p-3 bg-[#1C1814] rounded-lg shadow-2xl border border-[#A38048]/40">
                    <div className="relative aspect-[3/4] w-full rounded overflow-hidden">
                      <Image
                        src="/images/affiche.jpg"
                        alt="Affiche sur chevalet d'accueil"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="h-3 w-40 mx-auto bg-[#A38048] rounded-full mt-3 shadow-md" />
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                  Cadre Physique · Comptoir &amp; Lounge VIP
                </span>
                <h3 className="font-cinzel text-2xl font-bold tracking-wide">
                  Présentoir de Comptoir Luxe
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                  Idéal pour le desk d&apos;accueil du salon Yousra ou la conciergerie privée. Permet aux hôtes de découvrir immédiatement la carte des 5 massages et leurs durées.
                </p>
                <div className="pt-2 space-y-2 text-xs text-[#E8DEC8]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Format Compact : A3 / A4 sur chevalet en noyer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Possibilité de poser à côté de flacons testeurs d&apos;huiles</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scene 3: Digital Totem */}
          {activeScene === "digital-totem" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 flex justify-center">
                <div className="relative p-4 sm:p-6 bg-black rounded-2xl w-full max-w-[480px] border-4 border-[#3D352B] shadow-2xl">
                  {/* Digital Landscape Screen */}
                  <div className="relative aspect-[16/9] w-full rounded overflow-hidden shadow-inner">
                    <Image
                      src="/images/banner.jpg"
                      alt="Écran digital 16:9"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[9px] uppercase tracking-wider text-[#D4AF37]">
                      Écran 4K Ultra HD
                    </div>
                  </div>
                  <div className="w-20 h-10 bg-[#24211E] mx-auto -mb-6 mt-3 border-t border-white/20" />
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                  Cadre Digital · Affichage Dynamique
                </span>
                <h3 className="font-cinzel text-2xl font-bold tracking-wide">
                  Totem &amp; Écran Panoramique 16:9
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                  Attirez le regard dans les zones d&apos;attente haut de gamme, clubs de golf et espaces bien-être grâce à la lumière chaleureuse de l&apos;architecture marocaine et la typographie dorée.
                </p>
                <div className="pt-2 space-y-2 text-xs text-[#E8DEC8]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Résolution native : 3840 × 2160 pixels (Ultra HD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Compatibilité totale affichage dynamique Samsung / LG Commercial</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scene 4: Mobile */}
          {activeScene === "mobile" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 flex justify-center">
                {/* Mobile Device Mockup */}
                <div className="relative w-64 h-[440px] bg-black rounded-[36px] p-2.5 shadow-2xl border-2 border-[#54483B]">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30" />
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                    <Image
                      src="/images/affiche.jpg"
                      alt="Mobile VIP Pass"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/70 backdrop-blur-md rounded-xl text-center">
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-semibold">
                        Invitation Privilège Yousra
                      </span>
                      <span className="text-xs font-serif-luxury text-white block mt-0.5">
                        -15% sur votre première séance 1h
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                  Cadre Digital · Réseaux Sociaux &amp; VIP Story
                </span>
                <h3 className="font-cinzel text-2xl font-bold tracking-wide">
                  Story Instagram &amp; Pass Digital
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7BA] leading-relaxed">
                  Le cadrage vertical 9:16 ou 4:5 permet une déclinaison immédiate en publicités ciblées Instagram et diffusion par messagerie privée WhatsApp Business auprès de la clientèle fidèle.
                </p>
                <div className="pt-2 space-y-2 text-xs text-[#E8DEC8]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Lien direct vers la conciergerie WhatsApp en un tap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>Esthétique digne des magazines de voyage de luxe</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
