"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

/**
 * Header premium — transparent au-dessus du hero, opaque blanc au scroll.
 * Inspiré du pattern Apple / Tesla : la navigation se révèle progressivement
 * sans casser l'immersion du hero pleine page.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/60"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className={cn(
              "text-base font-serif font-medium transition-colors",
              scrolled ? "text-stone-900" : "text-white",
            )}
          >
            {brand.productName}
          </span>
          <span
            className={cn(
              "text-[10px] tracking-[0.2em] uppercase transition-colors hidden sm:inline",
              scrolled ? "text-stone-400" : "text-white/60",
            )}
          >
            by {brand.companyName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "#experience", label: "Expérience" },
            { href: "#features", label: "Fonctionnalités" },
            { href: "#pricing", label: "Tarifs" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium transition-colors",
                scrolled ? "text-stone-700 hover:text-stone-900" : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={brand.url.app}
            className={cn(
              "hidden sm:inline-flex text-[13px] font-medium transition-colors",
              scrolled ? "text-stone-700 hover:text-stone-900" : "text-white/80 hover:text-white",
            )}
          >
            Connexion
          </Link>
          <a
            href="#cta"
            className={cn(
              "inline-flex items-center px-5 py-2 rounded-full text-[13px] font-medium transition-all",
              scrolled
                ? "bg-stone-900 text-white hover:bg-stone-800"
                : "bg-white text-stone-900 hover:bg-stone-100",
            )}
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}
