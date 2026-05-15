"use client";

import { useState } from "react";
import { brand } from "@/config/brand";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

/**
 * CTA final — capture email pour démo / qualification.
 *
 * Endpoint backend : à câbler le jour J (POST /leads ou similaire).
 * Pour l'instant : mailto fallback qui ouvre le client mail avec
 * sujet + adresse de Bastien pré-remplis. Pas idéal pour tracking
 * conversion mais shipping vite > perfection.
 *
 * Migration vers vraie capture : remplacer le mailto par un POST
 * vers `${API_URL}/leads` quand l'endpoint backend sera prêt.
 */
export function Cta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    // Fallback mailto pour MVP — ouvre le client mail avec pré-remplissage.
    // À remplacer par fetch vers API backend dès qu'on aura un endpoint /leads.
    const subject = encodeURIComponent(`Demande de démo ${brand.productName}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite découvrir ${brand.productName} pour ma conciergerie.\n\nEmail : ${email}\n\nMerci de me recontacter.`,
    );
    window.location.href = `mailto:${brand.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("success"), 500);
  };

  return (
    <section id="cta" className="py-20 sm:py-28 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Prêt à automatiser votre conciergerie ?
        </h2>
        <p className="mt-4 text-lg text-brand-100">
          Démo gratuite de 30 minutes. On vous montre comment {brand.productName} se branche sur votre PMS actuel en moins de 15 minutes.
        </p>

        {status === "success" ? (
          <div className="mt-10 inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 border border-white/20">
            <CheckCircle2 size={20} className="text-emerald-300" />
            <span className="font-semibold">Demande reçue — on vous répond sous 24h.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-brand-100/60 focus:outline-none focus:bg-white/15 focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  Demander une démo
                </>
              )}
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-brand-100/80">
          Pas de spam. Pas d'engagement. On répond personnellement à chaque demande.
        </p>
      </div>
    </section>
  );
}
