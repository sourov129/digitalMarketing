import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-midnight-900/95 backdrop-blur-xl shadow-elegant sticky top-0 z-50 border-b border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <BrandLogo size="md" variant="full" className="group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-gold-400 bg-royal-500/20 shadow-md'
                    : 'text-platinum-300 hover:text-gold-400 hover:bg-royal-500/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-royal-500 to-royal-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-luxury transform hover:-translate-y-1 transition-all duration-300 border border-gold-400/20"
            >
              Begin Journey
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-platinum-300 hover:text-gold-400 hover:bg-royal-500/10 transition-all"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gold-400/20 py-6 bg-midnight-800/50 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-gold-400 bg-royal-500/20'
                      : 'text-platinum-300 hover:text-gold-400 hover:bg-royal-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-royal-500 to-royal-600 text-white px-6 py-3 rounded-2xl font-semibold text-center mt-6 border border-gold-400/20"
              >
                Begin Journey
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;