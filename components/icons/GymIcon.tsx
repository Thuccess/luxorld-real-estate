import React from 'react';

const GymIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10.4 5.2a1 1 0 0 1-1.8 0L3 13.1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6l-5.6-7.9a1 1 0 0 1-1.8 0Z"/>
        <path d="m2 13.1 3.4-3.4"/>
        <path d="m18.6 9.7 3.4 3.4"/>
        <path d="M12 18h.01"/>
    </svg>
);

export default GymIcon;