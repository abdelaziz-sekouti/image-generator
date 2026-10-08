import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: "Yousra Sanctuary — Minimalist Luxury Campaign & Affiche Studio",
  description: "Minimalist luxury marketing campaign and affiche design studio for Yousra Men's Wellness Sanctuary in Tetouan, Morocco.",
  openGraph: {
    title: "Yousra Sanctuary — Minimalist Luxury Campaign & Affiche Studio",
    description: "Minimalist luxury marketing campaign and affiche design studio for Yousra Men's Wellness Sanctuary in Tetouan, Morocco.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yousra Sanctuary — Minimalist Luxury Campaign & Affiche Studio",
    description: "Minimalist luxury marketing campaign and affiche design studio for Yousra Men's Wellness Sanctuary in Tetouan, Morocco.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#FAF8F5] text-[#24211E] antialiased selection:bg-[#D4AF37]/20 selection:text-[#1F1C18]">
        {children}
      </body>
    </html>
  );
}
