import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Send, 
  ArrowUpRight,
  Globe2,
  FileText
} from 'lucide-react';

interface FooterProps {
  setActiveSection: (s: string) => void;
  onOpenPrivacy: () => void;
  onOpenTracker: () => void;
  onOpenRFQ: () => void;
}

export default function Footer({
  setActiveSection,
  onOpenPrivacy,
  onOpenTracker,
  onOpenRFQ
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setEmail('');
    }
  };

  const handleNav = (sec: string) => {
    setActiveSection(sec);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-sm">
      {/* Top Value Strip */}
      <div className="bg-emerald-950 border-b border-emerald-900/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-700/60 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-100 text-sm">100% Quality Inspected</h4>
              <p className="text-xs text-emerald-200/80">APEDA & Govt lab phytosanitary certified</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-700/60 flex items-center justify-center text-amber-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-100 text-sm">Global Reefer Fleet</h4>
              <p className="text-xs text-emerald-200/80">Continuous temperature & humidity satellite logs</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-700/60 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-100 text-sm">Flexible Payment Terms</h4>
              <p className="text-xs text-emerald-200/80">Confirmed L/C at sight, T/T advance, CAD terms</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <button
              onClick={onOpenRFQ}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Request Custom FOB/CIF Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Col 1 & 2: Brand & Trade Offices */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-0.5 border border-amber-500/40 flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-stone-950 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-xl">C</span>
                <span className="text-emerald-400 font-bold text-lg -ml-0.5">G</span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-stone-100 font-serif">
                CASIAL GLOBAL TRADING
              </span>
              <p className="text-xs text-amber-400 font-medium">B2B Import & Export Excellence</p>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed pr-4">
            Casial Global Trading is an international B2B exporter and importer specializing in high-grade fresh produce, onions, garlic, ginger, potatoes, dry red chili, finger turmeric, lemons, and seasonal vegetables. We bridge farm harvests with global buyers under strict cold-chain compliance.
          </p>

          <div className="space-y-3 pt-2">
            <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Building2 className="w-3.5 h-3.5" />
                <span>Dubai Regional Headquarters (DMCC)</span>
              </div>
              <p className="text-xs text-stone-400 flex items-start gap-1.5 pl-5">
                <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 shrink-0" />
                Level 24, Almas Tower, DMCC Free Zone, Jumeirah Lakes Towers, Dubai, UAE
              </p>
              <p className="text-xs text-stone-300 pl-5 flex items-center gap-3">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> +971 50 892 4102</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-emerald-400" /> dubai@casialglobal.com</span>
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-3 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Building2 className="w-3.5 h-3.5" />
                <span>Mumbai Export Logistics & Packhouse Office</span>
              </div>
              <p className="text-xs text-stone-400 flex items-start gap-1.5 pl-5">
                <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 shrink-0" />
                Trade Center 2, JNPT Port Road, CBD Belapur, Navi Mumbai, MH 400614, India
              </p>
              <p className="text-xs text-stone-300 pl-5 flex items-center gap-3">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> +91 98201 44810</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-emerald-400" /> export@casialglobal.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 border-b border-stone-800 pb-2">
            Navigation & Pages
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">Home Page</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">About Us & Quality</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-amber-400 transition-colors">Full Commodity Catalog</button></li>
            <li><button onClick={() => handleNav('countries')} className="hover:text-amber-400 transition-colors">Sourcing Countries</button></li>
            <li><button onClick={() => handleNav('why-us')} className="hover:text-amber-400 transition-colors">Why Choose Us</button></li>
            <li><button onClick={() => handleNav('gallery')} className="hover:text-amber-400 transition-colors">Facility & Cold Storage</button></li>
            <li><button onClick={() => handleNav('certifications')} className="hover:text-amber-400 transition-colors">Certifications & Licenses</button></li>
            <li><button onClick={() => handleNav('faq')} className="hover:text-amber-400 transition-colors">Frequently Asked Questions</button></li>
            <li><button onClick={() => handleNav('blog')} className="hover:text-amber-400 transition-colors">Market Insights & News</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">Contact Export Desk</button></li>
          </ul>
        </div>

        {/* Col 4: Commodity Categories */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 border-b border-stone-800 pb-2">
            Commodity Categories
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Fresh Red & White Onion</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Chinese & Indian Garlic</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Elephant Fresh & Dry Ginger</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Lady Rosetta & Table Potato</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Teja S17 Dry Red Chili</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Erode High Curcumin Turmeric</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Assam Kaji & Eureka Lemons</button></li>
            <li><button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Tender Okra & Moringa Pods</button></li>
          </ul>

          <div className="pt-2">
            <button
              onClick={onOpenTracker}
              className="w-full text-left bg-stone-900 border border-stone-800 p-2.5 rounded-lg text-xs hover:border-emerald-500 transition-colors flex items-center justify-between text-emerald-400 font-medium"
            >
              <span>Live Container Tracking</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Col 5: Market Intelligence & Newsletter */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 border-b border-stone-800 pb-2">
            Global Market Intelligence
          </h4>
          <p className="text-xs text-stone-400 leading-relaxed">
            Subscribe to our weekly commodity crop yield reports, freight rate index, and seasonal price updates directly to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter corporate email..."
              required
              className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-medium py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>Subscribe Market Brief</span>
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-emerald-400 bg-emerald-950/80 p-2 rounded border border-emerald-800 text-center">
              ✓ Subscribed! Check your inbox for crop harvest index.
            </p>
          )}

          <div className="pt-2">
            <p className="text-[11px] text-stone-500">
              Certifications verified under APEDA, FSSAI, ISO 22000, HACCP, and Halal Authority.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="border-t border-stone-800 py-6 px-4 sm:px-6 lg:px-8 bg-stone-950 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Casial Global Trading LLC. All Rights Reserved. ISO 22000:2018 Registered Exporter.</p>

          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <button onClick={onOpenPrivacy} className="hover:text-amber-400 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={onOpenPrivacy} className="hover:text-amber-400 transition-colors">International B2B Terms of Trade</button>
            <span>•</span>
            <button onClick={onOpenPrivacy} className="hover:text-amber-400 transition-colors">Incoterms & Force Majeure</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
