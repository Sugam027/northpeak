"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Find a Doctor', path: '/teams' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-12 text-white">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <span className="font-heading text-xl font-bold text-muted">
                NorthPeak
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Providing compassionate, patient-centered care with cutting-edge medical technology and dedicated healthcare professionals.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-foreground text-muted-dark transition-colors hover:bg-primary-darker hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-foreground text-muted-dark transition-colors hover:bg-primary-darker hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted-foreground text-muted-dark transition-colors hover:bg-primary-darker hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-muted">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-muted-foreground text-sm transition-colors hover:text-muted">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-muted">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  123 Healthcare Blvd, Medical City, MC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">info@northpark.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-muted">Working Hours</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-muted-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            © 2024 NorthPark Medical Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
