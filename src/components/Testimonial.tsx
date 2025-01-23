// import React from 'react';
// import { Star } from 'lucide-react';

// // TestimonialCard Component
// interface TestimonialCardProps {
//   name: string;
//   title: string;
//   image: string;
//   review: string;
// }

// const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, image, review }) => {
//   return (
//     <div className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg">
//       <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
//         <div className="flex-1">
//           <div className="flex items-center space-x-1">
//             {/* Use Star from @lucide/react */}
//             <Star className="w-5 h-5 text-[#FDB241]" />
//             <Star className="w-5 h-5 text-[#FDB241]" />
//             <Star className="w-5 h-5 text-[#FDB241]" />
//             <Star className="w-5 h-5 text-[#FDB241]" />
//             <Star className="w-5 h-5 text-[#FDB241]" />
//           </div>

//           <blockquote className="flex-1 mt-8">
//             <p className="text-lg leading-relaxed text-gray-900">{review}</p>
//           </blockquote>
//         </div>

//         <div className="flex items-center mt-8">
//           <img className="flex-shrink-0 object-cover rounded-full w-12 h-12" src={image} alt={name} />
//           <div className="ml-4">
//             <p className="text-base font-bold text-gray-900">{name}</p>
//             <p className="mt-0.5 text-sm text-gray-600">{title}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Testimonial Component
// export default function Testimonial() {
//   const testimonials = [
//     {
//       name: 'Leslie Alexander',
//       title: 'Freelance React Developer',
//       image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
//       review: '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”'
//     },
//     {
//       name: 'John Doe',
//       title: 'Senior Software Engineer',
//       image: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
//       review: '“The platform made my workflow so much easier. I saved a lot of time on routine tasks and was able to focus on more important features.”'
//     },
//     {
//       name: 'Jane Smith',
//       title: 'UI/UX Designer',
//       image: '/images/Sunfeed.png',
//       review: '“This is the best design tool I’ve ever used. It helped me to craft beautiful interfaces with ease, and the performance is stellar.”'
//     }
//   ];

//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20 px-6 lg:px-12"> {/* Added padding to left and right */}
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>

//       <div className="flex flex-col items-center">
//         <div className="text-center">
//           <p className="text-2xl font-bold text-primary">Our Testimonials</p>
//           <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">What Our Customers Says</h2>
//         </div>

//         <div className="relative mt-10 md:mt-24 md:order-2">
//           <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
//             <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-60 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
//           </div>

//           <div className="relative grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 name={testimonial.name}
//                 title={testimonial.title}
//                 image={testimonial.image}
//                 review={testimonial.review}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="text-center mb-12"> {/* Added bottom margin */}
        <p className="text-2xl font-bold text-primary">TÉMOIGNAGE</p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
          Ce que les clients pensent de nous :
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
