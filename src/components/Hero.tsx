// "use client";

// import { useRef, useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface ImageData {
//   src: string;
//   alt: string;
// }

// const images: ImageData[] = [
//   { src: "/Images/solar1.png", alt: "Solar panel installation" },
//   { src: "/Images/solar2.png", alt: "Sunset over solar panels" },
//   { src: "/Images/solar3.png", alt: "Rooftop solar panels" },
//   { src: "/Images/solar4.jpg", alt: "Rooftop solar panels" },
// ];

// const SLIDE_INTERVAL = 3000;

// const Hero: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const slideRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, []);

//   const resetAutoSlide = useCallback(() => {
//     if (timeoutRef.current) {
//       clearInterval(timeoutRef.current);
//     }
//     if (!isPaused) {
//       timeoutRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
//     }
//   }, [isPaused, nextSlide]);

//   useEffect(() => {
//     resetAutoSlide();
//     return () => {
//       if (timeoutRef.current) {
//         clearInterval(timeoutRef.current);
//       }
//     };
//   }, [isPaused, resetAutoSlide]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') prevSlide();
//       if (e.key === 'ArrowRight') nextSlide();
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [nextSlide, prevSlide]);

//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-between bg-secondary p-6 md:p-12 lg:p-16">
//       {/* Text Content */}
// <div className="flex-1 z-10 text-center lg:text-left mb-8 lg:mb-0 lg:max-w-[45%]">
//   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B365D] mb-4 md:mb-5 leading-snug">
//     Le soleil n&apos;envoie pas de facture
//   </h1>
//   <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 sm:mb-7 max-w-md mx-auto lg:mx-0">
//     Investissez dans l'énergie solaire pour un avenir durable et
//     économique. Nos solutions photovoltaïques s'adaptent à vos besoins.
//   </p>
//   <button
//     className="bg-primary text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-medium hover:bg-blue-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//     onClick={() => {/* Add your action here */}}
//   >
//     Demandez votre pré-étude gratuite
//   </button>
// </div>

//       {/* Spacer div for larger screens */}
//       <div className="hidden lg:block w-16"></div>

//       {/* Image Slider */}
//       <div
//         className="flex-1 relative w-full lg:max-w-[45%]"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         role="region"
//         aria-label="Image carousel"
//       >
//         <div
//           ref={slideRef}
//           className="relative w-full overflow-hidden rounded-md"
//         >
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="min-w-full flex-shrink-0 aspect-[16/9] relative"
//                 aria-hidden={currentIndex !== index}
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   quality={85}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//                 currentIndex === index ? 'bg-primary' : 'bg-gray-300'
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               aria-current={currentIndex === index}
//             />
//           ))}
//         </div>

//         {/* Arrow Navigation */}
//         {/* <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 sm:p-3 shadow-lg z-10 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 sm:p-3 shadow-lg z-10 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
//         </button> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";


const Hero: React.FC = () => {

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-secondary p-6 md:p-12 lg:p-16">
      {/* Text Content */}
      <div className="flex-1 z-10 text-center lg:text-left mb-8 lg:mb-0 lg:max-w-[45%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B365D] mb-4 md:mb-5 leading-snug">
          Le soleil n&apos;envoie pas de facture
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5 sm:mb-7 max-w-md mx-auto lg:mx-0">
          Investissez dans l'énergie solaire pour un avenir durable et
          économique. Nos solutions photovoltaïques s'adaptent à vos besoins.
        </p>
        <button
          className="bg-primary text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-medium hover:bg-blue-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={() => {
            /* Add your action here */
          }}
        >
          Demandez votre pré-étude gratuite
        </button>
      </div>
      <div>
        <Image 
          alt="" 
          src="/Images/heroimg.png"
          width={500}
          height={500}
          
           />
      </div>
    </section>
  );
};

export default Hero;
