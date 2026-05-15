/**
 * BRAND CONFIG — Source de vérité unique pour TOUT le branding.
 *
 * Le jour où Bastien trouve le nom définitif du produit, il SUFFIT de
 * modifier ce fichier pour que toute la landing, les emails, les
 * meta tags, les open graph images, et le composant Logo se mettent
 * à jour automatiquement. Zéro grep, zéro find-replace, zéro régression.
 *
 * RÈGLE D'OR : aucun composant ne hardcode "Smart Host", "Aven.ia" ou
 * une couleur de marque. Tout passe par `brand.X` ou les CSS variables
 * `--brand-*` (injectées dans globals.css depuis ce fichier).
 */

export const brand = {
  /** Nom court du produit (apparaît partout : title, header, CTA, emails) */
  productName: "Smart Host",

  /** Société mère (footer, mentions légales, signature emails) */
  companyName: "Aven.ia",

  /**
   * Nom long pour les hero / SEO meta title.
   * Combiner les deux donne le branding "X by Aven.ia" qu'on a décidé
   * en session du 15 mai 2026.
   */
  fullName: "Smart Host — by Aven.ia",

  /** Slogan / tagline principal (hero h1 subtitle) */
  tagline: "Le concierge IA qui répond à vos voyageurs 24/7",

  /** Pitch en 1 phrase (meta description, social cards) */
  pitch:
    "Smart Host automatise la gestion de votre conciergerie Airbnb. Réponses instantanées multilingues, escalation intelligente, opérations terrain — tout depuis un dashboard premium.",

  /** Domaines & URLs publiques */
  url: {
    landing:    "https://smarthost.aven-ia.com",
    app:        "https://app.aven-ia.com",
    guest:      "https://guest.aven-ia.com",
    api:        "https://api.aven-ia.com",
    docs:       "https://docs.aven-ia.com",
    parent:     "https://aven-ia.com",
  },

  /** Coordonnées de contact (utilisées dans footer + mailto links) */
  contact: {
    email:    "contact@aven-ia.com",
    supportEmail: "support@aven-ia.com",
    instagram: "https://instagram.com/avenia.fr",
    linkedin: "https://linkedin.com/company/aven-ia",
  },

  /**
   * Palette de couleurs (RGB triplets pour Tailwind alpha-value support).
   *
   * Pour rebrand : modifier seulement les valeurs RGB ci-dessous, les
   * CSS variables sont injectées dans globals.css et toutes les classes
   * `bg-brand-500`, `text-brand-600`, etc. suivent automatiquement.
   *
   * Choix actuel : indigo Smart Host (cohérent avec le dashboard existant
   * qui utilise indigo-500/600 partout — Tailwind défaut).
   */
  colors: {
    "brand-50":  "238 242 255", // indigo-50
    "brand-100": "224 231 255", // indigo-100
    "brand-500": "99 102 241",  // indigo-500
    "brand-600": "79 70 229",   // indigo-600
    "brand-700": "67 56 202",   // indigo-700
  },

  /** Statut juridique pour les mentions footer / CGU */
  legal: {
    legalForm: "Auto-entrepreneur",
    siret: "À COMPLÉTER",
    vatMention: "TVA non applicable, art. 293 B du CGI",
    address: {
      city: "À COMPLÉTER",
      country: "France",
    },
  },
} as const;

/** Type utility pour l'autocomplete dans les composants */
export type Brand = typeof brand;
