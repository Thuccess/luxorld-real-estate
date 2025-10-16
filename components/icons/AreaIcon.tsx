import React from 'react';

const AreaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 3 3 21"/>
        <path d="M14 17h5v-5"/>
        <path d="M10 7H5v5"/>
    </svg>
);

export default AreaIcon;