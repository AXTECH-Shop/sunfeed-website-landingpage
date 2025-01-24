"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-8 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/Images/Sunfeed.png"
            alt="Sunfeed Logo"
            width={120}
            height={40}
            className="h-auto"
            priority
          />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-800 hover:text-blue-600">
          Home
        </Link>
        {/* Nos offres with dropdown */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center text-gray-800 hover:text-blue-600">
            Nos offres
            <ChevronDown 
              className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {/* Dropdown Menu */}
          <div 
            className={`absolute left-0 z-20 w-48 mt-2 bg-white rounded-md shadow-lg transition-all duration-200 ${
              isDropdownOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-2 invisible'
            }`}
          >
            <div className="py-2">
              <Link 
                href="/build-shed"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                I build my shed
              </Link>
              <Link 
                href="/rent-roof"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                I rent my roof
              </Link>
            </div>
          </div>
        </div>

        <Link href="/battery" className="text-gray-800 hover:text-blue-600">
          Batterie
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600">
          Contact
        </Link>
      </div>
      
      {/* Desktop Contact Button and Phone */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="px-6 py-2 text-white bg-primary rounded-md hover:bg-blue-950 transition-colors">
          Contactez-nous
        </button>
        <div className="flex items-center border border-black p-2 rounded-md">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-gray-600">+33 6 45 47 83 48</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700 hover:text-gray-900"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Header;
