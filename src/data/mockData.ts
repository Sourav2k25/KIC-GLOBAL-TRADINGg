import { Product, Category, Certificate, SourcingCountry, BlogPost, FAQItem, Testimonial, ShipmentTracking } from '../types';

export const CATEGORIES: Category[] = [
  {
    slug: 'fresh-onion',
    name: 'Fresh Onion',
    iconName: 'CircleDot',
    description: 'Export grade Nashik Red, Mahuva Pink, and Gujarat White Onions with maximum shelf life and zero moisture damage.',
    productCount: 3,
    heroImage: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'garlic',
    name: 'Garlic',
    iconName: 'Sparkles',
    description: 'High pungency Chinese Pure White Garlic and Indian MP Lasan with firm cloves, thoroughly machine sorted and air dried.',
    productCount: 3,
    heroImage: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'ginger',
    name: 'Ginger',
    iconName: 'Flame',
    description: 'Thick rhizome fresh elephant ginger and sun-dried whole/split ginger with high essential oil content.',
    productCount: 2,
    heroImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'potato',
    name: 'Potato',
    iconName: 'Layers',
    description: 'Sorting certified Jyoti table potatoes and Lady Rosetta high dry-matter processing potatoes for chip manufacture.',
    productCount: 2,
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'chili',
    name: 'Dry & Green Chili',
    iconName: 'Flame',
    description: 'Teja S17, Guntur Sanam dry red chili, and fresh G4 green chili with vibrant color value (ASTA 60-120).',
    productCount: 2,
    heroImage: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'turmeric',
    name: 'Turmeric',
    iconName: 'Sun',
    description: 'High curcumin Erode finger turmeric and double polished turmeric powder for pharmaceutical and food processing.',
    productCount: 2,
    heroImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'lemon',
    name: 'Lemon & Lime',
    iconName: 'Citrus',
    description: 'Juicy, seedless Assam lemons and Eureka seedless limes treated with food-grade protective waxing for export.',
    productCount: 2,
    heroImage: 'https://images.unsplash.com/photo-1534531141161-e41d133a897d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'seasonal-vegetables',
    name: 'Seasonal Vegetables',
    iconName: 'Leaf',
    description: 'Air-freighted and sea-reefer fresh Okra, Moringa pods, Green Peas, Bitter Gourd, and Cabbage.',
    productCount: 3,
    heroImage: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  // --- FRESH ONION ---
  {
    id: 'prod-red-onion',
    slug: 'red-onion-export-grade',
    title: 'Fresh Red Onion (Nashik Export Grade)',
    category: 'fresh-onion',
    subcategory: 'Nashik Light Red & Dark Red',
    grades: ['Grade A Premium', 'Grade B Standard'],
    sizes: ['25mm - 35mm', '35mm - 45mm', '45mm - 55mm', '55mm+ Extra Bold'],
    packagingOptions: ['5kg Mesh Bag', '10kg Jute Bag', '25kg Mesh Bag', '50kg Mesh Bag', 'Custom Customer Branded Bag'],
    moq: '1 x 40ft Reefer Container (28 Metric Tons)',
    originCountries: ['India (Maharashtra - Nashik/Lasalgaon)', 'Egypt', 'Vietnam'],
    hsCode: '07031010',
    portOfLoading: ['JNPT Nhava Sheva (Mumbai)', 'Mundra Port', 'Alexandria Port'],
    shelfLife: '45 to 60 Days (under reefer storage 2°C - 5°C with 65% RH)',
    storageTemp: '2°C to 5°C, 65-70% Relative Humidity',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Our Nashik Red Onions are globally recognized for their deep ruby color, tight papery skin, crisp texture, and balanced pungency. Direct sourcing from trusted farm cooperatives ensures 100% sorting compliance with zero rotten or sprout defective bulbs.',
    overview: 'High density bulbs with thick dry skin layers that protect against moisture loss during 20+ day reefer transit to Middle East, Southeast Asia, and European ports.',
    detailedSpecs: [
      { label: 'Bulb Shape', value: 'Globe / Round-Oval' },
      { label: 'Color Value', value: 'Dark Red / Light Ruby Red' },
      { label: 'Dry Matter Content', value: '11.5% - 13.0%' },
      { label: 'Moisture', value: '82% Maximum' },
      { label: 'Defect Rate', value: '< 1% (Machine Sorted)' },
      { label: 'Phytosanitary', value: 'APEDA & Govt Lab Certified' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'available', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'limited', Sep: 'available', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    },
    isFeatured: true
  },
  {
    id: 'prod-white-onion',
    slug: 'white-onion-premium',
    title: 'Fresh White Onion (Gujarat Export Grade)',
    category: 'fresh-onion',
    subcategory: 'Dehydration & Table Grade',
    grades: ['Grade A Export', 'Dehydration Industrial Grade'],
    sizes: ['40mm - 50mm', '50mm - 60mm', '60mm+'],
    packagingOptions: ['10kg Mesh Bag', '25kg Mesh Bag', '500kg Jumbo Bag'],
    moq: '1 x 40ft Reefer Container (28 Metric Tons)',
    originCountries: ['India (Gujarat - Mahuva/Bhavnagar)', 'Egypt'],
    hsCode: '07031010',
    portOfLoading: ['Mundra Port', 'JNPT Nhava Sheva'],
    shelfLife: '50 Days under reefer transit',
    storageTemp: '3°C to 6°C',
    image: 'https://images.unsplash.com/photo-1580148252224-66fa1e085c08?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580148252224-66fa1e085c08?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Crisp white onions sourced from Gujarat region with high total soluble solids (TSS 14-16%). Highly demanded by food processors, hotel chains, and dehydration plants in Europe and UAE.',
    overview: 'Pristine white skin, sweet mild pungency, ideal for fresh salads and industrial onion powder processing.',
    detailedSpecs: [
      { label: 'TSS (Brix)', value: '14.0 - 16.5%' },
      { label: 'Skin Layer', value: '3-4 Clean White Papery Covers' },
      { label: 'Sprouts / Soft Bulbs', value: 'Nil' },
      { label: 'Foreign Matter', value: '0.0%' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'limited', Jul: 'limited', Aug: 'off', Sep: 'off', Oct: 'available', Nov: 'available', Dec: 'peak'
    }
  },
  {
    id: 'prod-pink-onion',
    slug: 'pink-onion-mahuva',
    title: 'Fresh Pink Onion (Mahuva Light Pink)',
    category: 'fresh-onion',
    subcategory: 'Light Pink Export Bulb',
    grades: ['Premium Export'],
    sizes: ['30mm - 40mm', '40mm - 50mm', '50mm+'],
    packagingOptions: ['10kg Jute Bag', '20kg Mesh Bag', '25kg Mesh Bag'],
    moq: '1 x 20ft Reefer Container (14 Metric Tons)',
    originCountries: ['India'],
    hsCode: '07031010',
    portOfLoading: ['Mundra Port', 'Pipavav Port'],
    shelfLife: '40 Days',
    storageTemp: '4°C to 6°C',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Mahuva Pink onions offer a gentle sweetness and distinct rose-pink papery sheath. Sourced directly from contract farms with organic pest management.',
    overview: 'Popular choice for Southeast Asian markets including Malaysia, Singapore, and Sri Lanka.',
    detailedSpecs: [
      { label: 'Color', value: 'Light Rosy Pink' },
      { label: 'Pungency', value: 'Medium' },
      { label: 'Moisture', value: '80%' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'available', May: 'available',
      Jun: 'off', Jul: 'off', Aug: 'off', Sep: 'available', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    }
  },

  // --- GARLIC ---
  {
    id: 'prod-chinese-garlic',
    slug: 'chinese-pure-white-garlic',
    title: 'Chinese Pure White Garlic (Shandong Export Grade)',
    category: 'garlic',
    subcategory: 'Pure White & Normal White',
    grades: ['Super Pure White', 'Normal White (Purple Stripe)'],
    sizes: ['4.5cm', '5.0cm', '5.5cm', '6.0cm', '6.5cm+'],
    packagingOptions: ['10kg Carton with Mesh', '1kg x 10 Mesh bags in Carton', '500g x 20 Mesh Bags', '20kg Mesh Bag'],
    moq: '1 x 40ft High Cube Reefer (28 Metric Tons)',
    originCountries: ['China (Shandong - Jinxiang)', 'India'],
    hsCode: '07032000',
    portOfLoading: ['Qingdao Port', 'JNPT Nhava Sheva'],
    shelfLife: '9 to 12 Months (Cold Storage -2°C)',
    storageTemp: '-2°C to -3°C, 65% RH with continuous air ventilation',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Cleaned, roots clipped, stem trimmed to 1cm, zero mold garlic bulbs directly from Shandong cold storages. High clove count (10-12 uniform cloves per bulb) with high allicin content.',
    overview: 'World-standard export garlic with brilliant white skin, high resistance to sprouting, and intense aroma.',
    detailedSpecs: [
      { label: 'Bulb Diameter', value: '5.5cm - 6.0cm' },
      { label: 'Clove Count', value: '10-14 cloves/bulb' },
      { label: 'Root & Stem Treatment', value: 'Machine Trimmed Stem <1cm, Clean Roots' },
      { label: 'Cold Storage Temp', value: '-2.5°C' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'available', Mar: 'available', Apr: 'available', May: 'peak',
      Jun: 'peak', Jul: 'peak', Aug: 'peak', Sep: 'available', Oct: 'available', Nov: 'available', Dec: 'available'
    },
    isFeatured: true
  },
  {
    id: 'prod-indian-garlic',
    slug: 'indian-mp-lasan-garlic',
    title: 'Indian Garlic (MP Lasan Grade 1)',
    category: 'garlic',
    subcategory: 'Mandsaur / Indore Bold Garlic',
    grades: ['Grade A Extra Bold', 'Medium Grade'],
    sizes: ['35mm - 45mm', '45mm - 55mm'],
    packagingOptions: ['5kg Net Bag', '10kg Mesh Bag', '25kg Jute Bag'],
    moq: '1 x 20ft Reefer Container (14 Metric Tons)',
    originCountries: ['India (Madhya Pradesh / Rajasthan)'],
    hsCode: '07032000',
    portOfLoading: ['JNPT Nhava Sheva', 'Mundra Port'],
    shelfLife: '6 Months',
    storageTemp: '-1°C to 1°C',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Strong, highly pungent garlic from Madhya Pradesh. Unmatched medicinal profile and rich essential oils preferred by Middle Eastern and Gulf importers.',
    overview: 'Compact cloves with pinkish white outer skin and long shelf life without chemical preservation.',
    detailedSpecs: [
      { label: 'Allicin Value', value: 'High (>4.5 mg/g)' },
      { label: 'Skin Color', value: 'Off-White with subtle pink streaks' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'limited', Nov: 'limited', Dec: 'available'
    }
  },

  // --- GINGER ---
  {
    id: 'prod-fresh-ginger',
    slug: 'fresh-elephant-ginger',
    title: 'Fresh Elephant Ginger (High Essential Oil)',
    category: 'ginger',
    subcategory: 'Washed Fresh Thick Rhizome',
    grades: ['Grade A Super Fat', 'Grade B Standard'],
    sizes: ['150g+ per piece', '200g+ per piece', '250g+ Extra Fat'],
    packagingOptions: ['10kg PVC Box', '10kg Mesh Bag', '13.5kg Plastic Crate'],
    moq: '1 x 40ft Reefer Container (26 Metric Tons)',
    originCountries: ['India (Kerala & Karnataka)', 'Vietnam', 'China'],
    hsCode: '09101110',
    portOfLoading: ['Cochin Port', 'JNPT Nhava Sheva', 'Cat Lai Port'],
    shelfLife: '60 Days in reefer at 12°C - 13°C',
    storageTemp: '12°C to 13°C, 85-90% Relative Humidity',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Thick, smooth skin rhizomes washed thoroughly in sanitized pressure lines, hand-sorted for fat hands with zero mold or skin breaks. High fiber and spicy warmth.',
    overview: 'Sourced from the fertile Western Ghats soil with rich volatile oil percentage (1.8% - 2.2%).',
    detailedSpecs: [
      { label: 'Rhizome Size', value: '200g - 350g hands' },
      { label: 'Volatile Oil', value: '2.0% Minimum' },
      { label: 'Moisture', value: '80%' },
      { label: 'Pesticide Residue', value: 'NIL (EU/US FDA Compliant)' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'available', Apr: 'limited', May: 'off',
      Jun: 'off', Jul: 'off', Aug: 'available', Sep: 'peak', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    },
    isFeatured: true
  },
  {
    id: 'prod-dry-ginger',
    slug: 'dry-ginger-cochin-whole-split',
    title: 'Dry Ginger (Sun Dried Cochin Whole & Split)',
    category: 'ginger',
    subcategory: 'Sun Dried Spice Grade',
    grades: ['Cochin Unbleached Whole', 'Calicut Bleached', 'Split Dry Ginger'],
    sizes: ['Whole Hands', 'Clean Split Fingers'],
    packagingOptions: ['25kg Jute Bag', '50kg PP Bag'],
    moq: '1 x 20ft Dry Container (13 Metric Tons)',
    originCountries: ['India (Cochin / Wayanad)'],
    hsCode: '09101210',
    portOfLoading: ['Cochin Port', 'Tuticorin Port'],
    shelfLife: '18 Months',
    storageTemp: 'Ambient Dry Cool Storage <20°C',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Premium sun-dried dry ginger with lemon aroma and spicy pungent flavor. Highly demanded by extract manufacturers and spice blenders in Europe and North America.',
    overview: 'Carefully cured under sun with low moisture (<10%) for long ambient transit and optimal grinding.',
    detailedSpecs: [
      { label: 'Moisture', value: '9.0% - 10.5% Max' },
      { label: 'Total Ash', value: '5.0% Max' },
      { label: 'Acid Insoluble Ash', value: '0.8% Max' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'available', Nov: 'peak', Dec: 'peak'
    }
  },

  // --- POTATO ---
  {
    id: 'prod-lady-rosetta-potato',
    slug: 'lady-rosetta-processing-potato',
    title: 'Lady Rosetta Potato (High Dry Matter Chips Grade)',
    category: 'potato',
    subcategory: 'Processing & Crisp Potato',
    grades: ['Grade A Crisp Processing (45mm+)'],
    sizes: ['45mm - 55mm', '55mm - 70mm'],
    packagingOptions: ['25kg Mesh Bag', '50kg Jute Bag', '1000kg Jumbo Bag'],
    moq: '1 x 40ft Reefer Container (29 Metric Tons)',
    originCountries: ['India (Gujarat - Banaskantha)', 'Egypt', 'Netherlands'],
    hsCode: '07019000',
    portOfLoading: ['Mundra Port', 'Alexandria Port'],
    shelfLife: '90 Days (Controlled atmosphere reefer 8°C - 10°C)',
    storageTemp: '8°C to 10°C (Anti-Sugarizing Temp with CIPC Treatment)',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Lady Rosetta is the gold standard red-skinned round processing potato with high dry matter (22-24%) and ultra-low reducing sugars (<0.15%). Guarantees golden, non-darkening potato chips.',
    overview: 'Contracted directly from certified seed farms in Gujarat with zero soil clumping and uniform round shape.',
    detailedSpecs: [
      { label: 'Dry Matter', value: '22.0% - 24.5%' },
      { label: 'Reducing Sugar', value: '< 0.12% (No Browning)' },
      { label: 'Skin Color', value: 'Smooth Light Red Skin' },
      { label: 'Flesh Color', value: 'Creamy Yellow' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'limited', Jul: 'limited', Aug: 'off', Sep: 'off', Oct: 'available', Nov: 'available', Dec: 'peak'
    },
    isFeatured: true
  },
  {
    id: 'prod-jyoti-potato',
    slug: 'jyoti-fresh-table-potato',
    title: 'Fresh Table Potato (Jyoti & Kufri Pukhraj)',
    category: 'potato',
    subcategory: 'Fresh Table Grade',
    grades: ['Grade A Fresh Table'],
    sizes: ['35mm - 45mm', '45mm - 60mm', '60mm+'],
    packagingOptions: ['10kg Net Bag', '25kg Mesh Bag', '50kg Jute Bag'],
    moq: '1 x 40ft Reefer Container (28 Metric Tons)',
    originCountries: ['India (West Bengal & UP)'],
    hsCode: '07019000',
    portOfLoading: ['Kolkata Port', 'JNPT Nhava Sheva'],
    shelfLife: '60 Days',
    storageTemp: '4°C to 6°C',
    image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508313880080-c4bef0730395?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Smooth white/yellow skin table potatoes with firm texture, ideal for everyday culinary consumption, wholesale food markets, and hypermarket chains.',
    overview: 'Thoroughly washed, dried, and machine sized with zero green skins or hollow hearts.',
    detailedSpecs: [
      { label: 'Flesh Color', value: 'Light Yellow / White' },
      { label: 'Defect Rate', value: '< 1%' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'available', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    }
  },

  // --- DRY & GREEN CHILI ---
  {
    id: 'prod-dry-red-chili',
    slug: 'dry-red-chili-teja-s17',
    title: 'Dry Red Chili (Teja S17 & Guntur Sanam S4)',
    category: 'chili',
    subcategory: 'Stemless & With Stem Spice Chili',
    grades: ['Teja S17 Stemless', 'Guntur Sanam S4', '334 / S10 Grade'],
    sizes: ['7cm - 11cm pod length'],
    packagingOptions: ['10kg Carton', '25kg PP Bag', '25kg Jute Bag', 'Pressed Bales'],
    moq: '1 x 40ft High Cube Dry Container (14 Metric Tons)',
    originCountries: ['India (Andhra Pradesh - Guntur)'],
    hsCode: '09042110',
    portOfLoading: ['Chennai Port', 'Krishnapatnam Port'],
    shelfLife: '24 Months under dry ambient storage',
    storageTemp: '15°C Ambient Cool Dry Storage',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Teja S17 is world famous for its fiery pungency (75,000 - 100,000 SHU Scoville units) and bright natural red color (ASTA 60-90). Sourced directly from Guntur Yard with stringent aflatoxin & pesticide control.',
    overview: 'Cleaned, de-stemmed, and packed in moisture-proof liners for sauce manufacturing and oleoresin extraction.',
    detailedSpecs: [
      { label: 'Pungency (Heat Value)', value: '75,000 - 100,000 SHU' },
      { label: 'Color (ASTA Value)', value: '60 - 90 ASTA' },
      { label: 'Moisture', value: '10.0% Maximum' },
      { label: 'Foreign Matter', value: '0.5% Max' },
      { label: 'Aflatoxin', value: '< 5 ppb (EU Standard Compliant)' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'available', Nov: 'available', Dec: 'peak'
    },
    isFeatured: true
  },
  {
    id: 'prod-fresh-green-chili',
    slug: 'fresh-green-chili-g4',
    title: 'Fresh Green Chili (G4 / Bullet Export Grade)',
    category: 'chili',
    subcategory: 'Air-Freight & Sea Reefer Fresh Chili',
    grades: ['G4 Export Grade A', 'Bullet Dark Green'],
    sizes: ['6cm - 9cm length'],
    packagingOptions: ['3.5kg Thermocol Box', '5kg Corrugated Box with Perforated Bag'],
    moq: '1 x 20ft Reefer Container or 1,000kg Air Cargo',
    originCountries: ['India (Gujarat & Maharashtra)', 'Vietnam'],
    hsCode: '07096010',
    portOfLoading: ['Mumbai Airport / JNPT', 'Ahmedabad Airport'],
    shelfLife: '21 Days in reefer 7°C',
    storageTemp: '7°C to 8°C with 85% RH',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Crisp dark green chilis with glossy skin, firm stems, and potent heat. Sourced fresh from farms early morning, sorted, sanitized, and packed within 6 hours.',
    overview: 'High demand in Gulf hypermarkets, UK, and European specialty stores.',
    detailedSpecs: [
      { label: 'Stem Condition', value: 'Fresh Intact Green Stem' },
      { label: 'Color', value: 'Dark Glossy Green' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'peak', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    }
  },

  // --- TURMERIC ---
  {
    id: 'prod-turmeric-finger',
    slug: 'erode-finger-turmeric-high-curcumin',
    title: 'Finger Turmeric (Erode & Salem High Curcumin 5.5%+)',
    category: 'turmeric',
    subcategory: 'Double Polished Whole Finger',
    grades: ['Erode Double Polished', 'Salem Finger', 'Nizamabad Bulb'],
    sizes: ['3cm - 7cm Length'],
    packagingOptions: ['25kg Jute Bag', '50kg PP Bag'],
    moq: '1 x 20ft Dry Container (18 Metric Tons)',
    originCountries: ['India (Tamil Nadu - Erode / Salem)'],
    hsCode: '09103020',
    portOfLoading: ['Tuticorin Port', 'Chennai Port'],
    shelfLife: '24 Months',
    storageTemp: 'Dry Cool Storage <22°C',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Erode and Salem fingers are celebrated for their vivid golden-orange color, high curcumin content (3.5% to 5.8%), and aromatic warm earthy aroma. Machine double polished with zero synthetic dyes.',
    overview: 'Tested for heavy metals (Lead Chromate Free) and chemical residue, meeting strict EU, US FDA, and Japanese health standards.',
    detailedSpecs: [
      { label: 'Curcumin Content', value: '3.5% - 5.8%' },
      { label: 'Moisture', value: '10.0% Max' },
      { label: 'Total Ash', value: '6.5% Max' },
      { label: 'Lead Chromate / Dyes', value: 'ABSOLUTELY NIL (Lab Certified)' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'peak',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'available', Nov: 'available', Dec: 'available'
    },
    isFeatured: true
  },
  {
    id: 'prod-turmeric-powder',
    slug: 'turmeric-powder-export-grade',
    title: 'Pure Turmeric Powder (Micro-Milled 80 Mesh)',
    category: 'turmeric',
    subcategory: 'Processed Pure Spice Powder',
    grades: ['Grade A Organic Certified', 'Standard Export Grade'],
    sizes: ['80 Mesh Ultra Fine'],
    packagingOptions: ['1kg Aluminium Pouch', '5kg Vacuum Bag', '25kg Multi-Wall Kraft Paper Bag'],
    moq: '1 x 20ft Dry Container (16 Metric Tons)',
    originCountries: ['India'],
    hsCode: '09103030',
    portOfLoading: ['JNPT Nhava Sheva', 'Tuticorin Port'],
    shelfLife: '24 Months',
    storageTemp: 'Cool Dry Darkness',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Cold-milled turmeric powder retaining volatile oils, natural aroma, and bioactive curcuminoids. Micro-filtered for zero grittiness.',
    overview: 'Packaged in nitrogen-flushed barrier bags to prevent oxidation and color fading during international transit.',
    detailedSpecs: [
      { label: 'Particle Size', value: '80 Mesh (98% Pass)' },
      { label: 'Curcumin', value: '4.0% Min' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'available', Mar: 'peak', Apr: 'peak', May: 'peak',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'available', Oct: 'available', Nov: 'available', Dec: 'available'
    }
  },

  // --- LEMON & LIME ---
  {
    id: 'prod-fresh-lemon',
    slug: 'fresh-assam-eureka-lemon',
    title: 'Fresh Assam Kaji & Eureka Lemon',
    category: 'lemon',
    subcategory: 'Seedless & Aromatic Juicy Lemon',
    grades: ['Grade A Export Seedless'],
    sizes: ['40mm - 50mm', '50mm - 60mm', '60mm+'],
    packagingOptions: ['5kg Corrugated Box with Wax Lining', '10kg Plastic Crate'],
    moq: '1 x 20ft Reefer Container (14 Metric Tons) or Air Freight',
    originCountries: ['India (Assam & Andhra Pradesh)', 'Egypt', 'Brazil'],
    hsCode: '08055010',
    portOfLoading: ['Kolkata Airport / Port', 'JNPT Nhava Sheva'],
    shelfLife: '45 Days (Wax coated at 8°C)',
    storageTemp: '8°C to 10°C, 85% RH',
    image: 'https://images.unsplash.com/photo-1534531141161-e41d133a897d?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534531141161-e41d133a897d?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Assam Kaji Lemon (GI Tagged) and Eureka Limes are famous for their thin yellow skin, intense aroma, and high juice content (>45%). Treated with food-grade protective carnauba wax coating for extended sea shipment.',
    overview: 'Favored by beverage bottling plants, restaurants, and premium retail supermarkets in UAE, Qatar, and Singapore.',
    detailedSpecs: [
      { label: 'Juice Yield', value: '> 45% by weight' },
      { label: 'Skin Treatment', value: 'Food Grade Carnauba Waxing' },
      { label: 'Brix Level', value: '7.5 - 9.0' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'available', Mar: 'peak', Apr: 'peak', May: 'peak',
      Jun: 'peak', Jul: 'available', Aug: 'available', Sep: 'peak', Oct: 'peak', Nov: 'available', Dec: 'available'
    }
  },

  // --- SEASONAL VEGETABLES ---
  {
    id: 'prod-fresh-okra',
    slug: 'export-quality-fresh-okra-lady-finger',
    title: 'Fresh Okra (Lady Finger - Tender Green)',
    category: 'seasonal-vegetables',
    subcategory: 'Air Freight & Sea Reefer Fresh Produce',
    grades: ['Grade A Tender Export'],
    sizes: ['7cm - 10cm Tender Pods'],
    packagingOptions: ['3.5kg Corrugated Box', '5kg Foam Box with Ice Packs'],
    moq: '1,000 kg Air Cargo or 1 x 20ft Reefer (12 Metric Tons)',
    originCountries: ['India (Gujarat & Maharashtra)', 'Vietnam'],
    hsCode: '07099910',
    portOfLoading: ['Mumbai Air Cargo', 'Ahmedabad Airport'],
    shelfLife: '14 Days at 9°C',
    storageTemp: '8°C to 10°C',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Slender, dark green tender okra pods picked early morning before seed hardening. High fiber content, crisp snap, zero fibrous stringiness.',
    overview: 'Pre-cooled immediately post-harvest and packed under cold-chain to guarantee fresh arrival at destination airports within 24-36 hours.',
    detailedSpecs: [
      { label: 'Pod Length', value: '7cm - 10cm' },
      { label: 'Fiber Level', value: 'Tender Non-Fibrous' }
    ],
    seasonalAvailability: {
      Jan: 'peak', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'available', Sep: 'peak', Oct: 'peak', Nov: 'peak', Dec: 'peak'
    },
    isFeatured: true
  },
  {
    id: 'prod-moringa-drumstick',
    slug: 'fresh-moringa-drumstick-pods',
    title: 'Fresh Drumstick (Moringa Pods - Long Green)',
    category: 'seasonal-vegetables',
    subcategory: 'Superfood Medicinal Produce',
    grades: ['Grade A Thick Pulpy'],
    sizes: ['45cm - 65cm Pod Length'],
    packagingOptions: ['5kg Corrugated Box', '10kg Bundle Carton'],
    moq: '1,000 kg Air Cargo or 1 x 20ft Reefer Container',
    originCountries: ['India (Tamil Nadu & Andhra Pradesh)'],
    hsCode: '07099990',
    portOfLoading: ['Chennai Airport', 'Bengaluru Airport'],
    shelfLife: '18 Days',
    storageTemp: '10°C to 12°C',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Fleshy, pulp-rich Moringa pods harvested from organic certified farm clusters. Rich in phytonutrients, iron, and essential vitamins.',
    overview: 'Popular in South Asian culinary exports to Middle East, UK, and North America.',
    detailedSpecs: [
      { label: 'Pulp Ratio', value: 'High Pulpy Core' },
      { label: 'Length', value: '50cm Average' }
    ],
    seasonalAvailability: {
      Jan: 'available', Feb: 'peak', Mar: 'peak', Apr: 'peak', May: 'available',
      Jun: 'available', Jul: 'available', Aug: 'peak', Sep: 'peak', Oct: 'available', Nov: 'available', Dec: 'available'
    }
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-apeda',
    title: 'APEDA Export License',
    issuer: 'Agricultural and Processed Food Products Export Development Authority',
    certificateNumber: 'APEDA/REG/2024/984120',
    validUntil: '2029-12-31',
    description: 'Government of India authorized export license for fresh produce, onions, garlic, and spices.',
    badge: 'Govt. Authorized Exporter',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-iso-22000',
    title: 'ISO 22000:2018 Food Safety Management',
    issuer: 'TÜV SÜD International Certification',
    certificateNumber: 'ISO-22000-FSMS-88194',
    validUntil: '2028-08-15',
    description: 'Certified food safety standard covering cold storage facilities, sorting, grading, and packaging lines.',
    badge: 'International Food Safety',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-haccp',
    title: 'HACCP Compliance Certificate',
    issuer: 'Bureau Veritas Quality Assurance',
    certificateNumber: 'HACCP-BVQA-2023-4410',
    validUntil: '2027-11-20',
    description: 'Hazard Analysis Critical Control Point system applied from harvest, washing, cold-chain, to container loading.',
    badge: 'Zero Hazard Protocol',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-fssai',
    title: 'FSSAI Central Food Import/Export License',
    issuer: 'Food Safety and Standards Authority of India',
    certificateNumber: 'FSSAI-10022022000318',
    validUntil: '2029-05-10',
    description: 'Central license for food commodity processing, warehousing, and international trading.',
    badge: 'Central Food License',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-phytosanitary',
    title: 'Phytosanitary Clearance Facility',
    issuer: 'National Plant Protection Organization (NPPO)',
    certificateNumber: 'NPPO-PHYTO-REG-0912',
    validUntil: '2027-04-30',
    description: 'Pest-free certification, fumigation, and cold treatment compliance for international phytosanitary quarantine.',
    badge: 'Plant Quarantine Certified',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cert-halal',
    title: 'Halal Export Authorization',
    issuer: 'Jamiat Halal Trust / Gulf Accreditation Center',
    certificateNumber: 'HALAL-GAC-2024-771',
    validUntil: '2028-01-15',
    description: 'Full compliance with OIC/SMIIC Halal standards for food items exported to GCC countries and Southeast Asia.',
    badge: 'GCC Halal Compliant',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop'
  }
];

export const SOURCING_COUNTRIES: SourcingCountry[] = [
  {
    code: 'IN',
    name: 'India',
    flagEmoji: '🇮🇳',
    region: 'South Asia (Export Hub)',
    commoditiesExported: ['Red Onion', 'Garlic', 'Turmeric', 'Dry Chili', 'Potato', 'Ginger', 'Okra', 'Lemon'],
    majorPorts: ['JNPT Nhava Sheva (Mumbai)', 'Mundra Port (Gujarat)', 'Pipavav Port', 'Cochin Port', 'Chennai Port'],
    description: 'Casial Global operates contract farm networks and state-of-the-art cold storage hubs across Maharashtra, Gujarat, Madhya Pradesh, Andhra Pradesh, and Kerala.',
    exportVolume: '35,000+ Metric Tons / Year',
    partnerFarms: 420,
    coordinates: { lat: 20.5937, lng: 78.9629 }
  },
  {
    code: 'CN',
    name: 'China',
    flagEmoji: '🇨🇳',
    region: 'East Asia (Garlic & Ginger Sourcing)',
    commoditiesExported: ['Pure White Garlic', 'Fresh Ginger', 'Dry Garlic Powder'],
    majorPorts: ['Qingdao Port', 'Ningbo Port', 'Shanghai Port'],
    description: 'Direct partnerships with Jinxiang Shandong garlic growers and cold storage operations for year-round supplies of 5.5cm+ white garlic.',
    exportVolume: '12,000+ Metric Tons / Year',
    partnerFarms: 150,
    coordinates: { lat: 35.8617, lng: 104.1954 }
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flagEmoji: '🇻🇳',
    region: 'Southeast Asia (Spice & Ginger Hub)',
    commoditiesExported: ['Fresh Ginger', 'Chili', 'Black Pepper', 'Onion'],
    majorPorts: ['Cat Lai Port (Ho Chi Minh)', 'Hai Phong Port'],
    description: 'High-land ginger cultivation and tropical agricultural sourcing with stringent pesticide screening for European exports.',
    exportVolume: '6,500+ Metric Tons / Year',
    partnerFarms: 85,
    coordinates: { lat: 14.0583, lng: 108.2772 }
  },
  {
    code: 'EG',
    name: 'Egypt',
    flagEmoji: '🇪🇬',
    region: 'North Africa / Middle East Trade Corridor',
    commoditiesExported: ['Yellow Onion', 'White Onion', 'Potato', 'Garlic', 'Citrus'],
    majorPorts: ['Alexandria Port', 'Damietta Port', 'Port Said'],
    description: 'Strategic sourcing of Mediterranean onions and processing potatoes during counter-seasonal harvest windows in the Delta region.',
    exportVolume: '8,000+ Metric Tons / Year',
    partnerFarms: 95,
    coordinates: { lat: 26.8206, lng: 30.8025 }
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flagEmoji: '🇦🇪',
    region: 'Middle East Redistribution Hub',
    commoditiesExported: ['Re-export & Cold Chain Logistics Center'],
    majorPorts: ['Jebel Ali Port (Dubai)', 'Khalifa Port (Abu Dhabi)', 'Sharjah Port'],
    description: 'Casial Global Trading regional headquarters in Dubai DMCC manages distribution across Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.',
    exportVolume: 'Redistribution Hub',
    partnerFarms: 0,
    coordinates: { lat: 23.4241, lng: 53.8478 }
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flagEmoji: '🇳🇱',
    region: 'Europe Entry Port',
    commoditiesExported: ['European Distribution & Seed Potatoes'],
    majorPorts: ['Port of Rotterdam'],
    description: 'Rotterdam gateway serving European food manufacturers, supermarket buyers, and wholesale spice blenders.',
    exportVolume: '4,200+ Metric Tons / Year',
    partnerFarms: 30,
    coordinates: { lat: 52.1326, lng: 5.2913 }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'global-fresh-onion-export-market-trends-2026',
    title: 'Global Fresh Onion Export Market Outlook 2026: Supply Chain Dynamics & Price Forecasts',
    excerpt: 'An in-depth analysis of Nashik red onion harvest yields, shipping container freight trends, and key import regulations across the Gulf Cooperation Council (GCC) and Southeast Asia.',
    content: `
# Global Fresh Onion Export Market Outlook 2026

The international fresh produce market is experiencing a significant shift in trade corridors and cold-chain logistics. As one of the world's primary export commodities, fresh onions require precise post-harvest handling, humidity management, and timely reefer vessel shipping.

## Key Driving Factors in 2026

1. **High-Yield Crop in Nashik & Gujarat**: Sowing conditions across Maharashtra's Lasalgaon and Gujarat's Mahuva belts have produced exceptional bulb firming and lower moisture content (81% moisture vs 84% historical average). This extends transport stability up to 60 days.
2. **Reefer Container Availability**: Shipping line container positioning at Nhava Sheva (JNPT) and Mundra has stabilized, reducing ocean freight costs per metric ton to Dubai Jebel Ali and Vietnam's Cat Lai ports.
3. **Quality Standards in the GCC**: Importers in UAE, Saudi Arabia, and Qatar now mandate 100% electronic Phytosanitary certificates and strict size sorting (45mm+ and 55mm+ extra bold).

## Packaging & Transit Recommendations

For sea transit exceeding 18 days, Casial Global Trading recommends 25kg or 50kg ventilated mesh bags placed inside 40ft High Cube Reefer Containers set to **3.5°C with 65% Relative Humidity** and **25 cbm/hr fresh air ventilation**.

    `,
    date: '2026-07-15',
    author: {
      name: 'Vikramaditya Sharma',
      role: 'Director of Global Agriculture Sourcing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    category: 'Market Trends',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1000&auto=format&fit=crop',
    tags: ['Onion Export', 'Trade Trends', 'Reefer Logistics', 'GCC Imports']
  },
  {
    id: 'post-2',
    slug: 'cold-chain-reefer-container-guide-for-garlic-and-ginger',
    title: 'Cold-Chain Shipping Protocol: Maximizing Garlic & Ginger Shelf Life in Transit',
    excerpt: 'Mastering temperature calibration, relative humidity control, and air exchange rates to eliminate sprout growth and mold during multi-week ocean voyages.',
    content: `
# Cold-Chain Shipping Protocol for Garlic and Ginger

Ensuring zero damage during transoceanic shipment of garlic and ginger requires absolute discipline in container pre-cooling, humidity control, and stowage configuration.

## Garlic Reefer Settings

- **Temperature**: -2.5°C to -3.0°C (Garlic tolerates sub-zero temperatures without freezing due to high sugar solids).
- **Humidity**: 60% - 65% RH. Excess humidity causes root re-growth and black mold (*Aspergillus niger*).
- **Ventilation**: Closed or minimal 10 cbm/hr.

## Ginger Reefer Settings

- **Temperature**: +12.0°C to +13.0°C (Garlic and Ginger have completely different thermal requirements; ginger suffers chilling injury below 10°C).
- **Humidity**: 85% - 90% RH to prevent skin shriveling.
- **Ventilation**: 25 cbm/hr continuous exchange.

At Casial Global Trading, every reefer container leaves our packing plant equipped with dual IoT temperature and humidity data loggers reporting real-time metrics via satellite tracking.
    `,
    date: '2026-06-28',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Cold Chain Logistics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    category: 'Logistics & Reefer',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1000&auto=format&fit=crop',
    tags: ['Reefer Guide', 'Garlic Import', 'Ginger Logistics', 'Cold Storage']
  },
  {
    id: 'post-3',
    slug: 'harvest-calendar-buying-guide-for-b2b-spices-and-produce',
    title: 'The Annual B2B Harvest Calendar: When to Lock In Long-Term Supply Contracts',
    excerpt: 'A monthly strategic buying guide covering crop harvest peaks for Onions, Garlic, Dry Chili, Turmeric, and Potatoes across major export origins.',
    content: `
# Strategic B2B Agricultural Buying Calendar

Locking in FOB or CIF supply contracts during peak harvest yields allows international buyers to secure top-grade produce at optimal price margins before seasonal supply contractions.

## Q1 (January - March)
- **Red Onion**: Peak Nashik & Mahuva harvest. Lowest export prices, highest skin quality.
- **Turmeric**: Fresh Erode & Salem finger harvest curing begins.
- **Dry Red Chili**: Guntur chili market yards open with peak Teja S17 arrivals.

## Q2 (April - June)
- **Garlic**: Shandong Chinese garlic new crop harvest starts in May.
- **Lady Rosetta Potato**: Gujarat processing potato harvest completes; cold storage loading in progress.

## Q3 (July - September)
- **Ginger**: Kerala & Vietnam fresh ginger harvest peaks.
- **Fresh Lemons**: Assam Kaji and Eureka lemon peak juice yield.

Plan your procurement schedules with Casial Global Trading's dedicated export desks to hedge against freight fluctuations and seasonal spikes.
    `,
    date: '2026-05-12',
    author: {
      name: 'Rohan Mehta',
      role: 'Senior Trade Strategy Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    category: 'Harvest Calendar',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop',
    tags: ['Harvest Calendar', 'Procurement', 'B2B Trade', 'Spices']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is your Minimum Order Quantity (MOQ) for international shipments?',
    answer: 'For sea freight shipments, our standard MOQ is 1 x 20ft Reefer Container (approx. 13 - 14 Metric Tons) or 1 x 40ft High Cube Reefer Container (approx. 26 - 29 Metric Tons depending on commodity weight limits). For high-value perishable items like green chilis, tender okra, or fresh lemons, we also offer Air Freight shipments with an MOQ starting at 1,000 kg.',
    category: 'Orders & MOQ'
  },
  {
    id: 'faq-2',
    question: 'What payment terms do you accept for B2B export orders?',
    answer: 'We accept standard international B2B payment terms including: 1) Irrevocable, Confirmed Letter of Credit at Sight (L/C at sight) issued by a top 50 global prime bank; 2) Telegraphic Transfer (T/T) with 30% advance deposit at order confirmation and 70% balance against scanned shipping documents (Bill of Lading, Phytosanitary Certificate, Certificate of Origin); 3) CAD (Cash Against Documents) for established repeat importers.',
    category: 'Payment & L/C'
  },
  {
    id: 'faq-3',
    question: 'How do you guarantee quality and temperature control during ocean transit?',
    answer: 'Every container undergoes a 21-point pre-trip inspection (PTI). Products are pre-cooled to the exact target temperature before stuffing in our temperature-controlled loading bays. Each container is fitted with dual IoT satellite data loggers that measure real-time temperature, relative humidity, and door opening events throughout the voyage.',
    category: 'Shipping & Reefer'
  },
  {
    id: 'faq-4',
    question: 'Do you provide Phytosanitary, Certificate of Origin, and APEDA documents?',
    answer: 'Yes! Every export shipment is accompanied by full official government export documentation: 1) Official Phytosanitary Certificate from the National Plant Protection Organization; 2) Certificate of Origin issued by the Chamber of Commerce; 3) APEDA Quality Inspection Certificate; 4) Bill of Lading (B/L); 5) Commercial Invoice & Packing List; 6) Fumigation Certificate; 7) SGS or Intertek third-party lab analysis report upon request.',
    category: 'Quality & Certificates'
  },
  {
    id: 'faq-5',
    question: 'Can we request custom branding, mesh bag colors, or private label packing?',
    answer: 'Absolutely. We offer complete OEM and custom packaging solutions. You can specify mesh bag colors (red, white, yellow, purple), net weights (2kg, 5kg, 10kg, 25kg, 50kg), jute bags, corrugated cartons, or jumbo bulk bags printed with your company logo, barcode, import permit details, and multi-language labeling.',
    category: 'Orders & MOQ'
  },
  {
    id: 'faq-6',
    question: 'How do I request a product sample before placing a full container order?',
    answer: 'We provide sample dispatch via express air courier (DHL / FedEx / Emirates SkyCargo). Simply click the "Request Sample" button on any product detail page or contact our export desk. Courier freight costs can be reimbursed or credited against your first full container purchase order.',
    category: 'Orders & MOQ'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    authorName: 'Tariq Al-Mansoor',
    role: 'Managing Director',
    company: 'Al-Mansoor Foodstuff Trading LLC',
    location: 'Dubai, United Arab Emirates',
    flagEmoji: '🇦🇪',
    text: 'Casial Global Trading has been our trusted supplier for Nashik Red Onions and Chinese Garlic for over 4 years. Their commitment to container reefer temperature integrity and zero sprout guarantee has reduced our warehouse loss from 7% down to under 0.5%. Truly top-tier professional trading partner.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    purchasedCommodity: '40ft Reefer Red Onions (280 MT / Month)'
  },
  {
    id: 'test-2',
    authorName: 'Nguyen Van Hai',
    role: 'Chief Purchasing Officer',
    company: 'Mekong Agri Importers Corp',
    location: 'Ho Chi Minh City, Vietnam',
    flagEmoji: '🇻🇳',
    text: 'The quality of dry red chilis (Teja S17) and Erode finger turmeric supplied by Casial Global is pristine. High color ASTA values, strictly compliant with European and Asian lab analysis. Communication from their Mumbai export desk is remarkably fast and transparent.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    purchasedCommodity: 'Dry Red Chili Teja S17 & Turmeric'
  },
  {
    id: 'test-3',
    authorName: 'Marcus Lindqvist',
    role: 'Senior Supply Chain Manager',
    company: 'Nordic Crisp Snacks AB',
    location: 'Rotterdam / Stockholm',
    flagEmoji: '🇸🇪',
    text: 'Finding Lady Rosetta potatoes with consistently high dry matter (>23%) for our chip processing line used to be a challenge until we partnered with Casial Global. Their contract farming quality checks in Gujarat give us total confidence for our manufacturing runs.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    purchasedCommodity: 'Lady Rosetta Processing Potatoes'
  }
];

export const SAMPLE_TRACKING_DATA: ShipmentTracking = {
  trackingNumber: 'CGT-2026-881902',
  containerNumber: 'SUDU7894210',
  vesselName: 'Maersk Mc-Kinney Moller',
  voyageNumber: '2607-WEST',
  originPort: 'JNPT Nhava Sheva (Mumbai, India)',
  destinationPort: 'Port of Jebel Ali (Dubai, UAE)',
  etd: '2026-07-18',
  eta: '2026-07-24',
  currentStatus: 'In Transit',
  progressPercentage: 68,
  temperatureTarget: '+3.5 °C',
  currentTemperature: '+3.6 °C',
  humidityLevel: '64 % RH',
  ventilationSetting: '25 cbm/hr',
  milestones: [
    { date: '2026-07-15 09:30', title: 'Quality Sorting & Pre-cooling Completed', location: 'Nashik Packhouse Facility', completed: true },
    { date: '2026-07-16 14:00', title: 'Container Stuffing & Seal Applied (#CGT-99182)', location: 'JNPT Cold Depot', completed: true },
    { date: '2026-07-17 11:20', title: 'Phytosanitary & Customs Clearance Issued', location: 'JNPT Customs Gate', completed: true },
    { date: '2026-07-18 18:45', title: 'Vessel Departed Origin Port', location: 'Nhava Sheva Sea Channel', completed: true },
    { date: '2026-07-21 10:00', title: 'In Transit Across Arabian Sea (Live Satellite Logged)', location: 'Arabian Sea Coordinates', completed: true },
    { date: '2026-07-24 (Estimated)', title: 'Vessel Arrival & Berth Discharge', location: 'Jebel Ali Container Terminal 2', completed: false },
    { date: '2026-07-25 (Estimated)', title: 'Port Delivery & De-stuffing to Buyer Storage', location: 'Dubai Al Aweer Cold Store', completed: false }
  ]
};
