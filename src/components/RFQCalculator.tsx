import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { submitRFQRequest } from '../lib/supabase';
import { 
  Calculator, 
  Container, 
  Ship, 
  DollarSign, 
  Send, 
  CheckCircle2, 
  FileCheck, 
  Info,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface RFQCalculatorProps {
  currency: string;
  onClose?: () => void;
}

export default function RFQCalculator({ currency, onClose }: RFQCalculatorProps) {
  const [selectedProductSlug, setSelectedProductSlug] = useState(PRODUCTS[0].slug);
  const [quantityMt, setQuantityMt] = useState(28);
  const [containerType, setContainerType] = useState<'40ft High Cube Reefer' | '20ft Reefer' | '20ft Dry Container' | 'Air Freight'>('40ft High Cube Reefer');
  const [incoterms, setIncoterms] = useState<'CIF' | 'FOB' | 'CFR' | 'EXW'>('CIF');
  const [targetPort, setTargetPort] = useState('Port of Jebel Ali (Dubai, UAE)');

  // Contact Info
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const currentProduct = PRODUCTS.find(p => p.slug === selectedProductSlug) || PRODUCTS[0];

  // Base price calculations
  let baseFobPerTonUsd = 380;
  const titleLower = currentProduct.title.toLowerCase();
  if (titleLower.includes('garlic')) baseFobPerTonUsd = 1250;
  else if (titleLower.includes('ginger')) baseFobPerTonUsd = 1400;
  else if (titleLower.includes('chili')) baseFobPerTonUsd = 2800;
  else if (titleLower.includes('turmeric')) baseFobPerTonUsd = 1650;
  else if (titleLower.includes('lemon')) baseFobPerTonUsd = 620;
  else if (titleLower.includes('potato')) baseFobPerTonUsd = 320;
  else if (titleLower.includes('okra')) baseFobPerTonUsd = 850;

  // Ocean Freight estimates per container
  let containerFreightUsd = 1800;
  if (targetPort.includes('Jebel Ali') || targetPort.includes('Dubai') || targetPort.includes('Dammam')) containerFreightUsd = 1200;
  else if (targetPort.includes('Rotterdam') || targetPort.includes('Europe') || targetPort.includes('Hamburg')) containerFreightUsd = 2800;
  else if (targetPort.includes('Cat Lai') || targetPort.includes('Vietnam') || targetPort.includes('Singapore')) containerFreightUsd = 1500;

  const containersNeeded = Math.ceil(quantityMt / (containerType.includes('20ft') ? 14 : 28));
  const totalFobUsd = baseFobPerTonUsd * quantityMt;
  const totalFreightUsd = (incoterms === 'CIF' || incoterms === 'CFR') ? containerFreightUsd * containersNeeded : 0;
  const totalInsuranceDocsUsd = (incoterms === 'CIF') ? 250 * containersNeeded : 0;

  const totalEstimatedUsd = totalFobUsd + totalFreightUsd + totalInsuranceDocsUsd;

  // Currency multiplier
  const getCurrencyMultiplier = () => {
    switch (currency) {
      case 'AED': return 3.67;
      case 'EUR': return 0.92;
      case 'INR': return 83.5;
      default: return 1.0;
    }
  };

  const formattedTotal = (totalEstimatedUsd * getCurrencyMultiplier()).toLocaleString('en-US', {
    maximumFractionDigits: 0
  });

  const handleSubmitRfq = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitRFQRequest({
      productTitle: currentProduct.title,
      containerType,
      incoterms,
      quantity: quantityMt,
      unit: 'MT (Metric Tons)',
      targetPort,
      companyName,
      contactName,
      email,
      phone,
      country,
      notes: `Calculated Estimate: ${currency} ${formattedTotal} (${quantityMt} MT ${currentProduct.title} to ${targetPort})`
    });

    setIsSubmitting(false);
    if (result.success) {
      setSubmittedRef(result.data?.id || `RFQ-${Date.now()}`);
    }
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 text-stone-100 shadow-2xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-100">
              Instant B2B Freight & Proforma Quote Calculator
            </h2>
            <p className="text-xs text-stone-400">
              Estimate FOB/CIF price breakdowns and submit official RFQ spec sheets directly to our export desk.
            </p>
          </div>
        </div>

        {onClose && (
          <button onClick={onClose} className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white">
            ✕
          </button>
        )}
      </div>

      {submittedRef ? (
        <div className="bg-emerald-950/80 border border-emerald-800 p-8 rounded-2xl text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
          <h3 className="text-2xl font-bold font-serif text-stone-100">Proforma RFQ Dispatched!</h3>
          <p className="text-sm text-stone-300 max-w-lg mx-auto">
            Reference Number: <span className="font-mono font-bold text-amber-400">{submittedRef}</span>.
            Our export sales desk will review your container calculation and email the verified proforma invoice with official shipping schedule.
          </p>

          <button
            onClick={() => setSubmittedRef(null)}
            className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-semibold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            Calculate Another Shipment
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Parameters */}
          <div className="lg:col-span-7 space-y-4 text-xs">
            <div>
              <label className="block text-stone-300 font-semibold mb-1">Select Commodity Product *</label>
              <select
                value={selectedProductSlug}
                onChange={(e) => setSelectedProductSlug(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 font-medium focus:outline-none focus:border-amber-400"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.title} (HS: {p.hsCode})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">Quantity (Metric Tons) *</label>
                <input
                  type="number"
                  value={quantityMt}
                  onChange={(e) => setQuantityMt(Math.max(1, Number(e.target.value)))}
                  min="1"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Incoterms *</label>
                <select
                  value={incoterms}
                  onChange={(e) => setIncoterms(e.target.value as any)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                  <option value="FOB">FOB (Free On Board)</option>
                  <option value="CFR">CFR (Cost & Freight)</option>
                  <option value="EXW">EXW (Ex-Works Packhouse)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 font-semibold mb-1">Container Type *</label>
                <select
                  value={containerType}
                  onChange={(e) => setContainerType(e.target.value as any)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="40ft High Cube Reefer">40ft High Cube Reefer (28 MT)</option>
                  <option value="20ft Reefer">20ft Reefer (14 MT)</option>
                  <option value="20ft Dry Container">20ft Dry Container (18 MT)</option>
                  <option value="Air Freight">Air Freight Cargo</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 font-semibold mb-1">Destination Port *</label>
                <select
                  value={targetPort}
                  onChange={(e) => setTargetPort(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-stone-100 font-medium focus:outline-none focus:border-amber-400"
                >
                  <option value="Port of Jebel Ali (Dubai, UAE)">Port of Jebel Ali (Dubai, UAE)</option>
                  <option value="Port of Dammam (Saudi Arabia)">Port of Dammam (Saudi Arabia)</option>
                  <option value="Port of Rotterdam (Netherlands)">Port of Rotterdam (Netherlands)</option>
                  <option value="Cat Lai Port (Ho Chi Minh, Vietnam)">Cat Lai Port (Ho Chi Minh, Vietnam)</option>
                  <option value="Port of Singapore">Port of Singapore</option>
                  <option value="London Gateway (United Kingdom)">London Gateway (United Kingdom)</option>
                </select>
              </div>
            </div>

            {/* Buyer Details */}
            <div className="pt-2 border-t border-stone-800 space-y-3">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Buyer Verification & Quotation Destination</h4>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name *"
                  required
                  className="bg-stone-950 border border-stone-800 rounded-xl p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Contact Name *"
                  required
                  className="bg-stone-950 border border-stone-800 rounded-xl p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address *"
                  required
                  className="bg-stone-950 border border-stone-800 rounded-xl p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone / WhatsApp *"
                  required
                  className="bg-stone-950 border border-stone-800 rounded-xl p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Right Calculation Output Box */}
          <div className="lg:col-span-5 bg-stone-950 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Calculation Summary</span>
                <span className="text-xs font-mono font-bold text-amber-400">{currency}</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Commodity Base FOB ({quantityMt} MT):</span>
                  <span className="font-mono font-semibold text-stone-100">$ {(totalFobUsd * getCurrencyMultiplier()).toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-stone-300">
                  <span>Containers Required:</span>
                  <span className="font-mono font-semibold text-emerald-400">{containersNeeded} x {containerType}</span>
                </div>

                <div className="flex justify-between text-stone-300">
                  <span>Estimated Ocean Reefer Freight:</span>
                  <span className="font-mono font-semibold text-stone-100">$ {(totalFreightUsd * getCurrencyMultiplier()).toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-stone-300">
                  <span>Phytosanitary & Insurances:</span>
                  <span className="font-mono font-semibold text-stone-100">$ {(totalInsuranceDocsUsd * getCurrencyMultiplier()).toLocaleString()}</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="bg-emerald-950/80 border border-emerald-800 p-4 rounded-xl space-y-1">
                <div className="text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">
                  Estimated Proforma Total ({incoterms})
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">
                  {currency} {formattedTotal}
                </div>
                <p className="text-[10px] text-stone-400 pt-1">
                  Includes government phytosanitary certification, pre-cooling, and temperature data logging.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmitRfq} className="space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Dispatching RFQ...' : 'Lock In Quote & Request Proforma'}</span>
              </button>

              <p className="text-[10px] text-stone-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Zero obligations. Quote valid for 7 days.</span>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
