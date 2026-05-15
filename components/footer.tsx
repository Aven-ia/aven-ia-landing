import { brand } from "@/config/brand";

/**
 * Footer premium minimaliste — style éditorial.
 * Pas de checklist de liens infinie. Juste l'essentiel : marque, contact,
 * légal. Beaucoup d'espace blanc.
 */
export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Marque */}
          <div className="md:col-span-5">
            <div className="text-2xl font-serif font-medium text-stone-900 mb-2">
              {brand.productName}
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
              by {brand.companyName}
            </p>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
              {brand.pitch.split(".")[0]}.
            </p>
          </div>

          {/* Produit */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-5">Produit</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#experience" className="text-stone-700 hover:text-stone-900 transition-colors">Expérience</a></li>
              <li><a href="#features" className="text-stone-700 hover:text-stone-900 transition-colors">Fonctionnalités</a></li>
              <li><a href="#pricing" className="text-stone-700 hover:text-stone-900 transition-colors">Tarifs</a></li>
              <li><a href={brand.url.app} className="text-stone-700 hover:text-stone-900 transition-colors">Connexion</a></li>
            </ul>
          </div>

          {/* Société */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-5">Société</p>
            <ul className="space-y-3 text-sm">
              <li><a href={brand.url.parent} className="text-stone-700 hover:text-stone-900 transition-colors">{brand.companyName}</a></li>
              <li><a href={brand.contact.instagram} className="text-stone-700 hover:text-stone-900 transition-colors">Instagram</a></li>
              <li><a href={brand.contact.linkedin} className="text-stone-700 hover:text-stone-900 transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-5">Contact</p>
            <a
              href={`mailto:${brand.contact.email}`}
              className="text-sm text-stone-900 hover:text-brand-500 transition-colors block mb-1"
            >
              {brand.contact.email}
            </a>
            <p className="text-xs text-stone-500">
              Réponse personnalisée sous 24h.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} {brand.companyName} · {brand.legal.legalForm} · {brand.legal.vatMention}.
          </p>
          <div className="flex gap-6 text-xs text-stone-400">
            <a href="/cgu" className="hover:text-stone-700 transition-colors">CGU</a>
            <a href="/privacy" className="hover:text-stone-700 transition-colors">Confidentialité</a>
            <span>Made with 🤍 in France</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
