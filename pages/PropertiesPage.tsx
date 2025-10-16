import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import MetaTags from '../components/MetaTags';
import { PROPERTIES } from '../constants';
import FadeIn from '../components/animations/FadeIn';

const PropertiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    location: searchParams.get('location') || 'All',
    type: searchParams.get('type') || 'All',
    price: searchParams.get('price') || 'All',
  });

  const neighborhoods = useMemo(() => [...new Set(PROPERTIES.map(p => p.location))], []);

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (filters.location !== 'All') newParams.set('location', filters.location);
    if (filters.type !== 'All') newParams.set('type', filters.type);
    if (filters.price !== 'All') newParams.set('price', filters.price);
    setSearchParams(newParams);
  }, [filters, setSearchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      const { location, type, price } = filters;
      
      const locationMatch = location === 'All' || property.location === location;
      const typeMatch = type === 'All' || property.type === type;
      const priceMatch = price === 'All' ||
        (price === '0-400000' && property.price <= 400000) ||
        (price === '400001-800000' && property.price > 400000 && property.price <= 800000) ||
        (price === '800001+' && property.price > 800000);
        
      return locationMatch && typeMatch && priceMatch;
    });
  }, [filters]);
  
  return (
    <div className="bg-dark-gray min-h-screen">
      <MetaTags 
        title="Exclusive Properties for Sale | Luxorld Ltd. Kampala"
        description="Browse our collection of luxury homes, apartments, and mansions for sale in Kampala. Filter by neighborhood, price, and type to find your perfect property."
        imageUrl={PROPERTIES[0]?.imageUrls[0]}
      />
      <div className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-serif text-gold">Our Exclusive Properties</h1>
            <p className="text-gray-300 mt-4">Browse our collection of luxury homes, apartments, and mansions in Kampala.</p>
          </FadeIn>
        </div>
      </div>

      <div className="bg-gray-800 py-6 sticky top-[80px] z-30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select name="location" value={filters.location} onChange={handleFilterChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
              <option value="All">All Neighborhoods</option>
              {neighborhoods.map(hood => <option key={hood} value={hood}>{hood}</option>)}
            </select>
            <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
              <option value="All">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Mansion">Mansion</option>
            </select>
            <select name="price" value={filters.price} onChange={handleFilterChange} className="w-full p-3 bg-gray-900 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none">
              <option value="All">All Prices</option>
              <option value="0-400000">Up to $400,000</option>
              <option value="400001-800000">$400,001 - $800,000</option>
              <option value="800001+">$800,001+</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-6">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, i) => (
                <FadeIn key={property.id} delay={i * 0.1}>
                    <PropertyCard property={property} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FadeIn>
                <h2 className="text-2xl text-gold">No Properties Found</h2>
                <p className="text-gray-400 mt-2">Please adjust your filters or check back later.</p>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;