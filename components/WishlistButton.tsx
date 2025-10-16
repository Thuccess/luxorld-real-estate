import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { HeartIcon } from './icons';

interface WishlistButtonProps {
  propertyId: number;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ propertyId, className }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(propertyId);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(propertyId);
    } else {
      addToWishlist(propertyId);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`absolute top-4 right-4 bg-black/40 text-gold p-2 rounded-full hover:bg-black/70 transition-colors z-10 ${className}`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <HeartIcon isFilled={isWishlisted} />
    </button>
  );
};

export default WishlistButton;