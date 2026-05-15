"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/config/brand";

/**
 * CTA final — style Tesla "Reserve yours".
 *
 * Section sombre pleine page (contraste fort avec le pricing blanc),
 * une seule action proposée. Capture email simple, design épuré.
 */
export function Cta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    const subject = encodeURIComponent(`Demande de démo ${brand.productName}`);
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite découvrir ${brand.productName} pour ma conciergerie.\n\nEmail : ${email}\n\nMerci de me recontacter pour une démo privée.`,
    );
    window.location.href = `mailto:${brand.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("success"), 500);
  };

  return (
    <section id="cta" className="relative bg-stone-950 text-white overflow-hidden">
      {/* Background halo doré subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-500/10 via-brand-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-32 sm:py-40 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.3em] uppercase text-brand-500 mb-8 font-medium"
        >
          Prêt à transformer votre conciergerie ?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.05] tracking-tight"
        >
          Découvrez {brand.productName}
          <br />
          <span className="text-white/60">en démonstration privée.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-base sm:text-lg text-white/60 max-w-xl mx-auto font-light leading-relaxed"
        >
          30 minutes pour comprendre comment l&apos;IA peut transformer votre relation voyageur. Sans engagement, sans script commercial.
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20"
          >
            <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">Demande reçue. Nous vous recontactons sous 24h.</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 focus:border-white/30 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 rounded-full bg-white text-stone-900 font-medium text-sm hover:bg-stone-100 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Envoi..." : "Demander une démo"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
