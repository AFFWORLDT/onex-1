"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection({ isLight = false }: { isLight?: boolean }) {
  return (
    <section id="contact" className={`py-32 relative overflow-hidden ${isLight ? 'bg-white text-black' : ''}`}>
      <div className="container mx-auto px-6">
        <div className={`${isLight ? 'bg-[#fcfcfc] border-black/5 shadow-2xl shadow-black/5' : 'glass border-white/5'} rounded-[40px] p-12 md:p-20 relative overflow-hidden border`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-gold font-bold text-sm tracking-widest uppercase mb-6">Connect</h2>
              <h3 className={`text-5xl font-bold mb-8 ${isLight ? 'text-black' : 'text-white'}`}>Start a <span className="text-gray-500">Conversation.</span></h3>
              <p className={`${isLight ? 'text-gray-600' : 'text-gray-400'} text-lg mb-12`}>
                Whether you're interested in visionary partnerships, global developments, or speaking engagements, let's connect.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className={`w-14 h-14 rounded-full ${isLight ? 'bg-gold/10' : 'glass'} flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                    <p className={`text-xl font-medium ${isLight ? 'text-black' : 'text-white'}`}>contact@drnittin.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className={`w-14 h-14 rounded-full ${isLight ? 'bg-gold/10' : 'glass'} flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Global Headquarters</p>
                    <p className={`text-xl font-medium ${isLight ? 'text-black' : 'text-white'}`}>Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-widest ml-4">Name</label>
                  <input type="text" placeholder="John Doe" className={`w-full ${isLight ? 'bg-black/5 border-black/5 text-black' : 'bg-white/5 border-white/10 text-white'} border rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-colors`} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-widest ml-4">Email</label>
                  <input type="email" placeholder="john@example.com" className={`w-full ${isLight ? 'bg-black/5 border-black/5 text-black' : 'bg-white/5 border-white/10 text-white'} border rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-colors`} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-widest ml-4">Message</label>
                <textarea rows={4} placeholder="Your message here..." className={`w-full ${isLight ? 'bg-black/5 border-black/5 text-black' : 'bg-white/5 border-white/10 text-white'} border rounded-3xl px-8 py-4 focus:outline-none focus:border-gold transition-colors`}></textarea>
              </div>
              <button className="w-full bg-gold text-white font-bold py-5 rounded-full flex items-center justify-center gap-2 hover-glow hover:scale-[1.02] transition-all">
                SEND MESSAGE <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
