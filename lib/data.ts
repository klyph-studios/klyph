export interface ProjectItem {
  id: string;
  name: string;
  cat: string;
  tags: string;
  emoji: string;
  bg: string;
  desc: string;
  results: string;
  videoUrl?: string;
  screenshots?: string;
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  cls: string;
  badge: string;
  title: string;
  desc: string;
  items: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  init: string;
  stars: number;
  cat: string;
}

export interface CompanyItem {
  id: string;
  name: string;
  init: string;
  logo?: string;
}

export const KLYPH_DATA = {
  brand: "Klyph",
  hero: {
    badge: "Accepting Select Q3/Q4 Clients",
    line1: "We Architect Brands",
    line2: "That Dominate Markets",
    sub: "Klyph is an ultra-premium digital studio — bespoke web architecture, executive personal branding, cinema motion film, and autonomous AI systems.",
    email: "hello@klyph.studio",
    metrics: [
      { val: "120+", lbl: "Projects Delivered" },
      { val: "5.4×", lbl: "Average Client ROI" },
      { val: "98.5%", lbl: "Client Retention" },
    ],
  },
  marquee: [
    "Exotic Bird Breeder Platform", 
    "Physio & Photo Studio", 
    "Teaching & Coaching Academy", 
    "Luxury Car Shop", 
    "Helicopter Aviation Charter", 
    "Bespoke Web Architecture", 
    "GSAP + ScrollTrigger", 
    "Lenis Smooth Scroll"
  ],
  services: [
    { id: "s1", icon: "🌐", cls: "ico-monochrome", badge: "", title: "Bespoke Web Architecture", desc: "Visually captivating, high-performing web platforms engineered for maximum conversion and search authority.", items: ["Custom Next.js App Router Builds", "GSAP + ScrollTrigger Motion", "High-Ticket E-Commerce Systems", "Performance & Core Web Vitals", "Managed Infrastructure"] },
    { id: "s2", icon: "👑", cls: "ico-monochrome", badge: "featured", title: "Executive Personal Branding", desc: "Build an iconic online presence that establishes market authority and attracts high-net-worth opportunities.", items: ["Brand Identity & Narrative", "Executive LinkedIn & X Presence", "PR & Strategic Positioning", "Visual Design Systems", "Authority Content Pipelines"] },
    { id: "s4", icon: "🎬", cls: "ico-monochrome", badge: "popular", title: "Motion Design & Film Assets", desc: "Cinema-grade short-form content and brand video assets designed for organic virality.", items: ["Reels & Short-Form Content", "YouTube & Documentary Editing", "Commercial Brand Films", "3D & 2D Motion Graphics", "Custom Captions & Visuals"] },
    { id: "s5", icon: "📋", cls: "ico-monochrome", badge: "", title: "Content Strategy & Copywriting", desc: "Data-driven content calendars and compelling copy tailored to resonate deeply with target audiences.", items: ["30-Day Content Frameworks", "Viral Script Engineering", "High-Converting Copywriting", "Niche Market Intelligence", "Omnichannel Growth Strategy"] },
    { id: "s6", icon: "📱", cls: "ico-monochrome", badge: "", title: "Full-Spectrum Account Handling", desc: "End-to-end digital management — content scheduling, engagement, community building, and lead tracking.", items: ["Automated Distribution", "Community & DM Management", "Growth Analytics & Audits", "Influencer Collaboration", "Conversion Optimization"] },
  ] as ServiceItem[],
  projects: [
    { 
      id: "p1", 
      name: "AeroAvian — Exotic Bird Breeder Studio", 
      cat: "Bird Breeder", 
      tags: "Bird Breeder, E-Commerce, Next.js", 
      emoji: "🦜", 
      bg: "bg-klyph-dark-1", 
      desc: "Ultra-luxury digital storefront and booking portal for a premier exotic bird breeding studio. Enabled global reservation tracking and pedigree authentication.", 
      results: "+420% International Inquiries, 3.8x Reservation Rate, #1 Google Ranking"
    },
    { 
      id: "p2", 
      name: "Kinetic Pulse — Physio & Photo Studio", 
      cat: "Physio & Studio", 
      tags: "Physio & Photo Studio, Booking System, Motion", 
      emoji: "📸", 
      bg: "bg-klyph-dark-2", 
      desc: "Dual-concept digital ecosystem for a high-performance sports physio clinic and high-speed motion photo studio. Integrated instant appointment & studio booking.", 
      results: "0 → Fully Booked 3 Months Out, 5.0★ Rating, 85% Auto-Booking"
    },
    { 
      id: "p3", 
      name: "Apex Masterclass — Teaching & Coaching Academy", 
      cat: "Coaching", 
      tags: "Coaching Class, Course Platform, Branding", 
      emoji: "🎓", 
      bg: "bg-klyph-dark-3", 
      desc: "High-converting learning portal and funnel architecture for an elite executive teaching and coaching academy. Scaled student enrollments seamlessly.", 
      results: "800% Student Growth, $1.2M Course Sales, 94% Completion Rate"
    },
    { 
      id: "p4", 
      name: "Velocita Customs — Luxury Car Shop & Tuner", 
      cat: "Car Shop", 
      tags: "Car Shop, Automotive, GSAP Motion", 
      emoji: "🏎️", 
      bg: "bg-klyph-dark-4", 
      desc: "Bespoke web experience and cinematic film assets for a high-end supercar modification & luxury automotive restoration shop.", 
      results: "2.5x Average Build Value, 1.8M Social Views, Fully Booked Bay"
    },
    { 
      id: "p5", 
      name: "RotorLuxe Aviation — Helicopter Charter Co.", 
      cat: "Helicopter Co", 
      tags: "Helicopter Company, Aviation, VIP Booking", 
      emoji: "🚁", 
      bg: "bg-klyph-dark-5", 
      desc: "Executive charter booking engine and brand identity for a private helicopter charter and aerial tour fleet operator.", 
      results: "+310% Flight Inquiries, VIP Concierge Integration, 4.9x ROI"
    },
  ] as ProjectItem[],
  testimonials: [
    { id: "t1", quote: "Klyph completely transformed our exotic bird breeding business online. Our global inquiries quadrupled and our reservation portal is flawless.", author: "Julian Vance", role: "Founder, AeroAvian Exotic Breeder", init: "JV", stars: 5, cat: "Bird Breeder" },
    { id: "t2", quote: "Combining our physio clinic with our photography studio needed a unique web design. Klyph nailed it — clients book out months in advance!", author: "Dr. Elena Rostova", role: "Director, Kinetic Physio & Photo Studio", init: "ER", stars: 5, cat: "Physio & Studio" },
    { id: "t3", quote: "Our coaching academy scaled to 800+ executive students in less than 6 months. Klyph's course platform and brand strategy are second to none.", author: "Marcus Thorne", role: "Head Coach, Apex Masterclass Academy", init: "MT", stars: 5, cat: "Coaching" },
    { id: "t4", quote: "Our car shop went from local word-of-mouth to servicing supercars from across the country. The video motion content and web design Klyph built is insane.", author: "Dominic Rossi", role: "CEO, Velocita Luxury Car Customs", init: "DR", stars: 5, cat: "Car Shop" },
    { id: "t5", quote: "The VIP booking engine Klyph developed for our helicopter fleet doubled our private charter reservations in 60 days.", author: "Captain Richard Sterling", role: "Managing Director, RotorLuxe Aviation", init: "RS", stars: 5, cat: "Helicopter Co" },
  ] as TestimonialItem[],
  companies: [
    { id: "c1", name: "AeroAvian Exotic Bird Breeder", init: "AB" },
    { id: "c2", name: "Kinetic Physio & Photo Studio", init: "KP" },
    { id: "c3", name: "Apex Coaching Class", init: "AC" },
    { id: "c4", name: "Velocita Luxury Car Shop", init: "VC" },
    { id: "c5", name: "RotorLuxe Helicopters", init: "RH" },
  ] as CompanyItem[],
  cta: {
    line1: "Ready to Transform",
    line2: "Your Digital Presence?",
    sub: "Book a private 30-minute strategic consultation with the Klyph team. Press ESC anytime to invert theme colors.",
    email: "hello@klyph.studio",
  },
  whyUs: {
    tag: "Why Klyph",
    headline1: "We Craft Exceptional Experiences —",
    headline2: "That Drive Measurable Yield",
    sub: "Whether you run an exotic bird breeding studio, physio & photo studio, coaching academy, car shop, or helicopter charter company, we build digital infrastructure obsessed with results.",
    cards: [
      { icon: "🦜", title: "Niche Mastery", desc: "Deep domain expertise tailored to luxury, specialized, and high-ticket service industries." },
      { icon: "✨", title: "Minimalist Craft", desc: "World-class black & white aesthetics that convey immediate prestige. Press ESC anytime to invert!" },
      { icon: "🔍", title: "SEO Architecture", desc: "Built with pristine structural markup, lightning-fast rendering, and search dominance." },
      { icon: "⚡", title: "Full-Stack Backend", desc: "Clean Next.js App Router modularly structured for Python/Java REST APIs and Sanity CMS." },
    ],
  },
  footer: {
    tagline: "Ultra-premium digital studio — bespoke web design, personal branding, motion & AI systems.",
    email: "hello@klyph.studio",
    phone: "+1 (800) 895-5974",
    location: "Global — Bespoke Digital Agency",
  },
};
