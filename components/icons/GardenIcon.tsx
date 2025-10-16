import React from 'react';

const GardenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 22c1.76-1.76 3-3 3-5s-1.24-3.24-3-5"/>
        <path d="M10 22c1.76-1.76 3-3 3-5s-1.24-3.24-3-5"/>
        <path d="M16 12c-1.76 1.76-3 3-3 5s1.24 3.24 3 5"/>
        <path d="M22 12c-1.76 1.76-3 3-3 5s1.24 3.24 3 5"/>
        <path d="M2 12h20"/>
        <path d="M20 12a8 8 0 0 0-8-8 8 8 0 0 0-8 8"/>
    </svg>
);

export default GardenIcon;