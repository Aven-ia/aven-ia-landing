import { Check } from "lucide-react";
import { brand } from "@/config/brand";

/**
 * Pricing — miroir EXACT des 5 tiers backend (cf. PRICING_TIERS dans
 * src/billing/billing.service.ts du backend).
 *
 * Affichage en grid + mention "tarif dégressif" qui crée du désir de
 * scale. Le bouton CTA pointe vers la capture email (pas vers Stripe
 * Checkout direct — on veut une qualification avant).
 */

const tiers = [
  { range: "1 à 5 logements",   unitPrice: 12, popular: false },
  { range: "6 à 20 logements",  unitPrice: 10, popular: true },
  { range: "21 à 50 logements", unitPrice: 9,  popular: false },
  { range: "51 à 100 logements", unitPrice: 8, popular: false },
  { range: "100+ logements",    unitPrice: 7,  popular: false },
];

const included = [
  "Concierge IA multilingue 24/7",
  "Intégration WhatsApp, SMS, Messenger",
  "20+ PMS connectés (Smoobu, Hostaway, Guesty, etc.)",
  "Opérations terrain (kanban ménage / maintenance)",
  "Escalation intelligente SMS gérant",
  "Analytics + rapport hebdomadaire",
  "Conformité RGPD (audit log, droit à l'oubli)",
  "Support email + chat",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Un tarif simple, dégressif au volume
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Plus vous avez de logements, moins vous payez par logement.
            Facturation mensuelle, sans engagement.
          </p>
        </div>

        {/* Grid pricing tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.range}
              className={`relative p-5 rounded-2xl border ${
                tier.popular
                  ? "border-brand-500 bg-brand-50/40 shadow-lg shadow-brand-500/10"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  Populaire
                </span>
              )}
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                {tier.range}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">{tier.unitPrice}€</span>
                <span className="text-sm text-slate-500">/logement/mois</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inclus dans tous les plans */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Inclus dans tous les plans
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Vous gérez plus de 200 logements ? Tarification entreprise sur mesure.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </div>

        {/* Mention TVA auto-entrepreneur */}
        <p className="text-center text-xs text-slate-400 mt-8">
          Prix HT. {brand.legal.vatMention}.
        </p>
      </div>
    </section>
  );
}
