"use client";

import ContactForm from "@/components/ContactForm";
import { Battery, Zap, Sun } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
    <div>
    <div className="relative bg-[#36689E] overflow-hidden h-[500px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36689E] to-[#36689E]/80 mix-blend-multiply z-10" />
          <Image
            src="/Images/solar1.png"
            alt="Solar Panels"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Power Your Future with Solar Energy
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Ready to make the switch to clean, renewable energy? Our team
                of experts is here to guide you through every step of your solar
                journey.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 text-white">
                  <Battery className="w-6 h-6" />
                  <span>Sustainable Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Zap className="w-6 h-6" />
                  <span>Expert Consultation</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Sun className="w-6 h-6" />
                  <span>Clean Energy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      {/* Contact form component */}
      <ContactForm/>
    </div>

    <div>
      {/* Google map displaying the location */}
      <div className="container mx-auto px-4 py-8">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Retrouvez-nous ic
          </h2>
        </div>
        <div className="w-full mx-auto rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509804!2d144.955928315321!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fafd1b%3A0x5045675218ce7e33!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1630564052832!5m2!1sen!2sau"
            width="100%"
            height="450px"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}
