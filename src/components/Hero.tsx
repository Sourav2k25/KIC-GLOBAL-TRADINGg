import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Calculator, 
  Truck, 
  Globe2, 
  CheckCircle2, 
  Container,
  Award
} from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenRFQ: () => void;
  onOpenTracker: () => void;
  currency: string;
}

export default function Hero({
  onExploreCatalog,
  onOpenRFQ,
  onOpenTracker,
  currency
}: HeroProps) {

  // Price conversion helper
  const formatPrice = (baseUsd: number) => {
    switch (currency) {
      case 'AED':
        return `AED ${(baseUsd * 3.67).toFixed(0)}/MT`;
      case 'EUR':
        return `€ ${(baseUsd * 0.92).toFixed(0)}/MT`;
      case 'INR':
        return `₹ ${(baseUsd * 83.5).toLocaleString('en-IN')}/MT`;
      default:
        return `$ ${baseUsd}/MT`;
    }
  };

  const commodityTicker = [
    { name: 'Red Onion Nashik 55mm+', priceUsd: 380, trend: '+2.4%', status: 'In Season' },
    { name: 'Chinese Garlic 5.5cm+', priceUsd: 1250, trend: '+0.8%', status: 'Peak Harvest' },
    { name: 'Fresh Elephant Ginger', priceUsd: 1400, trend: '-1.1%', status: 'Available' },
    { name: 'Teja S17 Dry Red Chili', priceUsd: 2800, trend: '+3.5%', status: 'High Demand' },
    { name: 'Erode Turmeric Finger', priceUsd: 1650, trend: '+1.2%', status: 'High Curcumin' },
    { name: 'Lady Rosetta Potato', priceUsd: 320, trend: '+0.0%', status: 'Industrial Grade' }
  ];

  return (
    <section className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-stone-800">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop"
          alt="International Cargo Ship and Container Terminal"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      {/* Ticker Bar */}
      <div className="relative z-10 bg-emerald-950/90 border-b border-emerald-800/60 py-2.5 overflow-hidden backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-amber-400 shrink-0 uppercase tracking-wider text-[11px] bg-amber-950/80 border border-amber-500/30 px-2.5 py-0.5 rounded">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>FOB Trade Index ({currency})</span>
          </div>

          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar whitespace-nowrap text-stone-200">
            {commodityTicker.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-stone-100">{item.name}:</span>
                <span className="font-mono text-emerald-300 font-bold">{formatPrice(item.priceUsd)}</span>
                <span className="text-[10px] text-amber-400 font-medium bg-stone-900 px-1.5 py-0.2 rounded border border-stone-800">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/60 rounded-full px-3.5 py-1 text-xs text-emerald-300 shadow-lg">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">Direct From Farm Cooperative to Port Destination</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 font-serif leading-[1.15]">
            Global Standard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-200">
              Agricultural Import & Export
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans max-w-2xl">
            Casial Global Trading supplies top-tier fresh onions, garlic, ginger, potatoes, dry chilis, turmeric, and seasonal produce to 35+ countries with end-to-end cold-chain integrity, APEDA certification, and 100% phytosanitary compliance.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="hero-explore-catalog-btn"
              onClick={onExploreCatalog}
              className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-xl hover:shadow-emerald-900/50 flex items-center justify-center gap-2 border border-emerald-600/50"
            >
              <span>Explore Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-rfq-btn"
              onClick={onOpenRFQ}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-amber-300/40"
            >
              <Calculator className="w-4 h-4" />
              <span>Instant Freight & RFQ Quote</span>
            </button>

            <button
              id="hero-tracker-btn"
              onClick={onOpenTracker}
              className="bg-stone-900 hover:bg-stone-800 text-stone-200 font-semibold px-5 py-3.5 rounded-xl text-sm transition-all border border-stone-800 flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Track Container</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>APEDA Government Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>ISO 22000 & HACCP Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>35+ Global Import Ports</span>
            </div>
            <div className="flex items-center gap-2">
              <Container className="w-4 h-4 text-amber-400" />
              <span>40ft High Cube Reefer Fleet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Grid */}
      <div className="relative z-10 bg-stone-900/90 border-t border-stone-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold font-serif text-emerald-400">50,000+ MT</div>
            <div className="text-xs font-semibold text-stone-300">Annual Export Volume</div>
            <p className="text-[11px] text-stone-500">Shipped in temperature reefer containers</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold font-serif text-amber-400">35+ Countries</div>
            <div className="text-xs font-semibold text-stone-300">Active Trade Network</div>
            <p className="text-[11px] text-stone-500">GCC, Europe, SE Asia, Americas</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold font-serif text-emerald-400">99.4%</div>
            <div className="text-xs font-semibold text-stone-300">On-Time Discharge</div>
            <p className="text-[11px] text-stone-500">Zero decay cold-chain compliance</p>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-bold font-serif text-amber-400">100%</div>
            <div className="text-xs font-semibold text-stone-300">Phytosanitary Clearance</div>
            <p className="text-[11px] text-stone-500">Certified by Govt & SGS Labs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
