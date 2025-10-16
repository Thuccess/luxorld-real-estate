import React from 'react';
import MetaTags from '../components/MetaTags';
import FadeIn from '../components/animations/FadeIn';

const LocationCard: React.FC<{ name: string; description: string; imageUrl: string }> = ({ name, description, imageUrl }) => (
  <div className="relative rounded-lg overflow-hidden h-80 group">
    <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 flex flex-col justify-end p-6">
      <h3 className="text-3xl font-serif text-gold mb-2">{name}</h3>
      <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">{description}</p>
    </div>
  </div>
);

const LocationsPage: React.FC = () => {
  const neighborhoods = [
    { name: "Munyonyo", description: "Famous for its stunning lake views and luxurious resorts, offering a tranquil and prestigious lifestyle.", imageUrl: "https://picsum.photos/seed/munyonyo/600/400" },
    { name: "Kololo", description: "An upscale, diplomatic zone known for its safety, embassies, and high-end restaurants and apartments.", imageUrl: "https://picsum.photos/seed/kololo/600/400" },
    { name: "Kansanga", description: "A bustling, well-located suburb offering convenient access to the city center and premium amenities.", imageUrl: "https://picsum.photos/seed/kansanga/600/400" },
    { name: "Kyanja", description: "A serene and fast-developing residential area known for its modern homes and peaceful environment.", imageUrl: "https://picsum.photos/seed/kyanja/600/400" },
    { name: "Naguru", description: "A prime residential hill offering panoramic views of Kampala, known for its security and large, elegant homes.", imageUrl: "https://picsum.photos/seed/naguru/600/400" },
    { name: "Bugolobi", description: "A convenient and vibrant neighborhood with a mix of modern apartments and classic homes, close to shopping and dining.", imageUrl: "https://picsum.photos/seed/bugolobi/600/400" },
  ];

  return (
    <div className="bg-dark-gray text-white">
      <MetaTags 
        title="Prime Locations in Kampala | Luxorld Ltd."
        description="Explore Kampala's most secure and desirable neighborhoods like Kololo, Munyonyo, and Naguru. Luxorld offers exclusive properties in these luxury zones."
        imageUrl={neighborhoods[0].imageUrl}
      />
      <div className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-serif text-gold">Kampala's Prime Locations</h1>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">We offer properties in Kampala's most secure, exclusive, and desirable neighborhoods, each with its unique charm and lifestyle.</p>
          </FadeIn>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif text-center text-gold mb-12">Explore Kampala's Luxury Zones</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((hood, i) => (
                <FadeIn key={hood.name} delay={i*0.1}>
                    <LocationCard {...hood} />
                </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;