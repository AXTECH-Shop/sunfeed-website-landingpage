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
    { id: 1, src: "/Images/solar1.png", alt: "Thumbnail 1" },
    { id: 2, src: "/Images/solar2.png", alt: "Thumbnail 2" },
    { id: 3, src: "/Images/solar3.png", alt: "Thumbnail 3" },
    { id: 4, src: "/Images/solar1.png", alt: "Thumbnail 4" },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Réduction des coûts énergétiques",
      description:
        "L’autoconsommation collective permet de produire et consommer ",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Optimisation et rentabilité de l’énergie produite ",
      description: "L’autoconsommation collective permet de maximiser.",
    },
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      title: "Flexibility & Modularity",
      description:
        "Ce modèle renforce les liens communautaires en encourageant .",
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Environmental Commitment",
      description:
        "En consommant une énergie renouvelable produite localement.",
    },
  ];
  return (
    <>
      <HeroSection
        title="Je loue ma toiture en Autoconsommation collective"
        backgroundImage="/Images/batterybg.png"
        thumbnails={thumbnails}
        subText="GÉNÉREZ DU REVENUE PAR L'ÉNERGIE SOLAIRE"
        highlightText="toiture"
      />

      <Feature
        features={features}
        heading="La solution d’autoconsommation collective"
        subText="Save Money and Reduce Your Carbon Footprint"
        buttonText="CONTACTEZ-NOUS"
      />

      <div className="my-10 flex justify-center ">
        <Image
          src="/Images/Ai.png"
          alt="Example Image"
          width={800}
          height={500}
        />
      </div>

      <div className="min-h-screen mt-4 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 text-center">
              Quel foncier pour la création de batiment ?
            </h1>
            <p className="text-base text-gray-600 mb-6 text-center">
            RÉALISEZ VOTRE HANGAR PHOTOVOLTAÏQUE AVEC SUNFEED <br />TRANSFORMEZ L'ÉNERGIE SOLAIRE EN OPPORTUNITÉ FINANCIÈRE

            </p>

            <p className="text-gray-700 mb-8">
              A storage battery plays an essential role in a solar energy
              system, whether intended for individual or collective
              self-consumption. Here are the main functions and advantages of a
              solar battery:
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Storage of excess energy
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principle: During the day, solar panels often produce more
                    energy than what is immediately consumed. The battery allows
                    storing this excess instead of injecting it into the grid.
                  </li>
                  <li>
                    Advantage: Maximization of locally produced energy usage,
                    thus reducing dependence on the public grid.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Energy supply outside production hours
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principle: Stored energy is used when solar panels are not
                    producing, particularly at night or during cloudy weather.
                  </li>
                  <li>
                    Advantage: Ensures continuous supply of renewable energy,
                    increasing energy autonomy.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Reduction of energy costs
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principle: By storing and consuming solar energy, users
                    avoid having to purchase electricity at often higher rates
                    during peak periods.
                  </li>
                  <li>Advantage: Optimization of savings on energy bills.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    4
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Securing electrical supply
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principle: Certain batteries, particularly in hybrid
                    systems, can provide backup power in case of grid outage.
                  </li>
                  <li>
                    Advantage: Ensures energy continuity for essential
                    appliances.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-3">
                    5
                  </span>
                  <h2 className="font-semibold text-xl text-gray-900">
                    Contribution to energy transition
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-11">
                  <li>
                    Principle: By enabling deferred consumption of renewable
                    energy, batteries help balance production and demand, even
                    in the absence of sun.
                  </li>
                  <li>
                    Advantage: Reduction of grid pressure and participation in
                    more sustainable energy management.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <FinancingOpt/>
      <ProcessFlow />
      <FAQ />
    </>
  );
}
