import React from 'react';
import { 
  ShieldCheck, 
  Thermometer, 
  DollarSign, 
  Ship, 
  FileText, 
  PackageCheck,
  CheckCircle2,
  Award
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenRFQ: () => void;
}

export default function WhyChooseUs({ onOpenRFQ }: WhyChooseUsProps) {
  const pillars = [
    {
      icon: Thermometer,
      title: 'End-to-End Cold Chain Integrity',
      description: 'Pre-cooled stuffing bays and 40ft High Cube Reefer fleet with satellite IoT telemetry for precise temperature (-3°C to +13°C) and relative humidity logs.',
      badge: 'Zero Sprout Guarantee'
    },
    {
      icon: ShieldCheck,
      title: '100% Phytosanitary & Govt Lab Certified',
      description: 'Licensed by APEDA, ISO 22000:2018, HACCP, FSSAI, and Halal Authority. Every bill of lading includes official plant quarantine and fumigation certificates.',
      badge: '100% Compliant'
    },
    {
      icon: DollarSign,
      title: 'Direct Farm Pricing Without Middlemen',
      description: 'Contracted directly with farm cooperatives in Nashik, Gujarat, Shandong, and Kerala to offer competitive FOB and CIF rates with high margin stability.',
      badge: 'Best FOB/CIF Margins'
    },
    {
      icon: Ship,
      title: '99.4% On-Time Discharge Record',
      description: 'Long-term vessel space allocations with top ocean carriers (Maersk, MSC, COSCO, CMA CGM) ensuring guaranteed reefer container slot loading.',
      badge: 'Guaranteed Slots'
    },
    {
      icon: FileText,
      title: 'Flexible International B2B Payment Terms',
      description: 'We support Irrevocable Confirmed L/C at sight from prime international banks, T/T advance deposits, and CAD terms for repeat buyers.',
      badge: 'L/C & T/T Support'
    },
    {
      icon: PackageCheck,
      title: 'Custom OEM Private Labeling & Sizes',
      description: 'Specify your brand logo on mesh bags, jute sacks, corrugated boxes, or jumbo bags with custom size grading (30mm - 60mm+).',
      badge: 'Tailored Branding'
    }
  ];

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>The Casial Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Why Leading Global Importers Choose Us
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            We bridge farm harvests with international wholesale buyers through precision engineering, quality management systems, and transparent trade practices.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-stone-950 rounded-2xl border border-stone-800 p-6 space-y-4 hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="bg-stone-900 text-emerald-400 border border-emerald-900 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-100 font-serif pt-1">
                    {p.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-900 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Standard Protocol on All Orders</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout CTA Box */}
        <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 border border-emerald-800 p-8 rounded-2xl text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold font-serif text-stone-100">
            Ready to Lock In Your Seasonal Fresh Produce Contract?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our export sales desks in Dubai and Mumbai to receive guaranteed FOB/CIF proforma quotations, size specifications, and sample shipments.
          </p>

          <button
            onClick={onOpenRFQ}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-xl text-xs transition-colors shadow-lg inline-flex items-center gap-2"
          >
            <span>Request Proforma FOB/CIF Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
}
