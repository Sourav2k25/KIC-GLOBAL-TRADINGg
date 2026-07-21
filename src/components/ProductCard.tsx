import React from 'react';
import { Product } from '../types';
import { 
  ArrowRight, 
  Package, 
  Maximize2, 
  Globe2, 
  MessageSquare, 
  CheckCircle2, 
  Container,
  FileText
} from 'lucide-react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onSelectProduct: (p: Product) => void;
  onOpenRFQForProduct: (p: Product) => void;
  currency: string;
}

export default function ProductCard({
  product,
  onSelectProduct,
  onOpenRFQForProduct,
  currency
}: ProductCardProps) {

  // Generate WhatsApp inquiry link
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Casial Global Trading Export Desk,\n\nI am interested in inquiring about:\n- Product: ${product.title}\n- HS Code: ${product.hsCode}\n- MOQ: ${product.moq}\n- Preferred Packaging: ${product.packagingOptions[0] || 'Standard'}\n\nPlease share current FOB/CIF rates, size availability, and phytosanitary spec sheet.`
    );
    return `https://wa.me/971508924102?text=${text}`;
  };

  return (
    <div className="bg-stone-900 rounded-2xl border border-stone-800 hover:border-emerald-600/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg group">
      <div>
        {/* Card Header Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-950">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/30" />

          {/* Category & Featured Badge */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-emerald-950/90 text-emerald-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-700/60 shadow-md">
              {product.subcategory}
            </span>
            {product.isFeatured && (
              <span className="bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-md">
                Top Exporter Choice
              </span>
            )}
          </div>

          <button
            onClick={() => onSelectProduct(product)}
            className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700/80 shadow-md backdrop-blur-sm transition-colors"
            title="View Full Spec Sheet"
          >
            <Maximize2 className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-stone-100 font-serif group-hover:text-amber-400 transition-colors leading-snug">
              {product.title}
            </h3>
            <p className="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800/80 space-y-0.5">
              <div className="text-[10px] font-semibold text-stone-400 flex items-center gap-1">
                <Maximize2 className="w-3 h-3 text-emerald-400" />
                <span>Sizes Available</span>
              </div>
              <p className="font-medium text-stone-200 truncate">{product.sizes.join(', ')}</p>
            </div>

            <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800/80 space-y-0.5">
              <div className="text-[10px] font-semibold text-stone-400 flex items-center gap-1">
                <Container className="w-3 h-3 text-amber-400" />
                <span>HS Code</span>
              </div>
              <p className="font-mono font-medium text-amber-300">{product.hsCode}</p>
            </div>

            <div className="bg-stone-950/80 p-2 rounded-lg border border-stone-800/80 space-y-0.5 col-span-2">
              <div className="text-[10px] font-semibold text-stone-400 flex items-center gap-1">
                <Package className="w-3 h-3 text-emerald-400" />
                <span>Min. Order Quantity (MOQ)</span>
              </div>
              <p className="font-medium text-stone-200 truncate">{product.moq}</p>
            </div>
          </div>

          {/* Packaging Badges */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.packagingOptions.slice(0, 3).map((pkg, idx) => (
              <span key={idx} className="bg-stone-800 text-stone-300 text-[10px] px-2 py-0.5 rounded border border-stone-700/60">
                {pkg}
              </span>
            ))}
            {product.packagingOptions.length > 3 && (
              <span className="text-[10px] text-amber-400 font-semibold px-1 py-0.5">
                +{product.packagingOptions.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 pt-0 space-y-2 border-t border-stone-800/60 mt-3">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelectProduct(product)}
            className="w-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors border border-stone-700 flex items-center justify-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Specs</span>
          </button>

          <button
            onClick={() => onOpenRFQForProduct(product)}
            className="w-full bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors border border-emerald-600/60 flex items-center justify-center gap-1.5"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-stone-950 hover:bg-emerald-950/80 text-emerald-400 hover:text-emerald-300 font-medium py-2 px-3 rounded-xl text-xs transition-colors border border-emerald-900/60 flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
