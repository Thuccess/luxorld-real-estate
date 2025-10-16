import React from 'react';

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
    direction?: 'left' | 'right';
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction = 'left', ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {direction === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
);

export default ArrowIcon;