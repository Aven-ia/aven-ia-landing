"use client";

import { motion } from "framer-motion";

/**
 * Section "Expérience" — storytelling immersif qui remplace l'ancienne
 * grid "Features" générique.
 *
 * Format Apple : 3 "moments" en plein écran qui racontent une histoire :
 *   1. Arrivée du voyageur (check-in fluide)
 *   2. Pendant le séjour (concierge IA disponible)
 *   3. Après le départ (avis collectés, équipe sereine)
 *
 * Chaque moment = full-width band avec :
 *   - Eyebrow petit caps
 *   - h2 serif grand format
 *   - 1 paragraphe accroche
 *   - Visuel à droite (placeholder à remplacer par vraies captures)
 *
 * Animation : fade-up au scroll (whileInView) — réveille la page
 * progressivement sans agresser.
 */

const moments = [
  {
    eyebrow: "Avant l'arrivée",
    title: "Tout est prêt. Avant même qu'il ne demande.",
    description:
      "Le code d'accès envoyé une heure avant. Les recommandations du quartier déjà glissées. Le restaurant favori réservé. Votre concierge IA orchestre chaque détail, dans la langue du voyageur.",
    accent: "Pré check-in automatisé",
  },
  {
    eyebrow: "Pendant le séjour",
    title: "Présent. Sans jamais être envahissant.",
    description:
      "Une question sur le wifi à 3 h du matin. Une fuite signalée le dimanche. Un besoin d'extra. Votre IA répond instantanément avec votre ton, votre voix, votre niveau de service. Vous gardez la main sur les sujets sensibles, l'IA traite le reste.",
    accent: "Disponibilité 24h/24",
  },
  {
    eyebrow: "Après le départ",
    title: "Le séjour se prolonge dans le souvenir.",
    description:
      "Message de remerciement personnalisé. Demande d'avis envoyée au bon moment. Score de satisfaction collecté. Ménage programmé. Vous concentrez votre énergie sur la prochaine arrivée, pas sur les emails de relance.",
    accent: "Post-séjour intelligent",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-white">
      {moments.map((moment, idx) => (
        <div
          key={moment.title}
          className={`relative ${idx % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}>
              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 mb-6 font-medium">
                  {moment.eyebrow}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 leading-[1.1] tracking-tight mb-8">
                  {moment.title}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed font-light max-w-xl">
                  {moment.description}
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-xs tracking-wider uppercase text-stone-500 font-medium">
                  <span className="w-8 h-px bg-brand-500" />
                  {moment.accent}
                </div>
              </motion.div>

              {/* Visual side — placeholder élégant à remplacer par vraies images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 shadow-xl"
              >
                {/* Halo subtil */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-transparent blur-2xl -z-10" />
                {/* Pattern background (placeholder lifestyle) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-stone-300 text-sm font-medium tracking-wider uppercase">
                    {idx === 0 && "Photo arrivée"}
                    {idx === 1 && "Photo séjour"}
                    {idx === 2 && "Photo départ"}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
