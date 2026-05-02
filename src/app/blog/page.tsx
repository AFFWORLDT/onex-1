"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/blogData";
import { ArrowRight, Calendar, Tag, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = filter === "All" 
    ? blogs 
    : blogs.filter(b => b.category === filter);

  return (
    <main className="bg-white text-black pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-gold font-bold text-sm tracking-[0.3em] uppercase mb-6">Global Insights</h2>
            <h1 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase leading-none">
              The <span className="text-gold">Gazette</span>
            </h1>
          </div>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            Premium business insights, visionary leadership strategies, and global market analysis from the desk of Dr. Nittin K.A.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-black/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                filter === cat 
                ? "bg-gold text-white" 
                : "bg-black/5 text-gray-500 hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.id}`} className="group cursor-pointer block relative h-[350px] rounded-[30px] overflow-hidden border border-black/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-gold/20 backdrop-blur-md text-gold text-[8px] font-black py-1.5 px-3 rounded-full border border-gold/30 uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={10} className="text-gold" /> {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors leading-tight line-clamp-3">
                      {post.title}
                    </h3>
                    
                    <div className="pt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 text-gold font-black text-[9px] tracking-[0.2em] uppercase">
                        Read Insight <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More Mockup */}
        <div className="mt-20 flex justify-center">
          <button className="bg-white/5 border border-white/10 px-12 py-5 rounded-full text-xs font-bold tracking-[0.5em] text-gray-400 hover:text-white hover:bg-white/10 transition-all uppercase">
            Load More Insights
          </button>
        </div>
      </div>
    </main>
  );
}
