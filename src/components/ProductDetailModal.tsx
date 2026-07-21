import React, { useState } from 'react';
import { Product, RFQRequest } from '../types';
import { submitRFQRequest } from '../lib/supabase';
import { 
  X, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  Send, 
  Container, 
  Calendar, 
  Thermometer, 
  Globe2, 
  Package, 
  ShieldAlert,
  Clock,
  Sparkles
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currency: string;
}

export default function ProductDetailModal({
  product,
  onClose,
  currency
}: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqReference, setRfqReference] = useState('');
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    quantity: 28,
    unit: 'MT (Metric Tons)' as const,
    containerType: '40ft High Cube Reefer' as const,
    incoterms: 'CIF' as const,
    targetPort: '',
    notes: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRfqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const rfqPayload: RFQRequest = {
      productId: product.id,
      productTitle: product.title,
      containerType: formData.containerType,
      incoterms: formData.incoterms,
      quantity: Number(formData.quantity) || 28,
      unit: formData.unit,
      targetPort: formData.targetPort,
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      notes: formData.notes
    };

    const result = await submitRFQRequest(rfqPayload);
    setLoading(false);

    if (result.success) {
      setRfqSubmitted(true);
      setRfqReference(result.data?.id || `RFQ-${Date.now()}`);
    }
  };

  // WhatsApp Pre-filled Link
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Casial Global Trading Export Desk,\n\nI am requesting a quotation for:\n- Commodity: ${product.title}\n- HS Code: ${product.hsCode}\n- Size Specs: ${product.sizes.join(', ')}\n- Quantity: ${formData.quantity} MT\n- Preferred Port: ${formData.targetPort || 'Jebel Ali / Rotterdam'}\n\nPlease send your FOB/CIF proforma quote.`
    );
    return `https://wa.me/971508924102?text=${text}`;
  };

  // Spec Sheet PDF Download Simulator
  const handleDownloadSpecSheet = () => {
    const content = `
============================================================
CASIAL GLOBAL TRADING LLC - OFFICIAL EXPORT SPECIFICATION SHEET
============================================================
Commodity Title: ${product.title}
HS Code: ${product.hsCode}
Category: ${product.category.toUpperCase()} (${product.subcategory})

MINIMUM ORDER QUANTITY: ${product.moq}
STORAGE TEMP: ${product.storageTemp}
SHELF LIFE: ${product.shelfLife}
PORTS OF LOADING: ${product.portOfLoading.join(', ')}
ORIGIN COUNTRIES: ${product.originCountries.join(', ')}

AVAILABLE SIZES: ${product.sizes.join(' | ')}
GRADES: ${product.grades.join(' | ')}
PACKAGING OPTIONS: ${product.packagingOptions.join(' | ')}

DETAILED SPECIFICATIONS:
${product.detailedSpecs.map(s => `- ${s.label}: ${s.value}`).join('\n')}

CERTIFICATIONS & QUALITY COMPLIANCE:
- APEDA Government Registered Export Facility
- ISO 22000:2018 Food Safety Management System
- HACCP & Phytosanitary Quarantine Certified
- Halal Export Compliance (GCC SMIIC Standard)

Contact Export Sales Desk:
Dubai Office: +971 50 892 4102 | dubai@casialglobal.com
Mumbai Office: +91 98201 44810 | export@casialglobal.com
Web: https://casialglobal.com
============================================================
    `;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Casial_Global_SpecSheet_${product.slug}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl relative my-8">
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Bar */}
        <div className="bg-emerald-950 border-b border-emerald-900/80 p-5 pr-14 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30">
                HS CODE: {product.hsCode}
              </span>
              <span className="text-xs text-emerald-300 font-medium">
                {product.subcategory}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-100 mt-1">
              {product.title}
            </h2>
          </div>

          <button
            onClick={handleDownloadSpecSheet}
            className="hidden sm:flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-amber-400 font-medium px-3 py-1.5 rounded-lg text-xs border border-amber-500/40 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Spec Sheet</span>
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Left Column: Image Gallery & Specs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image View */}
            <div className="space-y-3">
              <div className="h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-stone-950 border border-stone-800 relative">
                <img
                  src={product.gallery[activeImageIndex] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-16 w-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-stone-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Commodity Overview & Export Standards
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {product.description}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed pt-1">
                {product.overview}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Technical Specifications & Lab Analysis</span>
              </h3>

              <div className="bg-stone-950 rounded-xl border border-stone-800 overflow-hidden text-xs">
                <div className="divide-y divide-stone-800">
                  {product.detailedSpecs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 flex items-center justify-between hover:bg-stone-900/50">
                      <span className="text-stone-400 font-medium">{spec.label}</span>
                      <span className="text-stone-100 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Logistics & Reefer Parameters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Thermometer className="w-4 h-4" />
                  <span>Storage Temp</span>
                </div>
                <p className="text-stone-200 font-medium">{product.storageTemp}</p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Shelf Life</span>
                </div>
                <p className="text-stone-200 font-medium">{product.shelfLife}</p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Globe2 className="w-4 h-4" />
                  <span>Loading Ports</span>
                </div>
                <p className="text-stone-200 font-medium truncate">{product.portOfLoading.join(', ')}</p>
              </div>
            </div>

            {/* Harvest & Availability Calendar */}
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Annual Harvest & Availability Calendar</span>
                </span>
                <span className="text-[10px] text-emerald-400">● Peak Crop</span>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 text-[11px] text-center pt-1">
                {Object.entries(product.seasonalAvailability).map(([month, status]) => (
                  <div
                    key={month}
                    className={`p-1.5 rounded font-mono font-bold ${
                      status === 'peak'
                        ? 'bg-emerald-900 text-emerald-200 border border-emerald-600'
                        : status === 'available'
                        ? 'bg-stone-800 text-stone-200'
                        : status === 'limited'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-stone-900 text-stone-600 opacity-40'
                    }`}
                  >
                    <div>{month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Instant RFQ & Quote Form */}
          <div className="lg:col-span-5 bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-4">
            <div className="border-b border-stone-800 pb-3">
              <h3 className="text-base font-bold text-stone-100 font-serif flex items-center gap-2">
                <Container className="w-5 h-5 text-amber-400" />
                <span>Request B2B Proforma Quote</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Receive an official CIF/FOB quotation spec sheet within 2 business hours.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-800 p-5 rounded-xl space-y-3 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-stone-100">RFQ Successfully Received!</h4>
                <p className="text-xs text-emerald-200">
                  Your quote reference code is <span className="font-mono font-bold text-amber-400">{rfqReference}</span>.
                </p>
                <p className="text-xs text-stone-300">
                  Our export freight desk is calculating reefer shipping rates to <span className="font-semibold text-stone-100">{formData.targetPort || 'your target port'}</span>.
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-300" />
                    <span>Instant Follow-Up on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setRfqSubmitted(false)}
                    className="text-xs text-stone-400 hover:text-stone-200 underline pt-1"
                  >
                    Submit Another Quantity / Destination Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g. Al-Mansoor Foodstuff Trading LLC"
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleFormChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="name@company.com"
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Buyer Country *</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleFormChange}
                      required
                      placeholder="UAE, Vietnam, Netherlands..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Quantity (Metric Tons)</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      min="1"
                      required
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Incoterms</label>
                    <select
                      name="incoterms"
                      value={formData.incoterms}
                      onChange={handleFormChange}
                      className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
                    >
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="FOB">FOB (Free On Board)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="EXW">EXW (Ex-Works Packhouse)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">Target Destination Port *</label>
                  <input
                    type="text"
                    name="targetPort"
                    value={formData.targetPort}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g. Jebel Ali Port, Rotterdam, Cat Lai..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">Specific Sizes or Packaging Requirements</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                    rows={2}
                    placeholder="e.g. Prefer 25kg mesh bags with custom buyer logo printing..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3 rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2 border border-amber-300/40"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Processing RFQ Quote...' : 'Submit RFQ Quotation Request'}</span>
                </button>

                <div className="pt-2 text-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-medium"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Or Chat Directly on WhatsApp Desk</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
