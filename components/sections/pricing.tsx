"use client";

import { motion } from "framer-motion";
import { brand } from "@/config/brand";

/**
 * Pricing premium — style Apple : UNE seule carte centrale, claire, sans
 * comparatif agressif. Le détail dégressif est révélé en hover/expansion.
 *
 * Choix éditorial : ne pas vendre "le moins cher", vendre "la qualité au
 * juste prix". Cohérent avec le positionnement luxe/premium.
 */

const tiers = [
  { range: "Jusqu'à 5 logements",   price: 12 },
  { range: "De 6 à 20",              price: 10 },
  { range: "De 21 à 50",             price: 9 },
  { range: "De 51 à 100",            price: 8 },
  { range: "Au-delà de 100",         price: 7 },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 mb-6 font-medium">
            Investissement
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 leading-[1.1] tracking-tight">
            Un tarif qui s&apos;adapte à
            <br />
            l&apos;ambition de votre parc.
          </h2>
        </motion.div>

        {/* Pricing card unique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-10 sm:p-16 overflow-hidden"
        >
          {/* Subtle gold accent corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-500/5 to-transparent rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Left — pitch */}
            <div className="lg:col-span-2">
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium mb-4">
                Tarif dégressif
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl sm:text-7xl font-serif font-medium text-stone-900 tracking-tight">
                  7 — 12
                </span>
                <span className="text-2xl font-serif text-stone-400">€</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Par logement, par mois. Plus votre parc grandit, moins vous payez par unité. Facturation mensuelle, sans engagement.
              </p>
              <a
                href="#cta"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors group"
              >
                Demander un devis
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
            </div>

            {/* Right — graduated breakdown */}
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium mb-6">
                Détail dégressif
              </p>
              <div className="space-y-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.range}
                    className="flex items-baseline justify-between border-b border-stone-200 pb-3 last:border-0"
                  >
                    <span className="text-sm text-stone-700">{tier.range}</span>
                    <span className="font-serif text-2xl text-stone-900 tracking-tight">
                      {tier.price}
                      <span className="text-sm text-stone-400 ml-1">€/mois</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inclus dans tous les plans — discret en bas */}
        <p className="text-center text-xs text-stone-400 mt-12">
          Tous les plans incluent le concierge IA, l&apos;intégration PMS, le support, le RGPD et l&apos;analytics.
          <br />
          Prix HT. {brand.legal.vatMention}.
        </p>
      </div>
    </section>
  );
}
