import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../lib/content';
import { Language, ContactFormData } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageSquareText,
  Calendar
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, prefilledService = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    clientAccountNumber: '',
    propertyType: 'Residential',
    address: '',
    subdivisionCommunity: '',
    isGatedCommunity: 'No',
    ownerOrTenant: 'Owner',
    hasPets: 'No',
    homeAgeOrDuration: '',
    timeRequestingService: '',
    dateRequestingService: '',
    isFlexible: 'Yes',
    serviceDetails: prefilledService ? `Service Requested: ${prefilledService}\n` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ 
        ...prev, 
        serviceDetails: prev.serviceDetails ? `${prev.serviceDetails}\nService Requested: ${prefilledService}` : `Service Requested: ${prefilledService}\n` 
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate immediate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-[#996515] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{lang === 'es' ? 'Atención Inmediata' : 'Free Estimate Form'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Outfit'] tracking-tight">
            {lang === 'es' ? (
              <>
                Solicitud de <span className="text-gold-gradient">Estimado Gratuito</span>
              </>
            ) : (
              <>
                Request a <span className="text-gold-gradient">Free Estimate</span>
              </>
            )}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {lang === 'es'
              ? 'Por favor completa la información a continuación para agendar tu inspección técnica sin costo.'
              : 'Please provide the details below to schedule your complimentary on-site inspection and quote.'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full text-left sticky top-24">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 block mb-2">
                {lang === 'es' ? 'CANALES DIRECTOS' : 'DIRECT CHANNELS'}
              </span>

              <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white mb-6">
                {lang === 'es' ? 'Estamos Listos Para Tu Próxima Obra' : 'Ready to Bring Your Vision to Life'}
              </h3>

              {/* Direct Info List */}
              <div className="space-y-5 text-sm text-slate-300">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-gold-gradient text-slate-950 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{lang === 'es' ? 'Línea Directa / Cotizaciones:' : 'Direct Phone / Quotes:'}</span>
                    <strong className="text-base text-white group-hover:text-amber-300 transition-colors">{COMPANY_INFO.phone}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-amber-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 text-[#DFBA5C] border border-amber-400/40 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{lang === 'es' ? 'Correo Electrónico:' : 'Email Address:'}</span>
                    <strong className="text-sm text-white group-hover:text-amber-300 transition-colors">{COMPANY_INFO.email}</strong>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-[#DFBA5C] border border-amber-400/40 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{lang === 'es' ? 'Cobertura Principal:' : 'Service Coverage:'}</span>
                    <span className="text-xs text-slate-200 block mt-0.5">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-[#DFBA5C] border border-amber-400/40 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{lang === 'es' ? 'Horario de Atención:' : 'Operating Hours:'}</span>
                    <span className="text-xs text-slate-200 block mt-0.5">{lang === 'es' ? COMPANY_INFO.businessHours : COMPANY_INFO.businessHoursEn}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-300">
              <span className="text-amber-400 font-bold block mb-1">
                {lang === 'es' ? 'ÁREAS DE COBERTURA EN FLORIDA:' : 'FLORIDA SERVICE COVERAGE:'}
              </span>
              <span>{COMPANY_INFO.serviceAreas.join(' • ')}</span>
            </div>

          </div>

          {/* Right Column: Exact Free Estimate Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl text-left">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black font-['Outfit'] text-slate-950">
                  {lang === 'es' ? '¡Solicitud Recibida con Éxito!' : 'Estimate Request Submitted!'}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  {lang === 'es'
                    ? `Gracias ${formData.firstName} ${formData.lastName}. Nos pondremos en contacto contigo al teléfono ${formData.phone} o al correo ${formData.email} para confirmar tu cita de inspección.`
                    : `Thank you ${formData.firstName} ${formData.lastName}. We will contact you at ${formData.phone} or ${formData.email} to confirm your inspection appointment.`}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {lang === 'es' ? 'Enviar Otra Solicitud' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name * (First and Last) */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Phone * & Email * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Please list your client account number: */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Please list your client account number:
                  </label>
                  <input
                    type="text"
                    value={formData.clientAccountNumber}
                    onChange={(e) => setFormData({ ...formData, clientAccountNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                {/* 4. Is this a residential property or a commercial property? * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2.5">
                    Is this a residential property or a commercial property? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="propertyType"
                        value="Residential"
                        checked={formData.propertyType === 'Residential'}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Residential</span>
                    </label>
                    <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="propertyType"
                        value="Commercial"
                        checked={formData.propertyType === 'Commercial'}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Commercial</span>
                    </label>
                  </div>
                </div>

                {/* 5. Address */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                {/* 6. Subdivision/Community Name * & Is this a gated community? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Subdivision/Community Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subdivisionCommunity}
                      onChange={(e) => setFormData({ ...formData, subdivisionCommunity: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2.5">
                      Is this a gated community?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="isGatedCommunity"
                          value="Yes"
                          checked={formData.isGatedCommunity === 'Yes'}
                          onChange={(e) => setFormData({ ...formData, isGatedCommunity: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="isGatedCommunity"
                          value="No"
                          checked={formData.isGatedCommunity === 'No'}
                          onChange={(e) => setFormData({ ...formData, isGatedCommunity: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* 7. Are you the owner or tenant? * & Pets in the home */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2.5">
                      Are you the owner or tenant? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="ownerOrTenant"
                          value="Owner"
                          checked={formData.ownerOrTenant === 'Owner'}
                          onChange={(e) => setFormData({ ...formData, ownerOrTenant: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>Owner</span>
                      </label>
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="ownerOrTenant"
                          value="Tenant"
                          checked={formData.ownerOrTenant === 'Tenant'}
                          onChange={(e) => setFormData({ ...formData, ownerOrTenant: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>Tenant</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2.5 leading-snug">
                      Do you have any pets in the home? If yes, make sure your animals are put away during the appointment if they are not friendly <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="hasPets"
                          value="Yes"
                          checked={formData.hasPets === 'Yes'}
                          onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="hasPets"
                          value="No"
                          checked={formData.hasPets === 'No'}
                          onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}
                          className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* 8. What is the age of the home, or how long have you lived in the home? * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    What is the age of the home, or how long have you lived in the home? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.homeAgeOrDuration}
                    onChange={(e) => setFormData({ ...formData, homeAgeOrDuration: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                  />
                </div>

                {/* 9. Time requesting service: * & Date requesting service: * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Time requesting service: <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.timeRequestingService}
                      onChange={(e) => setFormData({ ...formData, timeRequestingService: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                    >
                      <option value="">Select A Time (overtime rates apply after hours/weekends)</option>
                      <option value="Morning (8:00 AM - 10:00 AM)">Morning (8:00 AM - 10:00 AM)</option>
                      <option value="Late Morning (10:00 AM - 12:00 PM)">Late Morning (10:00 AM - 12:00 PM)</option>
                      <option value="Early Afternoon (12:00 PM - 2:00 PM)">Early Afternoon (12:00 PM - 2:00 PM)</option>
                      <option value="Late Afternoon (2:00 PM - 4:00 PM)">Late Afternoon (2:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                      <option value="Anytime during business hours">Anytime during business hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Date requesting service: <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateRequestingService}
                      onChange={(e) => setFormData({ ...formData, dateRequestingService: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>
                </div>

                {/* 10. Are you flexible? (Open to having appointment moved around) * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2.5">
                    Are you flexible? (Open to having appointment moved around) <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="isFlexible"
                        value="Yes"
                        checked={formData.isFlexible === 'Yes'}
                        onChange={(e) => setFormData({ ...formData, isFlexible: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="isFlexible"
                        value="No"
                        checked={formData.isFlexible === 'No'}
                        onChange={(e) => setFormData({ ...formData, isFlexible: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* 11. Service requested in detail. Is this on-going issues, possible recall, exact location of issue (dept). If equipment, please provide make, model, size, and last maintenance or repair if available. * */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2 leading-relaxed">
                    Service requested in detail. Is this on-going issues, possible recall, exact location of issue (dept). If equipment, please provide make, model, size, and last maintenance or repair if available. <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.serviceDetails}
                    onChange={(e) => setFormData({ ...formData, serviceDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gold-gradient text-slate-950 font-black text-sm uppercase tracking-wider gold-glow hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{lang === 'es' ? 'Enviar Solicitud de Estimado' : 'Submit Free Estimate Request'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  {lang === 'es' 
                    ? 'Tus datos son 100% privados y nunca serán compartidos con terceros.' 
                    : 'Your information is 100% confidential and will never be shared.'}
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
