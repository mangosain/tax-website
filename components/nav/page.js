"use client";

import React, { useState, useEffect } from "react";
import { Box, Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Solutions", id: "services" },
    { label: "Why Me", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-4" : "bg-transparent border-transparent py-6 md:py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          <div className="w-10 h-10 bg-white text-zinc-950 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <Box size={20} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold tracking-wide text-sm uppercase">
              &lt;Name&gt;
            </span>
            <span className="text-zinc-500 text-[10px] md:text-xs tracking-[0.2em] uppercase">
              Chartered Accountant
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-all hover:text-white ${
                activeSection === item.id
                  ? "text-white border-b border-white pb-1"
                  : "text-zinc-500"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 px-6 py-2 border border-zinc-700 hover:border-white text-white text-xs uppercase tracking-widest rounded-sm transition-all hover:bg-white hover:text-zinc-950"
          >
            Consult Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-8 right-8 text-zinc-500 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-3xl font-serif text-zinc-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
