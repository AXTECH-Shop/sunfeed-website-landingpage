import Feature from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import React from "react";
import { Shield, Zap, Boxes, Leaf } from "lucide-react";
import Image from "next/image";
import FinancingOpt from "@/components/FinancingOpt";
import ProcessFlow from "@/components/ProcessFlow";
import FAQ from "@/components/FAQ";

export default function page() {
  const thumbnails = [
    { id: 1, src: "/Images/solar1.png", alt: "Vignette 1" },
    { id: 2, src: "/Images/solar2.png", alt: "Vignette 2" },
    { id: 3, src: "/Images/solar3.png", alt: "Vignette 3" },
    { id: 4, src: "/Images/solar1.png", alt: "Vignette 4" },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Réduction des coûts énergétiques",
      description:
        "L’autoconsommation collective permet de produire et consommer de manière optimale.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Optimisation et rentabilité de l’énergie produite",
      description: "Maximisation de l'utilisation de l'énergie produite localement.",
    },
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      title: "Flexibilité et modularité",
      description: "Ce modèle renforce les liens communautaires en favorisant l'autoconsommation.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Engagement environnemental",
      description: "En consommant une énergie renouvelable produite localement, vous réduisez votre empreinte carbone.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Je construis mon hangar en autoconsommation collective"
        backgroundImage="/Images/batterybg.png"
        thumbnails={thumbnails}
        subText="FAITES FINANCER VOTRE PROJET PAR L'ÉNERGIE SOLAIRE"
        highlightText="mon"
      />

      <Feature
        features={features}
        heading="La solution d’autoconsommation collective"
        subText="Économisez de l'argent et réduisez votre empreinte carbone"
        buttonText="CONTACTEZ-NOUS"
      />

      <div className="my-10 flex justify-center">
        <Image
          src="/Images/Ai.png"
          alt="Exemple d'image"
          width={800}
          height={500}
        />
      </div>

      <div className="min-h-screen mt-4 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">
              Quel foncier pour la création de bâtiment ?
            </h1>
            <p className="text-base text-gray-600 mb-6 text-center">
              RÉALISEZ VOTRE HANGAR PHOTOVOLTAÏQUE AVEC SUNFEED <br />
              TRANSFORMEZ L'ÉNERGIE SOLAIRE EN OPPORTUNITÉ FINANCIÈRE
            </p>

            <p className="text-gray-700 mb-8">
              Une batterie de stockage joue un rôle essentiel dans un système
              d'énergie solaire, qu'il s'agisse d'autoconsommation individuelle
              ou collective. Voici les principales fonctions et avantages d'une
              batterie solaire :
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Stockage de l'énergie excédentaire
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : Pendant la journée, les panneaux solaires
                    produisent souvent plus d'énergie que ce qui est
                    immédiatement consommé. La batterie permet de stocker cet
                    excédent au lieu de l'injecter dans le réseau.
                  </li>
                  <li>
                    Avantage : Maximisation de l'utilisation de l'énergie
                    produite localement, réduisant ainsi la dépendance au
                    réseau public.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Alimentation en énergie hors heures de production
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : L'énergie stockée est utilisée lorsque les
                    panneaux solaires ne produisent pas, notamment la nuit ou
                    par temps nuageux.
                  </li>
                  <li>
                    Avantage : Assure un approvisionnement continu en énergie
                    renouvelable, augmentant l'autonomie énergétique.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Réduction des coûts énergétiques
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : En stockant et en consommant l'énergie solaire,
                    les utilisateurs évitent d'acheter de l'électricité à des
                    tarifs souvent plus élevés pendant les périodes de pointe.
                  </li>
                  <li>
                    Avantage : Optimisation des économies sur les factures
                    d'énergie.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    4
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Sécurisation de l'approvisionnement électrique
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : Certaines batteries, en particulier dans les
                    systèmes hybrides, peuvent fournir une alimentation de
                    secours en cas de panne du réseau.
                  </li>
                  <li>
                    Avantage : Garantie de continuité énergétique pour les
                    appareils essentiels.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    5
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Contribution à la transition énergétique
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : En permettant une consommation différée d'énergie
                    renouvelable, les batteries aident à équilibrer production
                    et demande, même en l'absence de soleil.
                  </li>
                  <li>
                    Avantage : Réduction de la pression sur le réseau et
                    participation à une gestion énergétique plus durable.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <FinancingOpt />
      <ProcessFlow />
      <FAQ />
    </>
  );
}
