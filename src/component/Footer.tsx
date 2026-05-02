"use client";

import { Instagram, Linkedin, Twitter, Globe, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black text-white tracking-tighter">
                DR. NITTIN <span className="text-gold">K.A.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Visionary entrepreneur and leader committed to global development and excellence across industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-500 hover:text-gold text-sm transition-colors">About Dr. Nittin</Link></li>
              <li><Link href="/ventures" className="text-gray-500 hover:text-gold text-sm transition-colors">Global Ventures</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gold text-sm transition-colors">Business Insights</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gold text-sm transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          {/* Empire */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Empire</h4>
            <ul className="space-y-4">
              <li><Link href="/ventures/properties" className="text-gray-500 hover:text-gold text-sm transition-colors">Luxury Properties</Link></li>
              <li><Link href="/ventures/academy" className="text-gray-500 hover:text-gold text-sm transition-colors">ONEX Academy</Link></li>
              <li><Link href="/ventures/services" className="text-gray-500 hover:text-gold text-sm transition-colors">Market Services</Link></li>
              <li><Link href="/ventures/foundation" className="text-gray-500 hover:text-gold text-sm transition-colors">The Foundation</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
            <p className="text-gray-500 text-sm mb-6">Stay updated with the latest visionary insights and projects.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-gold text-black px-6 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest">
            © 2026 DR. NITTIN K.A. PERSONAL BRAND. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
