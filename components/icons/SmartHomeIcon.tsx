import React from 'react';

const SmartHomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>
        <path d="M12 22V12"/>
        <path d="M15 13a3 3 0 0 1 0 6H9a3 3 0 0 1 0-6Z"/>
    </svg>
);

export default SmartHomeIcon;