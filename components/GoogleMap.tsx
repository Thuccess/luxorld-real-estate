import React from 'react';

const GoogleMap: React.FC = () => {
  // An embed URL for a central location in Kololo, Kampala
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753360435881!2d32.59085867580112!3d0.329188063462444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1842914167%3A0x442ab11718c9914d!2sAcacia%20Avenue%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1700000000000";

  return (
    <div className="h-full w-full bg-gray-800 rounded-lg overflow-hidden">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Luxorld Office Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
