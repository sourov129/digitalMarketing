import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

const BrandLogo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'full' }) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const LogoIcon = () => (
    <img
      src="/bitboostmedia.png"
      alt="BitBoostMedia Logo"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  return (
    <div className="flex items-center space-x-3">
      <LogoIcon />
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent`}>
          BitBoostMedia
        </span>
        <span className="text-xs text-cyan-400/70 -mt-1">Marketing Innovation Hub</span>
      </div>
    </div>
  );
};

export default BrandLogo;