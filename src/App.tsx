import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { GallerySection } from './components/GallerySection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { COMPANY_INFO } from './lib/content';
import { Language, ServiceItem } from './types';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [modalPreselectedService, setModalPreselectedService] = useState<string>('roofing');
  const [showFloatingBar, setShowFloatingBar] = useState<boolean>(false);

  // Toggle Language
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Smooth Navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Open Quote Modal with optional specific service
  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setModalPreselectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  // Active section scroll tracking & floating bar display
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      if (window.scrollY > 400) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }

      const sections = ['hero', 'services', 'gallery', 'estimator', 'process', 'why-us', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Header Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 2. Hero Section */}
      <Hero
        lang={lang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onNavigate={handleNavigate}
      />

      {/* 3. Services Showcase */}
      <ServicesSection
        lang={lang}
        onSelectService={(service: ServiceItem) => {
          handleOpenQuoteModal(lang === 'es' ? service.title : service.titleEn);
        }}
        onOpenQuoteModal={(serviceName) => handleOpenQuoteModal(serviceName)}
      />

      {/* 4. Interactive Cost Estimator */}
      <ProjectEstimator
        lang={lang}
        onProceedWithEstimate={(estimateSummary) => {
          handleOpenQuoteModal(estimateSummary);
        }}
      />

      {/* 5. Real Projects Gallery with Lightbox */}
      <GallerySection
        lang={lang}
        onOpenQuoteModal={(serviceName) => handleOpenQuoteModal(serviceName)}
      />

      {/* 6. 4-Step Proven Process */}
      <ProcessSection
        lang={lang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* 7. Why Choose Us / Guarantees */}
      <WhyChooseUs lang={lang} />

      {/* 8. Verified Testimonials */}
      <TestimonialsSection lang={lang} />

      {/* 9. FAQ Accordion */}
      <FaqSection lang={lang} />

      {/* 10. Contact & Quote Request Form */}
      <ContactSection
        lang={lang}
        prefilledService={modalPreselectedService}
      />

      {/* 11. Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Quick Action Pill for Mobile & Desktop */}
      {showFloatingBar && (
        <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2.5 animate-in slide-in-from-bottom duration-300">
          {/* Quick Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-amber-300 font-bold text-xs shadow-2xl border border-amber-400/50 hover:bg-slate-800 transition-all hover:scale-105"
            title={lang === 'es' ? 'Llamar a Ehani Construction' : 'Call Ehani Construction'}
          >
            <Phone className="w-4 h-4 text-[#DFBA5C]" />
            <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
          </a>

          {/* Quick Quote Modal Trigger Button */}
          <button
            onClick={() => handleOpenQuoteModal()}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gold-gradient text-slate-950 font-black text-xs uppercase tracking-wider gold-glow shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'es' ? 'Cotizar' : 'Get Quote'}</span>
          </button>
        </div>
      )}

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        initialService={modalPreselectedService}
        lang={lang}
        onClose={() => setQuoteModalOpen(false)}
      />

    </div>
  );
}
