import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import MetaTags from '../components/MetaTags';
import { PROPERTIES } from '../constants';
import FadeIn from '../components/animations/FadeIn';

const SearchBar: React.FC = () => {
    const [location, setLocation] = useState('All');
    const [type, setType] = useState('All');
    const [budget, setBudget] = useState('All');
    const navigate = useNavigate();
    
    const neighborhoods = useMemo(() => [...new Set(PROPERTIES.map(p => p.location))], []);

    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        if (location !== 'All') queryParams.append('location', location);
        if (type !== 'All') queryParams.append('type', type);
        if (budget !== 'All') queryParams.append('price', budget);
        navigate(`/properties?${queryParams.toString()}`);
    };

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
                    <option value="All">All Neighborhoods</option>
                    {neighborhoods.map(hood => <option key={hood} value={hood}>{hood}</option>)}
                </select>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
                    <option value="All">Property Type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Mansion</option>
                </select>
                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
                    <option value="All">Budget</option>
                    <option value="0-400000">Up to $400,000</option>
                    <option value="400001-800000">$400,001 - $800,000</option>
                    <option value="800001+">$800,001+</option>
                </select>
                <button onClick={handleSearch} className="w-full bg-gold text-navy font-bold p-3 rounded hover:bg-yellow-300 transition-colors duration-300">
                    Search
                </button>
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured);
  const heroImageUrl = 'https://picsum.photos/seed/hero/1920/1080';

  return (
    <div className="text-white">
      <MetaTags 
        title="Luxorld Ltd. - Luxury Real Estate in Kampala, Uganda"
        description="Discover exclusive high-end homes, apartments, and mansions in Kampala's most prestigious neighborhoods like Kololo and Munyonyo. Find your luxury haven with Luxorld."
        imageUrl={heroImageUrl}
      />
      
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-6 flex flex-col items-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 drop-shadow-lg">
              Find Your Luxury Haven in Kampala
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              Discover exclusive properties in Uganda's vibrant capital.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="w-full max-w-4xl">
             <SearchBar />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-dark-gray">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif text-center text-gold mb-4">Featured Listings</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Discover our curated selection of the finest properties available in Kampala's most desirable locations.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, i) => (
              <FadeIn key={property.id} delay={i * 0.1}>
                  <PropertyCard property={property} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link to="/properties" className="bg-transparent border-2 border-gold text-gold font-bold py-3 px-8 rounded hover:bg-gold hover:text-navy transition-all duration-300">
              View All Properties
            </Link>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-20 bg-navy">
        <FadeIn className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-serif text-gold mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Contact our expert agents today to schedule a private viewing or to discuss your investment goals.</p>
              <div className="flex justify-center space-x-4">
                  <a href="https://wa.me/256770358749" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-yellow-300 transition-colors duration-300">
                      WhatsApp Us Now
                  </a>
                   <Link to="/contact" className="bg-transparent border-2 border-gold text-gold font-bold py-3 px-8 rounded hover:bg-gold hover:text-navy transition-all duration-300">
                      Book a Viewing
                  </Link>
              </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default HomePage;