import React from 'react';
import { EhaniLogo } from './EhaniLogo';
import { COMPANY_INFO, SERVICES_DATA } from '../lib/content';
import { Language } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  Clock,
  CheckCircle2,
  Award
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A0F] text-slate-400 text-sm border-t border-[#2A2213] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Relocated Top Header Information Bar to Footer */}
      <div className="bg-[#0B0F17] text-slate-300 text-xs py-3.5 px-4 border-b border-slate-800/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{lang === 'es' ? `Florida CGC: ${COMPANY_INFO.licenseNumber.replace('CGC: ', '')} • Con Licencia & Seguro` : `Florida CGC: ${COMPANY_INFO.licenseNumber.replace('CGC: ', '')} • Fully Licensed & Insured`}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>{lang === 'es' ? 'Mon-Sat 7am-7pm | Emergencias 24/7' : 'Mon-Sat 7am-7pm | 24/7 Emergencies'}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-5">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#DFBA5C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <EhaniLogo size="md" variant="dark" showSubtitle={true} />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
              {lang === 'es'
                ? 'Contratista General Certificado en Florida (CGC: 1541118). Excelencia en techado residencial y comercial, climatización HVAC, ventanas de impacto, concreto y remodelación integral.'
                : 'Florida Certified General Contractor (CGC: 1541118). Excellence in residential & commercial roofing, HVAC systems, impact windows, concrete flatwork, and complete remodeling.'}
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{lang === 'es' ? 'Licencia de Contratista: ' : 'Contractor License: '} <strong className="text-white">{COMPANY_INFO.licenseNumber}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DFBA5C] shrink-0" />
                <span>{COMPANY_INFO.insuranceCoverage}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4 border-l-2 border-[#C5A059] pl-2.5">
              {lang === 'es' ? 'NUESTROS SERVICIOS' : 'SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300 text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A059]">›</span>
                    <span>{lang === 'es' ? s.title.split('(')[0] : s.titleEn.split('&')[0]}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-slate-300 text-left flex items-center gap-1.5"
                >
                  <span className="text-[#C5A059]">›</span>
                  <span>{lang === 'es' ? 'Reclamos de Seguros por Tormenta' : 'Storm Damage Insurance Claims'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Tools (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4 border-l-2 border-[#C5A059] pl-2.5">
              {lang === 'es' ? 'ACCESOS RÁPIDOS' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'es' ? 'Inicio' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'es' ? 'Portafolio de Obras' : 'Project Gallery'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'es' ? 'Proceso de Trabajo' : 'Work Process'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  {lang === 'es' ? 'Contacto & Cotizaciones' : 'Contact & Quotes'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white mb-4 border-l-2 border-[#C5A059] pl-2.5">
              {lang === 'es' ? 'CONTACTO INMEDIATO' : 'DIRECT CONTACT'}
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-amber-300 hover:text-amber-200 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white text-slate-300"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-4 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs uppercase tracking-wider gold-glow hover:brightness-105 transition-all cursor-pointer shadow"
              >
                {lang === 'es' ? 'Solicitar Cotización' : 'Request a Quote'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-6">
            <span>Miami-Dade • Broward • Palm Beach</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>{lang === 'es' ? 'Ir arriba' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
