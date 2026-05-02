"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Linkedin, Twitter, ChevronRight, Globe, Shield, GraduationCap, Building2, Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLightPage = !isHomePage;

  const ventureLinks = [
    { name: "Academy", icon: <GraduationCap size={18} />, href: "/ventures/academy" },
    { name: "Properties", icon: <Building2 size={18} />, href: "/ventures/properties" },
    { name: "Services", icon: <Briefcase size={18} />, href: "/ventures/services" },
    { name: "Foundation", icon: <Heart size={18} />, href: "/ventures/foundation" },
    { name: "Verticals", icon: <Globe size={18} />, href: "/ventures/verticals" },
    { name: "Projects", icon: <Shield size={18} />, href: "/ventures/projects" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[150]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 h-screen w-full md:w-[450px] ${isLightPage ? 'bg-white text-black' : 'bg-[#0A0A0A] text-white'} z-[200] p-12 overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-gold font-bold tracking-[0.4em] text-[10px] uppercase">Navigation</span>
              <button 
                onClick={onClose}
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all hover:rotate-90 ${isLightPage ? 'border-black/10 hover:bg-black/5' : 'border-white/10 hover:bg-white/5'}`}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-12">
              <div className="space-y-6">
                <Link href="/" onClick={onClose} className="group block">
                  <span className="text-4xl font-black tracking-tighter group-hover:text-gold transition-all block">HOME</span>
                </Link>
                <Link href="/about" onClick={onClose} className="group block">
                  <span className="text-4xl font-black tracking-tighter group-hover:text-gold transition-all block">ABOUT</span>
                </Link>
                <Link href="/blog" onClick={onClose} className="group block">
                  <span className="text-4xl font-black tracking-tighter group-hover:text-gold transition-all block">BLOG</span>
                </Link>
                <Link href="/contact" onClick={onClose} className="group block">
                  <span className="text-4xl font-black tracking-tighter group-hover:text-gold transition-all block">CONTACT</span>
                </Link>
              </div>

              <div className={`pt-12 border-t ${isLightPage ? 'border-black/5' : 'border-white/5'}`}>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-8">The Ventures</span>
                <div className="grid grid-cols-1 gap-4">
                  {ventureLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${isLightPage ? 'bg-black/5 border-black/5 hover:border-gold/30' : 'bg-white/5 border-white/10 hover:border-gold/30'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-gold">{link.icon}</span>
                        <span className="font-bold tracking-widest text-[10px] uppercase">{link.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-gray-500 group-hover:text-gold transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className={`pt-12 border-t ${isLightPage ? 'border-black/5' : 'border-white/5'}`}>
                <div className="flex gap-8">
                  <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gold transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
