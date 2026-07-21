import React, { useState } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  Search, 
  Calculator, 
  Truck, 
  User, 
  PhoneCall, 
  ChevronDown, 
  CheckCircle2,
  PackageCheck
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  currency: string;
  setCurrency: (c: string) => void;
  onOpenTracker: () => void;
  onOpenRFQ: () => void;
  onOpenAuth: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  currency,
  setCurrency,
  onOpenTracker,
  onOpenRFQ,
  onOpenAuth,
  onOpenSearch
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', label: 'USD ($) - International' },
    { code: 'AED', symbol: 'AED', label: 'AED (Dhiram) - GCC' },
    { code: 'EUR', symbol: '€', label: 'EUR (€) - Europe' },
    { code: 'INR', symbol: '₹', label: 'INR (₹) - South Asia' }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Catalog' },
    { id: 'countries', label: 'Sourcing Origins' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'gallery', label: 'Facility Gallery' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Market Insights' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-xl">
      {/* Top Banner Bar */}
      <div className="bg-emerald-950 border-b border-emerald-900/60 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-emerald-300/90 font-medium text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              APEDA & ISO 22000 Certified Exporter
            </span>
            <span className="hidden md:inline text-stone-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-300">
              <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
              Direct Cold-Chain Shipments to 35+ Ports
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors bg-stone-800/80 px-2 py-0.5 rounded border border-stone-700/80"
              >
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-stone-800 border border-stone-700 rounded-lg shadow-2xl py-1 z-50 text-stone-200">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code);
                        setIsCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-900/40 flex items-center justify-between ${
                        currency === c.code ? 'text-emerald-400 font-semibold bg-emerald-950/60' : ''
                      }`}
                    >
                      <span>{c.label}</span>
                      <span className="text-stone-400 font-mono">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Container Tracker Trigger */}
            <button
              id="header-tracker-btn"
              onClick={onOpenTracker}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <Truck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Container Tracker</span>
            </button>

            {/* Buyer Auth Trigger */}
            <button
              id="header-auth-btn"
              onClick={onOpenAuth}
              className="flex items-center gap-1 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Buyer Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-0.5 border border-amber-500/40 shadow-lg group-hover:border-amber-400 transition-all flex items-center justify-center">
            <div className="w-full h-full rounded-[10px] bg-stone-950 flex items-center justify-center">
              <span className="text-amber-400 font-bold text-xl tracking-tighter">C</span>
              <span className="text-emerald-400 font-bold text-lg -ml-0.5">G</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-stone-100 font-serif">
                CASIAL
              </span>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded">
                GLOBAL
              </span>
            </div>
            <p className="text-[10px] text-stone-400 tracking-wider uppercase font-sans">
              Import & Export Trading LLC
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-950/80 p-1.5 rounded-xl border border-stone-800">
          {navItems.slice(0, 7).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeSection === item.id
                  ? 'bg-emerald-800/80 text-emerald-100 font-semibold shadow-inner border border-emerald-600/50'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-stone-800 mx-1" />
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              activeSection === 'contact'
                ? 'bg-emerald-800/80 text-emerald-100 font-semibold border border-emerald-600/50'
                : 'text-amber-400 hover:text-amber-300 hover:bg-stone-800/60'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            id="search-trigger-btn"
            onClick={onOpenSearch}
            className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg border border-stone-800 transition-colors"
            title="Search Catalog"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            id="rfq-calculator-trigger-btn"
            onClick={onOpenRFQ}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold px-3.5 py-2 rounded-xl text-xs shadow-md transition-all whitespace-nowrap active:scale-95 border border-amber-300/40"
          >
            <Calculator className="w-4 h-4" />
            <span>Instant RFQ Freight</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-stone-200 hover:text-white hover:bg-stone-800 rounded-lg border border-stone-800"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-800">
            <button
              onClick={() => {
                onOpenRFQ();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-amber-500 text-stone-950 font-semibold py-2.5 px-3 rounded-lg text-xs"
            >
              <Calculator className="w-4 h-4" />
              RFQ Calculator
            </button>
            <button
              onClick={() => {
                onOpenTracker();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-stone-800 text-emerald-400 font-semibold py-2.5 px-3 rounded-lg text-xs border border-stone-700"
            >
              <Truck className="w-4 h-4" />
              Track Container
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-emerald-900/60 text-emerald-300 font-semibold border-l-4 border-amber-400 pl-3'
                    : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center gap-1 text-emerald-400">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dubai: +971 50 892 4102</span>
            </div>
            <span>Mumbai: +91 98201 44810</span>
          </div>
        </div>
      )}
    </header>
  );
}
