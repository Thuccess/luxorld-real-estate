import React from 'react';
import { WhatsAppIcon } from './icons';
import sanblueImag from "@/public/images/sanbluajiech.jpg";

const ListingAgentCard: React.FC = () => {
    return (
        <div className="bg-navy p-6 rounded-lg">
            <h3 className="text-xl font-serif text-gold mb-4">Director and Agent</h3>
            <div className="flex items-center gap-4">
                <img 
                    src={sanblueImag} 
                    alt="Listing Agent" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gold/50"
                />
                <div>
                    <p className="font-bold text-white text-lg">Sanblu Ajiech</p>
                    <p className="text-sm text-gray-400">Senior Property Consultant</p>
                    <a href="tel:+256770358749" className="text-gold text-sm hover:underline block mt-1">+256 770 358749</a>
                </div>
            </div>
             <a href="https://wa.me/256770358749" target="_blank" rel="noopener noreferrer" className="mt-4 w-full text-center flex items-center justify-center bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300">
                <WhatsAppIcon className="w-5 h-5" />
                <span className="ml-2 text-sm">Chat on WhatsApp</span>
            </a>
        </div>
    );
};

export default ListingAgentCard;