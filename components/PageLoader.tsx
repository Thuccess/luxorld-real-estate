import React from 'react';
import Spinner from './Spinner';

const PageLoader: React.FC = () => (
  <div className="fixed inset-0 bg-navy flex flex-col items-center justify-center z-50">
    <div className="w-16 h-16">
      <Spinner />
    </div>
    <p className="text-gold font-serif mt-4 text-xl">Loading Luxorld...</p>
  </div>
);

export default PageLoader;
