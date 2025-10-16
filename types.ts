
export interface Property {
  id: number;
  name: string;
  type: 'House' | 'Apartment' | 'Mansion';
  location: string;
  city: 'Kampala';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  imageUrls: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Amenity {
  name: string;
  icon: React.ReactNode;
}
