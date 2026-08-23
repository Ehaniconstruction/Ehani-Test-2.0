import React from 'react';
import { COMPANY_INFO } from '../lib/content';
import { Language } from '../types';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Clock, 
  FileCheck2, 
  Flame, 
  CheckCircle2,
  Users,
  Coins,
  BadgeCheck
} from 'lucide-react';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const differentiators = [
    {
      icon: ShieldCheck,
      titleEs: 'Licencia Florida CGC: 1541118 & Seguro de $2M',
      titleEn: 'Florida CGC: 1541118 & $2M Liability Coverage',
      descEs: 'Contratista General Certificado avalado por el Estado de Florida (DBPR) con pólizas de General Liability y Workers Compensation para máxima tranquilidad.',
      descEn: 'State-certified general contractor licensed across Florida with active General Liability and Workers Compensation policies for zero owner liability.',
    },
    {
      icon: Award,
      titleEs: 'Doble Garantía por Escrito',
      titleEn: 'Dual Written Warranties',
      descEs: 'Respaldamos cada proyecto con garantía de mano de obra de 10 a 25 años y garantías de fabricante de por vida en materiales premium.',
      descEn: 'We back every project with 10 to 25-year workmanship warranties plus direct lifetime manufacturer material warranties.',
    },
    {
      icon: Coins,
      titleEs: 'Financiamiento con Renew Financial & PACE',
      titleEn: 'Renew Financial & RenewPACE Financing',
      descEs: 'Opciones de financiamiento flexible con $0 de cuota inicial para techado, climatización HVAC, ventanas de impacto y remodelaciones energéticas.',
      descEn: 'Flexible $0-down PACE and home improvement financing for roofing, HVAC systems, impact windows & doors, and energy upgrades.',
    },
    {
      icon: Clock,
      titleEs: 'Cumplimiento Estricto de Fechas',
      titleEn: 'On-Time Project Completion',
      descEs: 'Nuestros contratos estipulan fechas exactas de inicio y término. Trabajamos con cuadrillas dedicadas sin pausas innecesarias.',
      descEn: 'Our signed contracts stipulate exact start and handover dates with dedicated crews for uninterrupted project delivery.',
    },
    {
      icon: Sparkles,
      titleEs: 'Limpieza con Barrido Magnético Diario',
      titleEn: 'Daily Magnetic Sweep Cleanliness',
      descEs: 'Cuidamos a tu familia y mascotas. Al final de cada jornada de trabajo pasamos rodillos magnéticos para retirar todo clavo o residuo.',
      descEn: 'We protect your family, pets, and tires with daily industrial magnetic roller sweeps and thorough site housekeeping.',
    },
    {
      icon: Coins,
      titleEs: 'Presupuestos Fijos sin Letras Chicas',
      titleEn: 'Fixed Price Guarantee',
      descEs: 'El precio acordado en tu cotización es el precio final. Sin cargos imprevistos ni cambios sorpresa de última hora.',
      descEn: 'The approved quote is your final contract price. No surprise charges, hidden fees, or mid-project price spikes.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'La Diferencia Ehani' : 'The Ehani Advantage'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Por Qué Somos la Opción de Confianza en <span className="text-gold-gradient">Florida</span>
              </>
            ) : (
              <>
                Why Property Owners Choose <span className="text-gold-gradient">Ehani Construction</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'Combinamos maestría artesanal, tecnología de construcción moderna y un trato honesto de principio a fin.'
              : 'Combining master craftsmanship, modern construction engineering, and uncompromising integrity from start to finish.'}
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-gold-gradient text-[#DFBA5C] group-hover:text-slate-950 flex items-center justify-center transition-all duration-300 mb-5 shadow">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-['Outfit'] leading-snug mb-2 group-hover:text-[#996515] transition-colors">
                    {lang === 'es' ? diff.titleEs : diff.titleEn}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {lang === 'es' ? diff.descEs : diff.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#996515]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{lang === 'es' ? 'Compromiso Certificado' : 'Guaranteed Standard'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
