import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, placementType = "affiche", language = "fr" } = body;

    const systemInstruction = `You are a high-end luxury brand director and editorial creative copywriter specializing in ultra-luxury wellness, bespoke spa sanctuaries, and masculine rejuvenation in Tetouan and Morocco.
Your task is to refine and generate luxury marketing campaign concepts, headlines, editorial body prose, and physical/digital placement strategies for "Yousra Sanctuary — Men's Wellness | Tetouan".
Tone: Minimalist luxury, calm authority, sensory textures, French/English/Arabic elegance, discrete sophistication. Avoid tacky hyperbole, loud sales pitch, or cheap clichés. Use poetic, measured prose.
Format your response as valid JSON with the following keys:
{
  "headline": "Short poetic campaign headline",
  "subheading": "Refined explanatory subline",
  "editorialText": "2-3 sentences of evocative atmospheric copy",
  "keyBenefit": "Single distilled luxury promise",
  "recommendedPlacement": "Specific placement guidance for both digital & physical",
  "colorPaletteRationale": "Explanation of soft textures, travertine, tadelakt & neutral palette",
  "suggestedVisualPrompt": "Detailed prompt for generating matching imagery in 35mm editorial style"
}`;

    const userPrompt = `Campaign prompt: "${prompt || "L'Art de la Sérénité Masculine à Tétouan"}"
Placement type: ${placementType} (e.g. physical affiche poster, digital panoramic banner, VIP invitation, hotel concierge display)
Preferred Language: ${language} (French/English/Arabic)
Create a bespoke luxury marketing campaign asset specification.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\n${userPrompt}` }],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    const data = JSON.parse(responseText);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Campaign AI error:", error);
    // Graceful fallback for offline / no-key scenarios
    return NextResponse.json({
      success: true,
      data: {
        headline: "L'Équilibre Absolu · Sérénité Masculine",
        subheading: "Sanctuaire de Soins Thérapeutiques & Rituels Privés à Tétouan",
        editorialText:
          "Entre la brise méditerranéenne et les crêtes du Rif, Yousra dévoile une parenthèse dédiée à la restauration musculaire et à l'apaisement de l'esprit. L'alliance d'huiles végétales pures et de techniques séculaires dans un écrin de tadelakt épuré.",
        keyBenefit: "Déconnexion profonde & récupération thérapeutique sur-mesure",
        recommendedPlacement:
          "Affiche encadrée grand format (A1/A2 papier vergé) pour suites d'hôtels de luxe à Tétouan & bannières ciblées digital 16:9 pour clientèle exigeante.",
        colorPaletteRationale:
          "Tons sable d'oued, tadelakt ivoire, pierre basaltique et or brossé pour une élégance intemporelle sans artifice.",
        suggestedVisualPrompt:
          "High-end minimalist spa suite in Tetouan, soft linen textures, basalt massage stones, morning sunlight through arched wooden moucharabieh, warm neutrals.",
      },
      fallback: true,
    });
  }
}
