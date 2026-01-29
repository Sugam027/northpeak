'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-background shadow-lg z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 lg:pb-12">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-white text-3xl font-bold tracking-wide cursor-pointer hover:opacity-90 transition-opacity">
                North Peak
              </h1>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Info Items */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Location */}
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Location</h4>
                <p className="text-xs opacity-90">Budhanilkantha, Nepal</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Working Time</h4>
                <p className="text-xs opacity-90">Mon - Sat : 9AM</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Call Us</h4>
                <p className="text-xs opacity-90">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className={`hidden lg:block py-4 w-full left-0 px-4 sm:px-6 lg:px-8 top-[50%] ${isSticky ? 'fixed top-0! z-50 bg-background/80 backdrop-blur-xl' : 'absolute z-50'}`}>
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-8 py-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:block">
                <ul className="flex items-center gap-8">
                  <li>
                    <Link 
                      href="/" 
                      className="text-gray-700 font-medium block hover:text-blue-500 transition-colors relative group"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-gray-700 font-medium block hover:text-blue-500 transition-colors relative group"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services" 
                      className="text-gray-700 font-medium block hover:text-blue-500 transition-colors relative group"
                    >
                      Services
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/teams" 
                      className="text-gray-700 font-medium block hover:text-blue-500 transition-colors relative group"
                    >
                      Teams
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="text-gray-700 font-medium block hover:text-blue-500 transition-colors relative group"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <>
                <nav className="lg:hidden py-4">

                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link 
                        href="/" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/about" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/pages" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pages
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                </>
              )}
            </div>
        </div>

        

        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
          <div className={`py-4 w-full`}>
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4">
                <nav className="lg:hidden py-4">

                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link 
                        href="/" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/about" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/pages" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pages
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="text-gray-700 font-medium py-2 block hover:text-blue-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:hidden pb-4 space-y-3">
            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg">
              <div className="bg-white/20 p-2 rounded-full">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Location</h4>
                <p className="text-xs opacity-90">Budhanilkantha, Nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg">
              <div className="bg-white/20 p-2 rounded-full">
                <Clock size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Working Time</h4>
                <p className="text-xs opacity-90">Mon - Sat : 9AM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white bg-white/10 p-3 rounded-lg">
              <div className="bg-white/20 p-2 rounded-full">
                <Phone size={16} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Call Us</h4>
                <p className="text-xs opacity-90">+91 98765 43210</p>
              </div>
            </div>
          </div>
          </>
        )}
        
      </div>
    </header>
  );
}