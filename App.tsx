import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { WishlistProvider } from './contexts/WishlistContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const AmenitiesPage = lazy(() => import('./pages/AmenitiesPage'));
const SmartHomesPage = lazy(() => import('./pages/SmartHomesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WishlistPage = lazy(() => import('./pages/WishlistPage'));

// A simple 404 component
const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-dark-gray text-white">
    <h1 className="text-6xl font-serif text-gold">404</h1>
    <p className="mt-4 text-xl">Page Not Found</p>
    <a href="/" className="mt-8 bg-gold text-navy font-bold py-3 px-8 rounded hover:bg-yellow-300 transition-colors duration-300">
      Go Home
    </a>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="bg-dark-gray">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/properties/:id" element={<PropertyDetailPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/amenities" element={<AmenitiesPage />} />
              <Route path="/smart-homes" element={<SmartHomesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </WishlistProvider>
  );
};

export default App;