import React, { useState } from 'react';
import { CERTIFICATES } from '../data/mockData';
import { Certificate } from '../types';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  X,
  ExternalLink,
  Lock
} from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full text-xs text-emerald-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Government Authorized & International Accreditation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-100">
            Quality Certifications & Export Licenses
          </h2>

          <p className="text-sm text-stone-300 leading-relaxed">
            Casial Global Trading operates under full government accreditation, international food safety standards, and plant quarantine protocols.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="bg-stone-950 rounded-2xl border border-stone-800 p-6 space-y-4 hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {cert.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>

                <h3 className="text-lg font-bold text-stone-100 font-serif group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-stone-400 leading-relaxed">
                  {cert.description}
                </p>

                <div className="bg-stone-900 p-3 rounded-xl border border-stone-800 space-y-1 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>Issuing Authority:</span>
                    <span className="font-semibold text-stone-200 truncate max-w-[160px]">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>License #:</span>
                    <span className="font-mono font-bold text-amber-300">{cert.certificateNumber}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors border border-stone-800 flex items-center justify-center gap-2"
              >
                <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verify License Credentials</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-lg p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-stone-800 pb-4">
              <span className="text-xs font-mono text-amber-400 font-bold">GOVERNMENT ACCREDITATION VERIFICATION</span>
              <h3 className="text-xl font-bold font-serif text-stone-100">{selectedCert.title}</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-400">License Number:</span>
                  <span className="font-mono font-bold text-amber-300">{selectedCert.certificateNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Issuing Body:</span>
                  <span className="font-semibold text-stone-100">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Validity Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Active (Valid until {selectedCert.validUntil})
                  </span>
                </div>
              </div>

              <p className="text-stone-300 leading-relaxed text-xs">
                {selectedCert.description} Official certified copies with QR code verification available upon request for customs clearance.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold px-5 py-2 rounded-xl text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
