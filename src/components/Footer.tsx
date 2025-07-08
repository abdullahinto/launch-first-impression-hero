
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative">
      <div className="backdrop-blur-md bg-white/60 border-t border-white/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-slate-600">
              <p className="text-sm font-medium">© 2025 Muhammad Abdullah</p>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
              
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-3b9a3a318/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
