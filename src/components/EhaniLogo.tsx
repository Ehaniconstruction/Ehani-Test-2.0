import React from 'react';
import logoImg from '../logo.png';

interface EhaniLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
}

export const EhaniLogo: React.FC<EhaniLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 34,
    md: 46,
    lg: 60,
    xl: 84,
  };

  const logoHeight = sizes[size] || 46;

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <img 
        src={logoImg} 
        alt="EHANI Construction Group Logo" 
        style={{ height: `${logoHeight}px` }}
        className="w-auto object-contain" 
      />
    </div>
  );
};

export default EhaniLogo;
