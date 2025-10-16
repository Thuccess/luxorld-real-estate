import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="font-serif text-xl text-gold mb-4">Luxorld Ltd</h3>
            <p className="text-sm">Experience Luxury Property. Your trusted partner for exclusive real estate in Kampala, Uganda.</p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/properties" className="hover:text-gold transition">Properties</Link></li>
              <li><Link to="/locations" className="hover:text-gold transition">Locations</Link></li>
              <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
                <li>Kampala, Uganda</li>
                <li><a href="mailto:info@luxorld.com" className="hover:text-gold transition">info@luxorld.com</a></li>
                <li><a href="tel:+256770358749" className="hover:text-gold transition">+256 770 358749</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/256770358749" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition">
                <WhatsAppIcon />
              </a>
              <a href="https://www.instagram.com/luxorld_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/Luxorldrealestate" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition">
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Luxorld Ltd. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;