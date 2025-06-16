"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { Menu, X, Phone } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  scrollToSection: (id: string) => void;
}

export const navLinks = [
  // todo: add nav links here
];

export default function Nav({ scrollToSection }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md w-full transition-all duration-300 ${
        isSticky ? "fixed top-0 z-50" : "relative"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/bell-contractors-logo.png"
              alt="Belle Contractors Logo"
              width={150}
              height={48}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-accent-secondary font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:270-925-1461"
              className="flex items-center space-x-2 text-gray-600 hover:text-accent-secondary font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>270-925-1461</span>
            </a>

            <Button
              size="sm"
              text="Contact Us"
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
            />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              size="sm"
              text="Contact Us"
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-accent-secondary py-2 text-left font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              text="Contact Us"
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
