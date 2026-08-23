import React, { useState } from 'react';
import { PROJECTS_DATA } from '../lib/content';
import { Language, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Eye, 
  ArrowRight, 
  Filter
} from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  lang,
  onOpenQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', labelEs: 'Todos los Proyectos', labelEn: 'All Projects' },
    { id: 'roofing', labelEs: 'Techado & Re-Decking', labelEn: 'Roofing & Re-Decking' },
    { id: 'remodeling', labelEs: 'Cocinas & Remodelación', labelEn: 'Kitchen & Remodeling' },
    { id: 'bathroom', labelEs: 'Remodelación de Baños', labelEn: 'Bathroom Remodels' },
    { id: 'new-construction', labelEs: 'Nueva Construcción', labelEn: 'New Construction' },
    { id: 'concrete', labelEs: 'Concreto & Patios', labelEn: 'Concrete & Patios' },
    { id: 'commercial', labelEs: 'Comercial & HVAC', labelEn: 'Commercial & HVAC' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300/60 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'Portafolio de Obras Reales' : 'Real Completed Works'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Nuestros Proyectos <span className="text-gold-gradient">Destacados</span>
              </>
            ) : (
              <>
                Our Featured <span className="text-gold-gradient">Project Portfolio</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'Explora nuestras obras residenciales y comerciales concluidas en Florida. Haz clic en cualquier proyecto para ver detalles y fotos en alta resolución.'
              : 'Explore residential and commercial builds completed across Florida. Click any project to inspect high-resolution details.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-950 text-white shadow-md border-b-2 border-[#C5A059]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {lang === 'es' ? cat.labelEs : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#C5A059] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 text-[10px] uppercase font-bold text-amber-300 tracking-wider shadow">
                  {lang === 'es' ? project.categoryLabel : project.categoryLabelEn}
                </div>

                {/* View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950/90 text-amber-300 border border-amber-400 font-bold text-xs shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Ver Detalles' : 'Inspect Project'}</span>
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-['Outfit'] leading-snug group-hover:text-[#996515] transition-colors mb-2">
                    {lang === 'es' ? project.title : project.titleEn}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {lang === 'es' ? project.description : project.descriptionEn}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {(lang === 'es' ? project.highlights : project.highlightsEn).slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[#996515]">
                        {h}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#996515] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'es' ? 'Detalles' : 'Details'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-black font-['Outfit'] text-white">
              {lang === 'es' ? '¿Tienes un proyecto en mente para tu propiedad?' : 'Have a custom project in mind for your property?'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {lang === 'es' 
                ? 'Ofrecemos asesoría directa con un especialista y presupuesto gratuito sin costo.'
                : 'Schedule a free consultation and customized written quote with our master builders.'}
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-black text-xs uppercase tracking-wider gold-glow hover:brightness-105 transition-all shrink-0 cursor-pointer shadow"
          >
            {lang === 'es' ? 'Solicitar Asesoría Gratuita' : 'Request Free Consultation'}
          </button>
        </div>

      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
          onRequestSimilar={(title) => onOpenQuoteModal(title)}
        />
      )}
    </section>
  );
};
