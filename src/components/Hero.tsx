import React from 'react';
import { COMPANY_INFO, TRUST_METRICS } from '../lib/content';
import { Language } from '../types';
import { 
  PhoneCall, 
  ArrowRight, 
  Star, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal, onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0B0F17] text-white overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-amber-500/20">
      {/* Background Image: Typical Two-Story Florida House with Palm Trees & Architectural Finishes */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85"
          alt="Florida Two-Story Home Remodeling and Roofing"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Gradient Overlays for High-Contrast Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-slate-950/60" />
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-left flex flex-col gap-6">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/50 text-xs font-bold text-amber-300 shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#DFBA5C] animate-pulse" />
            <span>
              {lang === 'es' 
                ? 'Contratista General Certificado en Florida' 
                : 'Florida Certified General Contractor'}
            </span>
          </div>

          {/* Superimposed Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-['Outfit',sans-serif] tracking-tight leading-[1.1] text-white drop-shadow-md">
            Florida Remodeling & <span className="text-gold-gradient">Specialty Roofing</span>
          </h1>

          {/* Primary Action Buttons (Request Free Estimate) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-slate-950 bg-gold-gradient font-black text-sm uppercase tracking-wider gold-glow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-xl"
            >
              <span>{lang === 'es' ? 'Solicitar Cotización Gratuita' : 'Request Free Estimate'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/40 font-semibold text-sm backdrop-blur-sm transition-all hover:border-amber-400 cursor-pointer shadow-lg"
            >
              <span>{lang === 'es' ? 'Nuestros Servicios' : 'Our Services'}</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-950/60 hover:bg-slate-900/80 border border-slate-700/60 text-amber-300 hover:text-amber-200 font-bold text-sm transition-colors text-center backdrop-blur-sm shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#DFBA5C]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Rating verification */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-300 font-medium">
              <strong className="text-white font-bold">5.0 / 5.0</strong> {lang === 'es' ? 'en satisfacción de clientes en Florida' : 'client satisfaction rating across Florida'}
            </span>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-slate-800/80">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-900/70 backdrop-blur-sm border border-slate-800 hover:border-amber-500/40 transition-colors">
              <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-gold-gradient">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-medium text-center mt-1">
                {lang === 'es' ? metric.label : metric.labelEn}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
