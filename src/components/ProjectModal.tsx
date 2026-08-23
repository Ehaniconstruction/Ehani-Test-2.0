import React, { useState } from 'react';
import { ProjectItem, Language } from '../types';
import { X, MapPin, Clock, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../lib/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onRequestSimilar,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const allImages = [project.image, ...(project.gallery || [])];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-500/40 max-h-[90vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F17]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gold-gradient text-slate-950 font-black text-xs uppercase tracking-wider">
              {lang === 'es' ? project.categoryLabel : project.categoryLabelEn}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#DFBA5C]" />
              <span>{project.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {/* Main Showcase Image with navigation arrows */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 mb-4 group">
            <img
              src={allImages[activeImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white transition-all cursor-pointer border border-slate-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white transition-all cursor-pointer border border-slate-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-3 right-3 bg-slate-950/80 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-300 border border-slate-700">
              {activeImageIndex + 1} / {allImages.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          {allImages.length > 1 && (
            <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeImageIndex === i ? 'border-[#DFBA5C] scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}

          {/* Project Info */}
          <div className="space-y-4 text-left">
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
              {lang === 'es' ? project.title : project.titleEn}
            </h3>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#DFBA5C]" />
                {lang === 'es' ? `Tiempo de Ejecución: ${project.duration}` : `Execution Time: ${project.durationEn}`}
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'es' ? project.description : project.descriptionEn}
            </p>

            {/* Highlights Chips */}
            <div className="pt-2">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-400 mb-2">
                {lang === 'es' ? 'ESPECIFICACIONES DEL PROYECTO:' : 'PROJECT SPECIFICATIONS & HIGHLIGHTS:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(lang === 'es' ? project.highlights : project.highlightsEn).map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA5C]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0B0F17] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white"
          >
            <Phone className="w-4 h-4 text-[#DFBA5C]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {lang === 'es' ? 'Cerrar' : 'Close'}
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(lang === 'es' ? project.title : project.titleEn);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-xs uppercase tracking-wider gold-glow hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
            >
              <span>{lang === 'es' ? 'Quiero un Proyecto Similar' : 'Request Similar Project'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
