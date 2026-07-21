import React, { useState } from 'react';
import { 
  Building2, 
  Maximize2, 
  Sparkles, 
  X,
  CheckCircle2
} from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; category: string } | null>(null);

  const galleryItems = [
    {
      id: 'g-1',
      category: 'sorting',
      title: 'Automated Optical Sizing Line for Red Onions',
      subtitle: 'Nashik Packhouse Facility (Maharashtra)',
      src: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g-2',
      category: 'cold-storage',
      title: 'Multi-Chamber Temperature Controlled Cold Storage (-2°C)',
      subtitle: 'Garlic Storage Facility (Shandong / MP)',
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g-3',
      category: 'packaging',
      title: 'Jute & Mesh Bag Custom Label Printing Line',
      subtitle: 'Export Packing Operations',
      src: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g-4',
      category: 'loading',
      title: '40ft High Cube Reefer Stuffing & Temperature Verification',
      subtitle: 'JNPT Nhava Sheva Cold Depot',
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g-5',
      category: 'sorting',
      title: 'Sanitized Pressure Washing & Curing Line for Ginger',
      subtitle: 'Cochin Export Processing Facility',
      src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g-6',
      category: 'loading',
      title: 'Vessel Loading at Jebel Ali / Nhava Sheva Terminal',
      subtitle: 'Ocean Freight Carrier Dispatch',
      src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(i => i.category === activeTab);

  return (
    <section className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Infrastructure & Facilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Packhouse Operations & Cold Storage Fleet
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Take a visual tour of our government-certified sorting plants, pressure washing lines, temperature-monitored cold storages, and container loading yards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Facilities' },
            { id: 'sorting', label: 'Sorting & Grading' },
            { id: 'cold-storage', label: 'Cold Storage Units' },
            { id: 'packaging', label: 'Packaging & Private Label' },
            { id: 'loading', label: 'Container Reefer Stuffing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-800 text-stone-100 border border-emerald-600 shadow-md'
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 cursor-pointer shadow-lg hover:border-emerald-600/60 transition-all duration-300 h-64"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="text-sm font-bold text-stone-100 font-serif group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-400">{item.subtitle}</p>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-200 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-96 sm:h-[500px] w-full bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-stone-950 border-t border-stone-800 space-y-1">
              <h3 className="text-lg font-bold font-serif text-stone-100">{lightboxImage.title}</h3>
              <p className="text-xs text-amber-400">{lightboxImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
