export type Language = 'es' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  iconName: string;
  badge: string;
  badgeEn: string;
  features: string[];
  featuresEn: string[];
  materials: string[];
  materialsEn: string[];
  heroImage: string;
  galleryImages: string[];
  estimatedTime: string;
  estimatedTimeEn: string;
  pricingRange: string;
  pricingRangeEn: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'roofing' | 'concrete' | 'bathroom' | 'commercial' | 'framing' | 'remodeling' | 'new-construction';
  categoryLabel: string;
  categoryLabelEn: string;
  location: string;
  duration: string;
  durationEn: string;
  image: string;
  gallery: string[];
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  roleEn: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  commentEn: string;
  projectType: string;
  projectTypeEn: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
  categoryEn: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  details: string[];
  detailsEn: string[];
}

export interface EstimateOptions {
  serviceType: string;
  areaSize: number; // in sq ft
  finishTier: 'standard' | 'premium' | 'luxury';
  urgentExecution: boolean;
  needsPermits: boolean;
  demolitionNeeded: boolean;
}

export interface EstimateResult {
  estimatedCostMin: number;
  estimatedCostMax: number;
  estimatedDaysMin: number;
  estimatedDaysMax: number;
  breakdown: {
    materials: number;
    labor: number;
    permitsAndSitePrep: number;
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  fullName?: string;
  phone: string;
  email: string;
  clientAccountNumber?: string;
  propertyType?: 'Residential' | 'Commercial' | string;
  address?: string;
  subdivisionCommunity?: string;
  isGatedCommunity?: 'Yes' | 'No' | string;
  ownerOrTenant?: 'Owner' | 'Tenant' | string;
  hasPets?: 'Yes' | 'No' | string;
  homeAgeOrDuration?: string;
  timeRequestingService?: string;
  dateRequestingService?: string;
  isFlexible?: 'Yes' | 'No' | string;
  serviceDetails?: string;
  serviceInterest?: string;
  projectAddress?: string;
  projectTimeline?: string;
  projectDescription?: string;
  estimatedBudget?: string;
  preferredContactMethod?: 'phone' | 'email' | 'whatsapp';
}
