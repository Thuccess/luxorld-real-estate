import React, { useState } from 'react';

interface PropertyContactFormProps {
    propertyName: string;
}

const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ propertyName }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Viewing Request:', { property: propertyName, ...formData });
        setSubmitted(true);
    };
    
    if (submitted) {
        return (
            <div className="bg-navy p-8 rounded-lg text-center">
                <h3 className="text-2xl font-serif text-gold mb-4">Thank You!</h3>
                <p className="text-gray-300">Your inquiry has been sent. Our agent will contact you shortly to schedule a viewing.</p>
            </div>
        );
    }

    return (
        <div className="bg-navy p-8 rounded-lg" id="contact-form">
            <h3 className="text-2xl font-serif text-gold mb-6">Book a Viewing</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-400 mb-2 text-sm">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Message (Optional)</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:ring-gold focus:border-gold outline-none" placeholder={`I'm interested in ${propertyName}...`}></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-navy font-bold py-3 px-6 rounded hover:bg-yellow-300 transition-colors duration-300">
                    Send Inquiry
                </button>
            </form>
        </div>
    );
};

export default PropertyContactForm;