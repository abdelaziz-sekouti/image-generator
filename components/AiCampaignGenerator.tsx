"use client";

import React, { useState } from "react";
import { Sparkles, Wand2, RefreshCw, Check, ArrowRight, Lightbulb, Copy } from "lucide-react";

interface AiCampaignGeneratorProps {
  onApplyHeadline: (headline: string, subline: string) => void;
}

export function AiCampaignGenerator({ onApplyHeadline }: AiCampaignGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [placementType, setPlacementType] = useState("affiche");
  const [language, setLanguage] = useState("fr");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const quickPrompts = [
    {
      title: "Rituel Signature Golfeur & Sport",
      text: "Campagne ciblée pour les golfeurs et athlètes de passage à Tétouan et Cabo Negro, axée sur la récupération musculaire et le massage sportif.",
    },
    {
      title: "Parenthèse Méditerranéenne & Sérénité",
      text: "Affiche élégante pour touristes et résidents haut de gamme cherchant un lâcher-prise total avec huiles d'argan et brise marine.",
    },
    {
      title: "Abonnement Exclusif VIP & Business",
      text: "Campagne pour entrepreneurs et cadres exigeants recherchant un sanctuaire de discrétion absolue et de décompression hebdomadaire.",
    },
    {
      title: "Cure Énergétique & Massage Thaï",
      text: "Communication sur l'harmonie posturale et les bienfaits des étirements profonds dans une ambiance zen marocaine.",
    },
  ];

  const handleGenerate = async (customPrompt?: string) => {
    const textToUse = customPrompt || prompt || "L'Art de la Sérénité Masculine à Tétouan";
    setLoading(true);
    try {
      const res = await fetch("/api/campaign-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: textToUse,
          placementType,
          language,
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setResult(data.data);
      }
    } catch (err) {
      console.error("Erreur de génération :", err);
    } finally {
      setLoading(false);
    }
  };

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#A38048]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A38048] font-medium">
            Intelligence Créative de Marque
          </span>
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl text-[#1F1C18] tracking-wider">
          Générateur de Campagne &amp; Affiches
        </h2>
        <p className="text-sm text-[#6E6659]">
          Créez de nouveaux concepts éditoriaux de luxe, affinez vos slogans et générez des briefs visuels adaptés à vos audiences cibles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form & Prompt Controls */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#24211E]/10 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18] block">
              Thème ou Idée de Campagne
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Campagne d'automne axée sur la décompression musculaire pour hommes d'affaires et golfeurs à Tétouan..."
              rows={3}
              className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#24211E]/15 focus:border-[#A38048] focus:ring-1 focus:ring-[#A38048] outline-none transition-all placeholder:text-[#9C9488] bg-[#FAF8F5]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18] block mb-1.5">
                Support Visé
              </label>
              <select
                value={placementType}
                onChange={(e) => setPlacementType(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-[#24211E]/15 bg-[#FAF8F5] focus:outline-none focus:border-[#A38048]"
              >
                <option value="affiche">Affiche Print (3:4)</option>
                <option value="banner">Bannière Digitale (16:9)</option>
                <option value="menu">Carte de Soins Écrin</option>
                <option value="story">VIP Instagram Story</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1C18] block mb-1.5">
                Langue
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-[#24211E]/15 bg-[#FAF8F5] focus:outline-none focus:border-[#A38048]"
              >
                <option value="fr">Français (Élégant)</option>
                <option value="en">English (International)</option>
                <option value="ar">Arabe (Classique Raffiné)</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => handleGenerate()}
            disabled={loading}
            className="w-full py-3 px-4 bg-[#24211E] hover:bg-[#3D3730] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#D4AF37]" />
                <span>Direction Artistique en cours...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Générer le Concept de Campagne</span>
              </>
            )}
          </button>

          {/* Quick Prompts Suggestions */}
          <div className="space-y-2 pt-2 border-t border-[#24211E]/10">
            <span className="text-[11px] font-semibold text-[#7A7268] uppercase tracking-wider block">
              Suggestions Prêtes à l&apos;Emploi :
            </span>
            <div className="space-y-2">
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(item.text);
                    handleGenerate(item.text);
                  }}
                  className="w-full text-left p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#F3ECE1] border border-[#24211E]/5 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-medium text-[#1F1C18] group-hover:text-[#A38048]">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-[#7A7268] line-clamp-1 mt-0.5">
                    {item.text}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: AI Output & Live Application */}
        <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#24211E]/10 shadow-sm relative">
          
          {!result && !loading && (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EFE9DF] mx-auto flex items-center justify-center text-[#A38048]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#1F1C18]">
                Prêt pour l&apos;Inspiration Créative
              </h3>
              <p className="text-xs text-[#7A7268] max-w-md mx-auto">
                Choisissez une suggestion ou formulez votre propre demande pour recevoir un concept de campagne complet avec slogan, texte d&apos;affiche et prompt photographique.
              </p>
            </div>
          )}

          {loading && (
            <div className="py-20 text-center space-y-4">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto text-[#A38048]" />
              <p className="text-xs text-[#7A7268] font-medium tracking-wider uppercase">
                Conception de l&apos;univers de marque et rédaction éditoriale...
              </p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Header Box */}
              <div className="p-5 bg-white rounded-xl border border-[#24211E]/10 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#A38048] font-bold">
                    Slogan Principal &amp; Accroche Affiche
                  </span>
                  <button
                    onClick={() => onApplyHeadline(result.headline, result.subheading)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A38048] hover:bg-[#8F6F3A] text-white text-[11px] font-medium rounded-md transition-colors cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Appliquer sur l&apos;Affiche Directe</span>
                  </button>
                </div>

                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#1F1C18] font-bold">
                    {result.headline}
                  </h3>
                  <p className="font-serif-luxury italic text-base sm:text-lg text-[#A38048] mt-1">
                    {result.subheading}
                  </p>
                </div>
              </div>

              {/* Prose Editorial Box */}
              <div className="p-5 bg-white rounded-xl border border-[#24211E]/10 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#7A7268] font-semibold">
                    Texte Éditorial de Campagne
                  </span>
                  <button
                    onClick={() => copyText("editorial", result.editorialText)}
                    className="text-xs text-[#7A7268] hover:text-[#1F1C18] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === "editorial" ? "Copié" : "Copier"}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-[#423C34] leading-relaxed italic font-serif-luxury text-base">
                  &laquo; {result.editorialText} &raquo;
                </p>
              </div>

              {/* Strategy & Placement Guidance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#24211E]/10 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A38048] font-semibold block">
                    Promesse Essentielle
                  </span>
                  <p className="text-xs text-[#2E2822] font-medium">
                    {result.keyBenefit}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#24211E]/10 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A38048] font-semibold block">
                    Placement Stratégique
                  </span>
                  <p className="text-xs text-[#2E2822]">
                    {result.recommendedPlacement}
                  </p>
                </div>
              </div>

              {/* Visual Prompt for Image Studio */}
              <div className="p-5 bg-[#24211E] text-white rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                      Prompt Visuel Suggéré pour Studio Photo
                    </span>
                  </div>
                  <button
                    onClick={() => copyText("visual", result.suggestedVisualPrompt)}
                    className="text-xs text-[#D4C8B8] hover:text-white inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedKey === "visual" ? "Copié" : "Copier le prompt"}</span>
                  </button>
                </div>
                <p className="text-xs text-[#E5DCD1] font-mono leading-relaxed bg-black/40 p-3 rounded-lg border border-white/10">
                  {result.suggestedVisualPrompt}
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
