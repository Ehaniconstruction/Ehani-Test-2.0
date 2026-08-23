import React, { useState } from 'react';
import { FAQS_DATA } from '../lib/content';
import { Language } from '../types';
import { ChevronDown, Sparkles, HelpCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../lib/content';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string>(FAQS_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Resolvemos Todas tus <span className="text-gold-gradient">Dudas Constructivas</span>
              </>
            ) : (
              <>
                Clear Answers to Your <span className="text-gold-gradient">Construction Inquiries</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'Conoce nuestras políticas de garantía, seguros, tiempos y formas de pago.'
              : 'Everything you need to know about our warranties, permits, timelines, and payment options.'}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left font-bold text-slate-950 hover:text-[#996515] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-['Outfit'] pr-4">
                    {lang === 'es' ? faq.question : faq.questionEn}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-amber-100 text-[#996515]' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{lang === 'es' ? faq.answer : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Call banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-amber-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              {lang === 'es' ? '¿Tienes una pregunta específica sobre tu obra?' : 'Have a specific question about your property?'}
            </h4>
            <p className="text-xs text-slate-600">
              {lang === 'es' ? 'Nuestros ingenieros y maestros de obra están listos para atenderte.' : 'Our master builders and estimators are ready to assist you directly.'}
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#DFBA5C]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
