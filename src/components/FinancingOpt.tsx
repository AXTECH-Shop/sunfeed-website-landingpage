import React from "react";
import { Clock } from "lucide-react"

export default function FinancingOpt() {
  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Quel financement pour de l&apos;autoconsommation ?</h1>
      <p className="text-center text-sm text-muted-foreground mb-4">
        ERTTIE DDRNRS DIEJUN SDJREZPQ DJFNFE ZS XCJE EDCCHD
      </p>
      <h2 className="text-xl font-semibold text-blue-600 text-center mb-8">2 SOLUTIONS DE FINANCEMENT</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* First Option */}
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">1. Tiers investisseur</h3>
            <p className="text-gray-600 mb-6">
              VOLTAÏCA investit à travers des sociétés de projets partenaires. Vous devenez donc l&apos;hébergeur du projet.
              Exploitation de la toiture sur une durée de 35 ans (bail emphytéotique), avec une contrepartie matérielle
              et financière.
            </p>
          </div>
          <div className="flex items-center text-green-600 mt-auto">
            <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">Durée 18 à 24 mois</p>
              <p className="text-sm">Sous réserve d&apos;éligibilité & procédures administratives</p>
            </div>
          </div>
        </div>

        {/* Second Option */}
        <div className="bg-gray-50 p-6 rounded-lg flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">2. Investisseur</h3>
            <p className="text-gray-600 mb-6">
              Financez vous même votre projet photovoltaïque et percevez un revenu complémentaire, grâce à la revente
              directe de l&apos;électricité à EDF.
            </p>
          </div>
          <div className="flex items-center text-green-600 mt-auto">
            <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">Durée 12 à 24 mois</p>
              <p className="text-sm">Sous réserve d&apos;éligibilité & procédures administratives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
