import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowIcon } from './icons';

interface ImageCarouselProps {
  imageUrls: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  if (!imageUrls || imageUrls.length === 0) {
    return <div className="h-[550px] w-full bg-gray-800 flex items-center justify-center text-gray-400">No images available.</div>;
  }

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={imageUrls[currentIndex]}
            alt={`Property image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Previous image"
      >
        <ArrowIcon direction="left" />
      </button>
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Next image"
      >
        <ArrowIcon direction="right" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {imageUrls.map((_, slideIndex) => (
          <button 
            key={slideIndex} 
            onClick={() => goToSlide(slideIndex)} 
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-gold' : 'bg-white/50 hover:bg-white/80'}`} 
            aria-label={`Go to image ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;