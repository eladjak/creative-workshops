"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#workshops", label: "סדנאות" },
  { href: "#gallery", label: "גלריה" },
  { href: "#curriculum", label: "תכנית לימודים" },
  { href: "#for-who", label: "למי מתאים" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b-4 border-blue-600"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 comic-border-sm rounded-lg flex items-center justify-center text-white font-black text-lg">
            א
          </div>
          <span
            className={`font-black text-lg hidden sm:block ${scrolled ? "text-gray-900" : "text-white"}`}
          >
            סדנאות יצירה
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg font-semibold text-sm transition-colors hover:bg-blue-600 hover:text-white ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mr-2 px-4 py-2 bg-yellow-400 text-gray-900 font-black rounded-lg comic-border-sm hover:bg-yellow-300 transition-colors text-sm"
          >
            קבלו הצעת מחיר
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-900" : "text-white"}`}
          aria-label="פתח תפריט"
        >
          <div className="w-6 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-4 border-blue-600 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-gray-900 font-semibold rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-yellow-400 text-gray-900 font-black rounded-lg comic-border-sm text-center"
              >
                קבלו הצעת מחיר
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
