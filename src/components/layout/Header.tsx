"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Treatments", href: "/services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md glass-nav shadow-sm no-line">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-headline font-bold text-slate-900">Dr. Anshul Goel</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-label text-lg tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors pb-1 ${
                  isActive 
                    ? "text-slate-900 font-semibold border-b-2 border-amber-400" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/appointment">
            <button className="hidden md:block bg-midnight-gradient text-on-primary px-6 py-2.5 rounded-xl font-label font-medium scale-95 active:scale-90 transition-transform">
              Book Appointment
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 p-8 space-y-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-label ${
                  isActive ? "text-slate-900 font-bold" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full bg-midnight-gradient text-on-primary px-6 py-3 rounded-xl font-label font-medium">
              Book Appointment
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
