'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className="relative flex items-center justify-between px-4 py-2">
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
      <div className="hidden lg:flex items-center space-x-8 md:space-x-10 lg:space-x-12 xl:space-x-16">
        <div className="relative">
          <Link
            href="/"
            className={`text-gray-800 hover:text-blue-600 ${
              currentPath === "/"
                ? "font-bold text-blue-600"
                : ""
            }`}
          >
            Home
          </Link>
          {currentPath === "/" && (
            <span className="absolute left-0 right-0 -bottom-[6px] h-[2px] bg-blue-600 origin-left animate-underline"></span>
          )}
        </div>

        {/* Nos offres with dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className={`flex items-center text-gray-800 hover:text-blue-600 ${
              ["/build-shed", "/rent-roof"].includes(currentPath)
                ? "text-blue-600 font-bold"
                : ""
            }`}
          >
            Nos offres
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute left-0 z-20 w-48 mt-2 bg-white rounded-md shadow-lg transition-all duration-200 ${
              isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            <div className="py-2">
              <Link
                href="/build-shed"
                className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 ${
                  currentPath === "/build-shed"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : ""
                }`}
              >
                I build my shed
              </Link>
              <Link
                href="/rent-roof"
                className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 ${
                  currentPath === "/rent-roof"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : ""
                }`}
              >
                I rent my roof
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <Link
            href="/battery"
            className={`text-gray-800 hover:text-blue-600 ${
              currentPath === "/battery"
                ? "font-bold text-blue-600"
                : ""
            }`}
          >
            Batterie
          </Link>
          {currentPath === "/battery" && (
            <span className="absolute left-0 right-0 -bottom-[6px] h-[2px] bg-blue-600 origin-left animate-underline"></span>
          )}
        </div>

        <div className="relative">
          <Link
            href="/contact"
            className={`text-gray-800 hover:text-blue-600 ${
              currentPath === "/contact"
                ? "font-bold text-blue-600"
                : ""
            }`}
          >
            Contact
          </Link>
          {currentPath === "/contact" && (
            <span className="absolute left-0 right-0 -bottom-[6px] h-[2px] bg-blue-600 origin-left animate-underline"></span>
          )}
        </div>
      </div>

      {/* Desktop Contact Button and Phone */}
      <div className="hidden lg:flex items-center space-x-6">
        <button className="px-6 py-2 text-white bg-primary rounded-md hover:bg-blue-950 transition-colors">
          <a href="/contact">Contactez-nous</a>
        </button>

        <div className="flex items-center border border-black p-2 rounded-md">
          <a
            href="tel:+33645478348"
            className="flex items-center text-gray-600"
          >
            <Phone className="w-4 h-4 mr-2" />
            +33 6 45 47 83 48
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
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
