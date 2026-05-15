import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

/**
 * Landing principale Smart Host — refonte premium (mai 2026).
 *
 * Flow narratif inspiré Apple / Tesla :
 *  1. Hero immersif pleine page (h-screen sombre, tagline serif)
 *  2. Expérience : 3 moments en plein écran (avant/pendant/après séjour)
 *  3. Features : grille de specs minimaliste sur fond sombre
 *  4. Pricing : une seule carte centrale, dégressif détaillé
 *  5. CTA : conversion finale sur fond sombre
 *  6. Footer : éditorial minimaliste
 *
 * Tout le branding centralisé dans config/brand.ts (rebrand instantané).
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Features />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
