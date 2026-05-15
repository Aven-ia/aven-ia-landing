"use client";

import { motion } from "framer-motion";

/**
 * Section Features minimaliste — style Apple "Specs grid".
 *
 * Pas de cards, pas d'icônes lourdes. Juste une grille de mini-stats / specs
 * qui rassure techniquement après l'émotion de la section "Experience".
 *
 * Format : 6 cellules épurées dans une grille 3×2, avec titre fort + sub.
 */

const specs = [
  {
    value: "20+",
    title: "PMS connectés",
    description: "Hostaway, Smoobu, Guesty, Lodgify, et plus.",
  },
  {
    value: "24h/24",
    title: "Réponses instantanées",
    description: "Voyageurs servis dans toutes les langues.",
  },
  {
    value: "< 15 min",
    title: "Setup complet",
    description: "Du compte créé au premier voyageur servi.",
  },
  {
    value: "RGPD",
    title: "Compliance enterprise",
    description: "Audit log, droit à l'oubli, art. 30 GDPR.",
  },
  {
    value: "0 €",
    title: "Sans engagement",
    description: "Résiliable à tout moment, paiement mensuel.",
  },
  {
    value: "🇫🇷",
    title: "Made in France",
    description: "IA propulsée par Anthropic Claude, hébergé en EU.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 mb-6 font-medium">
            La promesse, en chiffres
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-[1.1] tracking-tight">
            Conçu pour ceux qui ne tolèrent
            <br />
            <span className="text-white/60">aucun compromis.</span>
          </h2>
        </motion.div>

        {/* Specs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {specs.map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-stone-950 p-8 sm:p-10"
            >
              <div className="text-3xl sm:text-4xl font-serif font-medium text-white mb-3 tracking-tight">
                {spec.value}
              </div>
              <h3 className="text-base font-medium text-white mb-2">{spec.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
