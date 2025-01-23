import { CircleDot, FileText, HardHat, Building2 } from "lucide-react";
import { JSX } from "react";

export default function ProcessFlow() {
  const phases = [
    {
      title: "Phase commerciale",
      icon: <CircleDot className="w-8 h-8" aria-label="Commercial Phase" />,
      bgColor: "bg-[#E5B94E]",
      steps: ["1. Étude de votre projet et Offre commerciale", "2. Signature de la promesse de bail"],
    },
    {
      title: "Phase de faisabilité",
      icon: <FileText className="w-8 h-8" aria-label="Feasibility Phase" />,
      bgColor: "bg-[#B5D56A]",
      steps: ["3. Collecte de documents et vérifications (hypothèque, urbanisme…)"],
    },
    {
      title: "Phase de développement",
      icon: <FileText className="w-8 h-8" aria-label="Development Phase" />,
      bgColor: "bg-[#B5D56A]",
      steps: [
        "4. Dépôt du permis de construire",
        "5. Obtention du foncier",
        "6. Affichage du panneau et purge",
        "7. Division du géomètre",
        "8. Promesse de financement",
        "9. Signature du bail",
      ],
    },
    {
      title: "Phase de construction",
      icon: <HardHat className="w-8 h-8" aria-label="Construction Phase" />,
      bgColor: "bg-[#1B365D]",
      textColor: "text-white",
      steps: [
        "10. Terrassement / Fondations",
        "11. Construction du bâtiment et installation",
        "12. Livraison du bâtiment",
        "13. Transfert / liaison TGBT, PDL",
        "14. Obtention du consuel",
      ],
    },
    {
      title: "Phase finale",
      icon: <Building2 className="w-8 h-8" aria-label="Final Phase" />,
      bgColor: "bg-[#5190CD]",
      textColor: "text-white",
      steps: ["15. Mise en service de la centrale"],
    },
  ];

  const investorPhases = [
    {
      title: "Phase commerciale",
      icon: <CircleDot className="w-8 h-8" aria-label="Commercial Phase" />,
      bgColor: "bg-[#E5B94E]",
      steps: ["1. Étude projet et Devis Investisseur", "2. Validation du projet"],
    },
    {
      title: "Phase de faisabilité",
      icon: <FileText className="w-8 h-8" aria-label="Feasibility Phase" />,
      bgColor: "bg-[#B5D56A]",
      steps: ["3. Collecte de documents et vérifications (hypothèque, urbanisme…)"],
    },
    {
      title: "Phase de développement",
      icon: <FileText className="w-8 h-8" aria-label="Development Phase" />,
      bgColor: "bg-[#B5D56A]",
      steps: [
        "4. Dépôt du Permis de Construire",
        "5. Obtention du foncier",
        "6. Demande du raccordement",
        "7. Validation de la Proposition Technique et Financière",
      ],
    },
    {
      title: "Phase de construction",
      icon: <HardHat className="w-8 h-8" aria-label="Construction Phase" />,
      bgColor: "bg-[#1B365D]",
      textColor: "text-white",
      steps: [
        "8. Terrassement",
        "9. Fondations",
        "10. Construction du bâtiment et installation",
        "11. Livraison du bâtiment",
        "12. Transfert / liaison TGBT, PDL",
        "13. Obtention du consuel",
      ],
    },
    {
      title: "Phase finale",
      icon: <Building2 className="w-8 h-8" aria-label="Final Phase" />,
      bgColor: "bg-[#5190CD]",
      textColor: "text-white",
      steps: [
        "14. Mise en service de la centrale",
        "15. Obtention du contrat de rachat",
        "16. Première facturation & éléments de rentabilité",
      ],
    },
  ];

  interface ProcessColumnProps {
    title: string;
    phases: { title: string; icon: JSX.Element; bgColor: string; textColor?: string; steps: string[] }[];
    className?: string;
  }

  const ProcessColumn = ({ title, phases, className = "" }: ProcessColumnProps) => (
    <div className={`flex-1 max-w-xl mx-auto ${className}`}>
      <h2 className="text-2xl font-bold text-center mb-12 text-[#1B365D] tracking-wide">{title}</h2>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={phase.title} className="relative">
            {index !== phases.length - 1 && (
              <div
                className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300"
                style={{ height: "calc(100% + 1.5rem)" }}
              />
            )}
            <div className="relative flex items-start gap-4">
              <div className={`${phase.bgColor} ${phase.textColor || "text-black"} rounded-full p-2 z-10`}>
                {phase.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <ul className="space-y-1 text-sm">
                  {phase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-16">
        <ProcessColumn title="LES ÉTAPES TIERS-INVESTISSEUR" phases={phases} className="md:border-r md:pr-12" />
        <ProcessColumn title="LES ÉTAPES INVESTISSEUR" phases={investorPhases} />
      </div>
    </div>
  );
}
