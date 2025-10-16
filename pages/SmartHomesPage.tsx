import React from 'react';
import MetaTags from '../components/MetaTags';
import { LightingIcon, SecurityCameraIcon, ClimateControlIcon, PlayIcon } from '../components/icons';
import FadeIn from '../components/animations/FadeIn';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-navy p-6 rounded-lg text-center h-full">
        <div className="text-gold w-12 h-12 mx-auto mb-4">{icon}</div>
        <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const SmartHomesPage: React.FC = () => {
  const features = [
    { title: "Remote Control Lighting", description: "Adjust brightness and color temperature from your smartphone to create the perfect ambiance for any occasion.", icon: <LightingIcon /> },
    { title: "Integrated Security", description: "Monitor your home with smart cameras, door locks, and alarm systems, accessible from anywhere in the world.", icon: <SecurityCameraIcon /> },
    { title: "Automated Climate Control", description: "Intelligent thermostats learn your preferences and optimize heating and cooling for ultimate comfort and energy efficiency.", icon: <ClimateControlIcon /> },
  ];

  const pageImage = "https://picsum.photos/seed/smarthome/1280/720";

  return (
    <div className="bg-dark-gray text-white">
      <MetaTags 
        title="Smart Homes in Kampala | Luxorld Ltd."
        description="Discover the future of living with Luxorld's smart homes, featuring remote control lighting, integrated security, and automated climate control for ultimate convenience."
        imageUrl={pageImage}
      />
      <div className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-serif text-gold">The Future of Living: Smart Homes</h1>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">Experience unparalleled convenience, security, and efficiency with our selection of technologically advanced properties.</p>
          </FadeIn>
        </div>
      </div>
      
      <section className="py-20 overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-4xl font-serif text-gold mb-6">Prince Charles Apartments, Kololo</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                As a prime example of modern luxury, the Prince Charles Apartments in Kololo are fully equipped with cutting-edge smart home features. Residents enjoy complete control over their environment, from automated lighting and blinds to advanced security systems and energy management, all at their fingertips.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This seamless integration of technology enhances the living experience, providing a lifestyle that is not only luxurious but also intelligent and intuitive.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
                <img src={pageImage} alt="Smart Home Demo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm text-white rounded-full w-20 h-20 flex items-center justify-center hover:bg-white/30 transition-transform duration-300 group-hover:scale-110">
                      <PlayIcon />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <section className="bg-navy py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif text-center text-gold mb-12">Key Smart Features</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1}>
                <FeatureCard {...feature} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartHomesPage;