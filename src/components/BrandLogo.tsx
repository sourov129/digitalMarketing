import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

const BrandLogo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'full' }) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const LogoIcon = () => (
    <div className={`${sizeClasses[size]} ${className} relative group`}>
      {/* Circular container with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-hover to-accent rounded-full shadow-zenith group-hover:shadow-elevation transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full"></div>
        
        {/* Mountain peak logo */}
        <div className="flex items-center justify-center h-full relative">
          <svg 
            viewBox="0 0 32 32" 
            className="w-4/5 h-4/5 text-card"
            fill="currentColor"
          >
            {/* Mountain peaks */}
            <path d="M6 22l6-8 4 3 6-9 4 6v8H6z" className="text-card" opacity="0.9" />
            {/* Accent peak */}
            <path d="M16 14l4-6 4 6-4 2-4-2z" className="text-secondary" opacity="0.8" />
            {/* Base line */}
            <path d="M4 24h24v2H4z" className="text-accent" />
          </svg>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  return (
    <div className="flex items-center space-x-4">
      <LogoIcon />
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-heading font-bold bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent tracking-tight`}>
          Zenith
        </span>
        <span className="text-xs text-secondary font-medium -mt-1 tracking-widest uppercase">
          Creative Studio
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;