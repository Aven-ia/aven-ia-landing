"use client";

import { motion } from "framer-motion";
import { brand } from "@/config/brand";

/**
 * Hero immersif pleine page — style Apple / Tesla.
 *
 * Stratégie visuelle :
 *  - h-screen (occupe TOUT l'écran au load)
 *  - Background dégradé sombre + image lifestyle en couche (le jour où
 *    Bastien a des photos, remplacer le SVG par <Image fill priority>)
 *  - Typo serif Playfair grande taille, breakable en 2 lignes
 *  - Sub-titre sobre Inter, max 80 chars/ligne
 *  - 1 seul CTA primaire blanc sur fond sombre
 *  - Scroll indicator subtil en bas
 *
 * Animation d'entrée : fade-up séquentiel (badge → h1 → sub → cta → indicator).
 * Pas d'animation pendant le scroll pour ne pas distraire.
 */
export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background — placeholder gradient luxueux. À remplacer plus tard par une
          vraie photo lifestyle de logement (vue mer, terrasse, intérieur premium). */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950" />
        {/* Halo subtil pour donner de la profondeur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-brand-500/20 via-brand-500/5 to-transparent blur-3xl" />
        {/* Grain texture pour casser la planéité (très subtil, ~3% opacity) */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Eyebrow / badge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[11px] tracking-[0.3em] uppercase text-brand-500 mb-8 font-medium"
        >
          {brand.productName} — by {brand.companyName}
        </motion.p>

        {/* H1 — Tagline principale (style Apple "Think different.") */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl text-white font-serif font-medium leading-[1.05] tracking-tight"
        >
          {brand.tagline}
        </motion.h1>

        {/* Sub-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {brand.taglineSub}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-900 font-medium text-sm hover:bg-stone-100 transition-all"
          >
            Demander une démo privée
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2"
          >
            Découvrir l&apos;expérience
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — subtil, animation infinite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
