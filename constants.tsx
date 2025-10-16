import React from 'react';
import type { Property, Testimonial, Amenity } from './types';
import { PoolIcon, GymIcon, GardenIcon, SmartHomeIcon, SecurityIcon } from './components/icons';


export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: 'The Kololo Heights',
    type: 'Apartment',
    location: 'Kololo',
    city: 'Kampala',
    price: 450000,
    bedrooms: 3,
    bathrooms: 4,
    area: 2500,
    imageUrls: ['https://picsum.photos/seed/p1/800/600', 'https://picsum.photos/seed/p1a/800/600', 'https://picsum.photos/seed/p1b/800/600'],
    description: 'A stunning apartment in the heart of Kololo with panoramic city views and state-of-the-art smart home technology. This residence offers an open-plan living space, gourmet kitchen with high-end appliances, and spacious bedrooms with en-suite bathrooms. The building amenities are second to none.',
    features: ['Smart Home', 'Swimming Pool', '24/7 Security', 'Gym', 'City Views', 'Balcony'],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Munyonyo Lakeside Mansion',
    type: 'Mansion',
    location: 'Munyonyo',
    city: 'Kampala',
    price: 1200000,
    bedrooms: 6,
    bathrooms: 7,
    area: 7000,
    imageUrls: ['https://picsum.photos/seed/p2/800/600', 'https://picsum.photos/seed/p2a/800/600', 'https://picsum.photos/seed/p2b/800/600', 'https://picsum.photos/seed/p2c/800/600'],
    description: 'Experience unparalleled luxury in this sprawling mansion with direct access to Lake Victoria. Featuring lush private gardens, an infinity pool, and a private home cinema, this property is the epitome of opulent living. Every detail has been meticulously crafted for comfort and elegance.',
    features: ['Lake View', 'Private Garden', 'Swimming Pool', 'Home Cinema', 'Gourmet Kitchen', 'Staff Quarters'],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Naguru Executive Villa',
    type: 'House',
    location: 'Naguru',
    city: 'Kampala',
    price: 950000,
    bedrooms: 5,
    bathrooms: 5,
    area: 5500,
    imageUrls: ['https://picsum.photos/seed/p3/800/600', 'https://picsum.photos/seed/p3a/800/600', 'https://picsum.photos/seed/p3b/800/600'],
    description: 'An architectural masterpiece in Kampala\'s most prestigious neighborhood, offering privacy, security, and elegance. This home boasts high ceilings, large windows for natural light, and a seamless indoor-outdoor flow perfect for entertaining.',
    features: ['Gated Community', 'Gym', 'Private Garden', '24/7 Security', 'Modern Design'],
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Kyanja Modern Home',
    type: 'House',
    location: 'Kyanja',
    city: 'Kampala',
    price: 380000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    imageUrls: ['https://picsum.photos/seed/p4/800/600', 'https://picsum.photos/seed/p4a/800/600'],
    description: 'A beautifully designed family home in a quiet and secure Kyanja neighborhood, perfect for modern living. It features a spacious backyard, a modern kitchen, and comfortable living areas for the whole family.',
    features: ['Private Garden', 'Family Friendly', '24/7 Security', 'Modern Kitchen'],
  },
  {
    id: 5,
    name: 'Bugolobi Executive Apartment',
    type: 'Apartment',
    location: 'Bugolobi',
    city: 'Kampala',
    price: 250000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    imageUrls: ['https://picsum.photos/seed/p5/800/600', 'https://picsum.photos/seed/p5a/800/600'],
    description: 'A contemporary apartment complex offering premium amenities for a comfortable lifestyle, located conveniently near shopping centers and international schools.',
    features: ['Swimming Pool', 'Gym', 'Secure Parking', 'Close to Amenities'],
  },
    {
    id: 6,
    name: 'Kansanga Cozy Residence',
    type: 'House',
    location: 'Kansanga',
    city: 'Kampala',
    price: 320000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    imageUrls: ['https://picsum.photos/seed/p6/800/600', 'https://picsum.photos/seed/p6a/800/600'],
    description: 'Charming and secure residence in Kansanga, close to international schools and shopping centers. Ideal for families looking for convenience and comfort.',
    features: ['Private Garden', '24/7 Security', 'Close to Amenities'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Luxorld found us our dream home in Kololo. The process was seamless and their attention to detail was impeccable. Truly a five-star experience in Kampala.",
        author: "Mr. & Mrs. Okello",
        location: "Kampala, Uganda"
    },
    {
        quote: "As an investor from abroad, I needed a trusted partner in Kampala. Luxorld exceeded all my expectations, providing tailored solutions and exceptional properties for my portfolio.",
        author: "David L.",
        location: "International Investor"
    },
    {
        quote: "The team at Luxorld is professional, knowledgeable, and incredibly patient. They helped us navigate the Kampala luxury market with ease. Highly recommended!",
        author: "Amina K.",
        location: "Kampala, Uganda"
    }
];

export const AMENITIES: Amenity[] = [
    { name: "Swimming Pools", icon: <PoolIcon /> },
    { name: "State-of-the-Art Gyms", icon: <GymIcon /> },
    { name: "Lush Private Gardens", icon: <GardenIcon /> },
    { name: "Smart Home Technology", icon: <SmartHomeIcon /> },
    { name: "24/7 Security", icon: <SecurityIcon /> },
];