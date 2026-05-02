import ContactSection from "@/component/ContactSection";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* HERO SECTION - MATCHING THE USER IMAGE */}
        <div className="flex justify-center mb-24">
          <div className="bg-[#f9f9f9] border border-black/5 px-16 py-10 rounded-full inline-block shadow-[0_0_50px_rgba(0,0,0,0.02)]">
            <h1 className="text-4xl md:text-6xl font-black tracking-[0.3em] text-black uppercase">
              CONTACT
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Info Card 1 */}
          <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-black/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/5 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-500 mb-6">Our team is here to help with any inquiries.</p>
            <a href="mailto:contact@drnittin.com" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              contact@drnittin.com <ArrowRight size={18} />
            </a>
          </div>

          {/* Info Card 2 */}
          <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-black/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/5 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-500 mb-6">Direct lines to our global offices.</p>
            <a href="tel:+971XXXXXXXXX" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              +971 XX XXX XXXX <ArrowRight size={18} />
            </a>
          </div>

          {/* Info Card 3 */}
          <div className="bg-[#fcfcfc] p-10 rounded-[30px] border border-black/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-black/5 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-500 mb-6">Global headquarters in major cities.</p>
            <p className="text-gold font-bold">Dubai, UAE | Toronto, CAN</p>
          </div>
        </div>

        {/* REUSE CONTACT SECTION FORM */}
        <ContactSection />

        {/* SOCIAL LINKS SECTION */}
        <div className="mt-20 text-center">
          <h4 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase mb-8">Follow the Journey</h4>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 text-sm uppercase font-bold tracking-widest">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 text-sm uppercase font-bold tracking-widest">
              <Instagram size={20} /> Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 text-sm uppercase font-bold tracking-widest">
              <Twitter size={20} /> Twitter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
