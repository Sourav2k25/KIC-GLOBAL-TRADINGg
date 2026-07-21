import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('Inquire about Red Onion 50mm+ 1x40ft Reefer CIF Dubai');

  const messageTemplates = [
    'Inquire about Red Onion 50mm+ 1x40ft Reefer CIF Dubai',
    'Request Price Quote for Chinese Pure White Garlic 5.5cm+',
    'Request Fresh Elephant Ginger Sample Dispatch',
    'Inquire about Teja S17 Dry Red Chili ASTA Specifications',
    'Check Container Shipment Status'
  ];

  const handleSend = () => {
    const text = encodeURIComponent(`Hello Casial Global Trading Export Desk,\n\n${selectedMessage}`);
    window.open(`https://wa.me/971508924102?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Widget */}
      {isOpen ? (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 w-80 shadow-2xl space-y-3 text-stone-100 text-xs animate-in fade-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-amber-400">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-stone-100">Casial Export Desk</h4>
                <p className="text-[10px] text-emerald-400 font-medium">● Online (Dubai / Mumbai)</p>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="p-1 text-stone-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-stone-300 text-[11px] leading-relaxed">
            Select a quick inquiry template or type custom message to connect with our trade desk:
          </p>

          <div className="space-y-1.5 max-h-40 overflow-y-auto">
            {messageTemplates.map((tmpl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMessage(tmpl)}
                className={`w-full text-left p-2 rounded-lg text-[11px] border transition-colors ${
                  selectedMessage === tmpl
                    ? 'bg-emerald-950 border-emerald-600 text-emerald-300 font-semibold'
                    : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
                }`}
              >
                {tmpl}
              </button>
            ))}
          </div>

          <button
            onClick={handleSend}
            className="w-full bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors border border-emerald-600"
          >
            <Send className="w-3.5 h-3.5 text-amber-400" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>
      ) : (
        /* Floating Button */
        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 p-3.5 rounded-full shadow-2xl border-2 border-amber-400 flex items-center gap-2 transition-all hover:scale-105 group"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 text-amber-400" />
          <span className="hidden sm:inline text-xs font-bold text-stone-100 pr-1">
            WhatsApp Desk
          </span>
        </button>
      )}
    </div>
  );
}
