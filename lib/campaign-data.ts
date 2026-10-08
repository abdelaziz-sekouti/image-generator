export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  price30: number;
  price60: number;
  description: string;
  benefits: string[];
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "therapy",
    name: "Massage Thérapie",
    subtitle: "Régénération Musculaire Profonde",
    price30: 300,
    price60: 500,
    description: "Ciblage précis des nœuds musculaires et tensions posturales par pressions appuyées et huiles végétales pures d'argan et romarin.",
    benefits: ["Décompression articulaire", "Soulagement des fascias", "Post-effort intensif"]
  },
  {
    id: "relaxant",
    name: "Massage Relaxant",
    subtitle: "Détente Sensorielle & Lâcher-Prise",
    price30: 250,
    price60: 400,
    description: "Mouvements lents et amples enveloppant le corps sous une chaleur bienfaisante, favorisant un repos mental absolu.",
    benefits: ["Diminution du stress", "Sommeil réparateur", "Huiles apaisantes de lavande sauvage"]
  },
  {
    id: "tonique",
    name: "Massage Tonique",
    subtitle: "Énergie & Vitalité Rythmée",
    price30: 300,
    price60: 500,
    description: "Frictions dynamiques et percussions légères relançant la micro-circulation et redonnant un élan vigoureux au corps.",
    benefits: ["Circulation oxygénée", "Élimination des toxines", "Réveil musculaire"]
  },
  {
    id: "sportif",
    name: "Massage Sportif",
    subtitle: "Performance & Récupération Ciblée",
    price30: 300,
    price60: 500,
    description: "Protocole rigoureux alliant étirements passifs et frictions en profondeur, conçu pour les golfeurs et athlètes.",
    benefits: ["Élasticité musculaire", "Prévention des courbatures", "Optimisation neuromusculaire"]
  },
  {
    id: "thai",
    name: "Massage Thaï",
    subtitle: "Harmonie Énergétique & Souplesse",
    price30: 300,
    price60: 500,
    description: "Pressions d'acupression le long des méridiens et étirements doux inspirés du yoga dans la pure tradition orientale.",
    benefits: ["Ouverture articulaire", "Libération des flux énergétiques", "Équilibre postural"]
  }
];

export interface PalettePreset {
  id: string;
  name: string;
  bgClass: string;
  cardBg: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
}

export const PALETTES: PalettePreset[] = [
  {
    id: "sandstone",
    name: "Sable & Tadelakt Écru",
    bgClass: "bg-[#F7F4EE]",
    cardBg: "#FAF8F5",
    textColor: "#24211E",
    accentColor: "#A38048",
    borderColor: "#E5DDD0"
  },
  {
    id: "travertine",
    name: "Travertin & Or Brossé",
    bgClass: "bg-[#F3EFE8]",
    cardBg: "#F9F6F0",
    textColor: "#1F1B16",
    accentColor: "#B58F50",
    borderColor: "#DDD4C4"
  },
  {
    id: "basalt",
    name: "Basalte Nocturne & Lin",
    bgClass: "bg-[#1C1A17]",
    cardBg: "#24211D",
    textColor: "#EDE7DE",
    accentColor: "#D1B072",
    borderColor: "#3D3830"
  },
  {
    id: "clay",
    name: "Argile Méditerranéenne",
    bgClass: "bg-[#F5EFEB]",
    cardBg: "#FAF4F0",
    textColor: "#2B211B",
    accentColor: "#9C6246",
    borderColor: "#E4D6CD"
  }
];

export const PLACEMENTS = [
  {
    id: "hotel-lobby",
    title: "Hall d'Hôtel de Luxe & Conciergerie",
    category: "Physique",
    description: "Affiche grand format A1 encadrée dans un profilé laiton brossé sur mur en tadelakt ou pierre calcaire à Tétouan.",
    specs: "Format A1 (594 × 841 mm) · Papier vergé d'art 300g · Finition mat soft-touch"
  },
  {
    id: "suite-private",
    title: "Chambre Privée & Suite VIP",
    category: "Physique",
    description: "Carte de soins chevalet posée sur console en noyer avec échantillons d'huiles artisanales d'eucalyptus.",
    specs: "Format 210 × 280 mm · Bords déchirés à la main · Marquage à chaud or"
  },
  {
    id: "billboard-digital",
    title: "Écran Digital Haute Définition",
    category: "Digital",
    description: "Affichage panoramique 16:9 4K pour écrans de clubs de golf, marinas et réceptions de resorts.",
    specs: "Format 3840 × 2160 px (16:9) · Vidéo statique animée · Contraste cinématique"
  },
  {
    id: "mobile-pass",
    title: "Pass VIP & Publicité Ciblée",
    category: "Digital",
    description: "Format vertical 9:16 pour Instagram Story sponsorisée et portefeuille digital Wallet pour résidents.",
    specs: "Format 1080 × 1920 px (9:16) · CTA direct vers conciergerie WhatsApp"
  }
];
