import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Property } from '../types';
import WishlistButton from './WishlistButton';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, name, type, location, price, bedrooms, bathrooms, area, imageUrls } = property;

  const formatPrice = (p: number) => `$${p.toLocaleString()}`;

  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Link to={`/properties/${id}`} className="block bg-navy rounded-lg overflow-hidden shadow-lg hover:shadow-gold/30 transition-shadow duration-300 group h-full flex flex-col">
            <div className="relative">
                <img 
                    src={imageUrls[0]} 
                    alt={name} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy"
                />
                <div className="absolute top-0 left-0 bg-gold text-navy px-3 py-1 text-sm font-bold">{type}</div>
                <WishlistButton propertyId={id} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-gold truncate">{name}</h3>
                <p className="text-gray-400 text-sm mb-4">{location}, Kampala</p>
                <div className="flex-grow"></div>
                <p className="text-2xl font-bold text-white mb-4">{formatPrice(price)}</p>
                <div className="flex justify-between text-gray-300 text-sm border-t border-gray-700 pt-4">
                <span>{bedrooms} Beds</span>
                <span>{bathrooms} Baths</span>
                <span>{area.toLocaleString()} sqft</span>
                </div>
            </div>
        </Link>
    </motion.div>
  );
};

export default PropertyCard;