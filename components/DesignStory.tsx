"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight, Palette, Type, Compass, Sparkles } from "lucide-react";

export function DesignStory() {
  const aestheticPillars = [
    {
      title: "Palette Neutre Minérale",
      desc: "Abandon des aplats saturés au profit de tonalités de tadelakt marocain, sable d'oued, lin écru et or brossé discret.",
      hexCodes: ["#FAF8F5", "#EFE9DF", "#D6C7B2", "#A38048", "#24211E"]
    },
    {
      title: "Textures Organiques & Tactiles",
      desc: "Papier de cuve à bords frangés, serviettes en coton gaufré, galets de basalte volcanique et marbre mat.",
      tag: "Sensorialité Pure"
    },
    {
      title: "Hiérarchie Typographique Haute Couture",
      desc: "Alliance de la police lapidaire romaine Cinzel pour l'autorité intemporelle et de Cormorant Garamond pour la poésie des soins.",
      tag: "Cinzel + Cormorant"
    },
    {
      title: "Photographie & Cadrage Cinématique",
      desc: "Lumière naturelle rasante, ombres douces de palmes végétales et cadrages 35mm valorisant la précision du geste thérapeutique.",
      tag: "Editorial 35mm"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#A38048]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A38048] font-medium">
            Manifeste de Marque &amp; Direction Artistique
          </span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl text-[#1F1C18] tracking-wider">
          De l&apos;Idée Originelle au Luxe Minimaliste
        </h2>
        <p className="text-sm text-[#6E6659]">
          Comment les éléments clés du document source ont été réinterprétés selon les standards du luxe contemporain pour séduire une clientèle haut de gamme à Tétouan.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Source flyer essence */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#24211E]/10 shadow-sm space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-[#7A7268] font-semibold block">
            1. Les Fondations du Document Source
          </span>
          <h3 className="font-cinzel text-xl text-[#1F1C18] font-bold">
            Les Éléments Authentiques Préservés
          </h3>
          <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
            Le document initial présentait des éléments d&apos;intention forts et sincères : un espace de massage thérapeutique exclusivement masculin à Tétouan, une gamme claire de 5 soins avec tarification précise en Dirhams (250 DH à 500 DH), une touche florale délicate et un attachement au toucher du papier.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-[#4A433A]">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8F5]">
              <Check className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Intégrité Tarifaire :</strong> 30 min (250/300 DH) &amp; 1 heure (400/500 DH) maintenus avec exactitude.</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8F5]">
              <Check className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Motif Botanique :</strong> La fleur bleue originelle réincarnée en herbier d&apos;artisan sur papier chiffon.</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FAF8F5]">
              <Check className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Ancrage Tétouanais :</strong> Mise en valeur de l&apos;architecture marocaine épurée et du tadelakt local.</span>
            </div>
          </div>
        </div>

        {/* Elevated luxury outcome */}
        <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-2xl border border-[#A38048]/30 shadow-md space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-[#A38048] font-semibold block">
            2. La Métamorphose Haut de Gamme
          </span>
          <h3 className="font-cinzel text-xl text-[#1F1C18] font-bold">
            Le Raffinement Minimaliste 2026
          </h3>
          <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
            Élimination du bruit visuel (bandes orange criardes, polices numériques disparates) pour laisser place au vide respirant, à la noblesse des matières et à une ambiance de sanctuaire digne des hôtels Aman ou de la Maison d&apos;hôtes la plus exclusive.
          </p>

          <div className="space-y-2.5 pt-2 text-xs text-[#4A433A]">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white">
              <Sparkles className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Double Déclinaison :</strong> Affiche physique encadrable et bannière 16:9 digitale ultra-large.</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white">
              <Sparkles className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Prêt pour l&apos;Impression :</strong> Repères de coupe et fond perdu pour imprimeries de prestige.</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white">
              <Sparkles className="w-4 h-4 text-[#A38048] shrink-0" />
              <span><strong>Cible CSP+ :</strong> Ton éditorial serein, sobre, confidentiel et rassurant.</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4 Pillars of Aesthetic Direction */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aestheticPillars.map((pillar, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-[#24211E]/10 space-y-3">
            <span className="text-[10px] font-mono text-[#A38048] tracking-widest">
              PILIER 0{i + 1}
            </span>
            <h4 className="font-cinzel text-base font-bold text-[#1F1C18]">
              {pillar.title}
            </h4>
            <p className="text-xs text-[#6B6358] leading-relaxed">
              {pillar.desc}
            </p>
            {pillar.hexCodes && (
              <div className="flex items-center gap-1.5 pt-2">
                {pillar.hexCodes.map((hex, hIdx) => (
                  <div
                    key={hIdx}
                    className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: hex }}
                    title={hex}
                  />
                ))}
              </div>
            )}
            {pillar.tag && (
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#A38048] font-medium bg-[#FBF9F5] px-2 py-0.5 rounded border border-[#A38048]/20">
                  {pillar.tag}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
