# Aven.ia — Landing Smart Host

Landing publique pour le SaaS Smart Host (by Aven.ia).

**URL prod (cible)** : https://smarthost.aven-ia.com
**Hébergement** : Vercel
**Stack** : Next.js 15 + Tailwind CSS + TypeScript

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🎨 Rebrand instantané

**Tout le branding est centralisé dans `config/brand.ts`.** Pour rebrand
(nouveau nom produit, nouvelles couleurs, nouveau slogan), modifier ce
fichier UNIQUE — toute la landing, les meta, les emails et les
composants se mettent à jour automatiquement.

```ts
// config/brand.ts
export const brand = {
  productName: "Smart Host",     // ← change ici pour rebrand
  companyName: "Aven.ia",
  tagline: "Le concierge IA...",
  // ...
};
```

Aucun composant ne hardcode "Smart Host" ou "Aven.ia". Tout passe par
`brand.X`. **C'est la règle d'or de ce repo.**

## 📁 Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout + injection CSS vars brand
│   ├── page.tsx             # Landing principale
│   └── globals.css          # Tailwind + CSS vars brand
├── components/
│   ├── header.tsx           # Header sticky + nav + CTA login
│   ├── footer.tsx           # Footer + mentions légales
│   └── sections/
│       ├── hero.tsx         # Hero h1 + CTA primaire
│       ├── features.tsx     # 6 features clés
│       ├── pricing.tsx      # 5 tiers (miroir backend)
│       └── cta.tsx          # Capture email finale
├── config/
│   └── brand.ts             # ⭐ SOURCE DE VÉRITÉ branding
├── lib/
│   └── utils.ts             # cn() utility shadcn
└── ...
```

## 🌐 Déploiement Vercel

### Première fois

1. Pousser ce repo sur GitHub
2. Aller sur https://vercel.com/new
3. Importer le repo `aven-ia-landing`
4. Settings → Domains → ajouter `smarthost.aven-ia.com`
5. Vercel donne 1-2 records DNS à configurer chez le registrar de `aven-ia.com`
6. Records typiques :
   - Type : CNAME
   - Nom : smarthost
   - Valeur : cname.vercel-dns.com
7. Attendre 5-30 minutes (propagation DNS), Vercel auto-issue le cert SSL

### Déploiements suivants

Chaque push sur `main` déclenche un déploiement Vercel automatique.

## ✅ Checklist avant de pousser en prod

- [ ] Mettre à jour `brand.legal.siret` dans `config/brand.ts`
- [ ] Mettre à jour `brand.legal.address.city`
- [ ] Vérifier les liens sociaux dans `brand.contact`
- [ ] Ajouter une vraie capture du dashboard dans `hero.tsx` (remplacer le placeholder 📊)
- [ ] Câbler la capture email vers un vrai endpoint backend (POST /leads)
- [ ] Ajouter Plausible Analytics ou équivalent RGPD-friendly

## 🔧 Maintenance

Tu peux modifier toute la landing sans toucher au backend Smart Host.
Le couplage est minimal : le bouton "Connexion" pointe vers
`brand.url.app` (dashboard sur Vercel séparé), le bouton "Démo" capture
juste un email via mailto pour l'instant.

Le jour où tu auras un endpoint `POST /leads` sur le backend Smart Host,
remplacer le `mailto` dans `components/sections/cta.tsx` par un vrai
`fetch()` vers cet endpoint.
