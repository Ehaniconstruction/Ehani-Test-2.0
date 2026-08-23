import React from 'react';
import { COMPANY_INFO, TRUST_METRICS } from '../lib/content';
import { Language } from '../types';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Sparkles,
  Calculator
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenQuoteModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal, onNavigate }) => {
  return (
    <section id="hero" className="relative bg-[#0B0F17] text-white overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-amber-500/20">
      {/* Background Architectural Grid & Subtle Gold Radial Glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Trust Pill with Gold Icon */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-xs font-semibold text-amber-300 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBA5C] animate-pulse" />
              <span>
                {lang === 'es' 
                  ? 'Contratista General Certificado en Florida • CGC: 1541118' 
                  : 'Florida Certified General Contractor • CGC: 1541118'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-['Outfit',sans-serif] tracking-tight leading-[1.15] text-white">
              {lang === 'es' ? (
                <>
                  Remodelación, <span className="text-gold-gradient">Nueva Construcción & Techos</span> en Florida
                </>
              ) : (
                <>
                  Florida <span className="text-gold-gradient">Remodeling, New Construction & Specialty Roofing</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {lang === 'es'
                ? 'Construcción residencial y comercial de alta gama, remodelación de cocinas y baños, sistemas de techado con re-decking, climatización HVAC y concreto. Licencia estatal CGC: 1541118 y financiamiento con Renew Financial.'
                : 'Premier residential & commercial building, custom kitchen & bathroom remodeling, hurricane-grade roof replacements with full re-decking, HVAC upgrades, and concrete flatwork. Florida Certified General Contractor (CGC: 1541118) with Renew Financial PACE financing.'}
            </p>

            {/* Key Bullet Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{lang === 'es' ? 'Licencia Estatal Florida CGC: 1541118' : 'Florida Certified Contractor CGC: 1541118'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{lang === 'es' ? 'Financiamiento Renew Financial & PACE ($0 inicial)' : 'Renew Financial & RenewPACE Financing ($0 Down)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{lang === 'es' ? 'Inspección & cotización gratuita en sitio' : 'Free on-site consultation & written estimate'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{lang === 'es' ? 'Garantía por escrito de 10 a 25 años' : '10 to 25-year written warranty protection'}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-slate-950 bg-gold-gradient font-black text-sm uppercase tracking-wider gold-glow-lg transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
              >
                <span>{lang === 'es' ? 'Solicitar Cotización Gratuita' : 'Request Free Estimate'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('estimator')}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/30 font-semibold text-sm transition-all hover:border-amber-400 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#DFBA5C]" />
                <span>{lang === 'es' ? 'Calcular Costo en Línea' : 'Interactive Estimator'}</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-amber-300 hover:text-amber-200 font-bold text-sm transition-colors text-center"
              >
                <PhoneCall className="w-4 h-4 text-[#DFBA5C]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Rating verification */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
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

          {/* Right Column: Hero Visual Card with Badge & Real Photo Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl p-2.5">
              
              {/* Featured High-Res Project Hero Photo */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=80"
                  alt="Ehani Construction Roofing Project"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Top Badge: Licensed */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/40 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DFBA5C]" />
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    {lang === 'es' ? 'Calidad Certificada' : 'Certified Craftsmanship'}
                  </span>
                </div>

                {/* Floating Bottom Card: Project Preview */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur-md p-3 rounded-xl border border-amber-500/30 text-left flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      {lang === 'es' ? 'PROYECTO DESTACADO' : 'FEATURED PROJECT'}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {lang === 'es' ? 'Techado Residencial GAF Timberline HDZ' : 'Residential GAF Timberline HDZ Roof'}
                    </h3>
                    <span className="text-[10px] text-slate-300">Miami-Dade & South Florida</span>
                  </div>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 transition-colors cursor-pointer shrink-0 ml-2"
                    title={lang === 'es' ? 'Ver portafolio' : 'View portfolio'}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3 Micro-Thumbnails for quick category switching */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div 
                  onClick={() => onNavigate('services')}
                  className="group relative aspect-[3/2] rounded-lg overflow-hidden border border-slate-800 hover:border-amber-400/60 cursor-pointer transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=400&q=80"
                    alt="Concreto Estampado"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-slate-200 group-hover:text-amber-300">
                      {lang === 'es' ? 'Concreto' : 'Concrete'}
                    </span>
                  </div>
                </div>

                <div 
                  onClick={() => onNavigate('services')}
                  className="group relative aspect-[3/2] rounded-lg overflow-hidden border border-slate-800 hover:border-amber-400/60 cursor-pointer transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80"
                    alt="Remodelación de Baños"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-slate-200 group-hover:text-amber-300">
                      {lang === 'es' ? 'Baños' : 'Bathrooms'}
                    </span>
                  </div>
                </div>

                <div 
                  onClick={() => onNavigate('services')}
                  className="group relative aspect-[3/2] rounded-lg overflow-hidden border border-slate-800 hover:border-amber-400/60 cursor-pointer transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
                    alt="Estructura y Decks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 flex items-end p-1.5">
                    <span className="text-[10px] font-bold text-slate-200 group-hover:text-amber-300">
                      {lang === 'es' ? 'Decks' : 'Decks'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge with Gold Ring */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900 border-2 border-[#C5A059] text-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-3 gold-glow">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center text-slate-950 font-black shrink-0">
                <Award className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black font-['Outfit'] block leading-none text-white">
                  15+ {lang === 'es' ? 'Años' : 'Years'}
                </span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                  {lang === 'es' ? 'de Excelencia Constructiva' : 'Construction Excellence'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-20 pt-8 border-t border-slate-800">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors">
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
