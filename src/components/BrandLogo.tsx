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
      {/* Aurora wave container with diamond accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-600 via-ethereal-600 to-midnight-800 rounded-3xl shadow-aurora group-hover:shadow-elevation transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-400/20 to-transparent rounded-3xl"></div>
        
        {/* Aurora wave with diamond */}
        <div className="flex items-center justify-center h-full relative">
          <svg 
            viewBox="0 0 32 32" 
            className="w-4/5 h-4/5 text-platinum-50"
            fill="currentColor"
          >
            {/* Aurora wave */}
            <path d="M4 16c0-4 2-6 6-8s8 0 12 2c4 2 6 4 6 8s-2 6-6 8c-4 2-8 6-12 2s-6-6-6-10z" className="text-aurora-400" opacity="0.8" />
            {/* Diamond accent */}
            <path d="M16 6l4 4-4 4-4-4z" className="text-ethereal-400" />
            <path d="M16 18l4 4-4 4-4-4z" className="text-aurora-500" />
          </svg>
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-ethereal-400/0 via-ethereal-400/30 to-ethereal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
        <span className={`${textSizeClasses[size]} font-heading font-bold bg-gradient-to-r from-midnight-400 via-ethereal-500 to-midnight-600 bg-clip-text text-transparent tracking-tight`}>
          AuroraLux
        </span>
        <span className="text-xs text-aurora-500 font-medium -mt-1 tracking-widest uppercase">
          Digital Excellence
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;