import { brand } from "@/config/brand";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

/**
 * Page landing principale Smart Host.
 *
 * Sections (dans l'ordre de scroll attendu) :
 *  1. Header (sticky avec logo + nav + CTA login)
 *  2. Hero (h1, sub, CTA primaire, screenshot dashboard)
 *  3. Features (6 features clés avec icônes)
 *  4. Pricing (5 tiers graduated du backend)
 *  5. CTA final (capture email pour rappel commercial)
 *  6. Footer (mentions légales auto-entrepreneur, links sociaux)
 *
 * Tout le contenu textuel utilise `brand.X` → rebrand = 1 fichier
 * (config/brand.ts).
 *
 * Note : pas d'images réelles à ce stade (screenshots à venir via tes
 * captures dashboard). On utilise des placeholders SVG inline pour
 * que la page rende même sans assets.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
