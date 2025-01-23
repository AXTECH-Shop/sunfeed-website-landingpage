"use client";

import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    id: "0000388",
    title: "Location de toiture de 1100m²",
    location: "Cassaniouze, Cantal",
    image: "/images/Solar1.png",
  },
  {
    id: "0002096",
    title: "Construction d'un bâtiment de stockage de 700m²",
    location: "Le Carlaret, Ariège",
    image: "/images/Solar1.png",
  },
  {
    id: "0002098",
    title: "Construction d'un hangar agricole de 600m²",
    location: "Gardouch, Haute-Garonne",
    image: "/images/Solar1.png",
  },
  {
    id: "0002099",
    title: "Installation photovoltaïque 850m²",
    location: "Toulouse, Haute-Garonne",
    image: "/images/Solar1.png",
  },
  {
    id: "0002100",
    title: "Hangar industriel moderne 1200m²",
    location: "Montpellier, Hérault",
    image: "/images/Solar1.png",
  },
  {
    id: "0002101",
    title: "Structure métallique innovante 900m²",
    location: "Bordeaux, Gironde",
    image: "/images/Solar1.png",
  },
  {
    id: "0002102",
    title: "Complexe solaire agricole 1500m²",
    location: "Narbonne, Aude",
    image: "/images/Solar1.png",
  },
  {
    id: "0002103",
    title: "Entrepôt logistique moderne 2000m²",
    location: "Lyon, Rhône",
    image: "/images/Solar1.png",
  },
];

export default function OurAchievements() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-gray-100 pt-10 pb-12">
      <div className="max-w-[95%] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-[#1B365D]">
            NOS RÉALISATIONS
          </h1>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-3 rounded-full border-2 border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 rounded-full border-2 border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors duration-200"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden pb-2" ref={emblaRef}>
          <div className="flex gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] sm:flex-[0_0_45%] md:flex-[0_0_30%] group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B365D] mb-2">
                    {project.id}
                  </h3>
                  <p className="text-gray-800 mb-4">{project.title}</p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
