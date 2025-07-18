import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-midnight-900 text-white border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <BrandLogo size="md" variant="full" />
            </div>
            <p className="text-platinum-300 mb-6 max-w-md font-light">
              LuxeVelocity is a premium digital marketing consultancy specializing in sophisticated 
              marketing solutions that elevate brands and maximize returns. We help discerning businesses 
              achieve extraordinary digital presence through strategic excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-sm text-platinum-300">
                  Prestige Plaza 2500, Beverly Hills, CA 90210, United States
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400" />
                <a href="mailto:hello@luxevelocity.com" className="text-sm text-platinum-300 hover:text-gold-400 transition-colors">
                  hello@luxevelocity.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <a href="tel:+13105551234" className="text-sm text-platinum-300 hover:text-gold-400 transition-colors">
                  +1 (310) 555-1234
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-platinum-300 hover:text-gold-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-platinum-300 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-platinum-300 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-platinum-300 hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-platinum-300 hover:text-gold-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-platinum-300 hover:text-gold-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gold-400/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2">Accepted Payment Methods</h4>
              <div className="flex space-x-3 items-center">
                <div className="bg-white p-2 rounded-xl h-12 flex items-center justify-center min-w-[70px] shadow-md">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" 
                    alt="Visa" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-white p-2 rounded-xl h-12 flex items-center justify-center min-w-[70px] shadow-md">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                    alt="Mastercard" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-platinum-400 text-sm">
                © 2025 LuxeVelocity. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;