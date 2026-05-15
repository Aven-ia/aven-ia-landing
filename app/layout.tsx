import type { Metadata } from "next";
import { brand } from "@/config/brand";
import "./globals.css";

/**
 * Root layout — injecte les CSS variables brand au niveau HTML root,
 * applique les meta SEO + Open Graph.
 *
 * Aucun hardcoding de "Smart Host" ici — tout passe par config/brand.ts
 * pour permettre un rebrand instantané.
 */

export const metadata: Metadata = {
  title: {
    default: brand.fullName,
    template: `%s | ${brand.productName}`,
  },
  description: brand.pitch,
  keywords: [
    "conciergerie",
    "airbnb",
    "location courte durée",
    "concierge ia",
    "automatisation airbnb",
    "smart host",
    "smarthost",
    "aven.ia",
  ],
  authors: [{ name: brand.companyName, url: brand.url.parent }],
  metadataBase: new URL(brand.url.landing),
  openGraph: {
    type: "website",
    url: brand.url.landing,
    title: brand.fullName,
    description: brand.pitch,
    siteName: brand.productName,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.fullName,
    description: brand.pitch,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Conversion config.brand.colors → CSS custom properties.
 * Injecte dans <style> du root pour que toute l'app utilise les bonnes
 * valeurs de marque (et non les fallbacks indigo de globals.css).
 */
function brandToCssVars(): string {
  return Object.entries(brand.colors)
    .map(([key, val]) => `--${key}: ${val};`)
    .join(" ");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style id="brand-vars">{`:root { ${brandToCssVars()} }`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
