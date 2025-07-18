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
      {/* Hexagonal container with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire-600 via-violet-600 to-sapphire-800 rounded-2xl shadow-velox group-hover:shadow-lift transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-rosegold-400/20 to-transparent rounded-2xl"></div>
        
        {/* V-shaped logo with arrow elements */}
        <div className="flex items-center justify-center h-full relative">
          <svg 
            viewBox="0 0 24 24" 
            className="w-3/5 h-3/5 text-pearl-50"
            fill="currentColor"
          >
            {/* Main V shape */}
            <path d="M3 3l6 12 6-12h2l-8 16L1 3h2z" />
            {/* Arrow accent */}
            <path d="M18 8l3-3-3-3v2h-4v2h4v2z" className="text-rosegold-400" />
          </svg>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/0 via-violet-400/20 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        <span className={`${textSizeClasses[size]} font-display font-bold bg-gradient-to-r from-sapphire-400 via-violet-500 to-sapphire-600 bg-clip-text text-transparent tracking-tight`}>
          VeloxStudio
        </span>
        <span className="text-xs text-rosegold-500 font-medium -mt-1 tracking-widest uppercase">
          Digital Excellence
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;