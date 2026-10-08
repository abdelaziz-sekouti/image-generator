"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Clock, Check, Leaf, HeartHandshake, PhoneCall } from "lucide-react";
import { INITIAL_SERVICES } from "@/lib/campaign-data";

export function RitualsMenu() {
  const [selectedService, setSelectedService] = useState(INITIAL_SERVICES[0]);
  const [selectedDuration, setSelectedDuration] = useState<"all" | "30" | "60">("all");

  return (
    <div className="space-y-12">
      {/* Intro section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#A38048]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A38048] font-medium">
            Carte Officielle des Soins Thérapeutiques
          </span>
          <span className="w-8 h-[1px] bg-[#A38048]" />
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl text-[#1F1C18] tracking-wider">
          Les Rituels Yousra
        </h2>
        <p className="text-sm text-[#6E6659] leading-relaxed">
          Inspirée par la noblesse des traditions de bien-être et conçue exclusivement pour l&apos;exigence masculine. Chaque rituel allie précision anatomique et huiles aromatiques d&apos;exception.
        </p>
      </div>

      {/* Main Luxury Menu Layout: Two Column Fine-Art Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Tactile Deckle-Edge Fine Art Card */}
        <div className="lg:col-span-7 bg-[#FBF9F5] p-8 sm:p-10 rounded-2xl border border-[#24211E]/10 shadow-xl relative overflow-hidden bg-grain">
          
          {/* Subtle Decorative Botanical Motif in Watermark Style */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
            <Image
              src="/images/botanical.jpg"
              alt="Botanical watermark"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#24211E]/10">
              <div>
                <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#1F1C18] block">
                  CARTE DE BIEN-ÊTRE
                </span>
                <span className="text-[11px] text-[#7A7268] tracking-wider uppercase block">
                  Soins &amp; Massages Thérapeutiques · Tétouan
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-serif-luxury italic text-[#A38048] block">
                  Tarifs Nets en Dirhams Marocains (DH)
                </span>
              </div>
            </div>

            {/* List of 5 Services */}
            <div className="space-y-6">
              {INITIAL_SERVICES.map((service, index) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? "bg-white shadow-md border-[#A38048]/40 -translate-y-0.5"
                        : "bg-[#F7F3EB]/60 hover:bg-white/80 border-transparent hover:border-[#24211E]/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#A38048] tracking-widest">
                            0{index + 1}.
                          </span>
                          <h3 className="font-cinzel text-base sm:text-lg font-medium text-[#1F1C18] tracking-wide">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#7A7268] mt-1 font-light italic font-serif-luxury text-base">
                          {service.subtitle}
                        </p>
                        <p className="text-xs text-[#595248] mt-1.5 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Pricing Table Cell */}
                      <div className="text-right shrink-0 pt-0.5 space-y-1">
                        <div className="bg-[#FAF7F0] px-3 py-1 rounded border border-[#24211E]/10">
                          <span className="font-serif-luxury text-base sm:text-lg font-semibold text-[#1F1C18] tabular-nums">
                            {service.price30} DH
                          </span>
                          <span className="text-[10px] text-[#7A7268] block -mt-1 uppercase tracking-wider">
                            30 Minutes
                          </span>
                        </div>

                        <div className="bg-[#1F1C18] text-[#FAF8F5] px-3 py-1 rounded shadow-xs">
                          <span className="font-serif-luxury text-base sm:text-lg font-semibold text-[#E8D4AA] tabular-nums">
                            {service.price60} DH
                          </span>
                          <span className="text-[10px] text-[#C2B7A5] block -mt-1 uppercase tracking-wider">
                            1 Heure
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality Commitment Footer */}
            <div className="pt-4 border-t border-[#24211E]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A7268]">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#A38048]" />
                <span>Huiles 100% Biologiques · Argan du Souss &amp; Romarin Sauvage</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#A38048]" />
                <span>Hygiène Médicale &amp; Serviettes Individuelles Stérilisées</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Treatment Spotlight & Visual Story */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Spotlight Card with the Generated Therapy Photo */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#24211E]/10 shadow-lg">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/therapy.jpg"
                alt="Massage Thérapeutique Yousra"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#E8D4AA] block">
                  Rituel Sélectionné
                </span>
                <h4 className="font-cinzel text-xl font-bold tracking-wide">
                  {selectedService.name}
                </h4>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A38048] font-medium block mb-1">
                  Description Complète
                </span>
                <p className="text-xs sm:text-sm text-[#4A443B] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A7268] font-medium block mb-2">
                  Bénéfices Thérapeutiques Majeurs :
                </span>
                <ul className="space-y-1.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#2E2922]">
                      <Check className="w-3.5 h-3.5 text-[#A38048] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#24211E]/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#7A7268] block">Tarif de Référence</span>
                  <span className="font-serif-luxury text-xl font-bold text-[#1F1C18]">
                    {selectedService.price30} DH <span className="text-xs font-normal text-[#7A7268]">/ 30 min</span> · {selectedService.price60} DH <span className="text-xs font-normal text-[#7A7268]">/ 1h</span>
                  </span>
                </div>

                <a
                  href="tel:+212500000000"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#24211E] hover:bg-[#3D3730] text-[#FAF8F5] text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Réserver</span>
                </a>
              </div>
            </div>
          </div>

          {/* Botanical Paper Accent from original image */}
          <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-[#24211E]/10 flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#24211E]/10">
              <Image
                src="/images/botanical.jpg"
                alt="Herbier Méditerranéen Delphinium"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#1F1C18] block">
                Hommage à l&apos;Affiche Originale
              </span>
              <p className="text-[11px] text-[#6E6659] leading-relaxed mt-0.5">
                Le motif floral de delphinium et lavande sauvage a été sublimé sous forme d&apos;herbier d&apos;artisan sur papier chiffon, conservant l&apos;âme du projet originel.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
