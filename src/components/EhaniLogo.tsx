import React from 'react';

interface EhaniLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark'; // dark is for dark backgrounds where EHANI text is white/light
  showSubtitle?: boolean;
  className?: string;
}

export const EhaniLogo: React.FC<EhaniLogoProps> = ({
  size = 'md',
  variant = 'light',
  showSubtitle = true,
  className = '',
}) => {
  // Height & scale configuration
  const sizes = {
    sm: { icon: 34, text: 'text-lg', subtext: 'text-[9px]', tracking: 'tracking-[0.18em]' },
    md: { icon: 46, text: 'text-2xl', subtext: 'text-[11px]', tracking: 'tracking-[0.22em]' },
    lg: { icon: 60, text: 'text-3xl', subtext: 'text-xs', tracking: 'tracking-[0.26em]' },
    xl: { icon: 84, text: 'text-5xl', subtext: 'text-sm', tracking: 'tracking-[0.28em]' },
  };

  const currentSize = sizes[size];
  const isDarkBg = variant === 'dark';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <img 
        src={encodeURI("/ChatGPT Image 23 ago 2026, 05_58_13 p.m..png")} 
        alt="EHANI Construction Group Logo" 
        style={{ height: `${currentSize.icon}px` }}
        className="w-auto object-contain" 
      />
    </div>
  );
};

export default EhaniLogo;
