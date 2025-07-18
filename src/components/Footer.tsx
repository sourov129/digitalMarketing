import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-primary text-card border-t border-cardBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <BrandLogo size="md" variant="full" />
            </div>
            <p className="text-card/80 mb-6 max-w-md font-light">
              Zenith Creative Studio is a premium digital agency specializing in innovative 
              brand strategies that elevate market presence. We partner with forward-thinking businesses 
              to craft exceptional digital experiences through creative excellence and strategic innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm text-card/80">
                  West 13th Avenue 503, Kennewick, WA 99337, United States of America
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:brownjulianumm175@hotmail.com" className="text-sm text-card/80 hover:text-secondary transition-colors">
                  brownjulianumm175@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+18478475608" className="text-sm text-card/80 hover:text-secondary transition-colors">
                  +1 847-847-5608
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-card">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-card/80 hover:text-secondary transition-colors">Solutions</Link></li>
              <li><Link to="/about" className="text-card/80 hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-card/80 hover:text-secondary transition-colors">Connect</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-card">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-card/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-card/80 hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-card/80 hover:text-secondary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-cardBorder/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-heading font-semibold mb-2 text-card">Accepted Payment Methods</h4>
              <div className="flex space-x-3 items-center">
                <div className="bg-card p-2 rounded-xl h-12 flex items-center justify-center min-w-[70px] shadow-md">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" 
                    alt="Visa" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-card p-2 rounded-xl h-12 flex items-center justify-center min-w-[70px] shadow-md">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                    alt="Mastercard" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-card/60 text-sm">
                © 2025 Zenith Creative Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;