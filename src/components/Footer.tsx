import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <BrandLogo size="md" variant="full" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              BitBoostMedia is a leading digital marketing agency specializing in comprehensive 
              marketing solutions that drive growth and maximize ROI. We help businesses amplify 
              their online presence through strategic digital campaigns.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Arlington Drive 1818, Medford, OR 97501, United States
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:jamesemmacfl425@hotmail.com" className="text-sm text-gray-300 hover:text-cyan-400">
                  jamesemmacfl425@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+18727724835" className="text-sm text-gray-300 hover:text-cyan-400">
                  +1 (872) 772-4835
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-cyan-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-cyan-400/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-2">Accepted Payment Methods</h4>
              <div className="flex space-x-3 items-center">
                <div className="bg-white p-2 rounded h-10 flex items-center justify-center min-w-[60px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" 
                    alt="Visa" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="bg-white p-2 rounded h-10 flex items-center justify-center min-w-[60px]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                    alt="Mastercard" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 BitBoostMedia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;