"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

const ClientCounter = () => {
  const stats = [
    { value: 2008, label: "Création de voltaïca", isCounting: true },
    { value: 650, label: "Centrales (développées ou en cours de développement)", isCounting: true, prefix: "+" },
    { value: 23, label: "D'euros de ca en 2025", isCounting: true, prefix: "+", suffix: "M" },
    { value: 150, label: "Collaborateurs", isCounting: true, prefix: "+" },
    { value: 7, label: "Au classement des champions de la croissance 2024", isCounting: false, suffix: "ème" },
  ];

  return (
    <div className="relative bg-[#36689E] overflow-hidden py-16 sm:py-20">
      {/* Background Image with Reduced Visibility */}
      <div className="absolute inset-0">
        <Image
          src="/Images/countingimg.jpg"
          alt="Solar Panels"
          fill
          objectFit="cover"
          className="opacity-40" // Reduce visibility
          priority
        />
        <div className="absolute inset-0 bg-[#36689E]/80 mix-blend-multiply" />
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-white text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-center">
        EN QUELQUES CHIFFRES...
      </h2>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-white text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Circle */}
              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-white/20 border-2 border-white p-2 space-y-1">
                {stat.isCounting ? (
                  <h3 className="text-xl sm:text-2xl font-bold">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  </h3>
                ) : (
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {stat.prefix || ""}
                    {stat.value}
                    {stat.suffix || ""}
                  </h3>
                )}
                {/* Label */}
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-center leading-tight break-words">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCounter;
