'use client';

import { Home, Building2, Landmark } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Démarches administratives',
    description:
      "Les équipes d'experts de Sunfeed vous accompagnent afin de réaliser le permis de construire et le déposer en mairie.",
    icon: Home,
  },
  {
    id: 2,
    title: 'Développement',
    description:
      "Nous procédons à différentes études afin de garantir un haut niveau de qualité pour la construction du bâtiment : étude de sol, étude de structure, étude de fondations.",
    icon: Building2,
  },
  {
    id: 3,
    title: 'Construction du bâtiment et exploitation',
    description:
      "Nous procédons à la réalisation des fondations, montage des structures métalliques, pose de la couverture en bac acier étanche, ajout des modules et des onduleurs, construction du local technique, câblage.",
    icon: Landmark,
  },
];

export default function ConstructionSteps() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h3 className="text-blue-600 font-semibold">ÉTAPES</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Les Étapes De La Construction :</h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-center">
              <div className="p-4 bg-blue-100 rounded-full">
                <step.icon className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.id}. {step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
