import React from 'react';
import { PROCESS_STEPS } from '../lib/content';
import { Language } from '../types';
import { 
  SearchCheck, 
  FileSpreadsheet, 
  Construction, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ProcessSectionProps {
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang, onOpenQuoteModal }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6" />;
      case 'Construction':
        return <Construction className="w-6 h-6" />;
      case 'AwardCheck':
        return <Award className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#0B0F17] text-white relative overflow-hidden border-t border-amber-500/20">
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBA5C]" />
            <span>{lang === 'es' ? 'Metodología de Trabajo' : 'Proven Work Process'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Outfit'] tracking-tight text-white">
            {lang === 'es' ? (
              <>
                Un Proceso Claro, <span className="text-gold-gradient">Sin Sorpresas ni Retrasos</span>
              </>
            ) : (
              <>
                A Seamless Process <span className="text-gold-gradient">With Zero Surprises</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            {lang === 'es'
              ? 'Desde la primera visita técnica hasta el último detalle, garantizamos una comunicación fluida, limpieza diaria y cumplimiento estricto de cronogramas.'
              : 'From the initial technical visit to the final polish, we ensure transparent communication, daily site cleaning, and strict adherence to timelines.'}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Step Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-gold-gradient text-[#DFBA5C] group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-black font-['Outfit'] text-slate-700 group-hover:text-[#DFBA5C] transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-white leading-snug mb-2.5">
                  {lang === 'es' ? step.title : step.titleEn}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {lang === 'es' ? step.description : step.descriptionEn}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                {(lang === 'es' ? step.details : step.detailsEn).map((d, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA5C] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider gold-glow hover:brightness-105 transition-all cursor-pointer shadow-lg"
          >
            <span>{lang === 'es' ? 'Iniciar Paso 1: Agendar Inspección Gratuita' : 'Start Step 1: Book Free Inspection'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
