import React from "react";
import HeroSection from "@/components/HeroSection";
import Feature from "@/components/Features";
import { Shield, Zap, Boxes, Leaf } from "lucide-react";

export default function page() {
  const thumbnails = [
    { id: 1, src: "/Images/solar1.png", alt: "Miniature 1" },
    { id: 2, src: "/Images/solar2.png", alt: "Miniature 2" },
    { id: 3, src: "/Images/solar3.png", alt: "Miniature 3" },
    { id: 4, src: "/Images/solar1.png", alt: "Miniature 4" },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance optimisée",
      description: "Les batteries de dernière génération garantissent une densité énergétique élevée.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Sécurité renforcée",
      description: "Des normes strictes garantissent un fonctionnement sécurisé.",
    },
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      title: "Flexibilité et modularité",
      description: "Adaptable aux projets de toutes tailles.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Engagement environnemental",
      description: "Maximise l&apos;utilisation de l&apos;énergie renouvelable.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Batterie"
        backgroundImage="/Images/batterybg.png"
        thumbnails={thumbnails}
        subText=""
        highlightText={""}
      />

      <Feature
        features={features}
        heading="Stockez votre énergie avec des batteries"
        subText="Économisez de l&apos;argent et réduisez votre empreinte carbone"
        buttonText="CONTACTEZ-NOUS"
      />

      <div className="min-h-screen mt-4 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">
              Quel est le rôle de la batterie ?
            </h1>
            <p className="text-base text-gray-600 mb-6 text-center">
              SYSTÈMES DE STOCKAGE D&apos;ÉNERGIE ET LEUR IMPORTANCE
            </p>

            <p className="text-gray-700 mb-8">
              Une batterie de stockage joue un rôle essentiel dans un système
              d&apos;énergie solaire, qu&apos;il soit destiné à l&apos;autoconsommation
              individuelle ou collective. Voici les principales fonctions et
              avantages d&apos;une batterie solaire :
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Stockage de l&apos;excédent d&apos;énergie
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : Pendant la journée, les panneaux solaires
                    produisent souvent plus d&apos;énergie que ce qui est
                    immédiatement consommé. La batterie permet de stocker cet
                    excédent au lieu de l&apos;injecter dans le réseau.
                  </li>
                  <li>
                    Avantage : Maximisation de l&apos;utilisation de l&apos;énergie
                    produite localement, réduisant ainsi la dépendance au réseau
                    public.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Alimentation en dehors des heures de production
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : L&apos;énergie stockée est utilisée lorsque les
                    panneaux solaires ne produisent pas, notamment la nuit ou
                    par temps nuageux.
                  </li>
                  <li>
                    Avantage : Assure un approvisionnement continu en énergie
                    renouvelable, augmentant l&apos;autonomie énergétique.
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
                    Principe : En stockant et en consommant de l&apos;énergie solaire,
                    les utilisateurs évitent d&apos;acheter de l&apos;électricité souvent
                    plus chère pendant les périodes de pointe.
                  </li>
                  <li>Avantage : Optimisation des économies sur les factures d&apos;énergie.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    4
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Sécurisation de l&apos;approvisionnement électrique
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principe : Certaines batteries, notamment dans les systèmes
                    hybrides, peuvent fournir de l&apos;énergie de secours en cas de
                    panne de réseau.
                  </li>
                  <li>
                    Avantage : Assure la continuité de l&apos;énergie pour les
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
                    Principe : En permettant la consommation différée de
                    l&apos;énergie renouvelable, les batteries aident à équilibrer la
                    production et la demande, même en l&apos;absence de soleil.
                  </li>
                  <li>
                    Avantage : Réduction de la pression sur le réseau et
                    participation à une gestion énergétique plus durable.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center">
              Quel financement pour la batterie ?
            </h2>
            <p className="text-base text-gray-600 mb-6 text-center">
              SOLUTIONS FINANCIÈRES POUR LE STOCKAGE D&apos;ÉNERGIE
            </p>

            <p className="text-gray-700 mb-8">
              Mettre en place un projet d&apos;autoconsommation collective nécessite
              un investissement initial. Cependant, de nombreuses solutions de
              financement existent pour soutenir les particuliers, les entreprises
              et les collectivités dans cette transition énergétique. Voici les
              principales options à considérer :
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Autofinancement
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Pour les acteurs ayant la capacité d&apos;autofinancer, le
                    financement par fonds propres reste une solution intéressante.
                  </li>
                  <li>
                    Avantages : Pas de frais d&apos;intérêt ni d&apos;engagement envers un
                    tiers.
                  </li>
                  <li>
                    Inconvénients : Nécessite des ressources financières
                    immédiatement disponibles.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Prêts bancaires
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Les prêts bancaires traditionnels ou les prêts spécifiques
                    pour la transition énergétique permettent d&apos;étaler le coût
                    d&apos;installation sur plusieurs années.
                  </li>
                  <li>
                    Points forts : Taux souvent attractifs grâce aux dispositifs
                    liés aux énergies renouvelables.
                  </li>
                  <li>
                    Exemple : Prêts éco-énergie proposés par certaines banques
                    pour financer des projets verts.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Location ou financement par un tiers
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Dans ce modèle, une entreprise tierce finance et installe
                    l&apos;équipement. Vous payez un loyer pour l&apos;utilisation des
                    panneaux, avec une option d&apos;achat à terme.
                  </li>
                  <li>
                    Avantages : Pas de frais initiaux, ce qui réduit le risque
                    financier.
                  </li>
                  <li>
                    Idéal pour : Les entreprises ou collectivités disposant de
                    ressources limitées.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
