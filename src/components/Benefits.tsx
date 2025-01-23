import React from "react";

export default function Benefits() {
  return (
    <section className="py-16 px-8">
      <div className="text-center mb-4">
        <span className="text-[18px] text-[#36689E] font-medium">
          AVANTAGES
        </span>
      </div>

      <h2 className="text-[43px] font-bold text-center mb-16">
        Les Bénéfices D'une Centrale Solaire
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Reduction des factures */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 55C48.2843 55 55 48.2843 55 40C55 31.7157 48.2843 25 40 25C31.7157 25 25 31.7157 25 40C25 48.2843 31.7157 55 40 55Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 45C42.7614 45 45 42.7614 45 40C45 37.2386 42.7614 35 40 35C37.2386 35 35 37.2386 35 40C35 42.7614 37.2386 45 40 45Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M15 15L30 30M65 65L50 50M65 15L50 30M15 65L30 50"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <text x="35" y="30" className="text-[#3B6C9B] text-xl">
                $
              </text>
            </svg>
          </div>
          <h3 className="text-xl text-[#3B6C9B] font-medium mb-4">
            Réduction des factures
          </h3>
          <p className="text-gray-600 leading-relaxed">
            L'énergie solaire permet de produire sa propre électricité,
            diminuant significativement les coûts liés à la consommation sur le
            réseau.
          </p>
        </div>

        {/* Rentabilité sur le long terme */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 55C48.2843 55 55 48.2843 55 40C55 31.7157 48.2843 25 40 25C31.7157 25 25 31.7157 25 40C25 48.2843 31.7157 55 40 55Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 45C42.7614 45 45 42.7614 45 40C45 37.2386 42.7614 35 40 35C37.2386 35 35 37.2386 35 40C35 42.7614 37.2386 45 40 45Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M25 25L40 40M55 55L40 40"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <text x="35" y="30" className="text-[#3B6C9B] text-xl">
                $
              </text>
            </svg>
          </div>
          <h3 className="text-xl text-[#3B6C9B] font-medium mb-4">
            Rentabilité sur le long terme
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Bien que l'investissement initial soit important, les économies
            réalisées permettent un retour sur investissement en 7 à 15 ans,
            avec des gains sur plusieurs décennies.
          </p>
        </div>

        {/* Valorisation du patrimoine */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 55C48.2843 55 55 48.2843 55 40C55 31.7157 48.2843 25 40 25C31.7157 25 25 31.7157 25 40C25 48.2843 31.7157 55 40 55Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <path
                d="M40 45C42.7614 45 45 42.7614 45 40C45 37.2386 42.7614 35 40 35C37.2386 35 35 37.2386 35 40C35 42.7614 37.2386 45 40 45Z"
                stroke="#3B6C9B"
                strokeWidth="2"
              />
              <text x="35" y="30" className="text-[#3B6C9B] text-xl">
                $
              </text>
            </svg>
          </div>
          <h3 className="text-xl text-[#3B6C9B] font-medium mb-4">
            Valorisation du patrimoine
          </h3>
          <p className="text-gray-600 leading-relaxed">
            L'installation de panneaux solaires augmente la valeur d'un bien
            immobilier, grâce à des économies d'énergie et un attrait
            écologique.
          </p>
        </div>
      </div>
    </section>
  );
}
