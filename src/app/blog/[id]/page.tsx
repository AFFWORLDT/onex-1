import { blogs } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.category === post.category && b.id !== post.id)
    .slice(0, 2);

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:gap-4 transition-all"
            >
              <ArrowLeft size={16} /> Back to Gazette
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-gold text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-black/60 text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
                <Calendar size={14} className="text-gold" /> {post.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter leading-[0.95] mb-12">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 border-t border-black/10 pt-10">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gold/50 shadow-xl">
                <Image src="/images/Nitinsir.png" alt="Dr. Nittin" fill className="object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Written By</p>
                <p className="text-xl font-bold text-black">DR. NITTIN K.A.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-12 md:p-20 rounded-[50px] shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none">
              <h2 className="text-8xl font-black text-black">NKA</h2>
            </div>

            <div className="prose prose-gold max-w-none">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-12 italic border-l-4 border-gold pl-8">
                {post.excerpt}
              </p>
              <div className="text-lg md:text-xl text-gray-600 leading-[1.8] space-y-8 font-light">
                {post.content.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p>
                  As we continue to navigate the complexities of a globalized economy, the Dr. Nittin K.A. personal brand remains focused on creating tangible value. We believe that the fusion of high-end design, technological innovation, and ethical leadership is the only path forward. Our ventures are more than businesses—they are manifestations of a vision to build a world that is more connected, transparent, and prosperous for all.
                </p>
                <p>
                  Innovation is not a destination; it is a continuous journey. Whether through the tokenization of assets or the empowerment of youth through education, we are committed to being at the forefront of the next global evolution.
                </p>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Share Insight</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                    <Linkedin size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                    <Twitter size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                Reading Time: 5 Minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h4 className="text-gold font-bold text-[10px] tracking-[0.4em] uppercase mb-4 text-center md:text-left">Continue Reading</h4>
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase text-center md:text-left">Recommended <span className="text-gold">Insights</span></h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {relatedPosts.map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`} className="group">
                <div className="bg-white rounded-[40px] border border-black/5 overflow-hidden flex flex-col md:flex-row h-full hover:shadow-xl transition-all">
                  <div className="relative w-full md:w-[40%] h-[250px] md:h-auto">
                    <Image src={related.image} alt={related.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="p-10 flex flex-col justify-center md:w-[60%]">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-4 block">{related.category}</span>
                    <h5 className="text-xl font-bold text-black mb-6 group-hover:text-gold transition-colors line-clamp-2 leading-tight">{related.title}</h5>
                    <span className="flex items-center gap-2 text-black font-bold text-[10px] tracking-widest uppercase group-hover:gap-4 transition-all">
                      View Insight <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
