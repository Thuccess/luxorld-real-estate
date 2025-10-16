import React from 'react';

const LightingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 12c0-2-1.4-3.5-3-4.5s-3-2-3-4.5c0-1.4 1.1-2.5 2.5-2.5S14 1.1 14 2.5c0 .8.4 1.5 1 2 .6.5 1 1.2 1 2Z"/>
        <path d="M12 14v.01"/>
        <path d="M2 12h.01"/>
        <path d="M21.99 12H22"/>
        <path d="M12 2v.01"/>
        <path d="M12 22v-.01"/>
        <path d="M4.93 4.93l-.01.01"/>
        <path d="M19.07 19.07l.01-.01"/>
        <path d="M4.94 19.07l-.01-.01"/>
        <path d="M19.07 4.93l.01.01"/>
    </svg>
);

export default LightingIcon;