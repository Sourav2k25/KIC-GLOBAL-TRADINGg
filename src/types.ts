export type CategorySlug = 
  | 'fresh-onion'
  | 'garlic'
  | 'ginger'
  | 'potato'
  | 'chili'
  | 'turmeric'
  | 'lemon'
  | 'seasonal-vegetables';

export interface Category {
  slug: CategorySlug;
  name: string;
  iconName: string;
  description: string;
  productCount: number;
  heroImage: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: CategorySlug;
  subcategory: string;
  grades: string[];
  sizes: string[];
  packagingOptions: string[];
  moq: string;
  originCountries: string[];
  hsCode: string;
  portOfLoading: string[];
  shelfLife: string;
  storageTemp: string;
  image: string;
  gallery: string[];
  description: string;
  overview: string;
  detailedSpecs: SpecificationItem[];
  seasonalAvailability: { [month: string]: 'peak' | 'available' | 'limited' | 'off' };
  isFeatured?: boolean;
}

export interface RFQRequest {
  id?: string;
  productId?: string;
  productTitle: string;
  containerType: '20ft Reefer' | '40ft High Cube Reefer' | '20ft Dry Container' | '40ft Dry Container' | 'Air Freight';
  incoterms: 'FOB' | 'CIF' | 'CFR' | 'EXW';
  quantity: number;
  unit: 'MT (Metric Tons)' | 'Bags' | 'Cartons' | 'Pallets';
  targetPort: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  targetPriceUsd?: string;
  notes?: string;
  created_at?: string;
  status?: 'pending' | 'reviewing' | 'quoted' | 'closed';
}

export interface ContactInquiry {
  id?: string;
  name: string;
  companyName: string;
  phone: string;
  email: string;
  country: string;
  productInterest?: string;
  containerQuantity?: string;
  targetPort?: string;
  message: string;
  created_at?: string;
  status?: 'new' | 'in-progress' | 'responded';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  certificateNumber: string;
  validUntil: string;
  description: string;
  badge: string;
  image: string;
  documentUrl?: string;
}

export interface SourcingCountry {
  code: string;
  name: string;
  flagEmoji: string;
  region: string;
  commoditiesExported: string[];
  majorPorts: string[];
  description: string;
  exportVolume: string;
  partnerFarms: number;
  coordinates: { lat: number; lng: number };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: 'Market Trends' | 'Logistics & Reefer' | 'Harvest Calendar' | 'Export Quality';
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & MOQ' | 'Shipping & Reefer' | 'Payment & L/C' | 'Quality & Certificates';
}

export interface Testimonial {
  id: string;
  authorName: string;
  role: string;
  company: string;
  location: string;
  flagEmoji: string;
  text: string;
  rating: number;
  avatar: string;
  purchasedCommodity: string;
}

export interface ShipmentMilestone {
  date: string;
  title: string;
  location: string;
  completed: boolean;
}

export interface ShipmentTracking {
  trackingNumber: string;
  containerNumber: string;
  vesselName: string;
  voyageNumber: string;
  originPort: string;
  destinationPort: string;
  etd: string;
  eta: string;
  currentStatus: 'Stuffing at Cold Storage' | 'Phytosanitary Clearance' | 'Vessel On-Moored' | 'In Transit' | 'Arrived at Customs' | 'Discharged';
  progressPercentage: number;
  temperatureTarget: string;
  currentTemperature: string;
  humidityLevel: string;
  ventilationSetting: string;
  milestones: ShipmentMilestone[];
}

export interface UserProfile {
  id: string;
  email: string;
  companyName?: string;
  fullName?: string;
  phone?: string;
  country?: string;
  role: 'buyer' | 'importer' | 'admin';
}
