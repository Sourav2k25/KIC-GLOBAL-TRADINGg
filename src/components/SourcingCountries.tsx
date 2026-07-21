import React, { useState } from 'react';
import { SOURCING_COUNTRIES } from '../data/mockData';
import { SourcingCountry } from '../types';
import { 
  Globe2, 
  MapPin, 
  Anchor, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Container,
  Building
} from 'lucide-react';

interface SourcingCountriesProps {
  onExploreCommodities: (commodityName?: string) => void;
}

export default function SourcingCountries({ onExploreCommodities }: SourcingCountriesProps) {
  const [selectedCountry, setSelectedCountry] = useState<SourcingCountry | null>(null);

  return (
    <section className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Global Sourcing & Export Destinations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Direct Farm Sourcing Origins & Ports
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Casial Global Trading operates farm partnerships and cold-chain packhouses strategically located near major agricultural belts and ocean container ports.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOURCING_COUNTRIES.map((country) => (
            <div
              key={country.code}
              className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4 hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{country.flagEmoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-stone-100 font-serif">{country.name}</h3>
                      <p className="text-xs text-amber-400 font-medium">{country.region}</p>
                    </div>
                  </div>

                  <span className="bg-stone-950 border border-stone-800 text-[11px] font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-lg">
                    {country.code}
                  </span>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                  {country.description}
                </p>

                {/* Major Commodities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Primary Commodities Sourced
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {country.commoditiesExported.map((c, idx) => (
                      <span
                        key={idx}
                        className="bg-emerald-950 text-emerald-300 border border-emerald-800/80 text-[10px] px-2 py-0.5 rounded-full font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ports */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1">
                    <Anchor className="w-3 h-3 text-amber-400" />
                    <span>Major Container Ports</span>
                  </span>
                  <p className="text-xs text-stone-300 truncate">
                    {country.majorPorts.join(', ')}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                <div className="text-stone-400">
                  <span className="font-bold text-stone-200">{country.exportVolume}</span>
                </div>

                <button
                  onClick={() => setSelectedCountry(country)}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>View Origins</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8 p-6 space-y-6">
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-stone-800 pb-4">
              <span className="text-5xl">{selectedCountry.flagEmoji}</span>
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-100">
                  {selectedCountry.name} - Trade & Sourcing Network
                </h3>
                <p className="text-xs text-amber-400 font-medium">{selectedCountry.region}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {selectedCountry.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <span className="text-stone-400 font-semibold">Partner Farm Clusters</span>
                <p className="text-lg font-bold text-emerald-400">{selectedCountry.partnerFarms} Cooperatives</p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <span className="text-stone-400 font-semibold">Annual Export Volume</span>
                <p className="text-lg font-bold text-amber-400">{selectedCountry.exportVolume}</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-stone-200 uppercase tracking-wider">Container Departure Ports</h4>
              <ul className="space-y-1 text-stone-300">
                {selectedCountry.majorPorts.map((port, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-stone-950 p-2 rounded border border-stone-800">
                    <Anchor className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{port}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCountry(null);
                  onExploreCommodities();
                }}
                className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2"
              >
                <span>Browse Products From {selectedCountry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
