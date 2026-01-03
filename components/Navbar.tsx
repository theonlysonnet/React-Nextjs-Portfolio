"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  // Logic for color theme
  const isWhiteBg = pathname.startsWith("/projects") || pathname.startsWith("/blog");
  
  // Dynamic Classes
  const navBgClass = isWhiteBg ? "bg-white/90" : "bg-black/90";
  const textColorClass = isWhiteBg ? "text-stone-600 hover:text-black hover:border-black" : "text-stone-300 hover:text-white hover:border-white";
  const logoColorClass = isWhiteBg ? "text-black" : "text-white";
  const borderColorClass = isWhiteBg ? "border-stone-100" : "border-stone-800";
  const mobileMenuBgClass = isWhiteBg ? "bg-white" : "bg-black";

  return (
    <nav className={`w-full backdrop-blur-sm fixed top-0 z-50 shadow-sm border-b transition-colors duration-300 ${navBgClass} ${borderColorClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-3xl md:text-4xl font-normal ${logoColorClass}`}>
              Sonnet Salice
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${textColorClass} hover:border-b-2 transition-all px-3 py-2 text-2xl font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${logoColorClass}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden border-t ${borderColorClass} ${mobileMenuBgClass}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={toggleMenu}
                className={`block px-3 py-2 rounded-md text-xl font-medium ${textColorClass} hover:bg-opacity-10`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}