import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

interface PrivacyTermsModalProps {
  onClose: () => void;
}

export default function PrivacyTermsModal({ onClose }: PrivacyTermsModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Disclosures & B2B Trade Terms</span>
          </div>
          <h3 className="text-2xl font-bold font-serif text-stone-100 mt-1">
            Privacy Policy & International Export Conditions
          </h3>
        </div>

        {/* Text Content */}
        <div className="overflow-y-auto space-y-4 custom-scrollbar text-xs text-stone-300 leading-relaxed pr-2">
          <div className="space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">1. Privacy & Data Protection</h4>
            <p>
              Casial Global Trading LLC respects international data protection protocols (including GDPR and UAE Federal Decree Law No. 45/2021). Any corporate information, buyer emails, phone numbers, target ports, or financial proforma records collected via our web portals are strictly utilized for order fulfillment, phytosanitary clearance, and bill of lading documentation. We do not sell or transfer buyer data to third-party advertisers.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">2. Incoterms 2020 Compliance</h4>
            <p>
              All quotations issued by Casial Global Trading adhere strictly to Incoterms 2020 definitions (FOB, CIF, CFR, EXW). For CIF orders, ocean freight and marine cargo insurance (covering 110% of invoice value against all risks under Institute Cargo Clauses A) are prepaid up to the agreed port of discharge.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">3. Quality Inspection & Phytosanitary Certificates</h4>
            <p>
              Commodities undergo inspection prior to container stuffing. Official Phytosanitary Certificates, Certificate of Origin, and APEDA Quality Clearance documents issued by government authorities accompany every ocean bill of lading. Buyer or third-party SGS/Intertek inspections at origin packhouses are welcomed upon advance notice.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-400 text-sm">4. Force Majeure & Cold-Chain Shipping</h4>
            <p>
              Casial Global Trading equips all reefer containers with continuous satellite temperature loggers. Neither party shall be held liable for failure or delay in performance caused by Force Majeure events including extreme weather disasters, acts of war, canal blockages, or port labor strikes beyond reasonable control.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-6 py-2 rounded-xl text-xs"
          >
            I Accept & Close
          </button>
        </div>
      </div>
    </div>
  );
}
