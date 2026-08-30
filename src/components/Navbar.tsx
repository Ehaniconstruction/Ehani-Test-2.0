import React, { useState, useEffect } from 'react';
import { EhaniLogo } from './EhaniLogo';
import { COMPANY_INFO } from '../lib/content';
import { Language } from '../types';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  Globe
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  activeSection,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', labelEs: 'Inicio', labelEn: 'Home' },
    { id: 'services', labelEs: 'Servicios', labelEn: 'Services' },
    { id: 'gallery', labelEs: 'Galería', labelEn: 'Gallery' },
    { id: 'process', labelEs: 'Proceso', labelEn: 'Process' },
    { id: 'why-us', labelEs: 'Por Qué Elegirnos', labelEn: 'Why Choose Us' },
    { id: 'faq', labelEs: 'Preguntas', labelEn: 'FAQ' },
    { id: 'contact', labelEs: 'Contacto', labelEn: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Glass Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-200/40 py-3'
            : 'bg-white py-3.5 sm:py-4 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with 3D Gold Accent */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-left focus:outline-none cursor-pointer"
          >
            <EhaniLogo size="md" variant="light" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-slate-950 bg-amber-50/80 font-bold border-b-2 border-[#C5A059]'
                      : 'text-slate-700 hover:text-[#996515] hover:bg-slate-50'
                  }`}
                >
                  {lang === 'es' ? item.labelEs : item.labelEn}
                </button>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 font-bold text-xs px-2.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all cursor-pointer"
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* Direct Call Pill */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-bold px-3 py-2 text-[#996515] bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary Quote CTA Button with Metallic Gold Gradient */}
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 text-xs uppercase font-extrabold tracking-wider px-4 py-2.5 rounded-lg text-slate-950 bg-gold-gradient hover:brightness-105 gold-glow transition-all active:scale-95 cursor-pointer shadow"
            >
              <span>{lang === 'es' ? 'Cotizar Gratis' : 'Free Estimate'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="sm:hidden flex items-center justify-center px-2 py-1 rounded bg-amber-50 text-[#996515] font-bold text-xs border border-amber-200"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#C5A059]" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`flex items-center justify-between w-full px-3.5 py-2.5 text-left text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-slate-950 bg-amber-50 font-bold border-l-4 border-[#C5A059]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{lang === 'es' ? item.labelEs : item.labelEn}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#DFBA5C]" />
                <span>{lang === 'es' ? 'Llamar: ' : 'Call: '} {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-slate-950 bg-gold-gradient font-extrabold text-sm uppercase tracking-wider gold-glow"
              >
                <span>{lang === 'es' ? 'Solicitar Cotización Gratuita' : 'Request Free Estimate'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
