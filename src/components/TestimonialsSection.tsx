import React from 'react';
import { TESTIMONIALS_DATA } from '../lib/content';
import { Language } from '../types';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'Opiniones de Clientes' : 'Verified Client Reviews'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Lo Que Dicen Quienes Ya <span className="text-gold-gradient">Construyeron con Nosotros</span>
              </>
            ) : (
              <>
                What Property Owners Say About <span className="text-gold-gradient">Our Work</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'La reputación se construye obra a obra. Conoce la experiencia de familias y empresas que confiaron en Ehani.'
              : 'Our reputation is earned on every build. Discover why homeowners and business managers rely on Ehani.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <div>
                {/* Rating & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300/50 group-hover:text-amber-400 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{lang === 'es' ? item.comment : item.commentEn}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 font-['Outfit']">
                      {item.clientName}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {lang === 'es' ? item.role : item.roleEn} • {item.location}
                    </span>
                  </div>

                  {item.verified && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>{lang === 'es' ? 'Verificado' : 'Verified'}</span>
                    </div>
                  )}
                </div>

                <div className="mt-2 text-[11px] font-semibold text-[#996515]">
                  {lang === 'es' ? item.projectType : item.projectTypeEn}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
