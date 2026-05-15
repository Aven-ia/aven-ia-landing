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

  /** Slogan / tagline principal — style Apple "moins de mots, plus d'impact" */
  tagline: "L'expérience voyageur réinventée.",
  /** Sub-tagline qui développe (l'équivalent du "Think different. Just do it.") */
  taglineSub: "Un concierge IA qui veille sur chacun de vos logements. 24h/24, dans toutes les langues, avec l'élégance d'un grand hôtel.",

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
    // PREMIUM (mai 2026) — Palette inspirée Apple / Tesla : noir profond,
    // blanc pur, accent or sobre. Aucune couleur "saas générique" qui
    // banaliserait la marque.
    //
    // Rebrand simple : changer les 5 valeurs ci-dessous = toute la landing
    // se rebrand sans toucher un seul autre fichier.
    "brand-50":  "250 250 249", // off-white
    "brand-100": "245 245 244", // stone-100 (subtle background)
    "brand-500": "168 132 80",  // gold accent (premium signature)
    "brand-600": "23 23 23",    // near-black (boutons, texte principal)
    "brand-700": "10 10 10",    // pure black (titres, hero text)
  },

  /**
   * Photos lifestyle haute résolution (Unsplash — licence libre commercial,
   * pas d'attribution requise).
   *
   * Le jour où Bastien a ses propres photos (vrais logements de ses
   * conciergeries clientes, photoshoot pro), remplacer ces URLs par
   * des assets locaux dans /public/images/ — la landing se met à jour
   * automatiquement.
   *
   * Paramètres URL Unsplash :
   *   - w=2400 → max width, suffisant pour les écrans 5K Retina
   *   - q=85  → qualité visuelle haute sans bloat
   *   - auto=format → WebP/AVIF auto selon browser
   *   - fit=crop → recadrage centré intelligent
   */
  images: {
    /** Hero pleine page — intérieur premium lumineux avec vue */
    hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&q=85&auto=format&fit=crop",
    /** Section "Avant l'arrivée" — accueil chaleureux, lumière douce */
    momentArrival: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=85&auto=format&fit=crop",
    /** Section "Pendant le séjour" — détente, verre/terrasse */
    momentStay: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=85&auto=format&fit=crop",
    /** Section "Après le départ" — chambre paisible, fin de séjour */
    momentDeparture: "https://images.unsplash.com/photo-1551776245-d35adfd7d2d6?w=1600&q=85&auto=format&fit=crop",
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
