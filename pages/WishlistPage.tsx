import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';
import MetaTags from '../components/MetaTags';
import { Link } from 'react-router-dom';
import FadeIn from '../components/animations/FadeIn';

const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist();
  const wishlistedProperties = PROPERTIES.filter(p => wishlist.includes(p.id));

  return (
    <div className="bg-dark-gray min-h-screen">
      <MetaTags
        title="Your Wishlist | Luxorld Ltd."
        description="View your saved luxury properties in Kampala. Keep track of your favorite homes, apartments, and mansions with Luxorld."
      />
      <div className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-serif text-gold">Your Wishlist</h1>
            <p className="text-gray-300 mt-4">Here are the exclusive properties you've saved.</p>
          </FadeIn>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6">
          {wishlistedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedProperties.map((property, i) => (
                <FadeIn key={property.id} delay={i * 0.1}>
                    <PropertyCard property={property} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FadeIn>
                <h2 className="text-2xl text-gold">Your Wishlist is Empty</h2>
                <p className="text-gray-400 mt-2 mb-8">Start exploring to find your dream property.</p>
                <Link to="/properties" className="bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-yellow-300 transition-colors duration-300">
                  Browse Properties
                </Link>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;