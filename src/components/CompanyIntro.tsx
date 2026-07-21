import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Container, 
  Globe2, 
  Leaf, 
  Sparkles, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface CompanyIntroProps {
  onLearnMore?: () => void;
  onExploreProducts: () => void;
}

export default function CompanyIntro({ onLearnMore, onExploreProducts }: CompanyIntroProps) {
  const values = [
    {
      icon: Leaf,
      title: 'Direct Farm Cooperatives',
      description: 'Contractual farming partnerships across 400+ certified grower clusters in Maharashtra, Gujarat, Shandong, and Vietnam ensure pesticide-monitored, pristine produce.'
    },
    {
      icon: Container,
      title: 'Precision Cold-Chain Fleet',
      description: 'Every container is pre-cooled and calibrated for specific temperature, relative humidity, and fresh air exchange to guarantee zero sprout or mold during long ocean transit.'
    },
    {
      icon: ShieldCheck,
      title: 'Government & Lab Certified',
      description: 'Fully licensed under APEDA, ISO 22000:2018, HACCP, FSSAI, and Halal Authority with 100% Phytosanitary quarantine clearance on every bill of lading.'
    },
    {
      icon: Globe2,
      title: 'Dual Trade Offices (Dubai & Mumbai)',
      description: 'Headquartered in Dubai DMCC for seamless Middle East distribution and supported by our Mumbai JNPT packhouse hub for rapid sea freight dispatches.'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>About Casial Global Trading</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-100 leading-tight">
              Redefining B2B Import & Export for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
                Fresh Produce & Spices
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Founded on the principles of absolute transparency, quality integrity, and uninterrupted cold-chain logistics, <strong className="text-stone-100">Casial Global Trading</strong> is a premier international B2B merchant exporter and importer.
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              We eliminate intermediaries by directly contracting with agricultural farm cooperatives. From automated washing, optical sizing, and dry curing in our facilities to temperature-monitored reefer container stuffing at major ports, we deliver fresh onions, garlic, ginger, potatoes, dry chilis, turmeric, and seasonal vegetables with guaranteed shelf life.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>21-Point Pre-Trip Inspection</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time Satellite Telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom OEM Private Labeling</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Irrevocable L/C at Sight Accepted</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProducts}
                className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 border border-emerald-600/60"
              >
                <span>Browse Products & Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image/Values Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl h-80 sm:h-96 bg-stone-950">
              <img
                src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop"
                alt="Agricultural Warehouse & Produce Sorting Line"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-stone-900/90 border border-stone-800 p-4 rounded-xl backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-400">Nashik & Gujarat Sorting Lines</div>
                  <p className="text-[11px] text-stone-300">Automated optical grading with &lt;1% defect tolerance.</p>
                </div>
                <div className="bg-emerald-950 text-emerald-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-emerald-700">
                  ISO 22000
                </div>
              </div>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <div key={idx} className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2 hover:border-emerald-600/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-stone-100">{v.title}</h4>
                    <p className="text-[11px] text-stone-400 leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
