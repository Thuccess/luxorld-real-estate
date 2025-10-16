import React from 'react';

const SecurityCameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="m2 10 3.3-3.3a1 1 0 0 1 1.4 0L10 10"/>
        <path d="m14 14 3.3-3.3a1 1 0 0 1 1.4 0L22 14"/>
        <path d="M17 19h-10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"/>
    </svg>
);

export default SecurityCameraIcon;