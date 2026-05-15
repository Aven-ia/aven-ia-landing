import {
  MessageSquare,
  Sparkles,
  Calendar,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

/**
 * 6 features clés de Smart Host — réalistes par rapport à ce qui est
 * implémenté dans le backend (cf. audit). Pas de promesses non tenues.
 *
 * Pour rebrand : ce composant n'utilise pas brand.productName directement —
 * il pourrait, mais les features sont génériques aux SaaS conciergerie.
 */

const features = [
  {
    icon: MessageSquare,
    title: "Conversations IA multilingues",
    description:
      "Vos voyageurs écrivent dans n'importe quelle langue, vous comprenez en français. Claude répond avec votre ton et vos infos logement.",
    color: "indigo",
  },
  {
    icon: Sparkles,
    title: "Escalation intelligente",
    description:
      "Urgence détectée ? Vous recevez un SMS instantané. Le reste, l'IA s'en occupe — 24h/24, 7j/7.",
    color: "amber",
  },
  {
    icon: Calendar,
    title: "20+ PMS connectés",
    description:
      "Smoobu, Hostaway, Guesty, Lodgify, Beds24… Vos réservations remontent automatiquement, le bot répond en contexte.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Opérations terrain",
    description:
      "Planning ménage, maintenance, équipe assignée par logement. Kanban temps réel synchronisé avec vos prestataires.",
    color: "emerald",
  },
  {
    icon: ShieldCheck,
    title: "RGPD & sécurité enterprise",
    description:
      "Audit log complet, export données voyageur, droit à l'oubli automatique. Vous facturez sans risque.",
    color: "rose",
  },
  {
    icon: BarChart3,
    title: "Analytics business",
    description:
      "Taux de résolution IA, classement performance par logement, alertes configurables, rapport hebdomadaire automatique.",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  indigo:  "bg-indigo-50 text-indigo-600",
  amber:   "bg-amber-50 text-amber-600",
  cyan:    "bg-cyan-50 text-cyan-600",
  emerald: "bg-emerald-50 text-emerald-600",
  rose:    "bg-rose-50 text-rose-600",
  purple:  "bg-purple-50 text-purple-600",
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tout ce qu'il vous faut. Rien que vous n'utiliserez pas.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Un produit construit avec des concierges, pour des concierges. Pas un PMS de plus — la couche IA qui rend le vôtre intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${colorMap[feature.color]} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
