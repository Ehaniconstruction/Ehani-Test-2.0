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
      {/* 3D Geometric Gold Monogram Emblem */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Main Gold Facet Gradients matching the official 3D emblem */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B8" />
            <stop offset="35%" stopColor="#E6C466" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9C6F1E" />
          </linearGradient>

          <linearGradient id="goldMid" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#875E15" />
            <stop offset="40%" stopColor="#C5A059" />
            <stop offset="80%" stopColor="#E9CA72" />
            <stop offset="100%" stopColor="#FBF0C4" />
          </linearGradient>

          <linearGradient id="goldDark" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#734B0B" />
            <stop offset="50%" stopColor="#9E7321" />
            <stop offset="100%" stopColor="#4A2E03" />
          </linearGradient>

          <linearGradient id="goldBevelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ECCF7D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7E5611" stopOpacity="0.9" />
          </linearGradient>

          <filter id="goldDropShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#7E5611" floodOpacity="0.3" />
          </filter>
        </defs>

        <g filter="url(#goldDropShadow)">
          {/* Right Top Arrowhead Pillar */}
          <path
            d="M 80 18 L 94 28 L 84 56 L 94 56 L 126 104 L 108 104 L 80 58 Z"
            fill="url(#goldLight)"
          />
          <path
            d="M 80 18 L 84 56 L 76 68 L 68 56 Z"
            fill="url(#goldDark)"
          />

          {/* Left Wing & "E" Outer Diagonal Arm */}
          <path
            d="M 80 18 L 68 56 L 36 104 L 54 104 L 76 68 Z"
            fill="url(#goldMid)"
          />

          {/* Top horizontal crossbar of E */}
          <path
            d="M 68 56 L 92 56 L 86 68 L 62 68 Z"
            fill="url(#goldLight)"
          />

          {/* Middle horizontal crossbar of E */}
          <path
            d="M 54 78 L 80 78 L 74 90 L 48 90 Z"
            fill="url(#goldMid)"
          />

          {/* Bottom Solid Base Triangle */}
          <path
            d="M 36 104 L 52 124 L 92 124 L 108 104 L 88 104 L 76 112 L 56 112 L 68 104 Z"
            fill="url(#goldLight)"
          />
          <path
            d="M 52 124 L 76 112 L 88 104 L 108 104 L 96 124 Z"
            fill="url(#goldDark)"
          />

          {/* Right Supporting Diagonal / Arrow Base Leg */}
          <path
            d="M 94 56 L 126 104 L 140 124 L 118 124 L 108 104 Z"
            fill="url(#goldMid)"
          />
          <path
            d="M 126 104 L 140 124 L 124 124 L 108 104 Z"
            fill="url(#goldDark)"
          />

          {/* Center Intersecting Facet Arch */}
          <path
            d="M 62 68 L 86 68 L 104 96 L 90 96 Z"
            fill="url(#goldLight)"
          />
          <path
            d="M 90 96 L 104 96 L 96 110 L 82 110 Z"
            fill="url(#goldDark)"
          />

          {/* Highlight Edge Bevels */}
          <path
            d="M 80 18 L 36 104 L 52 124 L 140 124 L 126 104 Z"
            stroke="url(#goldBevelHighlight)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-extrabold uppercase font-['Outfit',sans-serif] tracking-tight ${currentSize.text} ${
            isDarkBg ? 'text-white' : 'text-slate-950'
          }`}
          style={{ letterSpacing: '0.02em' }}
        >
          EHANI
        </span>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase font-['Outfit',sans-serif] text-gold-gradient ${currentSize.subtext} ${currentSize.tracking} mt-1`}
            style={{
              color: '#C5A059',
              textShadow: '0 1px 1px rgba(0,0,0,0.05)',
            }}
          >
            CONSTRUCTION GROUP
          </span>
        )}
      </div>
    </div>
  );
};
