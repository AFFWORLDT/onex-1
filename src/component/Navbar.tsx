"use client";

import { useState, useEffect } from "react";
import { Menu, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Ventures", path: "/ventures" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const ventureLinks = [
    { name: "ONEX Academy", href: "/ventures/academy" },
    { name: "Properties", href: "/ventures/properties" },
    { name: "Services", href: "/ventures/services" },
    { name: "Foundation", href: "/ventures/foundation" },
    { name: "Verticals", href: "/ventures/verticals" },
    { name: "Projects", href: "/ventures/projects" },
  ];

  // Logic for dynamic text colors
  const textColorClass = isHomePage && !isScrolled ? "text-white" : "text-black";
  const mutedColorClass = isHomePage && !isScrolled ? "text-gray-400" : "text-gray-500";
  const logoMainColor = isHomePage && !isScrolled ? "text-white" : "text-black";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter leading-none group-hover:text-gold transition-colors ${logoMainColor}`}>
                DR. NITTIN <span className="text-gold group-hover:text-gold transition-colors">K.A.</span>
              </span>
              <span className={`text-[10px] font-bold tracking-[0.4em] uppercase mt-1 ${mutedColorClass}`}>
                Personal Brand
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className={`flex items-center gap-8 px-10 py-3 rounded-full border transition-all ${
              isScrolled ? "bg-black/5 border-black/5" : isHomePage ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"
            }`}>
              <Link
                href="/about"
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-gold ${textColorClass}`}
              >
                About
              </Link>
              
              {/* Ventures Dropdown */}
              <div 
                className="relative group/dropdown"
                onMouseEnter={() => setIsVenturesOpen(true)}
                onMouseLeave={() => setIsVenturesOpen(false)}
              >
                <Link
                  href="/ventures"
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1 hover:text-gold ${textColorClass}`}
                >
                  Ventures <ChevronDown size={12} className={`transition-transform duration-300 ${isVenturesOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                <AnimatePresence>
                  {isVenturesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-56"
                    >
                      <div className="bg-white border border-black/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                        {ventureLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-3 text-[10px] font-bold text-gray-500 hover:text-gold hover:bg-black/5 rounded-xl uppercase tracking-widest transition-all"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-gold ${textColorClass}`}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-gold ${textColorClass}`}
              >
                Contact
              </Link>
            </div>

            <button className={`p-3 rounded-full transition-colors ${
              isHomePage && !isScrolled ? "text-white bg-white/5 hover:bg-gold hover:text-black" : "text-black bg-black/5 hover:bg-gold hover:text-white"
            }`}>
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className={`w-12 h-12 flex flex-col items-center justify-center gap-1.5 border rounded-full transition-colors ${
                isHomePage && !isScrolled ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
              }`}
            >
              <div className={`w-5 h-[2px] ${isHomePage && !isScrolled ? "bg-white" : "bg-black"}`} />
              <div className={`w-3 h-[2px] self-end mr-3 ${isHomePage && !isScrolled ? "bg-white" : "bg-black"}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}