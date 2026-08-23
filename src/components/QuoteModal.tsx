import React, { useState } from 'react';
import { Language, ContactFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../lib/content';
import { X, Send, CheckCircle2, ShieldCheck, Phone, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  initialService?: string;
  lang: Language;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialService = 'roofing',
  lang,
  onClose,
}) => {
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
    serviceDetails: initialService ? `Service Requested: ${initialService}\n` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 max-h-[90vh] flex flex-col text-left">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0B0F17] text-white flex items-center justify-between border-b border-[#2A2213] shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DFBA5C]" />
            <h3 className="text-base sm:text-lg font-black font-['Outfit'] text-white">
              {lang === 'es' ? 'Solicitud de Estimado Gratuito' : 'Free Estimate Request Form'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black font-['Outfit'] text-slate-950">
                {lang === 'es' ? '¡Solicitud Registrada!' : 'Request Registered!'}
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                {lang === 'es'
                  ? `Muchas gracias, ${formData.firstName} ${formData.lastName}. Uno de nuestros estimadores asignados te contactará al ${formData.phone} para coordinar la inspección técnica sin costo.`
                  : `Thank you, ${formData.firstName} ${formData.lastName}. Our estimator will contact you at ${formData.phone} to coordinate the free technical inspection.`}
              </p>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Listo / Cerrar' : 'Done / Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 flex items-center gap-2 text-xs text-[#7A4F0B]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>
                  {lang === 'es' 
                    ? 'Inspección 100% gratuita en Florida. Precios claros por contrato.' 
                    : '100% Free on-site inspection. Fixed contract pricing.'}
                </span>
              </div>

              {/* 1. Name * (First and Last) */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Phone * & Email * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              {/* 3. Please list your client account number: */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Please list your client account number:
                </label>
                <input
                  type="text"
                  value={formData.clientAccountNumber}
                  onChange={(e) => setFormData({ ...formData, clientAccountNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              {/* 4. Is this a residential property or a commercial property? * */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Is this a residential property or a commercial property? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="modalPropertyType"
                      value="Residential"
                      checked={formData.propertyType === 'Residential'}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                    />
                    <span>Residential</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="modalPropertyType"
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
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              {/* 6. Subdivision/Community Name * & Is this a gated community? */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Subdivision/Community Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subdivisionCommunity}
                    onChange={(e) => setFormData({ ...formData, subdivisionCommunity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Is this a gated community?
                  </label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalIsGatedCommunity"
                        value="Yes"
                        checked={formData.isGatedCommunity === 'Yes'}
                        onChange={(e) => setFormData({ ...formData, isGatedCommunity: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalIsGatedCommunity"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Are you the owner or tenant? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalOwnerOrTenant"
                        value="Owner"
                        checked={formData.ownerOrTenant === 'Owner'}
                        onChange={(e) => setFormData({ ...formData, ownerOrTenant: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Owner</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalOwnerOrTenant"
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
                  <label className="block text-xs font-semibold text-slate-800 mb-2 leading-snug">
                    Do you have any pets in the home? If yes, make sure your animals are put away during the appointment if they are not friendly <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalHasPets"
                        value="Yes"
                        checked={formData.hasPets === 'Yes'}
                        onChange={(e) => setFormData({ ...formData, hasPets: e.target.value })}
                        className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="modalHasPets"
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
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  What is the age of the home, or how long have you lived in the home? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.homeAgeOrDuration}
                  onChange={(e) => setFormData({ ...formData, homeAgeOrDuration: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              {/* 9. Time requesting service: * & Date requesting service: * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Time requesting service: <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.timeRequestingService}
                    onChange={(e) => setFormData({ ...formData, timeRequestingService: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
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
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Date requesting service: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateRequestingService}
                    onChange={(e) => setFormData({ ...formData, dateRequestingService: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              {/* 10. Are you flexible? (Open to having appointment moved around) * */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Are you flexible? (Open to having appointment moved around) <span className="text-red-500">*</span>
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="modalIsFlexible"
                      value="Yes"
                      checked={formData.isFlexible === 'Yes'}
                      onChange={(e) => setFormData({ ...formData, isFlexible: e.target.value })}
                      className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="modalIsFlexible"
                      value="No"
                      checked={formData.isFlexible === 'No'}
                      onChange={(e) => setFormData({ ...formData, isFlexible: e.target.value })}
                      className="w-4 h-4 text-[#C5A059] border-slate-300 focus:ring-[#C5A059] accent-[#C5A059]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* 11. Service requested in detail */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5 leading-relaxed">
                  Service requested in detail. Is this on-going issues, possible recall, exact location of issue (dept). If equipment, please provide make, model, size, and last maintenance or repair if available. <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.serviceDetails}
                  onChange={(e) => setFormData({ ...formData, serviceDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#C5A059] focus:bg-white focus:ring-1 focus:ring-[#C5A059] resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-slate-950 font-black text-xs uppercase tracking-wider gold-glow hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
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
            </form>
          )}
        </div>

        {/* Modal Bottom Contact info */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span className="flex items-center gap-1.5 font-bold text-slate-800">
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{COMPANY_INFO.phone}</span>
          </span>
          <span className="text-[11px] text-slate-500">
            {lang === 'es' ? 'Atención Lunes a Sábado 7am - 7pm' : 'Mon-Sat 7am - 7pm'}
          </span>
        </div>

      </div>
    </div>
  );
};
