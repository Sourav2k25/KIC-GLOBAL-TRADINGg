import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Building2, 
  Globe2
} from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Trusted Global B2B Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            What International Importers Say
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Verified feedback from wholesale foodstuff distributors, supermarket chains, and processing plants across the GCC, Vietnam, and Europe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4 hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between shadow-lg relative"
            >
              <Quote className="w-8 h-8 text-emerald-900/40 absolute top-4 right-4" />

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "{test.text}"
                </p>

                <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800/80 text-[11px] font-mono text-emerald-300">
                  Purchased: {test.purchasedCommodity}
                </div>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-stone-800 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-100 flex items-center gap-1.5">
                    <span>{test.authorName}</span>
                    <span className="text-sm">{test.flagEmoji}</span>
                  </h4>
                  <p className="text-[11px] text-amber-400 font-medium">{test.company}</p>
                  <p className="text-[10px] text-stone-500">{test.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
