import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '../contexts/WishlistContext';
import { MenuIcon, CloseIcon, HeartIcon } from './icons';
import logoImage from '@/public/images/Luxorld-Logo.jpg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-gold before:transition-transform before:duration-300 hover:text-gold before:hover:origin-left before:hover:scale-x-100 ${isActive ? 'text-gold' : 'text-white'}`;
  
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { when: "beforeChildren", staggerChildren: 0.05 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${isScrolled || isOpen ? 'bg-navy/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-serif font-bold text-gold">
          <img src={logoImage} alt="Luxorld Logo" className="h-12" />
          </Link>
          

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/properties" className={navLinkClass}>Properties</NavLink>
            <NavLink to="/locations" className={navLinkClass}>Locations</NavLink>
            <NavLink to="/amenities" className={navLinkClass}>Amenities</NavLink>
            <NavLink to="/smart-homes" className={navLinkClass}>Smart Homes</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <Link to="/wishlist" className="relative text-white hover:text-gold transition-colors">
              <HeartIcon />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-navy text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <Link to="/wishlist" className="relative text-white hover:text-gold transition-colors mr-4">
              <HeartIcon />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-navy text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden absolute top-0 left-0 w-full bg-navy/95 backdrop-blur-sm pt-20"
          >
            <nav className="flex flex-col items-center space-y-4 py-8">
                <motion.div variants={menuItemVariants}><NavLink to="/" className="text-lg text-white hover:text-gold">Home</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/properties" className="text-lg text-white hover:text-gold">Properties</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/locations" className="text-lg text-white hover:text-gold">Locations</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/amenities" className="text-lg text-white hover:text-gold">Amenities</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/smart-homes" className="text-lg text-white hover:text-gold">Smart Homes</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/about" className="text-lg text-white hover:text-gold">About</NavLink></motion.div>
                <motion.div variants={menuItemVariants}><NavLink to="/contact" className="text-lg text-white hover:text-gold">Contact</NavLink></motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;