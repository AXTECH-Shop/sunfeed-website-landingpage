import Image from "next/image";

interface Thumbnail {
  id: number;
  src: string;
  alt: string;
}

interface HeroSectionProps {
  title: string;
  highlightText?: string;
  subText?: string;
  backgroundImage: string;
  thumbnails: Thumbnail[];
}

export default function HeroSection({
  title,
  highlightText = "",
  subText = "",
  backgroundImage,
  thumbnails,
}: HeroSectionProps) {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          priority
          className="brightness-100"
          style={{ objectFit: "cover" }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            {highlightText && title.includes(highlightText) ? (
              <>
                {title.split(highlightText)[0]}
                <span className="text-blue-600">{highlightText}</span>
                {title.split(highlightText)[1]}
              </>
            ) : (
              title // If no highlight text, display the title normally
            )}
          </h1>
          {subText && (
            <p className="text-md md:text-lg text-white mt-3 max-w-2xl">
              {subText}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {thumbnails.map((thumbnail) => (
            <div
              key={thumbnail.id}
              className="relative aspect-video overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
                fill
                className="hover:scale-110 transition-transform duration-300"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
