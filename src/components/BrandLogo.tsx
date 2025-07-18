import React from 'react';
import { Zap, Crown } from 'lucide-react';

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
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500 via-royal-600 to-royal-700 rounded-2xl shadow-luxury">
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/20 to-transparent rounded-2xl"></div>
        <div className="flex items-center justify-center h-full relative">
          <Crown className="w-1/2 h-1/2 text-gold-300" />
          <Zap className="w-1/4 h-1/4 text-gold-400 absolute -bottom-1 -right-1" />
        </div>
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
        <span className={`${textSizeClasses[size]} font-display font-bold bg-gradient-to-r from-royal-500 via-royal-600 to-royal-700 bg-clip-text text-transparent`}>
          LuxeVelocity
        </span>
        <span className="text-xs text-gold-500 font-medium -mt-1 tracking-wider">PREMIUM MARKETING</span>
      </div>
    </div>
  );
};

export default BrandLogo;