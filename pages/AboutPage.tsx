import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';
import MetaTags from '../components/MetaTags';
import FadeIn from '../components/animations/FadeIn';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-navy p-8 rounded-lg border border-gold/20 h-full flex flex-col">
        <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="text-right">
            <p className="font-bold text-gold">{testimonial.author}</p>
            <p className="text-sm text-gray-400">{testimonial.location}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
  const pageImage = "https://picsum.photos/seed/team/800/600";
  return (
    <div className="bg-dark-gray text-white">
      <MetaTags 
        title="About Luxorld Ltd. | Kampala's Premier Real Estate Agency"
        description="Learn about Luxorld's mission to redefine luxury living in Kampala. Discover our commitment to elegance, trust, and exclusivity in the Ugandan real estate market."
        imageUrl={pageImage}
      />
      <div 
        className="pt-40 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/about/1920/1080')` }}>
        <div className="bg-black/60 py-10">
            <div className="container mx-auto px-6 text-center">
              <FadeIn>
                <h1 className="text-5xl font-serif text-gold">About Luxorld Ltd</h1>
                <p className="text-gray-200 mt-4 max-w-3xl mx-auto">Your Gateway to Luxury Real Estate in Kampala, Uganda.</p>
              </FadeIn>
            </div>
        </div>
      </div>

      <section className="py-20 overflow-x-hidden">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <FadeIn>
                      <h2 className="text-4xl font-serif text-gold mb-4">Our Story</h2>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                          Founded with a vision to redefine luxury living, Luxorld Ltd has quickly become the leading real estate agency in Kampala. We specialize in sourcing and managing high-end homes, apartments, and mansions for a discerning clientele within Uganda's capital.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                          Our expertise lies in identifying properties in the most secure and desirable locations that offer not just a home, but a lifestyle of elegance, comfort, and exclusivity. We are deeply committed to the Kampala market and pride ourselves on our local knowledge and global standards.
                      </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                      <img src={pageImage} alt="Luxorld Office" className="rounded-lg shadow-xl" loading="lazy" />
                  </FadeIn>
              </div>
          </div>
      </section>

      <section className="bg-navy py-20">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <FadeIn>
                      <h3 className="text-2xl font-serif text-gold mb-2">Our Mission</h3>
                      <p className="text-gray-400">To provide unparalleled service and curated luxury properties that exceed our clients' expectations and deliver lasting value in Kampala.</p>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                      <h3 className="text-2xl font-serif text-gold mb-2">Our Vision</h3>
                      <p className="text-gray-400">To be the most trusted and respected name in luxury real estate in Uganda, known for our integrity and commitment to excellence.</p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                      <h3 className="text-2xl font-serif text-gold mb-2">Our Values</h3>
                      <p className="text-gray-400">Elegance, Trust, Security, and Exclusivity are the pillars upon which we build every client relationship.</p>
                  </FadeIn>
              </div>
          </div>
      </section>

      <section className="py-20">
          <div className="container mx-auto px-6">
              <FadeIn>
                <h2 className="text-4xl font-serif text-center text-gold mb-12">What Our Clients Say</h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((testimonial, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <TestimonialCard testimonial={testimonial} />
                    </FadeIn>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;