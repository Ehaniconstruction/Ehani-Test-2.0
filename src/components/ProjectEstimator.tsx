import React, { useState, useMemo } from 'react';
import { Language, EstimateOptions, EstimateResult } from '../types';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from 'lucide-react';

interface ProjectEstimatorProps {
  lang: Language;
  onProceedWithEstimate: (estimateSummary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  lang,
  onProceedWithEstimate,
}) => {
  const [options, setOptions] = useState<EstimateOptions>({
    serviceType: 'roofing',
    areaSize: 2200,
    finishTier: 'premium',
    urgentExecution: false,
    needsPermits: true,
    demolitionNeeded: true,
  });

  // Services pricing rules
  const serviceConfigs: Record<string, {
    nameEs: string;
    nameEn: string;
    unitLabel: string;
    defaultArea: number;
    minArea: number;
    maxArea: number;
    step: number;
    baseRatePerUnit: { standard: number; premium: number; luxury: number };
    daysPerUnit: number;
    baseDays: number;
  }> = {
    roofing: {
      nameEs: 'Techado & Re-Decking (Roofing)',
      nameEn: 'Roofing & Re-Decking Replacement',
      unitLabel: 'sq. ft.',
      defaultArea: 2400,
      minArea: 800,
      maxArea: 7500,
      step: 100,
      baseRatePerUnit: { standard: 4.80, premium: 6.75, luxury: 9.80 },
      daysPerUnit: 0.0006,
      baseDays: 1.5,
    },
    remodeling: {
      nameEs: 'Remodelación de Cocina / Hogar',
      nameEn: 'Kitchen & Home Remodeling',
      unitLabel: 'sq. ft.',
      defaultArea: 450,
      minArea: 150,
      maxArea: 3000,
      step: 25,
      baseRatePerUnit: { standard: 45.00, premium: 85.00, luxury: 145.00 },
      daysPerUnit: 0.015,
      baseDays: 6,
    },
    'new-construction': {
      nameEs: 'Nueva Construcción & Ampliaciones',
      nameEn: 'New Construction & Additions',
      unitLabel: 'sq. ft.',
      defaultArea: 1500,
      minArea: 400,
      maxArea: 6000,
      step: 50,
      baseRatePerUnit: { standard: 120.00, premium: 175.00, luxury: 260.00 },
      daysPerUnit: 0.04,
      baseDays: 30,
    },
    'hvac-windows': {
      nameEs: 'HVAC & Ventanas de Impacto',
      nameEn: 'HVAC & Hurricane Impact Windows',
      unitLabel: 'sq. ft.',
      defaultArea: 1800,
      minArea: 600,
      maxArea: 5000,
      step: 100,
      baseRatePerUnit: { standard: 14.00, premium: 24.00, luxury: 38.00 },
      daysPerUnit: 0.0012,
      baseDays: 2,
    },
    concrete: {
      nameEs: 'Concreto, Driveways & Patios',
      nameEn: 'Concrete Flatwork & Patios',
      unitLabel: 'sq. ft.',
      defaultArea: 850,
      minArea: 250,
      maxArea: 3500,
      step: 50,
      baseRatePerUnit: { standard: 9.50, premium: 14.20, luxury: 19.50 },
      daysPerUnit: 0.0025,
      baseDays: 2.5,
    },
    bathroom: {
      nameEs: 'Remodelación de Baño Completo',
      nameEn: 'Master & Guest Bathroom Remodel',
      unitLabel: 'sq. ft.',
      defaultArea: 95,
      minArea: 40,
      maxArea: 350,
      step: 5,
      baseRatePerUnit: { standard: 85.00, premium: 145.00, luxury: 220.00 },
      daysPerUnit: 0.04,
      baseDays: 5,
    },
  };

  const currentConfig = serviceConfigs[options.serviceType] || serviceConfigs.roofing;

  const result: EstimateResult = useMemo(() => {
    const rate = currentConfig.baseRatePerUnit[options.finishTier];
    let baseTotal = options.areaSize * rate;

    // Additions
    if (options.demolitionNeeded) {
      baseTotal += options.serviceType === 'bathroom' ? 1200 : options.areaSize * 1.10;
    }
    if (options.needsPermits) {
      baseTotal += 650;
    }
    if (options.urgentExecution) {
      baseTotal *= 1.15; // 15% rush crew fee
    }

    const minCost = Math.round(baseTotal * 0.93);
    const maxCost = Math.round(baseTotal * 1.08);

    const calcDays = currentConfig.baseDays + options.areaSize * currentConfig.daysPerUnit;
    const minDays = Math.max(1, Math.round(calcDays * (options.urgentExecution ? 0.75 : 0.9)));
    const maxDays = Math.max(minDays + 1, Math.round(calcDays * 1.2));

    const materials = Math.round(baseTotal * 0.52);
    const labor = Math.round(baseTotal * 0.40);
    const permitsAndPrep = Math.round(baseTotal - materials - labor);

    return {
      estimatedCostMin: minCost,
      estimatedCostMax: maxCost,
      estimatedDaysMin: minDays,
      estimatedDaysMax: maxDays,
      breakdown: {
        materials,
        labor,
        permitsAndSitePrep: Math.max(permitsAndPrep, 400),
      },
    };
  }, [options, currentConfig]);

  const handleSendEstimate = () => {
    const serviceName = lang === 'es' ? currentConfig.nameEs : currentConfig.nameEn;
    const summary = `${serviceName} - ${options.areaSize} ${currentConfig.unitLabel} (${options.finishTier.toUpperCase()}) | Est: $${result.estimatedCostMin.toLocaleString()} - $${result.estimatedCostMax.toLocaleString()}`;
    onProceedWithEstimate(summary);
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-100 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#DFBA5C]" />
            <span>{lang === 'es' ? 'Calculadora de Costos en Tiempo Real' : 'Real-Time Project Estimator'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Calcula el Presupuesto de tu <span className="text-gold-gradient">Proyecto en Segundos</span>
              </>
            ) : (
              <>
                Estimate Your Project <span className="text-gold-gradient">Budget in Seconds</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'Transparencia total. Selecciona tu servicio, dimensiones y nivel de acabado para obtener un estimado preliminar confiable.'
              : 'Complete transparency. Select your service, square footage, and finishing level to get an accurate preliminary range.'}
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80">
          
          {/* Left Configuration Controls */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Service Type Selector */}
            <div>
              <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-900 mb-2.5">
                {lang === 'es' ? '1. Tipo de Servicio:' : '1. Select Service Category:'}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(serviceConfigs).map(([key, config]) => {
                  const isSelected = options.serviceType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setOptions({ 
                        ...options, 
                        serviceType: key, 
                        areaSize: config.defaultArea 
                      })}
                      className={`p-3 rounded-xl border text-left font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-slate-900 text-white border-[#C5A059] shadow-md ring-2 ring-amber-400/30'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      <span>{lang === 'es' ? config.nameEs.split('/')[0] : config.nameEn.split('/')[0]}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#DFBA5C] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Area Dimension Slider & Direct Input */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-900">
                  {lang === 'es' ? '2. Área / Dimensión Estimada:' : '2. Estimated Project Area:'}
                </label>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-sm">
                  <input
                    type="number"
                    min={currentConfig.minArea}
                    max={currentConfig.maxArea}
                    step={currentConfig.step}
                    value={options.areaSize}
                    onChange={(e) => setOptions({ ...options, areaSize: Number(e.target.value) || currentConfig.minArea })}
                    className="w-20 text-right font-black text-slate-950 font-['Outfit'] text-sm focus:outline-none"
                  />
                  <span className="text-xs font-bold text-slate-500">{currentConfig.unitLabel}</span>
                </div>
              </div>

              <input
                type="range"
                min={currentConfig.minArea}
                max={currentConfig.maxArea}
                step={currentConfig.step}
                value={options.areaSize}
                onChange={(e) => setOptions({ ...options, areaSize: Number(e.target.value) })}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />

              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2">
                <span>{currentConfig.minArea} {currentConfig.unitLabel}</span>
                <span>Promedio: {currentConfig.defaultArea} {currentConfig.unitLabel}</span>
                <span>{currentConfig.maxArea} {currentConfig.unitLabel}</span>
              </div>
            </div>

            {/* 3. Finishing Tier (Standard, Premium, Luxury) */}
            <div>
              <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-900 mb-2.5">
                {lang === 'es' ? '3. Nivel de Materiales & Acabados:' : '3. Quality & Material Tier:'}
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'standard',
                    labelEs: 'Estándar',
                    labelEn: 'Standard',
                    descEs: 'Calidad certificada y funcional',
                    descEn: 'Code-compliant durable grade',
                  },
                  {
                    id: 'premium',
                    labelEs: 'Premium ★',
                    labelEn: 'Premium ★',
                    descEs: 'Alta durabilidad arquitectónica',
                    descEn: 'Architectural grade, popular choice',
                  },
                  {
                    id: 'luxury',
                    labelEs: 'Lujo VIP',
                    labelEn: 'Luxury VIP',
                    descEs: 'Gama alta con diseño custom',
                    descEn: 'Top-tier custom designer materials',
                  },
                ].map((tier) => {
                  const isSelected = options.finishTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setOptions({ ...options, finishTier: tier.id as any })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 text-white border-[#C5A059] shadow-md ring-2 ring-amber-400/20'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                      }`}
                    >
                      <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[#DFBA5C]' : 'text-slate-900'}`}>
                        {lang === 'es' ? tier.labelEs : tier.labelEn}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 leading-tight">
                        {lang === 'es' ? tier.descEs : tier.descEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Add-on Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={options.demolitionNeeded}
                  onChange={(e) => setOptions({ ...options, demolitionNeeded: e.target.checked })}
                  className="w-4 h-4 rounded text-[#C5A059] focus:ring-amber-400 accent-[#C5A059]"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'es' ? 'Incluir Demolición / Retiro' : 'Include Tear-off / Prep'}
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={options.needsPermits}
                  onChange={(e) => setOptions({ ...options, needsPermits: e.target.checked })}
                  className="w-4 h-4 rounded text-[#C5A059] focus:ring-amber-400 accent-[#C5A059]"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'es' ? 'Gestión de Permisos' : 'City Permits Filing'}
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                <input
                  type="checkbox"
                  checked={options.urgentExecution}
                  onChange={(e) => setOptions({ ...options, urgentExecution: e.target.checked })}
                  className="w-4 h-4 rounded text-[#C5A059] focus:ring-amber-400 accent-[#C5A059]"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'es' ? 'Ejecución Urgente (Rush)' : 'Rush Priority Crew'}
                </span>
              </label>
            </div>

          </div>

          {/* Right Estimate Summary Panel */}
          <div className="lg:col-span-5 bg-[#0B0F17] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  {lang === 'es' ? 'ESTIMADO PRELIMINAR' : 'PRELIMINARY ESTIMATE'}
                </span>
                <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-medium">
                  {lang === 'es' ? 'Sin Compromiso' : 'No Obligation'}
                </span>
              </div>

              {/* Main Price Range */}
              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-1">
                  {lang === 'es' ? 'Rango Estimado Total (Materiales + Mano de Obra):' : 'Estimated Total Range (Materials + Labor):'}
                </span>
                <div className="text-3xl sm:text-4xl font-black font-['Outfit'] text-gold-gradient tracking-tight">
                  ${result.estimatedCostMin.toLocaleString()} – ${result.estimatedCostMax.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  * {lang === 'es' ? 'Sujeto a confirmación tras inspección visual gratuita' : 'Subject to final measurement on free on-site visit'}
                </span>
              </div>

              {/* Estimated Timeframe */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-[#DFBA5C] flex items-center justify-center shrink-0 font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {lang === 'es' ? 'Tiempo Estimado de Obra:' : 'Estimated Completion Time:'}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {result.estimatedDaysMin} – {result.estimatedDaysMax} {lang === 'es' ? 'Días hábiles' : 'Business days'}
                  </span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2 border-t border-slate-800 pt-4 text-xs text-slate-300 mb-6">
                <div className="flex justify-between">
                  <span>{lang === 'es' ? 'Materiales Certificados (~52%):' : 'Certified Materials (~52%):'}</span>
                  <span className="font-bold text-white">${result.breakdown.materials.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'es' ? 'Mano de Obra Especializada (~40%):' : 'Master Craftsmanship (~40%):'}</span>
                  <span className="font-bold text-white">${result.breakdown.labor.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>{lang === 'es' ? 'Preparación de Sitio & Permisos:' : 'Site Prep & Permits:'}</span>
                  <span className="font-bold text-white">${result.breakdown.permitsAndSitePrep.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleSendEstimate}
                className="w-full py-4 px-5 rounded-xl bg-gold-gradient text-slate-950 font-black text-sm uppercase tracking-wider gold-glow hover:brightness-105 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{lang === 'es' ? 'Confirmar Estimado con Visita Gratis' : 'Lock in Estimate & Book Free Visit'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DFBA5C]" />
                <span>{lang === 'es' ? 'Presupuesto por escrito garantizado sin letra chica' : 'Guaranteed written quote with no surprise fees'}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
