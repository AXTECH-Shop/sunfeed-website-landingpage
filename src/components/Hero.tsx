"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/Images/solar1.png", alt: "Solar panel installation" },
  { src: "/Images/solar2.png", alt: "Sunset over solar panels" },
  { src: "/Images/solar3.png", alt: "Rooftop solar panels" },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 3000);
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-secondary p-6 md:p-12 lg:p-16">
      {/* Text Content */}
      <div className="flex-1 z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B365D] mb-5 leading-snug">
          Le soleil n&apos;envoie pas de facture
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-7 max-w-lg mx-auto lg:mx-0">
          Investissez dans l&apos;énergie solaire pour un avenir durable et économique. Nos solutions photovoltaïques s&apos;adaptent à vos besoins.
        </p>
        <button className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium hover:bg-blue-950 transition-colors duration-200">
          Demandez votre pré-étude gratuite
        </button>
      </div>

      {/* Image Slider */}
      <div className="flex-1 relative mt-8 lg:mt-0 w-full max-w-lg">
        <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-md">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
