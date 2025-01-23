import Benefits from "@/components/Benefits";
import Hero from "../components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConstructionSteps from "@/components/ConstructionSteps";
import WorkWith from "@/components/WorkWith";
import { AnimatedTestimonials } from "@/components/Testimonial";
import OurAchievements from "@/components/OurAchievements";
import ClientCounter from "@/components/ClientCounter";

export default function Home() {
  const testimonialsData = [
    {
      quote: "Je n’aurais jamais imaginé à quel point l’énergie solaire pourrait faire une différence. Non seulement nos factures ont été considérablement réduites, mais nous avons également contribué à réduire les émissions de carbone.",
      name: "John Doe",
      designation: "CEO, Company Inc.",
      src: "/images/solar1.png",
    },
    {
      quote: "L’énergie solaire nous a permis de réinvestir l’argent économisé sur nos factures d’électricité dans la croissance de notre entreprise. Savoir que nous utilisons de l’énergie propre est valorisant et touche profondément nos clients soucieux de l’environnement.",
      name: "Jane Smith",
      designation: "CTO, Tech Corp.",
      src: "/images/solar2.png",
    },
  ];

  return (
    <>
      <Hero />
      <Benefits />
      <WhyChooseUs />

      {/* Centered Image
      <div className="w-full flex justify-center">
        <img
          src="/Images/count.png"
          alt="Counter"
          className="max-w-full h-auto"
        />
      </div> */}

      <ClientCounter />

      <ConstructionSteps />
      <OurAchievements />

      <div className="bg-secondary ">
      {/* <Testimonial /> */}
        <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
      </div>

      <WorkWith />
    </>
  );
}
