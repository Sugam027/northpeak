'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Clock, Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/teams', label: 'Teams' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="lg:relative fixed top-0 left-0 right-0 bg-background shadow-lg z-50">
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
            <div className="flex items-center gap-3 text-white cursor-pointer">
              <div className="bg-white/20 p-2 rounded-full">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Location</h4>
                <p className="text-xs opacity-90 text-muted-foreground">
                  Budhanilkantha, Nepal
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center gap-3 text-white cursor-pointer">
              <div className="bg-white/20 p-2 rounded-full">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Working Time</h4>
                <p className="text-xs opacity-90 text-muted-foreground">
                  Mon - Sat : 9AM
                </p>
              </div>
            </div>

            {/* Call Us */}
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-3 text-white"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Call Us</h4>
                <p className="text-xs opacity-90 text-muted-foreground">
                  +91 98765 43210
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <div 
          className={`hidden lg:block py-4 w-full left-0 px-4 sm:px-6 lg:px-8 ${
            isSticky 
              ? 'fixed top-0 z-50 bg-background/95 backdrop-blur-xl shadow-xl' 
              : 'absolute top-[50%] z-50'
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between px-8 py-4">
              {/* Desktop Navigation */}
              <nav>
                <ul className="flex items-center gap-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className={`
                          relative px-5 py-2.5 font-medium rounded-lg
                          transition-all duration-300 ease-out
                          ${isActive(link.href)
                            ? 'text-white'
                            : 'text-muted-dark hover:text-muted'
                          }
                          group overflow-hidden
                        `}
                      >
                        {/* Active state background and glow */}
                        {isActive(link.href) && (
                          <>
                            <span className="absolute inset-0 bg-primary rounded-lg"></span>
                          </>
                        )}
                        
                        {/* Hover state background and glow */}
                        {!isActive(link.href) && (
                          <>
                            <span className="absolute inset-0 bg-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          </>
                        )}
                        
                        {/* Text */}
                        <span className="relative z-10">{link.label}</span>
                        
                        {/* Active indicator dot */}
                        {isActive(link.href) && (
                          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>  
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
          <>
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          <div className="lg:hidden pb-4 space-y-4 fixed right-0 top-0 bottom-0 w-64 bg-background z-50 overflow-y-auto transform transition-transform ease-in-out">
            <div className='flex justify-end p-4 mb-0'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="overflow-hidden">
              <nav className="py-2">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className={`
                          flex items-center px-6 py-3 mb-1 font-medium
                          transition-all duration-300
                          ${isActive(link.href)
                            ? 'text-muted-dark bg-white/50 border-l-4 border-white'
                            : 'text-white hover:bg-white/40 hover:text-muted-dark border-l-4 border-transparent hover:border-white'
                          }
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        {isActive(link.href) && (
                          <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse z-10"></span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Info Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm p-4">
                <div className="bg-white/20 p-2.5 rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Location</h4>
                  <p className="text-xs opacity-90 group-hover:opacity-100 transition-opacity">
                    Budhanilkantha, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm p-4">
                <div className="bg-white/20 p-2.5 rounded-full">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Working Time</h4>
                  <p className="text-xs opacity-90">
                    Mon - Sat : 9AM
                  </p>
                </div>
              </div>

              <a 
                href="tel:+919876543210"
                className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm p-4 active:scale-95"
              >
                <div className="bg-white/20 p-2.5 rounded-full">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Call Us</h4>
                  <p className="text-xs opacity-90">
                    +91 98765 43210
                  </p>
                </div>
              </a>
            </div>
          </div>
          </>
          </>
        )}
      </div>
    </header>
  );
}