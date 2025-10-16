import React from 'react';

const ClimateControlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 6v12"/>
        <path d="M17 7H7"/>
        <path d="m20 10-2-2 2-2"/>
        <path d="m4 14 2 2-2 2"/>
    </svg>
);

export default ClimateControlIcon;