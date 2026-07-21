import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export default function FAQSection({ onOpenContact }: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['all', 'Orders & MOQ', 'Shipping & Reefer', 'Payment & L/C', 'Quality & Certificates'];

  const filteredFaqs = FAQS.filter(f => {
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            International B2B Trade & Freight FAQs
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Find immediate answers regarding order volumes, L/C payment mechanisms, reefer temperature calibration, and phytosanitary clearance.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trade terms (e.g. MOQ, L/C, Reefer, Certificate)..."
              className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 shadow-md"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-stone-100 border border-emerald-600 font-semibold'
                    : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-xs">
              No matching questions found. Try adjusting your search query.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-stone-800/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded border border-emerald-800 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-100 font-serif">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 bg-stone-950/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact CTA */}
        <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold font-serif text-stone-100">Have a specific trade or shipping query?</h4>
            <p className="text-xs text-stone-400">Our trade managers in Dubai and Mumbai are available for direct consultation.</p>
          </div>

          <button
            onClick={onOpenContact}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-md flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Export Sales Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
}
