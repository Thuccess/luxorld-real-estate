import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import MetaTags from '../components/MetaTags';
import ImageCarousel from '../components/ImageCarousel';
import GoogleMap from '../components/GoogleMap';
import PropertyCard from '../components/PropertyCard';
import SocialShareButtons from '../components/SocialShareButtons';
import WishlistButton from '../components/WishlistButton';
import PropertyContactForm from '../components/PropertyContactForm';
import ListingAgentCard from '../components/ListingAgentCard';
import FadeIn from '../components/animations/FadeIn';
import { BedIcon, BathIcon, AreaIcon, CheckIcon } from '../components/icons';


const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === Number(id));

  if (!property) {
    return <Navigate to="/404" />;
  }

  const { name, type, location, city, price, bedrooms, bathrooms, area, imageUrls, description, features } = property;
  
  const similarProperties = PROPERTIES.filter(p => p.location === location && p.id !== property.id).slice(0, 3);
  
  const formatPrice = (p: number) => `$${p.toLocaleString()}`;

  const scrollToForm = () => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-dark-gray text-white">
      <MetaTags 
        title={`${name} | Luxorld Ltd.`}
        description={description}
        imageUrl={imageUrls[0]}
      />
      
      <div className="bg-navy pt-32 pb-10">
        <div className="container mx-auto px-6">
          <FadeIn>
            <span className="text-gold uppercase text-sm font-bold">{type} in {location}</span>
            <h1 className="text-4xl lg:text-5xl font-serif text-white mt-1">{name}</h1>
            <p className="text-2xl text-gold font-bold mt-2">{formatPrice(price)}</p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="relative h-[550px] w-full mb-8 shadow-2xl rounded-lg">
                <ImageCarousel imageUrls={imageUrls} />
                <WishlistButton propertyId={property.id} className="text-2xl p-3" />
              </div>
            </FadeIn>
            
            <FadeIn>
                <div className="bg-navy p-8 rounded-lg mb-8">
                    <h2 className="text-3xl font-serif text-gold mb-6">Key Details</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center">
                            <BedIcon className="w-8 h-8 text-gold mb-2"/>
                            <p className="font-bold text-lg">{bedrooms}</p>
                            <p className="text-gray-400 text-sm">Bedrooms</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BathIcon className="w-8 h-8 text-gold mb-2"/>
                            <p className="font-bold text-lg">{bathrooms}</p>
                            <p className="text-gray-400 text-sm">Bathrooms</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <AreaIcon className="w-8 h-8 text-gold mb-2"/>
                            <p className="font-bold text-lg">{area.toLocaleString()} sqft</p>
                            <p className="text-gray-400 text-sm">Area</p>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <FadeIn>
                <div className="bg-navy p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-serif text-gold mb-4">Property Description</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{description}</p>
                </div>
            </FadeIn>
            
            <FadeIn>
                <div className="bg-navy p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-serif text-gold mb-6">Features & Amenities</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-gray-300">
                    {features.map(feature => (
                    <li key={feature} className="flex items-center">
                        <span className="text-gold mr-3"><CheckIcon /></span>
                        {feature}
                    </li>
                    ))}
                </ul>
                </div>
            </FadeIn>

             <FadeIn>
                <div className="bg-navy p-8 rounded-lg">
                    <h2 className="text-3xl font-serif text-gold mb-4">Location</h2>
                    <p className="text-gray-400 mb-4">{location}, {city}</p>
                    <div className="h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <GoogleMap />
                    </div>
                </div>
             </FadeIn>
          </div>
          
          <div className="lg:col-span-1">
             <div className="sticky top-[100px] space-y-8">
                <FadeIn>
                    <ListingAgentCard />
                </FadeIn>
                <FadeIn>
                    <PropertyContactForm propertyName={name} />
                </FadeIn>
                <FadeIn>
                    <div className="bg-navy p-6 rounded-lg">
                        <SocialShareButtons title={name} />
                    </div>
                </FadeIn>
             </div>
          </div>
        </div>
      </div>
      
       {similarProperties.length > 0 && (
        <section className="py-20 bg-navy">
            <div className="container mx-auto px-6">
            <FadeIn>
                <h2 className="text-4xl font-serif text-center text-gold mb-12">Similar Properties in{location}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProperties.map((p, i) => (
                    <FadeIn key={p.id} delay={i * 0.1}>
                        <PropertyCard property={p} />
                    </FadeIn>
                ))}
            </div>
            </div>
        </section>
      )}
    </div>
  );
};

export default PropertyDetailPage;