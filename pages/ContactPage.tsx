import React, { useState } from 'react';
import MetaTags from '../components/MetaTags';
import GoogleMap from '../components/GoogleMap';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/icons';
import FadeIn from '../components/animations/FadeIn';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-dark-gray text-white">
            <MetaTags 
                title="Contact Luxorld Ltd. | Luxury Real Estate Inquiries"
                description="Get in touch with Luxorld Ltd. to schedule viewings, request consultations, or discuss investment opportunities in Kampala's luxury real estate market."
            />
            <div className="bg-navy pt-32 pb-16">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-serif text-gold">Get in Touch</h1>
                        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">We're here to assist you with any inquiries. Reach out to us for viewings, consultations, or investment opportunities.</p>
                    </FadeIn>
                </div>
            </div>

            <div className="py-20 overflow-x-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <FadeIn>
                            <div className="bg-navy p-8 rounded-lg">
                                <h2 className="text-3xl font-serif text-gold mb-6">Send Us a Message</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-400 mb-2">Full Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" required></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-gold text-navy font-bold py-3 px-6 rounded hover:bg-yellow-300 transition-colors duration-300">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div>
                                <div className="bg-navy p-8 rounded-lg mb-8">
                                    <h2 className="text-3xl font-serif text-gold mb-6">Contact Information</h2>
                                    <p className="mb-2"><strong>Kampala Office:</strong> Acacia Avenue, Kololo, Kampala, Uganda</p>
                                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:ruotmaliah654@gmail.com" className="hover:text-gold">info@luxorld.com</a></p>
                                    <p className="mb-4"><strong>Phone/WhatsApp:</strong> <a href="tel:+256770358749" className="hover:text-gold">+256 770 358749</a></p>
                                    
                                    <div className="flex space-x-4 mt-4">
                                        <a href="https://wa.me/256770358749" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gold text-navy font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors duration-300">
                                            <WhatsAppIcon /> <span className="ml-2">WhatsApp Us</span>
                                        </a>
                                        <a href="https://www.instagram.com/luxorld_/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300">
                                            <InstagramIcon /> <span className="ml-2">Instagram</span>
                                        </a>
                                        <a href="https://www.facebook.com/Luxorldrealestate" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300">
                                            <FacebookIcon/> <span className="ml-2">Facebook</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="h-80 bg-gray-800 rounded-lg overflow-hidden">
                                    <GoogleMap />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;