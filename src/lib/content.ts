import { ServiceItem, ProjectItem, TestimonialItem, FaqItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: 'Ehani Construction',
  legalName: 'Ehani Construction Group LLC',
  tagline: 'Florida Certified General Contractor (CGC: 1541118)',
  taglineEn: 'Florida Certified General Contractor (CGC: 1541118)',
  subTagline: 'Remodeling, New Construction, Specialty Roofing, HVAC & General Contracting Across Florida',
  subTaglineEn: 'Remodeling, New Construction, Specialty Roofing, HVAC & General Contracting Across Florida',
  phone: '(850) 800-6118',
  phoneRaw: '+18508006118',
  email: 'info@ehaniconstruction.com',
  secondaryEmail: 'contact@ehaniconstruction.com',
  website: 'https://ehaniconstruction.com',
  address: 'South Florida • Miami-Dade, Broward & Palm Beach Counties',
  serviceAreas: [
    'Miami-Dade County (Miami, Coral Gables, Doral, Kendall, Aventura, Miami Beach)',
    'Broward County (Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Pompano Beach)',
    'Palm Beach County (West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Jupiter)'
  ],
  serviceAreasEn: [
    'Miami-Dade County (Miami, Coral Gables, Doral, Kendall, Aventura, Miami Beach)',
    'Broward County (Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Pompano Beach)',
    'Palm Beach County (West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Jupiter)'
  ],
  businessHours: 'Monday to Saturday: 7:00 AM – 7:00 PM (Emergency & Storm Response Available)',
  businessHoursEn: 'Monday to Saturday: 7:00 AM – 7:00 PM (Emergency & Storm Response Available)',
  licenseNumber: 'CGC: 1541118',
  licenseState: 'Florida State Certified General Contractor',
  insuranceCoverage: 'Fully Licensed, Bonded & $2,000,000 Insured • Workers Comp & General Liability',
  financingInfo: 'Flexible Financing Available Through Renew Financial & RenewPACE',
  establishedYear: '2012',
  completedProjects: '1,500+',
  warrantyYears: '10 to 25-Year Written Workmanship & Manufacturer Warranties',
  warrantyYearsEn: '10 to 25-Year Written Workmanship & Manufacturer Warranties',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'remodeling',
    title: 'Home Remodeling & Renovations',
    titleEn: 'Home Remodeling & Renovations',
    shortDescription: 'Kitchen and bathroom upgrades, custom cabinetry, luxury countertops, whole-house renovations, and room additions.',
    shortDescriptionEn: 'Kitchen and bathroom upgrades, custom cabinetry, luxury countertops, whole-house renovations, and room additions.',
    fullDescription: 'We transform homes with high-end craftsmanship tailored to your lifestyle. From open-concept kitchen reconfigurations and custom spa-like bathrooms to full interior renovations and spacious room additions, we manage every trade with precision and attention to detail.',
    fullDescriptionEn: 'We transform homes with high-end craftsmanship tailored to your lifestyle. From open-concept kitchen reconfigurations and custom spa-like bathrooms to full interior renovations and spacious room additions, we manage every trade with precision and attention to detail.',
    iconName: 'Bath',
    badge: 'Premier Remodeling',
    badgeEn: 'Premier Remodeling',
    features: [
      'Kitchen remodeling: custom cabinets, quartz/granite islands & backsplashes',
      'Luxury bathroom upgrades: curbless walk-in showers & freestanding tubs',
      'Structural wall removals & open-concept floor plan reconfigurations',
      'Whole-house interior & exterior architectural renovations',
      'Turnkey room additions, master suites & Florida room expansions'
    ],
    featuresEn: [
      'Kitchen remodeling: custom cabinets, quartz/granite islands & backsplashes',
      'Luxury bathroom upgrades: curbless walk-in showers & freestanding tubs',
      'Structural wall removals & open-concept floor plan reconfigurations',
      'Whole-house interior & exterior architectural renovations',
      'Turnkey room additions, master suites & Florida room expansions'
    ],
    materials: ['Custom Wood Cabinetry', 'Calacatta Quartz & Granite', 'Large-Format Porcelain Tile', 'Schlüter Waterproofing Systems'],
    materialsEn: ['Custom Wood Cabinetry', 'Calacatta Quartz & Granite', 'Large-Format Porcelain Tile', 'Schlüter Waterproofing Systems'],
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '7 to 21 business days',
    estimatedTimeEn: '7 to 21 business days',
    pricingRange: '$8,000 – $45,000+',
    pricingRangeEn: '$8,000 – $45,000+',
  },
  {
    id: 'new-construction',
    title: 'New Construction & Custom Builds',
    titleEn: 'New Construction & Custom Builds',
    shortDescription: 'Custom single-family home construction and commercial building projects from initial permitting to final walkthrough.',
    shortDescriptionEn: 'Custom single-family home construction and commercial building projects from initial permitting to final walkthrough.',
    fullDescription: 'As a Florida Certified General Contractor (CGC: 1541118), Ehani Construction delivers ground-up residential custom homes and commercial facilities. We handle full architectural coordination, engineering, state & local permitting, foundation pouring, framing, mechanicals, and premium finishes.',
    fullDescriptionEn: 'As a Florida Certified General Contractor (CGC: 1541118), Ehani Construction delivers ground-up residential custom homes and commercial facilities. We handle full architectural coordination, engineering, state & local permitting, foundation pouring, framing, mechanicals, and premium finishes.',
    iconName: 'Building2',
    badge: 'Certified General Contractor',
    badgeEn: 'Certified General Contractor',
    features: [
      'Full turnkey single-family custom home design and building',
      'Commercial building construction & tenant build-outs',
      'End-to-end Florida building code compliance & permitting management',
      'Engineered monolithic slab foundations & structural masonry/framing',
      'Detailed project milestones, schedule adherence & weekly owner updates'
    ],
    featuresEn: [
      'Full turnkey single-family custom home design and building',
      'Commercial building construction & tenant build-outs',
      'End-to-end Florida building code compliance & permitting management',
      'Engineered monolithic slab foundations & structural masonry/framing',
      'Detailed project milestones, schedule adherence & weekly owner updates'
    ],
    materials: ['Engineered Concrete Foundations', 'Impact-Rated Structural Glass', 'Steel & Wood Framing', 'Architectural Stucco & Siding'],
    materialsEn: ['Engineered Concrete Foundations', 'Impact-Rated Structural Glass', 'Steel & Wood Framing', 'Architectural Stucco & Siding'],
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '3 to 8 months',
    estimatedTimeEn: '3 to 8 months',
    pricingRange: 'Custom Estimate by Blueprint',
    pricingRangeEn: 'Custom Estimate by Blueprint',
  },
  {
    id: 'roofing',
    title: 'Specialty Roofing & Re-Decking',
    titleEn: 'Specialty Roofing & Re-Decking',
    shortDescription: 'Roof replacement, re-decking, structural rafter repairs, shingle installations, flat roofs, and storm damage restoration.',
    shortDescriptionEn: 'Roof replacement, re-decking, structural rafter repairs, shingle installations, flat roofs, and storm damage restoration.',
    fullDescription: 'Florida roofs face intense heat, high humidity, and severe hurricane-force winds. We specialize in comprehensive roofing systems: complete tear-offs, rotted plywood deck replacement (re-decking), rafter structural bracing, architectural shingles, flat TPO/EPDM membranes, and standing seam metal roofs.',
    fullDescriptionEn: 'Florida roofs face intense heat, high humidity, and severe hurricane-force winds. We specialize in comprehensive roofing systems: complete tear-offs, rotted plywood deck replacement (re-decking), rafter structural bracing, architectural shingles, flat TPO/EPDM membranes, and standing seam metal roofs.',
    iconName: 'ShieldAlert',
    badge: 'Hurricane-Resistant',
    badgeEn: 'Hurricane-Resistant',
    features: [
      'Complete roof replacement & emergency storm damage repairs',
      'Full roof deck repair, re-decking & rotted fascia replacement',
      'Architectural asphalt shingles with enhanced wind & algae resistance',
      'Commercial & residential flat roof TPO/EPDM membrane installations',
      'Renew Financial & RenewPACE financing available with $0 down'
    ],
    featuresEn: [
      'Complete roof replacement & emergency storm damage repairs',
      'Full roof deck repair, re-decking & rotted fascia replacement',
      'Architectural asphalt shingles with enhanced wind & algae resistance',
      'Commercial & residential flat roof TPO/EPDM membrane installations',
      'Renew Financial & RenewPACE financing available with $0 down'
    ],
    materials: ['GAF Timberline HDZ (Florida Wind-Rated)', 'Owens Corning Duration', 'TPO Reflective Membranes', 'Standing Seam Metal Panels'],
    materialsEn: ['GAF Timberline HDZ (Florida Wind-Rated)', 'Owens Corning Duration', 'TPO Reflective Membranes', 'Standing Seam Metal Panels'],
    heroImage: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '1 to 3 business days',
    estimatedTimeEn: '1 to 3 business days',
    pricingRange: '$4.50 – $9.80 per sq. ft.',
    pricingRangeEn: '$4.50 – $9.80 per sq. ft.',
  },
  {
    id: 'hvac-windows',
    title: 'HVAC, Windows & Impact Doors',
    titleEn: 'HVAC, Windows & Impact Doors',
    shortDescription: 'High-efficiency AC systems, hurricane impact-resistant windows and sliding glass doors with PACE financing.',
    shortDescriptionEn: 'High-efficiency AC systems, hurricane impact-resistant windows and sliding glass doors with PACE financing.',
    fullDescription: 'Upgrade your Florida property’s comfort and storm resilience. We install high-SEER energy-efficient central AC units, ductwork replacements, and heavy-duty hurricane impact windows and sliding glass doors that lower energy bills and protect against tropical storms.',
    fullDescriptionEn: 'Upgrade your Florida property’s comfort and storm resilience. We install high-SEER energy-efficient central AC units, ductwork replacements, and heavy-duty hurricane impact windows and sliding glass doors that lower energy bills and protect against tropical storms.',
    iconName: 'Wind',
    badge: 'Energy Star & Impact',
    badgeEn: 'Energy Star & Impact',
    features: [
      'High-efficiency HVAC and central air conditioning installations',
      'Impact-resistant hurricane windows and insulated glass packages',
      'Custom exterior impact entry doors and multi-slide patio doors',
      'Improved indoor air quality, humidity control & energy savings',
      'Eligible for 100% financing through Renew Financial PACE'
    ],
    featuresEn: [
      'High-efficiency HVAC and central air conditioning installations',
      'Impact-resistant hurricane windows and insulated glass packages',
      'Custom exterior impact entry doors and multi-slide patio doors',
      'Improved indoor air quality, humidity control & energy savings',
      'Eligible for 100% financing through Renew Financial PACE'
    ],
    materials: ['Carrier / Trane / Goodman HVAC', 'CGI & PGT Impact Windows', 'Low-E Argon Glass', 'Heavy-Duty Aluminum Frames'],
    materialsEn: ['Carrier / Trane / Goodman HVAC', 'CGI & PGT Impact Windows', 'Low-E Argon Glass', 'Heavy-Duty Aluminum Frames'],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '2 to 5 business days',
    estimatedTimeEn: '2 to 5 business days',
    pricingRange: '$3,500 – $18,000+',
    pricingRangeEn: '$3,500 – $18,000+',
  },
  {
    id: 'concrete',
    title: 'Concrete Flatwork, Patios & Driveways',
    titleEn: 'Concrete Flatwork, Patios & Driveways',
    shortDescription: 'Concrete pouring, stamped decorative patios, reinforced driveways, structural foundations, and repair.',
    shortDescriptionEn: 'Concrete pouring, stamped decorative patios, reinforced driveways, structural foundations, and repair.',
    fullDescription: 'High-strength structural and decorative concrete solutions. We pour monolithic slabs, replace cracked driveways, build beautiful stamped concrete patios with slate or cobblestone textures, and perform structural concrete restoration.',
    fullDescriptionEn: 'High-strength structural and decorative concrete solutions. We pour monolithic slabs, replace cracked driveways, build beautiful stamped concrete patios with slate or cobblestone textures, and perform structural concrete restoration.',
    iconName: 'Layers',
    badge: 'Heavy-Duty Structural',
    badgeEn: 'Heavy-Duty Structural',
    features: [
      '3,500 to 4,500 PSI pre-mixed concrete with rebar grid reinforcement',
      'Stamped, broom, and exposed aggregate decorative patio finishes',
      'Driveway removal, soil compaction and reinforced replacement',
      'Balcony structural repair, epoxy crack injection and sealing',
      'Laser-calibrated grading for flawless storm drainage'
    ],
    featuresEn: [
      '3,500 to 4,500 PSI pre-mixed concrete with rebar grid reinforcement',
      'Stamped, broom, and exposed aggregate decorative patio finishes',
      'Driveway removal, soil compaction and reinforced replacement',
      'Balcony structural repair, epoxy crack injection and sealing',
      'Laser-calibrated grading for flawless storm drainage'
    ],
    materials: ['Portland Cement Type I/II', 'Integral UV Color Pigments', 'Heavy Rebar Reinforcement', 'Commercial Polyurethane Sealers'],
    materialsEn: ['Portland Cement Type I/II', 'Integral UV Color Pigments', 'Heavy Rebar Reinforcement', 'Commercial Polyurethane Sealers'],
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '3 to 6 business days',
    estimatedTimeEn: '3 to 6 business days',
    pricingRange: '$8.50 – $18.00 per sq. ft.',
    pricingRangeEn: '$8.50 – $18.00 per sq. ft.',
  },
  {
    id: 'flooring-waterproofing',
    title: 'Flooring, Tile & Waterproofing',
    titleEn: 'Flooring, Tile & Waterproofing',
    shortDescription: 'Large-format porcelain, luxury vinyl plank (LVP), natural marble, waterproof balcony coatings, and moisture barriers.',
    shortDescriptionEn: 'Large-format porcelain, luxury vinyl plank (LVP), natural marble, waterproof balcony coatings, and moisture barriers.',
    fullDescription: 'Flawless surface installations with premium waterproofing membranes. We install large-format porcelain tile, elegant natural stone, waterproof luxury vinyl plank, and commercial elastomeric waterproofing systems for balconies and wet areas.',
    fullDescriptionEn: 'Flawless surface installations with premium waterproofing membranes. We install large-format porcelain tile, elegant natural stone, waterproof luxury vinyl plank, and commercial elastomeric waterproofing systems for balconies and wet areas.',
    iconName: 'Sparkles',
    badge: 'Precision Finish',
    badgeEn: 'Precision Finish',
    features: [
      'Large-format rectified porcelain (24x48) & natural Italian marble',
      '100% waterproof luxury vinyl plank (LVP) for high-traffic zones',
      'Subfloor leveling, crack-isolation membranes & uncoupling systems',
      'Balcony & deck traffic-coating elastomeric waterproofing',
      'Commercial & residential precision grout application & anti-stain seals'
    ],
    featuresEn: [
      'Large-format rectified porcelain (24x48) & natural Italian marble',
      '100% waterproof luxury vinyl plank (LVP) for high-traffic zones',
      'Subfloor leveling, crack-isolation membranes & uncoupling systems',
      'Balcony & deck traffic-coating elastomeric waterproofing',
      'Commercial & residential precision grout application & anti-stain seals'
    ],
    materials: ['Porcelain 24x48 Tiles', 'Schlüter-DITRA Membrane', 'LVP 20-mil Wear Layer', 'Epoxy High-Performance Grout'],
    materialsEn: ['Porcelain 24x48 Tiles', 'Schlüter-DITRA Membrane', 'LVP 20-mil Wear Layer', 'Epoxy High-Performance Grout'],
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80'
    ],
    estimatedTime: '2 to 7 business days',
    estimatedTimeEn: '2 to 7 business days',
    pricingRange: '$5.50 – $14.00 per sq. ft.',
    pricingRangeEn: '$5.50 – $14.00 per sq. ft.',
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-roof-1',
    title: 'Complete Roof Replacement & Re-Decking Restoration',
    titleEn: 'Complete Roof Replacement & Re-Decking Restoration',
    category: 'roofing',
    categoryLabel: 'Roofing & Re-Decking',
    categoryLabelEn: 'Roofing & Re-Decking',
    location: 'Miami, FL (Miami-Dade County)',
    duration: '2 Days',
    durationEn: '2 Days',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Full tear-off of 3,400 sq ft storm-damaged shingles, replacement of 22 damaged decking sheets, rafter structural reinforcement, and installation of GAF HDZ lifetime wind-rated shingles with ice & water shield.',
    descriptionEn: 'Full tear-off of 3,400 sq ft storm-damaged shingles, replacement of 22 damaged decking sheets, rafter structural reinforcement, and installation of GAF HDZ lifetime wind-rated shingles with ice & water shield.',
    highlights: ['3,400 sq. ft.', 'GAF Charcoal Architectural', 'Full Re-Decking Done', '50-Year System Warranty'],
    highlightsEn: ['3,400 sq. ft.', 'GAF Charcoal Architectural', 'Full Re-Decking Done', '50-Year System Warranty'],
    featured: true,
  },
  {
    id: 'proj-kitchen-1',
    title: 'Modern Open-Concept Kitchen Remodel & Custom Island',
    titleEn: 'Modern Open-Concept Kitchen Remodel & Custom Island',
    category: 'remodeling',
    categoryLabel: 'Kitchen Remodeling',
    categoryLabelEn: 'Kitchen Remodeling',
    location: 'Fort Lauderdale, FL (Broward County)',
    duration: '12 Days',
    durationEn: '12 Days',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Complete transformation of kitchen space including load-bearing wall removal, solid wood soft-close shaker cabinetry, Calacatta quartz waterfall island, under-cabinet LED lighting, and concealed appliance layout.',
    descriptionEn: 'Complete transformation of kitchen space including load-bearing wall removal, solid wood soft-close shaker cabinetry, Calacatta quartz waterfall island, under-cabinet LED lighting, and concealed appliance layout.',
    highlights: ['Waterfall Quartz Island', 'Custom Shaker Cabinets', 'Recessed Smart Lighting', 'Luxury Tile Flooring'],
    highlightsEn: ['Waterfall Quartz Island', 'Custom Shaker Cabinets', 'Recessed Smart Lighting', 'Luxury Tile Flooring'],
    featured: true,
  },
  {
    id: 'proj-bath-1',
    title: 'Luxury Master Bathroom Remodel with Curbless Walk-in Shower',
    titleEn: 'Luxury Master Bathroom Remodel with Curbless Walk-in Shower',
    category: 'bathroom',
    categoryLabel: 'Bathroom Remodel',
    categoryLabelEn: 'Bathroom Remodel',
    location: 'Boca Raton, FL (Palm Beach County)',
    duration: '9 Days',
    durationEn: '9 Days',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Master bathroom overhaul featuring large-format 24x48 porcelain tiles, zero-threshold curbless shower with Schlüter-Kerdi waterproofing, brushed brass fixtures, and double vanity with backlit mirrors.',
    descriptionEn: 'Master bathroom overhaul featuring large-format 24x48 porcelain tiles, zero-threshold curbless shower with Schlüter-Kerdi waterproofing, brushed brass fixtures, and double vanity with backlit mirrors.',
    highlights: ['24x48 Porcelain', 'Brushed Brass Fixtures', 'Frameless 10mm Glass', 'Schlüter-Kerdi Membrane'],
    highlightsEn: ['24x48 Porcelain', 'Brushed Brass Fixtures', 'Frameless 10mm Glass', 'Schlüter-Kerdi Membrane'],
    featured: true,
  },
  {
    id: 'proj-new-1',
    title: 'Custom Single-Family Coastal Home Construction',
    titleEn: 'Custom Single-Family Coastal Home Construction',
    category: 'new-construction',
    categoryLabel: 'New Construction',
    categoryLabelEn: 'New Construction',
    location: 'Miami Beach, FL (Miami-Dade County)',
    duration: '6 Months',
    durationEn: '6 Months',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Turnkey 4,200 sq ft custom home build with reinforced pilings, hurricane impact windows and sliding glass doors, metal standing seam roofing, and open-concept high-ceiling living spaces.',
    descriptionEn: 'Turnkey 4,200 sq ft custom home build with reinforced pilings, hurricane impact windows and sliding glass doors, metal standing seam roofing, and open-concept high-ceiling living spaces.',
    highlights: ['4,200 sq. ft.', 'Engineered Foundation', 'Full Impact Rated Glass', 'Turnkey CGC Management'],
    highlightsEn: ['4,200 sq. ft.', 'Engineered Foundation', 'Full Impact Rated Glass', 'Turnkey CGC Management'],
    featured: true,
  },
  {
    id: 'proj-concrete-1',
    title: 'Stamped Slate Concrete Patio & Fire Pit Foundation',
    titleEn: 'Stamped Slate Concrete Patio & Fire Pit Foundation',
    category: 'concrete',
    categoryLabel: 'Concrete & Patios',
    categoryLabelEn: 'Concrete & Patios',
    location: 'Hollywood, FL (Broward County)',
    duration: '4 Days',
    durationEn: '4 Days',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Site excavation, formwork, and 1,100 sq ft slab pour with 4,000 PSI high-strength concrete, ashlar slate stamped texture, integrated drainage, and dual-coat UV non-slip sealer.',
    descriptionEn: 'Site excavation, formwork, and 1,100 sq ft slab pour with 4,000 PSI high-strength concrete, ashlar slate stamped texture, integrated drainage, and dual-coat UV non-slip sealer.',
    highlights: ['1,100 sq. ft.', 'Ashlar Slate Texture', 'Integrated Drainage', 'Anti-Stain UV Seal'],
    highlightsEn: ['1,100 sq. ft.', 'Ashlar Slate Texture', 'Integrated Drainage', 'Anti-Stain UV Seal'],
    featured: false,
  },
  {
    id: 'proj-commercial-1',
    title: 'Commercial TPO Flat Roof & HVAC System Installation',
    titleEn: 'Commercial TPO Flat Roof & HVAC System Installation',
    category: 'commercial',
    categoryLabel: 'Commercial Roofing & HVAC',
    categoryLabelEn: 'Commercial Roofing & HVAC',
    location: 'West Palm Beach, FL (Palm Beach County)',
    duration: '6 Days',
    durationEn: '6 Days',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Commercial facility roof overhaul with 60-mil Energy Star reflective TPO membrane, high-efficiency rooftop HVAC units, and polyiso R-30 insulation for maximum cooling efficiency.',
    descriptionEn: 'Commercial facility roof overhaul with 60-mil Energy Star reflective TPO membrane, high-efficiency rooftop HVAC units, and polyiso R-30 insulation for maximum cooling efficiency.',
    highlights: ['9,200 sq. ft.', '60-Mil TPO Membrane', 'High-SEER Commercial HVAC', 'PACE Financed'],
    highlightsEn: ['9,200 sq. ft.', '60-Mil TPO Membrane', 'High-SEER Commercial HVAC', 'PACE Financed'],
    featured: false,
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Free On-Site Inspection & Consultation',
    titleEn: 'Free On-Site Inspection & Consultation',
    description: 'We visit your Florida property at zero cost to measure dimensions, inspect structural conditions, and thoroughly understand your vision and budget.',
    descriptionEn: 'We visit your Florida property at zero cost to measure dimensions, inspect structural conditions, and thoroughly understand your vision and budget.',
    icon: 'SearchCheck',
    details: [
      'Comprehensive structural and damage assessment',
      'Precise laser measurements & scope evaluation',
      'Guidance on design options, materials & Renew Financial PACE'
    ],
    detailsEn: [
      'Comprehensive structural and damage assessment',
      'Precise laser measurements & scope evaluation',
      'Guidance on design options, materials & Renew Financial PACE'
    ]
  },
  {
    stepNumber: '02',
    title: 'Transparent Written Proposal & Scope of Work',
    titleEn: 'Transparent Written Proposal & Scope of Work',
    description: 'You receive an itemized, transparent quote breaking down materials, certified labor, clear milestone schedules, and warranty coverage with no hidden fees.',
    descriptionEn: 'You receive an itemized, transparent quote breaking down materials, certified labor, clear milestone schedules, and warranty coverage with no hidden fees.',
    icon: 'FileSpreadsheet',
    details: [
      'Fixed-price guarantee backed by contract',
      'Flexible financing approval through Renew Financial',
      'Full Florida building department permit filing & management'
    ],
    detailsEn: [
      'Fixed-price guarantee backed by contract',
      'Flexible financing approval through Renew Financial',
      'Full Florida building department permit filing & management'
    ]
  },
  {
    stepNumber: '03',
    title: 'Master Craftsmanship & Active On-Site Supervision',
    titleEn: 'Master Craftsmanship & Active On-Site Supervision',
    description: 'Our licensed trades execute the work according to strict Florida building codes. Dedicated project managers inspect every phase with daily cleanups.',
    descriptionEn: 'Our licensed trades execute the work according to strict Florida building codes. Dedicated project managers inspect every phase with daily cleanups.',
    icon: 'Construction',
    details: [
      'Comprehensive property & landscaping protection',
      'Daily site cleanup with industrial magnetic nail sweeps',
      'Regular photo/video milestone progress updates'
    ],
    detailsEn: [
      'Comprehensive property & landscaping protection',
      'Daily site cleanup with industrial magnetic nail sweeps',
      'Regular photo/video milestone progress updates'
    ]
  },
  {
    stepNumber: '04',
    title: 'Final Walkthrough & Written Warranty Handover',
    titleEn: 'Final Walkthrough & Written Warranty Handover',
    description: 'We conduct an exhaustive walkthrough with you to ensure 100% satisfaction before closing the project and handing over official manufacturer and labor warranties.',
    descriptionEn: 'We conduct an exhaustive walkthrough with you to ensure 100% satisfaction before closing the project and handing over official manufacturer and labor warranties.',
    icon: 'AwardCheck',
    details: [
      'Detailed checklist inspection of every finish and mechanical',
      'Delivery of official CGC: 1541118 warranty certificates',
      'Direct ongoing post-construction support and care'
    ],
    detailsEn: [
      'Detailed checklist inspection of every finish and mechanical',
      'Delivery of official CGC: 1541118 warranty certificates',
      'Direct ongoing post-construction support and care'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Michael & Sandra R.',
    role: 'Homeowner',
    roleEn: 'Homeowner',
    location: 'Miami, FL (Miami-Dade)',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Ehani Construction (CGC: 1541118) replaced our entire roof and rebuilt damaged decking after storm season. They were on time, explained every step, assisted with financing via Renew Financial, and completed the job in 2 days. Truly top-tier professionals in South Florida!',
    commentEn: 'Ehani Construction (CGC: 1541118) replaced our entire roof and rebuilt damaged decking after storm season. They were on time, explained every step, assisted with financing via Renew Financial, and completed the job in 2 days. Truly top-tier professionals in South Florida!',
    projectType: 'Roof Replacement & Re-Decking',
    projectTypeEn: 'Roof Replacement & Re-Decking',
    verified: true,
  },
  {
    id: 'test-2',
    clientName: 'David L. Miller',
    role: 'Property Investor',
    roleEn: 'Property Investor',
    location: 'Fort Lauderdale, FL (Broward)',
    rating: 5,
    date: '1 month ago',
    comment: 'We contracted Ehani for a full kitchen remodel and new high-efficiency HVAC installation. The quality of the cabinetry, quartz island, and tile work exceeded our expectations. Having a licensed Certified General Contractor handle everything gave us total peace of mind.',
    commentEn: 'We contracted Ehani for a full kitchen remodel and new high-efficiency HVAC installation. The quality of the cabinetry, quartz island, and tile work exceeded our expectations. Having a licensed Certified General Contractor handle everything gave us total peace of mind.',
    projectType: 'Kitchen Remodel & HVAC Upgrade',
    projectTypeEn: 'Kitchen Remodel & HVAC Upgrade',
    verified: true,
  },
  {
    id: 'test-3',
    clientName: 'Elena G. Torres',
    role: 'Homeowner',
    roleEn: 'Homeowner',
    location: 'Boca Raton, FL (Palm Beach)',
    rating: 5,
    date: '2 months ago',
    comment: 'Transformed two outdated bathrooms into modern spa retreats with curbless walk-in showers and installed hurricane impact windows. The crew was respectful, clean, and finished right on schedule. Highly recommend Ehani Construction across Palm Beach & South Florida.',
    commentEn: 'Transformed two outdated bathrooms into modern spa retreats with curbless walk-in showers and installed hurricane impact windows. The crew was respectful, clean, and finished right on schedule. Highly recommend Ehani Construction across Palm Beach & South Florida.',
    projectType: 'Bathrooms & Impact Windows',
    projectTypeEn: 'Bathrooms & Impact Windows',
    verified: true,
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is your contractor license and are you certified in Florida?',
    questionEn: 'What is your contractor license and are you certified in Florida?',
    answer: 'Ehani Construction is a state-certified general contractor holding Florida License CGC: 1541118. As a Certified General Contractor (CGC), we are legally qualified and approved by the Florida Department of Business and Professional Regulation (DBPR) to build, remodel, and engineer residential and commercial construction projects throughout the entire State of Florida.',
    answerEn: 'Ehani Construction is a state-certified general contractor holding Florida License CGC: 1541118. As a Certified General Contractor (CGC), we are legally qualified and approved by the Florida Department of Business and Professional Regulation (DBPR) to build, remodel, and engineer residential and commercial construction projects throughout the entire State of Florida.',
    category: 'Licensing & Certification',
    categoryEn: 'Licensing & Certification'
  },
  {
    id: 'faq-2',
    question: 'How can I contact Ehani Construction directly for an estimate?',
    questionEn: 'How can I contact Ehani Construction directly for an estimate?',
    answer: 'You can call us directly at (850) 800-6118, email us at info@ehaniconstruction.com, or fill out our online quote form on this website. We provide free on-site inspections and comprehensive written proposals.',
    answerEn: 'You can call us directly at (850) 800-6118, email us at info@ehaniconstruction.com, or fill out our online quote form on this website. We provide free on-site inspections and comprehensive written proposals.',
    category: 'Contact & Quotes',
    categoryEn: 'Contact & Quotes'
  },
  {
    id: 'faq-3',
    question: 'Do you offer financing options for roofing, HVAC, or remodeling projects?',
    questionEn: 'Do you offer financing options for roofing, HVAC, or remodeling projects?',
    answer: 'Yes! We offer flexible financing options through Renew Financial (including RenewPACE financing in Florida). This allows eligible property owners to finance energy-efficient upgrades, roofing, impact windows & doors, and HVAC systems with $0 down payment and convenient repayment terms.',
    answerEn: 'Yes! We offer flexible financing options through Renew Financial (including RenewPACE financing in Florida). This allows eligible property owners to finance energy-efficient upgrades, roofing, impact windows & doors, and HVAC systems with $0 down payment and convenient repayment terms.',
    category: 'Financing & PACE',
    categoryEn: 'Financing & PACE'
  },
  {
    id: 'faq-4',
    question: 'What regions of Florida do you serve?',
    questionEn: 'What regions of Florida do you serve?',
    answer: 'We specialize in South Florida, proudly serving all communities across Miami-Dade County (Miami, Coral Gables, Doral, Kendall, Aventura, Miami Beach), Broward County (Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Miramar, Pompano Beach), and Palm Beach County (West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Jupiter, Wellington).',
    answerEn: 'We specialize in South Florida, proudly serving all communities across Miami-Dade County (Miami, Coral Gables, Doral, Kendall, Aventura, Miami Beach), Broward County (Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Miramar, Pompano Beach), and Palm Beach County (West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Jupiter, Wellington).',
    category: 'Service Areas',
    categoryEn: 'Service Areas'
  },
  {
    id: 'faq-5',
    question: 'What types of warranties do you provide on completed projects?',
    questionEn: 'What types of warranties do you provide on completed projects?',
    answer: 'We provide dual written protection: 1) A comprehensive workmanship warranty ranging from 10 to 25 years backed directly by Ehani Construction, and 2) Manufacturer warranties ranging up to Lifetime coverage on high-performance materials (such as GAF, Owens Corning, and Schlüter systems).',
    answerEn: 'We provide dual written protection: 1) A comprehensive workmanship warranty ranging from 10 to 25 years backed directly by Ehani Construction, and 2) Manufacturer warranties ranging up to Lifetime coverage on high-performance materials (such as GAF, Owens Corning, and Schlüter systems).',
    category: 'Warranties & Protection',
    categoryEn: 'Warranties & Protection'
  }
];

export const TRUST_METRICS = [
  { value: 'CGC: 1541118', label: 'FL Certified General Contractor', labelEn: 'FL Certified General Contractor' },
  { value: '(850) 800-6118', label: 'Direct Toll-Free Contact', labelEn: 'Direct Toll-Free Contact' },
  { value: 'Renew Financial', label: 'PACE Financing Available', labelEn: 'PACE Financing Available' },
  { value: '1,500+', label: 'Florida Projects Completed', labelEn: 'Florida Projects Completed' },
];
