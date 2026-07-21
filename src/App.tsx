import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SEO from './components/SEO';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import RFQCalculator from './components/RFQCalculator';
import CompanyIntro from './components/CompanyIntro';
import SourcingCountries from './components/SourcingCountries';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ShipmentTrackerModal from './components/ShipmentTrackerModal';
import AuthModal from './components/AuthModal';
import PrivacyTermsModal from './components/PrivacyTermsModal';

import { PRODUCTS, CATEGORIES } from './data/mockData';
import { Product } from './types';
import { 
  PackageCheck, 
  Search 
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currency, setCurrency] = useState('USD');
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Filter & Search states for Products
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [productSearch, setProductSearch] = useState('');

  // Modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtered products list
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = productSearch === '' || 
      p.title.toLowerCase().includes(productSearch.toLowerCase()) || 
      p.hsCode.includes(productSearch) ||
      p.originCountries.join(' ').toLowerCase().includes(productSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 flex flex-col">
      {/* Dynamic SEO Meta */}
      <SEO />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        currency={currency}
        setCurrency={setCurrency}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenRFQ={() => setIsRfqOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenSearch={() => scrollToSection('products')}
      />

      {/* Main Body */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero
          currency={currency}
          onExploreCatalog={() => scrollToSection('products')}
          onOpenRFQ={() => setIsRfqOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
        />

        {/* Company Overview Section */}
        <div id="about">
          <CompanyIntro
            onExploreProducts={() => scrollToSection('products')}
          />
        </div>

        {/* Interactive B2B Commodity Catalog Section */}
        <section id="products" className="py-20 bg-stone-950 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
                <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Export Grade Agricultural Catalog</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
                Fresh Produce & Spices Specifications
              </h2>

              <p className="text-sm text-stone-300 leading-relaxed">
                Explore our export-ready commodities featuring certified size grading, temperature calibration, mesh/jute packaging, and current FOB/CIF price brackets.
              </p>
            </div>

            {/* Filter & Search Toolbar */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search by commodity, HS code, or origin..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                        : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                    }`}
                  >
                    All Items ({PRODUCTS.length})
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedCategory === cat.slug
                          ? 'bg-emerald-800 text-stone-100 border border-emerald-600 shadow-md'
                          : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center py-12 text-stone-500 text-xs">
                  No commodities found matching your filter criteria. Try adjusting search query.
                </div>
              ) : (
                filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    currency={currency}
                    onSelectProduct={(p) => setSelectedProduct(p)}
                    onOpenRFQForProduct={(p) => {
                      setSelectedProduct(p);
                      setIsRfqOpen(true);
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Proforma Freight Calculator Banner / Accordion */}
        <section id="calculator" className="py-12 bg-stone-900 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RFQCalculator
              currency={currency}
              onClose={() => {}}
            />
          </div>
        </section>

        {/* Global Origins & Sourcing Countries */}
        <div id="countries">
          <SourcingCountries
            onExploreCommodities={() => scrollToSection('products')}
          />
        </div>

        {/* Why Choose Us & Advantages */}
        <div id="why-us">
          <WhyChooseUs
            onOpenRFQ={() => setIsRfqOpen(true)}
          />
        </div>

        {/* Infrastructure & Facility Gallery */}
        <div id="gallery">
          <Gallery />
        </div>

        {/* Quality Certifications & Government APEDA Licenses */}
        <div id="certifications">
          <Certifications />
        </div>

        {/* Verified Importer Testimonials */}
        <Testimonials />

        {/* Market Intelligence & Reefer Guides */}
        <div id="blog">
          <BlogSection />
        </div>

        {/* Searchable Trade FAQs */}
        <div id="faq">
          <FAQSection
            onOpenContact={() => scrollToSection('contact')}
          />
        </div>

        {/* Contact Form & Global Office Cards */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer
        setActiveSection={scrollToSection}
        onOpenPrivacy={() => setIsLegalOpen(true)}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenRFQ={() => setIsRfqOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {isTrackerOpen && (
        <ShipmentTrackerModal onClose={() => setIsTrackerOpen(false)} />
      )}

      {isAuthOpen && (
        <AuthModal
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={(email) => {
            setUserEmail(email);
            setIsAuthOpen(false);
          }}
        />
      )}

      {isLegalOpen && (
        <PrivacyTermsModal onClose={() => setIsLegalOpen(false)} />
      )}
    </div>
  );
}
