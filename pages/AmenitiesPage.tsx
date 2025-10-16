import React from 'react';
import { AMENITIES } from '../constants';
import MetaTags from '../components/MetaTags';
import FadeIn from '../components/animations/FadeIn';

const AmenityCard: React.FC<{ name: string; icon: React.ReactNode; imageUrl: string; }> = ({ name, icon, imageUrl }) => (
    <div className="relative rounded-lg overflow-hidden h-80 group shadow-lg">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <div className="text-gold w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-125">
                {icon}
            </div>
            <h3 className="text-2xl font-serif text-white">{name}</h3>
        </div>
    </div>
);


const AmenitiesPage: React.FC = () => {
    const amenityImages = [
        "https://picsum.photos/seed/pool/600/400",
        "https://picsum.photos/seed/gym/600/400",
        "https://picsum.photos/seed/garden/600/400",
        "https://picsum.photos/seed/tech/600/400",
        "https://picsum.photos/seed/security/600/400",
    ];

  return (
    <div className="bg-dark-gray text-white">
      <MetaTags 
        title="Luxury Amenities | Luxorld Ltd. Kampala"
        description="Explore the world-class amenities offered in our Kampala properties, including swimming pools, state-of-the-art gyms, lush gardens, and 24/7 security."
        imageUrl={amenityImages[0]}
      />
      <div className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
            <FadeIn>
                <h1 className="text-5xl font-serif text-gold">World-Class Amenities</h1>
                <p className="text-gray-300 mt-4 max-w-3xl mx-auto">Our properties feature a host of luxury amenities designed to enhance your lifestyle and provide ultimate comfort and security.</p>
            </FadeIn>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity, index) => (
              <FadeIn key={amenity.name} delay={index * 0.1}>
                <AmenityCard name={amenity.name} icon={amenity.icon} imageUrl={amenityImages[index % amenityImages.length]} />
              </FadeIn>
            ))}
             <FadeIn delay={AMENITIES.length * 0.1}>
                <div className="relative rounded-lg overflow-hidden h-80 group shadow-lg md:col-span-2 lg:col-span-1 bg-navy flex flex-col items-center justify-center text-center p-4 border border-gold/20">
                    <h3 className="text-3xl font-serif text-gold">And Much More...</h3>
                    <p className="text-gray-400 mt-4">Concierge services, private cinemas, secure parking, and bespoke features tailored to each property.</p>
                </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPage;