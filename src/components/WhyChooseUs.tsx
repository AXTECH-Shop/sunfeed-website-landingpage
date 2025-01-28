import React from "react";
import Image from "next/image";
import { SquareCheckBig } from "lucide-react";

function WhyChooseUs() {
  const features = [
    "Experienced",
    "Affordable",
    "Reliable",
    "Customizable",
    "Sustainable",
    "Trustworthy",
  ];

  return (
    <section className="relative min-h-[400px] bg-white py-8">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <div
              className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden"
              style={{
                borderTopRightRadius: "5rem",
                borderBottomLeftRadius: "5rem",
              }}
            >
              <Image
                src="/Images/hero-image.png"
                alt="House with solar panels"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
            <h2 className="text-primary text-2xl sm:text-3xl font-semibold mb-3">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Creating quality urban lifestyles, building stronger communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

interface FeatureItemProps {
  feature: string;
}

function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-2">
      <div className="flex-shrink-0 mt-0.5">
        <SquareCheckBig className="w-5 h-5 text-[#3B6C9B]" />
      </div>
      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
    </div>
  );
}
