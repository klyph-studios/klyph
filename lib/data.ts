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
    email: "outreach@klyphconnect.com",
    metrics: [
      { val: "120+", lbl: "Projects Delivered" },
      { val: "5.4×", lbl: "Average Client ROI" },
      { val: "98.5%", lbl: "Client Retention" },
    ],
  },
  marquee: [
    "SMN Construction",
    "Royal Rugs Flooring",
    "Valpo Construction",
    "Enlite Helicopters",
    "Veera Groups of Hotel",
    "Black Lens Photo Studio",
    "The Happy Beaks Sanctuary",
    "Crystal Clear Academy",
    "AJL Windows & Doors",
    "Next.js App Router",
    "GSAP Motion Systems"
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
      name: "SMN — Construction & Heavy Engineering", 
      cat: "Construction", 
      tags: "Construction, Infrastructure, Architectural", 
      emoji: "🏗️", 
      bg: "bg-klyph-dark-1", 
      desc: "Comprehensive digital portal for SMN Construction, showcasing commercial development, heavy engineering capabilities, and turnkey infrastructure projects.", 
      results: "+280% Commercial Inquiries, 4.2x RFP Pipeline, Fast-Load Architecture",
      liveUrl: "https://jolly-jalebi-3179a3.netlify.app/"
    },
    { 
      id: "p2", 
      name: "Royal Rugs — Luxury Artisanal Flooring", 
      cat: "Flooring", 
      tags: "Flooring, Luxury Rugs, E-Commerce Showcase", 
      emoji: "🧶", 
      bg: "bg-klyph-dark-2", 
      desc: "Ultra-luxury digital catalog for Royal Rugs, highlighting handcrafted oriental, modern, and bespoke flooring for high-end residential interiors.", 
      results: "+340% Designer Orders, High-Ticket Catalog Conversions, 5.0★ Experience",
      liveUrl: "https://royal-rugs-demo.vercel.app/#"
    },
    { 
      id: "p3", 
      name: "Valpo — Modern Architectural Construction", 
      cat: "Construction", 
      tags: "Construction, Urban Builders, Engineering", 
      emoji: "🏢", 
      bg: "bg-klyph-dark-3", 
      desc: "High-impact digital platform for Valpo construction group featuring verified project portfolios, structural engineering milestones, and client bid inquiries.", 
      results: "3.5x Client Lead Gen, 100% Mobile Optimized, Sleek Industrial Design",
      liveUrl: "https://transcendent-sawine-c1e5be.netlify.app/"
    },
    { 
      id: "p4", 
      name: "Enlite Helicopters — VIP Aviation & Charter", 
      cat: "Aviation", 
      tags: "Helicopter Charter, Aviation, VIP Booking", 
      emoji: "🚁", 
      bg: "bg-klyph-dark-4", 
      desc: "Executive aviation portal and private helicopter charter reservation engine with dynamic flight booking, fleet specifications, and aerial tour experiences.", 
      results: "+310% Flight Reservations, Seamless Concierge Booking, 4.9x ROI",
      liveUrl: "https://enlite-helicopters.vercel.app/"
    },
    { 
      id: "p5", 
      name: "Veera Groups of Hotel — Luxury Hospitality", 
      cat: "Hospitality", 
      tags: "Hotel Group, Hospitality, Suite Booking", 
      emoji: "🏨", 
      bg: "bg-klyph-dark-5", 
      desc: "Premium hospitality web destination for Veera Groups of Hotel (Veera Residency), offering direct room reservations, banquet bookings, and guest amenities.", 
      results: "+220% Direct Bookings, Zero Commission Leakage, 4.8★ Guest Rating",
      liveUrl: "https://veeraresidency.com/"
    },
    { 
      id: "p6", 
      name: "Black Lens Studio — High-End Photo & Media", 
      cat: "Photo Studio", 
      tags: "Photo Studio, Fashion & Editorial, Booking", 
      emoji: "📸", 
      bg: "bg-klyph-dark-6", 
      desc: "Cinematic digital portfolio and session scheduler for Black Lens Studio, specializing in fashion, portraiture, commercial, and high-speed motion photography.", 
      results: "Fully Booked Studio Calendar 2 Months Out, High-Res Fast CDN Delivery",
      liveUrl: "https://blacklens-studio.vercel.app/"
    },
    { 
      id: "p7", 
      name: "The Happy Beaks — Exotic Avian Specialist", 
      cat: "Avian Shop", 
      tags: "Bird Shop, Avian Care, Specialty Store", 
      emoji: "🦜", 
      bg: "bg-klyph-dark-1", 
      desc: "Interactive pet and exotic bird digital experience for The Happy Beaks, connecting bird enthusiasts with certified breeds, nutrition, and habitat gear.", 
      results: "+450% Local & Regional Traffic, 3.9x Product Inquiries, 5.0★ Community",
      liveUrl: "https://happy-beaks.vercel.app/"
    },
    { 
      id: "p8", 
      name: "Crystal Clear Academy — Premier Education Institute", 
      cat: "Education", 
      tags: "Education Institute, Coaching, Admissions", 
      emoji: "🎓", 
      bg: "bg-klyph-dark-2", 
      desc: "Next-generation academic portal for Crystal Clear Academy, streamlining student enrollments, faculty profiles, interactive curriculum, and coaching programs.", 
      results: "850+ New Enrolled Students, 92% Admissions Portal Conversion",
      liveUrl: "https://crystal-clear-academy.vercel.app/"
    },
    { 
      id: "p9", 
      name: "AJL Windows — Architectural Windows & Doors", 
      cat: "Windows & Doors", 
      tags: "Windows & Doors, Glazing, Architectural Enclosures", 
      emoji: "🪟", 
      bg: "bg-klyph-dark-3", 
      desc: "Modern digital showcase for AJL Windows, exhibiting precision-engineered aluminium windows, acoustic glazing, sliding door systems, and custom architect orders.", 
      results: "2.8x Project Inquiries, High-Value Architect Specs, Interactive Catalog",
      liveUrl: "https://ajl-windows-demo.netlify.app/"
    },
  ] as ProjectItem[],
  testimonials: [
    { id: "t1", quote: "Klyph built our construction portal to perfection. Commercial bids and client inquiries have grown exponentially since launch.", author: "SMN Executive Board", role: "Leadership, SMN Construction", init: "SM", stars: 5, cat: "Construction" },
    { id: "t2", quote: "Our luxury rug catalog looks like an international art gallery. High-net-worth interior designers reach out every week.", author: "Farhan Khan", role: "Managing Partner, Royal Rugs", init: "FK", stars: 5, cat: "Flooring" },
    { id: "t3", quote: "The VIP booking flow for Enlite Helicopters is ultra-sleek and flawless. Our private charter reservations surged instantly.", author: "Aviation Operations", role: "Director, Enlite Helicopters", init: "EH", stars: 5, cat: "Aviation" },
    { id: "t4", quote: "Direct reservations for Veera Residency went through the roof. The speed, aesthetics, and mobile booking feel 5-star.", author: "Veera Management", role: "Director, Veera Groups of Hotel", init: "VM", stars: 5, cat: "Hospitality" },
    { id: "t5", quote: "Our studio sessions are booked solid weeks in advance. The dark, minimalist gallery style Klyph designed for Black Lens is world-class.", author: "Karthik R.", role: "Lead Photographer, Black Lens Studio", init: "KR", stars: 5, cat: "Photo Studio" },
  ] as TestimonialItem[],
  companies: [
    { id: "c1", name: "SMN Construction", init: "SM" },
    { id: "c2", name: "Royal Rugs", init: "RR" },
    { id: "c3", name: "Valpo Construction", init: "VC" },
    { id: "c4", name: "Enlite Helicopters", init: "EH" },
    { id: "c5", name: "Veera Groups of Hotel", init: "VH" },
    { id: "c6", name: "Black Lens Studio", init: "BL" },
    { id: "c7", name: "The Happy Beaks", init: "HB" },
    { id: "c8", name: "Crystal Clear Academy", init: "CA" },
    { id: "c9", name: "AJL Windows", init: "AW" },
  ] as CompanyItem[],
  cta: {
    line1: "Ready to Transform",
    line2: "Your Digital Presence?",
    sub: "Book a private 30-minute strategic consultation with the Klyph team.",
    email: "outreach@klyphconnect.com",
  },
  whyUs: {
    tag: "Why Klyph",
    headline1: "We Craft Exceptional Experiences —",
    headline2: "That Drive Measurable Yield",
    sub: "Whether you run an aviation charter, luxury hotel group, construction firm, photo studio, education institute, or artisan manufacturer, we build digital infrastructure obsessed with results.",
    cards: [
      { icon: "🏛️", title: "Niche Mastery", desc: "Deep domain expertise tailored to luxury, specialized, and high-ticket service industries." },
      { icon: "✨", title: "Minimalist Craft", desc: "World-class black & white aesthetics that convey immediate prestige and authority." },
      { icon: "🔍", title: "SEO Architecture", desc: "Built with pristine structural markup, lightning-fast rendering, and search dominance." },
      { icon: "⚡", title: "Full-Stack Velocity", desc: "Clean Next.js App Router modularly structured for high-performance deployments." },
    ],
  },
  footer: {
    tagline: "Ultra-premium digital studio — bespoke web design, personal branding, motion & AI systems.",
    email: "outreach@klyphconnect.com",
    phone: "+91 8220540238",
    location: "Global — Bespoke Digital Agency",
  },
};

