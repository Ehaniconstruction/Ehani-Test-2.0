import React, { useState } from 'react';
import { SERVICES_DATA } from '../lib/content';
import { Language, ServiceItem } from '../types';
import { 
  ShieldCheck, 
  Layers, 
  Bath, 
  Hammer, 
  Building2,
  Wind,
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Tag
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onOpenQuoteModal,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Bath':
        return <Bath className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const activeService = SERVICES_DATA.find((s) => s.id === selectedTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300/60 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'Nuestras Especialidades' : 'Our Specialized Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Soluciones Integrales de <span className="text-gold-gradient">Construcción & Remodelación</span>
              </>
            ) : (
              <>
                Comprehensive <span className="text-gold-gradient">Construction & Remodeling</span> Solutions
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'es'
              ? 'Ejecutamos cada obra con mano de obra certificada, materiales premium de las marcas líderes del mercado y supervisión permanente.'
              : 'Every project is built by certified master tradesmen using industry-leading materials with dedicated daily supervision.'}
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedTab(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-lg border-2 border-[#C5A059]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span className={isSelected ? 'text-[#DFBA5C]' : 'text-slate-500'}>
                  {getServiceIcon(service.iconName)}
                </span>
                <span>{lang === 'es' ? service.title.split('(')[0] : service.titleEn.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Spotlight Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Service Details Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-gold-gradient text-slate-950 font-black text-xs uppercase tracking-wider">
                  {lang === 'es' ? activeService.badge : activeService.badgeEn}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-[#DFBA5C]" />
                  {lang === 'es' ? activeService.estimatedTime : activeService.estimatedTimeEn}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <Tag className="w-3.5 h-3.5 text-[#DFBA5C]" />
                  {lang === 'es' ? activeService.pricingRange : activeService.pricingRangeEn}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white leading-snug">
                {lang === 'es' ? activeService.title : activeService.titleEn}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'es' ? activeService.fullDescription : activeService.fullDescriptionEn}
              </p>

              {/* Checklist */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  {lang === 'es' ? 'LO QUE INCLUYE EL SERVICIO:' : 'SERVICE HIGHLIGHTS & INCLUSIONS:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                  {(lang === 'es' ? activeService.features : activeService.featuresEn).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA5C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials Used Tags */}
              <div className="pt-2">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">
                  {lang === 'es' ? 'MATERIALES & SISTEMAS CERTIFICADOS:' : 'CERTIFIED MATERIALS & SYSTEMS:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'es' ? activeService.materials : activeService.materialsEn).map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onOpenQuoteModal(lang === 'es' ? activeService.title : activeService.titleEn)}
                  className="px-5 py-3 rounded-xl bg-gold-gradient text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider gold-glow hover:brightness-105 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>{lang === 'es' ? 'Cotizar Este Servicio' : 'Get Quote for This Service'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service Images Grid */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/40 relative shadow-xl">
                <img
                  src={activeService.heroImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-slate-200">
                  {lang === 'es' ? 'Trabajos 100% Reales' : 'Real Works Completed'}
                </div>
              </div>

              {/* Multi-photo thumbs */}
              <div className="grid grid-cols-3 gap-2.5">
                {activeService.galleryImages.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                    <img
                      src={img}
                      alt={`${activeService.title} preview ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 6 Services Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-gold-gradient text-[#DFBA5C] group-hover:text-slate-950 flex items-center justify-center transition-colors mb-4 shadow">
                  {getServiceIcon(service.iconName)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#996515] block mb-1">
                  {lang === 'es' ? service.badge : service.badgeEn}
                </span>

                <h4 className="text-lg font-bold text-slate-950 font-['Outfit'] leading-snug mb-2 group-hover:text-[#996515] transition-colors">
                  {lang === 'es' ? service.title : service.titleEn}
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {lang === 'es' ? service.shortDescription : service.shortDescriptionEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {lang === 'es' ? service.estimatedTime : service.estimatedTimeEn}
                </span>

                <button
                  onClick={() => {
                    setSelectedTab(service.id);
                    onOpenQuoteModal(lang === 'es' ? service.title : service.titleEn);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#996515] hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Cotizar' : 'Quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
