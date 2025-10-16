import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, WhatsAppIcon, CopyIcon, CheckIcon } from './icons';

interface SocialShareButtonsProps {
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ title }) => {
  const location = useLocation();
  const url = window.location.origin + location.pathname;
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    { name: 'Facebook', icon: <FacebookIcon />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: 'Twitter', icon: <TwitterIcon />, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { name: 'WhatsApp', icon: <WhatsAppIcon />, href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}` }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between">
      <span className="font-bold text-gray-300">Share this property:</span>
      <div className="flex items-center space-x-4">
        {platforms.map(platform => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold transition-colors"
            aria-label={`Share on ${platform.name}`}
          >
            {platform.icon}
          </a>
        ))}
         <button
            onClick={handleCopy}
            className="text-gray-300 hover:text-gold transition-colors"
            aria-label="Copy link"
        >
            {copied ? <CheckIcon className="text-green-500"/> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
};

export default SocialShareButtons;