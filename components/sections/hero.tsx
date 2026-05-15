import { brand } from "@/config/brand";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Hero — première impression. Doit accrocher en 5 secondes.
 *
 * Structure : badge éligibilité IA + h1 promesse + sub bénéfice +
 * 2 CTA (primaire démo, secondaire features) + preuve sociale légère.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background gradient subtle (brand-aware) */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-brand-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge "made in France" / IA */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold mb-8">
          <Sparkles size={14} />
          <span>IA propulsée par Claude · Made in France 🇫🇷</span>
        </div>

        {/* H1 promesse */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05] max-w-4xl mx-auto">
          {brand.tagline}
        </h1>

        {/* Sub-pitch */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Automatisez 90% des messages voyageurs sur WhatsApp, SMS et Messenger. Concentrez-vous sur ce qui compte : faire grossir votre parc.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-lg shadow-brand-600/25 transition-all"
          >
            Demander une démo
            <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold transition-all"
          >
            Voir les fonctionnalités
          </a>
        </div>

        {/* Proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Setup en 15 minutes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>20+ PMS connectés</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>RGPD-compliant</span>
          </div>
        </div>

        {/* Mockup dashboard (placeholder visuel pour l'instant) */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 shadow-2xl shadow-slate-200/60 overflow-hidden">
            {/* Placeholder — à remplacer par une vraie capture du dashboard */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-5xl mb-2">📊</div>
                <p className="text-sm font-medium">Capture dashboard à venir</p>
              </div>
            </div>
            {/* Halo brand-50 pour donner du relief */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/10 via-transparent to-brand-500/10 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
