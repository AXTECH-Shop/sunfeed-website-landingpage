import { Shield, Zap, Boxes, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from 'react';

interface FeatureProps {
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  heading: string;
  subText: string;
  buttonText: string;
}

export default function Feature({ features, heading, subText, buttonText }: FeatureProps) {
  return (
    <section className="py-16 px-4 md:py-24 bg-secondary mt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {subText}
            </p>
            <Button size="lg" className="bg-primary hover:bg-blue-950 text-white">
              {buttonText}
            </Button>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
