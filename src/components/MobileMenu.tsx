import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-700 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <div className="mt-16 space-y-6">
          <Link 
            href="/" 
            className="block text-center text-gray-700 hover:text-gray-900 py-2 text-lg"
            onClick={onClose}
          >
            Menu
          </Link>
          <div className="w-full h-px bg-gray-200" />
          
          <Link 
            href="/build-shed" 
            className="block text-center text-gray-700 hover:text-gray-900 py-2 text-lg"
            onClick={onClose}
          >
            I build my shed
          </Link>
          <Link 
            href="/rent-roof" 
            className="block text-center text-gray-700 hover:text-gray-900 py-2 text-lg"
            onClick={onClose}
          >
            I rent my roof
          </Link>
          <div className="w-full h-px bg-gray-200" />
          
          <Link 
            href="/battery" 
            className="block text-center text-gray-700 hover:text-gray-900 py-2 text-lg"
            onClick={onClose}
          >
            Batterie
          </Link>
          <div className="w-full h-px bg-gray-200" />
          
          <Link 
            href="/contact" 
            className="block text-center text-gray-700 hover:text-gray-900 py-2 text-lg"
            onClick={onClose}
          >
            Contact
          </Link>
          
          <div className="pt-6 space-y-4">
            <button className="w-full px-6 py-2 text-white bg-[#36689E] rounded-md hover:bg-[#3a4f64] transition-colors">
              Contactez-nous
            </button>
            <a 
              href="tel:+33645478348" 
              className="flex items-center justify-center space-x-2 p-2 border border-gray-200 rounded-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+33 6 45 47 83 48</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;