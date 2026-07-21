import React, { useState } from 'react';
import { submitContactInquiry } from '../lib/supabase';
import { ContactInquiry } from '../types';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  MessageSquare,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    country: '',
    productInterest: 'Fresh Red Onion (Nashik Export Grade)',
    containerQuantity: '1 x 40ft Reefer Container (28 MT)',
    targetPort: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    autoReply: { subject: string; body: string };
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload: ContactInquiry = {
      name: formData.name,
      companyName: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      country: formData.country,
      productInterest: formData.productInterest,
      containerQuantity: formData.containerQuantity,
      targetPort: formData.targetPort,
      message: formData.message
    };

    const result = await submitContactInquiry(payload);
    setLoading(false);

    if (result.success) {
      setSubmittedData({
        referenceId: result.data?.id || `INQ-${Date.now()}`,
        autoReply: {
          subject: `Inquiry Confirmation - Casial Global Trading [${result.data?.id || 'REF'}]`,
          body: `Dear ${formData.name},\n\nThank you for submitting your trade inquiry to Casial Global Trading.\n\nRequirement Summary:\n- Commodity: ${formData.productInterest}\n- Volume: ${formData.containerQuantity}\n- Destination Port: ${formData.targetPort || 'Not specified'}\n\nOur export desk in Dubai & Mumbai has assigned Reference: ${result.data?.id}. One of our trade managers will contact you via email and WhatsApp with proforma pricing within 2 business hours.\n\nBest regards,\nCasial Global Trading LLC`
        }
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>International Trade Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Contact Export Desk & Trade Offices
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Get in touch with our commodity specialists for proforma pricing, size availability, lab reports, and customized OEM packaging solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Building2 className="w-4 h-4" />
                <span>Dubai Regional Headquarters (GCC)</span>
              </div>

              <div className="space-y-2 text-xs text-stone-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Level 24, Almas Tower, DMCC Free Zone, Jumeirah Lakes Towers, Dubai, United Arab Emirates</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+971 50 892 4102 / +971 4 489 1900</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>dubai@casialglobal.com</span>
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  Sun - Thu: 08:30 - 18:00 (GST)
                </span>
                <span className="text-emerald-400 font-medium">Dubai Desk Active</span>
              </div>
            </div>

            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Building2 className="w-4 h-4" />
                <span>Mumbai Export Logistics & Packhouse Office</span>
              </div>

              <div className="space-y-2 text-xs text-stone-300">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Trade Center 2, JNPT Port Road, CBD Belapur, Navi Mumbai, Maharashtra 400614, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 98201 44810 / +91 22 2758 9910</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>export@casialglobal.com</span>
                </p>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  Mon - Sat: 09:00 - 19:00 (IST)
                </span>
                <span className="text-emerald-400 font-medium">Packhouse Active</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-emerald-950/80 border border-emerald-800 p-5 rounded-2xl text-center space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Fastest Response Option</h4>
              <p className="text-xs text-stone-300">Prefer instant messaging? Chat directly with our trade manager on WhatsApp.</p>
              <a
                href="https://wa.me/971508924102?text=Hello%20Casial%20Global%20Export%20Desk,%20I%20want%20to%20inquire%20about%20agricultural%20commodity%20exports."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-4 py-2 rounded-xl text-xs transition-colors border border-emerald-600 w-full"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Open WhatsApp Quick Chat (+971 50 892 4102)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-2xl space-y-6">
            <div className="border-b border-stone-800 pb-4">
              <h3 className="text-xl font-bold font-serif text-stone-100 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <span>Submit B2B Export Inquiry</span>
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Saved to database with instant email confirmation. Response guaranteed within 2 hours.
              </p>
            </div>

            {submittedData ? (
              <div className="bg-emerald-950/90 border border-emerald-800 p-6 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-stone-100">Inquiry Recorded Successfully!</h4>
                <p className="text-xs text-emerald-200">
                  Reference Code: <span className="font-mono font-bold text-amber-400">{submittedData.referenceId}</span>.
                </p>

                {/* Auto Reply Preview */}
                <div className="bg-stone-900 text-left p-4 rounded-xl border border-stone-800 text-xs space-y-2 mt-4">
                  <div className="font-bold text-amber-400 border-b border-stone-800 pb-1">
                    📧 Auto-Reply Email Sent to {formData.email}:
                  </div>
                  <div className="font-mono text-stone-300 text-[11px] whitespace-pre-line leading-relaxed">
                    {submittedData.autoReply.body}
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Al-Mansoor Foodstuff LLC"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 50 123 4567"
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Country *</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="UAE, Saudi, Vietnam..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Commodity of Interest</label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 focus:outline-none focus:border-amber-400 font-medium"
                    >
                      <option value="Fresh Red Onion (Nashik Export Grade)">Fresh Red Onion (Nashik Export Grade)</option>
                      <option value="Fresh White Onion (Gujarat Export Grade)">Fresh White Onion (Gujarat Export Grade)</option>
                      <option value="Chinese Pure White Garlic (5.5cm+)">Chinese Pure White Garlic (5.5cm+)</option>
                      <option value="Indian MP Lasan Garlic Grade 1">Indian MP Lasan Garlic Grade 1</option>
                      <option value="Fresh Elephant Ginger">Fresh Elephant Ginger</option>
                      <option value="Dry Ginger (Cochin Whole & Split)">Dry Ginger (Cochin Whole & Split)</option>
                      <option value="Lady Rosetta Potato (Chips Grade)">Lady Rosetta Potato (Chips Grade)</option>
                      <option value="Fresh Table Potato (Jyoti)">Fresh Table Potato (Jyoti)</option>
                      <option value="Dry Red Chili Teja S17 Stemless">Dry Red Chili Teja S17 Stemless</option>
                      <option value="Finger Turmeric Erode (High Curcumin)">Finger Turmeric Erode (High Curcumin)</option>
                      <option value="Fresh Assam Kaji & Eureka Lemons">Fresh Assam Kaji & Eureka Lemons</option>
                      <option value="Export Quality Okra & Moringa Pods">Export Quality Okra & Moringa Pods</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Target Destination Port</label>
                    <input
                      type="text"
                      name="targetPort"
                      value={formData.targetPort}
                      onChange={handleChange}
                      placeholder="e.g. Jebel Ali, Rotterdam, Cat Lai..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">Order Message / Packaging & Spec Notes *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Provide details on required bulb sizes (e.g., 55mm+), net weight bags (25kg/50kg), incoterms (CIF/FOB), and target delivery window..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 rounded-xl text-xs shadow-lg transition-all flex items-center justify-center gap-2 border border-amber-300/40"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Inquiry & Request Proforma Quote'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
