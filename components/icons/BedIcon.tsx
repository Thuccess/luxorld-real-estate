import React from 'react';

const BedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 4v16h20V4Z"/>
        <path d="M2 10h20"/>
        <path d="M6 10v10"/>
        <path d="M18 10v10"/>
    </svg>
);

export default BedIcon;