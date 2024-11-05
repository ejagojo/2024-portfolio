// src/app/components/Navbar.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl flex items-center justify-between py-4">
        {/* Left: Name now links to home page */}
        <Link href="/" onClick={handleNavItemClick}>
          <span className="text-xl md:text-2xl font-bold text-white cursor-pointer">
            Eljohn Agojo
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Right: Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full md:static md:w-auto md:flex md:space-x-8 items-center bg-black md:bg-transparent p-4 md:p-0`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={handleNavItemClick}
              className="relative text-lg text-gray-200 font-semibold block mt-4 md:mt-0 text-center md:text-left cursor-pointer px-4 py-2"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <motion.span className="relative z-10">{item.name}</motion.span>
              {hoverIndex === index && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-60"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
