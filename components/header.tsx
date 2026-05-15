import Link from "next/link";
import { brand } from "@/config/brand";

/**
 * Header sticky avec logo, navigation ancres, et CTA login dashboard.
 *
 * Le logo est purement textuel pour l'instant (productName + "by companyName").
 * Le jour où tu auras un logo SVG, remplacer le <span> par <Image>.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            {brand.productName.charAt(0)}
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
              {brand.productName}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">
              by {brand.companyName}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Fonctionnalités
          </a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Tarifs
          </a>
          <a href={brand.url.parent} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            {brand.companyName}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={brand.url.app}
            className="hidden sm:inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Connexion
          </Link>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-colors"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}
