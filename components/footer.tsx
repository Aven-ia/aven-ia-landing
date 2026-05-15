import { brand } from "@/config/brand";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + pitch */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center text-white font-bold text-xs">
                {brand.productName.charAt(0)}
              </div>
              <span className="font-bold text-slate-900 text-sm">{brand.productName}</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {brand.pitch.split(".")[0]}.
            </p>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Produit
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href={brand.url.app} className="text-slate-600 hover:text-slate-900 transition-colors">
                  Se connecter
                </a>
              </li>
            </ul>
          </div>

          {/* Société */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              {brand.companyName}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={brand.url.parent} className="text-slate-600 hover:text-slate-900 transition-colors">
                  Notre agence
                </a>
              </li>
              <li>
                <a href={brand.contact.instagram} className="text-slate-600 hover:text-slate-900 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={brand.contact.linkedin} className="text-slate-600 hover:text-slate-900 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Légal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${brand.contact.email}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/cgu" className="text-slate-600 hover:text-slate-900 transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mentions légales auto-entrepreneur */}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {brand.companyName}. {brand.legal.legalForm}. {brand.legal.vatMention}.
          </p>
          <p>
            Made with 🤍 in {brand.legal.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
