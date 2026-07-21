import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X,
  Share2,
  Sparkles
} from 'lucide-react';

export default function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Market Intelligence & Harvest Updates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Global Trade Insights & Reefer Guides
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Stay informed on international commodity market trends, crop yield forecasts, ocean freight indices, and reefer container temperature calibration protocols.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="h-48 w-full overflow-hidden bg-stone-900 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-700">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-stone-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-100 font-serif group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-900 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[11px] text-stone-300 font-medium truncate max-w-[110px]">{post.author.name}</span>
                </div>

                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-8 max-h-[85vh] flex flex-col">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950/80 hover:bg-stone-800 text-stone-200 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 border-b border-stone-800 bg-emerald-950 space-y-2 pr-12">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{activePost.category}</span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-100 leading-snug">{activePost.title}</h2>
              <div className="flex items-center gap-4 text-xs text-stone-300 pt-1">
                <span>By {activePost.author.name} ({activePost.author.role})</span>
                <span>•</span>
                <span>{activePost.date}</span>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 custom-scrollbar text-xs sm:text-sm text-stone-300 leading-relaxed">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full h-64 object-cover rounded-xl border border-stone-800"
                referrerPolicy="no-referrer"
              />

              <div className="whitespace-pre-line space-y-3 font-sans">
                {activePost.content}
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-wrap gap-2">
                {activePost.tags.map((tag, idx) => (
                  <span key={idx} className="bg-stone-950 text-emerald-400 border border-stone-800 text-xs px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
