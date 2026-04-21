'use client';

// app/page.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const IconSearch = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="21" cy="21" r="13" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M31 31L41 41" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M16 21h10M21 16v10" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const IconLiveLocation = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="22" r="8" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5"/>
    <circle cx="24" cy="22" r="3" fill={white ? '#fff' : '#2563eb'}/>
    <path d="M24 8V5M24 39v-3M8 22H5M43 22h-3" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 30v10" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="24" cy="42" r="2" fill={white ? '#fff' : '#2563eb'}/>
    <circle cx="24" cy="22" r="12" stroke={white ? 'rgba(255,255,255,0.4)' : 'rgba(37,99,235,0.25)'} strokeWidth="2.5"/>
    <circle cx="24" cy="22" r="17" stroke={white ? 'rgba(255,255,255,0.2)' : 'rgba(37,99,235,0.12)'} strokeWidth="2"/>
  </svg>
);
const IconTransfer = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="4" y="28" width="18" height="12" rx="4" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5"/>
    <rect x="26" y="8" width="18" height="12" rx="4" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5"/>
    <path d="M13 28V22a6 6 0 0 1 6-6h10" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M26 20l3-4-3-4" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconOffline = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M34 32H14a8 8 0 0 1-2-15.7A12 12 0 0 1 35.8 22" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 26l-6 6 6 6" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 32h10" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M24 32v8M20 40h8" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const IconCommunity = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="16" r="6" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5"/>
    <circle cx="10" cy="20" r="4.5" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3"/>
    <circle cx="38" cy="20" r="4.5" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3"/>
    <path d="M4 38c0-5.523 2.686-8 6-8" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M44 38c0-5.523-2.686-8-6-8" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M14 38c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);
const IconPhilippines = ({ white }: { white?: boolean }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6Z" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3.5"/>
    <path d="M6 24h36" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 6c-4.418 5.373-7 11.373-7 18s2.582 12.627 7 18" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 6c4.418 5.373 7 11.373 7 18s-2.582 12.627-7 18" stroke={white ? '#fff' : '#2563eb'} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" fill={white ? '#fff' : '#2563eb'}/>
  </svg>
);
const FEATURE_ICONS = [IconSearch, IconLiveLocation, IconTransfer, IconOffline, IconCommunity, IconPhilippines];

const AppStoreBadge = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Download on the App Store">
    <rect width="120" height="40" rx="5" fill="#000"/>
    <rect x=".5" y=".5" width="119" height="39" rx="4.5" stroke="#A6A6A6" strokeWidth=".5" fill="none"/>
    <path d="M24.769 20.3c-.028-3.23 2.639-4.795 2.761-4.872-1.507-2.203-3.848-2.504-4.676-2.53-1.975-.201-3.87 1.176-4.873 1.176-1.015 0-2.566-1.153-4.228-1.12-2.155.033-4.149 1.262-5.254 3.186-2.252 3.904-.574 9.668 1.612 12.834 1.071 1.549 2.338 3.284 4.003 3.222 1.617-.066 2.22-1.038 4.172-1.038 1.937 0 2.494 1.038 4.187.999 1.738-.028 2.835-1.567 3.893-3.121 1.24-1.785 1.745-3.532 1.768-3.621-.04-.014-3.35-1.284-3.365-5.115z" fill="#fff"/>
    <path d="M21.535 11.338c.874-1.073 1.469-2.543 1.304-4.038-1.261.055-2.823.851-3.729 1.9-.806.934-1.522 2.457-1.333 3.892 1.409.105 2.853-.718 3.758-1.754z" fill="#fff"/>
    <text x="35" y="13" fill="#fff" fontFamily="-apple-system, 'Helvetica Neue', sans-serif" fontSize="7" letterSpacing=".3">Download on the</text>
    <text x="34" y="27" fill="#fff" fontFamily="-apple-system, 'Helvetica Neue', sans-serif" fontSize="14" fontWeight="600" letterSpacing="-.2">App Store</text>
  </svg>
);
const GooglePlayBadge = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Get it on Google Play">
    <rect width="135" height="40" rx="5" fill="#000"/>
    <rect x=".5" y=".5" width="134" height="39" rx="4.5" stroke="#A6A6A6" strokeWidth=".5" fill="none"/>
    <path d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z" fill="url(#gp1)"/>
    <path d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z" fill="url(#gp2)"/>
    <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#gp3)"/>
    <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#gp4)"/>
    <text x="40" y="13" fill="#fff" fontFamily="'Helvetica Neue', Helvetica, sans-serif" fontSize="6.5" letterSpacing=".5">GET IT ON</text>
    <text x="39" y="27" fill="#fff" fontFamily="'Helvetica Neue', Helvetica, sans-serif" fontSize="14" fontWeight="500" letterSpacing="-.2">Google Play</text>
    <defs>
      <linearGradient id="gp1" x1="21.8" y1="33.29" x2="5.017" y2="16.508" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stopColor="#00a0ff"/><stop offset="1" stopColor="#00e3ff"/></linearGradient>
      <linearGradient id="gp2" x1="33.834" y1="21.999" x2="9.637" y2="21.999" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stopColor="#ffe000"/><stop offset="1" stopColor="#ff9c00"/></linearGradient>
      <linearGradient id="gp3" x1="24.827" y1="19.704" x2="2.069" y2="-3.054" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stopColor="#ff3a44"/><stop offset="1" stopColor="#c31162"/></linearGradient>
      <linearGradient id="gp4" x1="7.297" y1="41.824" x2="17.46" y2="31.661" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 0 42)"><stop offset="0" stopColor="#32a071"/><stop offset="1" stopColor="#00f076"/></linearGradient>
    </defs>
  </svg>
);

const features = [
  { title: 'Instant Route Search',      desc: 'Type your destination and get the best jeepney routes in seconds — no guessing, no asking around.',   highlight: false },
  { title: 'Live Location Tracking',    desc: 'See your real-time position on the map as you ride, so you never miss your drop-off point.',           highlight: false },
  { title: 'Smart Transfers',           desc: 'Multi-jeep routes with intelligent transfer points — PARA plans the full trip for you.',                highlight: false },
  { title: 'Offline Mode',              desc: 'Download routes for offline use. Commute confidently even with weak signal.',                           highlight: false },
  { title: 'Community-Powered',         desc: 'Route data verified and updated by real commuters and drivers across the Philippines.',                 highlight: false },
  { title: 'Built for the Philippines', desc: 'Designed around how Filipinos actually commute — from Luzon to Mindanao.',                             highlight: false },
];

const reviews = [
  { name: 'Maria L.',  location: 'Makati City', rating: 5, text: 'Finally an app that gets the jeepney system! Saved me 30 mins on my daily commute.' },
  { name: 'Paolo R.',  location: 'Quezon City', rating: 5, text: 'Super intuitive. I used to ask strangers which jeep to take — not anymore.' },
  { name: 'Sarah M.',  location: 'Cebu City',   rating: 5, text: 'The route suggestions are surprisingly accurate. I love how simple the UI is.' },
  { name: 'Kuya Jun',  location: 'Pasay',       rating: 4, text: 'As a driver I appreciate that commuters finally know where to go. Great app!' },
];

// ─── Roadmap ──────────────────────────────────────────────────────────────────
const roadmapItems = [
  { city: 'Iloilo',    title: 'Now Available in Iloilo',     desc: 'PARA launched in Iloilo City — full jeepney route coverage across all major corridors.',  status: 'current'    },
  { city: 'Bacolod',   title: 'Coming Soon → Bacolod',       desc: 'The City of Smiles is next — complete jeepney route mapping underway.',                    status: 'inprogress' },
  { city: 'Cebu',      title: 'Coming Soon → Cebu',          desc: 'Expanding to Cebu City and Metro Cebu — the heart of the Visayas.',                        status: 'upcoming'   },
  { city: 'Aklan',     title: 'Coming Soon → Aklan',         desc: 'Covering Kalibo and Boracay gateway routes for locals and tourists alike.',                 status: 'upcoming'   },
  { city: 'Dumaguete', title: 'Coming Soon → Dumaguete',     desc: 'Route data collection begins in the City of Gentle People.',                               status: 'upcoming'   },
  { city: 'Tacloban',  title: 'Coming Soon → Tacloban',      desc: 'Bringing PARA to Eastern Visayas — Tacloban and surrounding areas.',                       status: 'upcoming'   },
];

// ─── Iloilo Active Routes ─────────────────────────────────────────────────────
const iloiloAvailable = [
  'Bo. Obrero to Iloilo City Proper Loop',
  'Villa Plaza to City Proper via Calumpang',
  'Ungka via Jaro CPU',
  'Ungka via Diversion | Festive',
  'Festive Walk to Iloilo City Proper via SM City',
  'Lanit to SM City via NIA/Jalandoni',
  'Compania to City Proper',
  'Mohon to City Proper',
  'Buntatala to Tagbak to Festive Walk via SM City/Atria',
  'Ticud to City Proper',
  'Hibao-an to City Proper via Tabucan',
  'Hibao-an to Jaro via Festive',
  'Hibao-an to Jaro via B. Aquino Ave./Festive Walk',
  'Bito-on to Jaro via Balabago',
  'Mohon to Jaro via So-oc/Festive Walk/ISATU',
  'Ungka to La Paz via CPU-ISATU',
  'Mohon to Mandurriao Business District',
  'La Paz to Festive Walk via Nabitasan Loop',
];

// ─── Social SVGs ──────────────────────────────────────────────────────────────
const FacebookIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterXIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.825 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
const LinkedInIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

// ─── Animated Stats Bar ───────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatsBar() {
  const [started, setStarted] = useState(false);
  const ref = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const routes = useCountUp(18, 1200, started);
  const percent = useCountUp(100, 1400, started);

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        <div className="flex flex-col items-center gap-2 py-8 sm:py-0 sm:px-10 text-center">
          <span className="text-6xl sm:text-7xl font-black text-[#2563eb] tracking-tight leading-none">
            {routes}{routes >= 18 ? '+' : ''}
          </span>
          <span className="text-gray-900 font-bold text-lg mt-1">Active Routes</span>
          <span className="text-gray-400 text-sm leading-snug max-w-[160px]">in Iloilo City — and growing</span>
        </div>
        <div className="flex flex-col items-center gap-2 py-8 sm:py-0 sm:px-10 text-center">
          <span className="text-6xl sm:text-7xl font-black text-[#2563eb] tracking-tight leading-none">
            {percent}{percent >= 100 ? '%' : ''}
          </span>
          <span className="text-gray-900 font-bold text-lg mt-1">Verified Route Data</span>
          <span className="text-gray-400 text-sm leading-snug max-w-[160px]">by real commuters on the ground</span>
        </div>
        <div className="flex flex-col items-center gap-2 py-8 sm:py-0 sm:px-10 text-center">
          <span
            className="text-6xl sm:text-7xl font-black text-[#2563eb] tracking-tight leading-none transition-opacity duration-700"
            style={{ opacity: started ? 1 : 0 }}
          >
            Beta
          </span>
          <span className="text-gray-900 font-bold text-lg mt-1">Early Access</span>
          <span className="text-gray-400 text-sm leading-snug max-w-[160px]">free to use during beta</span>
        </div>
      </div>
    </section>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ title, desc, IconComponent, highlight }: {
  title: string; desc: string;
  IconComponent: React.ComponentType<{ white?: boolean }>;
  highlight: boolean;
}) {
  return (
    <div className={[
      'relative rounded-3xl p-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 group h-full',
      highlight
        ? 'bg-[#2563eb] shadow-[0_24px_80px_-8px_rgba(37,99,235,0.65)] scale-[1.02] hover:scale-[1.04] hover:shadow-[0_32px_100px_-8px_rgba(37,99,235,0.75)]'
        : 'bg-white border border-gray-100 shadow-[0_8px_40px_-4px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:shadow-[0_20px_60px_-8px_rgba(37,99,235,0.18)] hover:border-blue-100',
    ].join(' ')}>
      {highlight && (
        <>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
          <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 backdrop-blur-sm">Featured</span>
        </>
      )}
      <div className={['w-14 h-14 rounded-2xl flex items-center justify-center shrink-0', highlight ? 'bg-white/20' : 'bg-blue-50'].join(' ')}>
        <div className="w-9 h-9"><IconComponent white={highlight} /></div>
      </div>
      <div>
        <h3 className={['text-lg font-bold mb-1.5', highlight ? 'text-white' : 'text-gray-900'].join(' ')}>{title}</h3>
        <p className={['text-sm leading-relaxed', highlight ? 'text-blue-100' : 'text-gray-500'].join(' ')}>{desc}</p>
      </div>
      <a href="https://test.com" target="_blank" rel="noopener noreferrer"
        className={['mt-auto text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200',
          highlight ? 'text-white' : 'text-[#2563eb]'].join(' ')}>
        Learn more →
      </a>
    </div>
  );
}

// ─── Iloilo Route Dropdown ────────────────────────────────────────────────────
function IloiloRouteDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20"
      >
        <span>{open ? 'Hide routes' : `View ${iloiloAvailable.length} active routes`}</span>
        <svg
          className={['w-3.5 h-3.5 transition-transform duration-200', open ? 'rotate-180' : ''].join(' ')}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      {open && (
        <div className="mt-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden">
          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-3">Active Routes</p>
            <ul className="space-y-2">
              {iloiloAvailable.map(route => (
                <li key={route} className="flex items-start gap-2.5 text-xs text-white/90 leading-snug">
                  <span className="mt-[3px] shrink-0 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  {route}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Team Data ────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    name: 'Keannu Torre',
    role: 'Project Lead & Founder',
    linkedin: 'https://www.linkedin.com/in/keannu-torre/',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696099/2_tx3rwm.png',
    gradient: 'from-blue-500 to-blue-700',
    short: 'The founder who turned a bedroom map project into PARA.',
    whyJoined: [
      'I am the founder and project lead of the PARA Team.',
      'PARA started the summer right after I graduated high school. Growing up I never really figured out the jeepney transportation system, and it became apparent real quickly that even for people who depended on this system most of their lives have not fully grasped it.',
      'That summer, my friend Nathaniel Del Oeste and I threw ourselves into it. We converted my bedroom into a makeshift office and spent months riding jeepneys across the city, studying routes we recorded and drawing them into a map.',
      'Initially PARA was just supposed to be an up-to-date map drawing for students to use, but the more routes we rode, the more drivers we talked to, the more commuters we listened to, the clearer it became that a static map couldn\'t capture something this alive. It was like putting together a puzzle whose pieces change shape all the time.',
    ],
    theProblem: [
      'Public transportation information in the Philippines is scarce, and what little exists goes stale fast. The most common workaround I see Ilonggos use was simply arriving early — standing at the roadside, sacrificing time spent elsewhere, carrying quiet anxiety every single day, just hoping they\'d make it. Transportation is supposed to save time. But when the preparation and uncertainty eat into that time, the advantage disappears.',
      'Asking around to get around was how I managed my way within the system with much difficulty. Then I asked myself: what if I was a student on my first day of school without my parents, what if I was elderly after route changes, what if I just moved to Iloilo for a fresh start?',
      'A final question gave birth to the refined idea of PARA — "What if, instead of mapping the system from the outside, we mapped the lived experience of commuters and built something that doesn\'t just describe the system, but grows with it?"',
    ],
    myRole: [
      'It became my goal to build something bigger than myself. As founder and project lead, I work to bring together the expertise and energy of my team toward one thing: giving commuters the certainty and reliability they\'ve always deserved but never had.',
    ],
    whyItMatters: [
      'The jeepney is one of the most iconic symbols of Filipino culture and one of its most misunderstood systems. For all its visibility, it operates digitally in the dark: routes outdated or undocumented, changes unannounced, knowledge passed informally or not at all.',
      'What we found isn\'t just a problem, but lives normalized around it — and unreliable transit information compounds inequality. It limits where people can work, study, and go. It quietly takes the time of those who have the least of it.',
      'PARA matters because certainty shouldn\'t be a privilege. It shouldn\'t depend on how long you\'ve lived somewhere, who you know, or how early you\'re willing to wake up. A student, a new arrival, an elderly commuter — they all deserve the same confidence that the system will make sense to them.',
      'If we can do this in Iloilo, we can do it anywhere in the country where the same invisible friction exists. The goal was never just a map — it was always a collective movement.',
    ],
  },
  {
    name: 'John Eugine Fernandez',
    role: 'Lead Developer',
    linkedin: 'https://www.linkedin.com/in/john-eugine-fernandez-9a99a8331/',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696099/3_vl2yuc.png',
    gradient: 'from-indigo-500 to-blue-600',
    short: 'The programmer who built PARA from the ground up.',
    whyJoined: [
      'My name is Eugine, and I am the programmer behind PARA.',
      'PARA did not start in a boardroom or a business plan — it started from a question that comes up in the minds of everyday commuters: "What ride do I take to get there?" That simple but frustrating question became the seed of what PARA is today — a digital travel guide that helps people navigate Iloilo\'s jeepney route system with confidence.',
      'I joined PARA because I\'ve experienced that problem firsthand, and I\'ve always been drawn to building systems that make confusing things simpler and more accessible for everyone.',
    ],
    theProblem: [
      'I know that frustration personally.',
      'When I was in junior high, we had a half-day of school. My classmates and I went to the city to spend the afternoon, but later I decided to head home alone. It was my first time commuting home on my own.',
      'I knew one thing: a jeepney taking the Ungka route could get me to Westwoods Subdivision in Dungon B. Simple enough.',
      'Then I saw it — Jaro - CPU - Ungka — and I hopped on. That was the mistake.',
      'The jeep took a different path than I expected, and before I knew it, I was already at the Sambag stoplight — far past Westwood. That\'s when I realized there was another Ungka jeep that follows a different route entirely. Same name. Different path.',
      'Confused and panicked, I had to take another ride just to get back toward Westwood via Sta. Barbara. What should have been one ride became two. What should have been one fare became two.',
      'When I got home, my parents explained something I didn\'t know at the time: there are two Ungka routes, and unless you already know the system, there\'s no clear way to tell the difference.',
      'That moment stayed with me — not because I made a mistake, but because I realized how easy it is to get lost in a system that assumes prior knowledge.',
    ],
    myRole: [''],
    whyItMatters: [
      'PARA exists for that version of me — the confused kid at the stoplight who just wanted to get home.',
      'It exists for every first-time commuter, every student adjusting to a new route, every person who has ever passed their stop because the system didn\'t clearly explain itself.',
      'Our city\'s jeepney network works — but it works best only if you already memorize it. That gap between knowing and not knowing is what costs people time, money, and confidence.',
      'PARA is our way of closing that gap. It is not built for tech-savvy users or people with time to figure things out. It is built para sa masa — the everyday commuter who just needs a clear, honest answer to one question: "What ride do I take to get there?"',
      'That is what PARA is for me. And that is who we are building it for.',
    ],
  },
  {
    name: 'Miles Kenneth Napilan',
    role: 'UI/UX & Front-end Developer',
    linkedin: 'https://www.linkedin.com/in/miles-kenneth-napilan-62b1a31b8/',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696914/PARA_1_couobe.png',
    gradient: 'from-blue-400 to-cyan-500',
    short: 'The designer and developer behind how PARA looks and feels.',
    whyJoined: [
      'Back in 2024, I was actively joining startup initiatives when I met Jezreel and Alicia. Around the same time, I teamed up with Eugine, who was my classmate. We all shared the same drive to build something meaningful and that solves a real problem.',
      'Currently, I\'m part of the UI/UX team, where I handle design, website development, and deployment. I also support other technical tasks whenever needed. My background in development allows me to contribute both creatively and technically to PARA.',
    ],
    theProblem: [
      'As a public commuter, commuting has always been challenging for me — especially during my student days and even now.',
      'There were times I had to wait a long time for a ride, deal with unpredictable routes, or struggle during peak hours just to get home.',
      'It\'s tiring, inefficient, and sometimes even stressful not knowing when or how you\'ll reach your destination. Those everyday struggles really stuck with me.',
    ],
    myRole: [''],
    whyItMatters: [
      'For me, PARA is a solution built from real experiences.',
      'When Keannu introduced the idea to us, we were immediately excited because it directly addressed problems we personally face.',
      'PARA is about making commuting easier, more efficient, and more reliable for people like us. It\'s something that can genuinely improve daily life, especially for commuters who deal with these challenges every day.',
    ],
  },
  {
    name: 'MJ Torre',
    role: 'Operations & Compliance',
    linkedin: '',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696099/4_nqznb7.png',
    gradient: 'from-cyan-500 to-blue-500',
    short: 'Making sure everything PARA builds is functional, credible, and reliable.',
    whyJoined: [
      'I\'ve always been drawn to organizing systems, setting processes, and making sure things are actually followed properly. In past leadership roles, I learned that vision alone isn\'t enough. Without discipline, risk management, and alignment with real-world standards, nothing scales.',
      'Being part of PARA exposed me to how confusing and unpredictable public transportation really is. That made me realize that if we were serious about solving this problem, we needed to ensure that everything works — not just in concept, but in execution.',
      'So I took on Operations and Compliance as both a responsibility and a necessity. For me, it\'s about making sure what we\'re building is not only meaningful, but also simple, functional, credible, and something people can actually rely on in their everyday lives.',
    ],
    theProblem: [
      'In all honesty, the entire experience of commuting during fieldwork was uncomfortable, confusing, and frustrating.',
      'I had not really used public transportation for most of my life, with the exception of taxis. So when I took on my role in PARA, I had to manually record routes — meaning I had to ride every jeepney and bus in Iloilo and document their full routes, which took about an hour per route.',
      'During one of these trips, I fell asleep out of fatigue. When I woke up, I realized I had ended up somewhere unfamiliar. It was already dark, I had no idea where I was, the area felt unsafe, and there were no nearby jeepneys or buses that could take me back. I had to end the day with an incomplete recording and take a taxi home.',
      'As I continued doing route recordings, I found myself thinking how useful it would be if there was something that could show where a bus is, where it will pass, when it will arrive, and where it is in real time.',
      'Then I realized — this was exactly what we were building.',
      'That uncertainty is not just inconvenient; it is genuinely stressful. And most of what I experienced — confusion, fatigue, and frustration — is something many commuters, especially beginners, go through every day.',
      'What made it even more meaningful was talking to jeepney and bus drivers and understanding their side as well — their realities, challenges, and the uncertainty they also operate under. That experience deepened my sense of responsibility and service.',
    ],
    myRole: [''],
    whyItMatters: [
      'Through all of this, I became even more motivated to solve these problems because PARA, at its core, is my response to that need.',
      'For me, PARA is not just a system — it is a way of bringing clarity to something that is currently uncertain, messy, and difficult to navigate.',
      'It represents structure in a system that often feels unstructured. It represents reliability in an environment where people are often left guessing.',
      'That is what PARA is for me.',
    ],
  },
  {
    name: 'Alicia Amor',
    role: 'Marketing & Business Development',
    linkedin: 'https://www.linkedin.com/in/aliciaamorc-alisseroma/',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696099/1_jopo8f.png',
    gradient: 'from-pink-500 to-rose-600',
    short: 'Connecting PARA to the people and communities who need it most.',
    whyJoined: [
      'I am currently the Marketing and Business Development Head of the PARA team.',
      'I\'ve always been passionate about connecting with people because I enjoy understanding their experiences and perspectives. And I believe that real impact starts with communication — when people are heard, understood, and connected, they\'re also able to help each other better.',
      'That\'s what drew me to PARA. I wanted to be part of building something that comes from real commuter experiences and turns them into something meaningful. A system that doesn\'t just function, but actually understands the struggles of the people using it.',
    ],
    theProblem: [
      'One of my worst commute experiences was when what was supposed to be a 10–15 minute ride turned into almost two hours.',
      'It was rush hour, and I was with friends coming from Iloilo Doctors College, heading to SM City Iloilo for a simple celebratory dinner. But everything became stressful quickly. We were trying to find jeepneys going our way, but most were already packed, and we weren\'t even sure if they were the right ones.',
      'We felt uncomfortable asking around because everyone was also in a rush. So we kept moving from one side of the road to another, waiting and hoping for the right ride. The sun was setting. We were hungry and exhausted.',
      'What should have been a happy celebration turned into frustration and even arguments because of the stress and confusion. We arrived an hour late, and everyone else had already started eating.',
      'That experience made me realize how much time and energy commuters lose not just because of traffic, but because of the lack of clear and accessible information.',
    ],
    myRole: [''],
    whyItMatters: [
      'For me, PARA is something that can transform the lives of every commuter — not just locals, but also travelers.',
      'I hope that as this system grows within Iloilo City and eventually expands across the Philippines, PARA becomes a way to make everyday commuting clearer, more efficient, and less stressful.',
      'It is built from real experiences — moments of confusion, waiting, and uncertainty that most commuters silently go through. I hope PARA becomes a platform that gives people clarity on where to go, what to ride, and how to get there with less stress.',
      'A system that saves time, reduces stress, and truly works for the people.',
      'Because Filipinos deserve a system that brings clarity — and I hope PARA can be that for us.',
    ],
  },
  {
    name: 'Andre Dorde',
    role: 'Analytics & Back-end Developer',
    linkedin: 'https://www.linkedin.com/in/andre-benedict-dorde/',
    avatar: 'https://res.cloudinary.com/da4k3yxhu/image/upload/v1776696099/6_zbuqso.png',
    gradient: 'from-violet-500 to-indigo-600',
    short: 'Building the data and back-end systems that make PARA reliable.',
    whyJoined: [
      'I am a 3rd-year BS Computer Science student specializing in Data Science and Analytics at Ateneo de Manila University (ADMU).',
      'I\'ve always been the type to strive for efficiency and automation. I would rather spend 10 hours building something that automates a process than spend 2 hours doing it manually. Even in the teams and projects I\'ve been part of, I\'ve always tried to make workflows easier, faster, and more efficient.',
      'I\'m passionate about creating software and solutions that make user experiences more comfortable and hassle-free.',
      'Currently, I serve as the Associate Vice President for Community Relations of the Computer Society of Ateneo, and as a Deputy for Administration of the Ateneo Resident Students Association. In both roles, I\'ve built systems that reduce manual workload and help people focus on more important tasks.',
    ],
    theProblem: [
      'As a student living away from home in Iloilo and studying in Manila, commuting has become a regular part of my life — but it hasn\'t always been smooth.',
      'Back when I was still unfamiliar with the routes in Metro Manila, I had to travel from BGC back to ADMU. I took buses, jeepneys, asked people for directions, and even relied on commuting guide apps — but I still couldn\'t find a clear route.',
      'Out of frustration, I ended up walking from Anonas to ADMU in the rain. By the time I arrived, I was completely soaked, exhausted, and had wasted almost two hours on a stressful journey.',
      'Later on, I found out there was actually a bus route from near BGC that could have taken me to ADMU in a little over 30 minutes. If I had known that earlier, it would have saved me so much time, effort, and money.',
      'Even now, there are still many routes I\'m unfamiliar with — not just in Metro Manila, but also back in Iloilo.',
    ],
    myRole: [''],
    whyItMatters: [
      'That\'s why I\'m helping build PARA.',
      'For me, PARA is a companion that grows with you — helping make your journeys easier and hassle-free. Instead of asking multiple sources or guessing your way through routes, you can rely on one platform that gives you what you need quickly and accurately.',
      'It\'s built for people like me who commute often and just want to get to their destination without unnecessary stress or confusion.',
    ],
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Is PARA free to use?',
    a: 'PARA is free during our beta period. As we grow and add more features, we plan to introduce subscription tiers — but core route navigation will always remain accessible.',
  },
  {
    q: 'Which cities does PARA currently cover?',
    a: 'PARA is currently live in Iloilo City with 18 active jeepney routes. We\'re actively mapping Bacolod next, followed by Cebu, Aklan, Dumaguete, and Tacloban.',
  },
  {
    q: 'How accurate is the route data?',
    a: 'All routes are field-verified by our team — we physically rode every jeepney line to log stops, timing, and route variations. The data is further maintained by our community of local commuters and drivers who report changes in real time.',
  },
  {
    q: 'Can I use PARA without an internet connection?',
    a: 'Yes. PARA includes an offline mode that lets you download route data in advance. Once downloaded, you can search and navigate routes even with no signal — which matters most when you\'re in areas with weak connectivity.',
  },
  {
    q: 'How do I report a wrong stop or route change?',
    a: 'Inside the app, you can flag any stop or route directly. There\'s also a "Report a Route Issue" link in our footer that takes you to a quick form. Our team reviews all submissions and updates the data usually within 48 hours.',
  },
  {
    q: 'How do I get the app?',
    a: 'PARA is currently available as a direct Android APK download — no Google Play required. iOS support is on our roadmap. You can get the latest APK from the Download APK button above.',
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 px-6 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Common questions</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Everything you need to know before your first ride with PARA.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={['rounded-2xl border transition-all duration-200 overflow-hidden',
                open === i ? 'border-[#2563eb] shadow-sm' : 'border-gray-100',
              ].join(' ')}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className={['text-sm font-semibold transition-colors', open === i ? 'text-[#2563eb]' : 'text-gray-900'].join(' ')}>
                  {faq.q}
                </span>
                <span className={['shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200',
                  open === i ? 'bg-[#2563eb] text-white rotate-45' : 'bg-gray-100 text-gray-400',
                ].join(' ')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team Modal ───────────────────────────────────────────────────────────────
function TeamModal({ member, onClose }: {
  member: typeof teamMembers[0];
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const allSections: { label: string; text: string[] }[] = [
    { label: 'Why I Joined PARA',             text: member.whyJoined },
    { label: 'The Problem We Want To Solve',   text: member.theProblem },
    { label: 'My Role',                        text: member.myRole },
    { label: 'Why PARA Matters',               text: member.whyItMatters },
  ];
  const sections = allSections.filter(s => s.text.some(p => p.trim() !== ''));

  // Keannu's first section label is different
  const displaySections = sections.map(s => ({
    ...s,
    label: member.name === 'Keannu Torre' && s.label === 'Why I Joined PARA'
      ? 'Why I Started PARA'
      : s.label,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[92vw] sm:max-w-lg md:max-w-xl max-h-[88vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header photo */}
        <div className="relative w-full shrink-0 overflow-hidden" style={{ aspectRatio: '4/3' }}>
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover object-[center_20%]"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = 'none';
                const parent = t.parentElement!;
                parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center"><span style="color:white;font-weight:700;font-size:3rem">${member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span></div>`;
              }}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
              <span className="text-white font-bold text-5xl">{member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition flex items-center justify-center text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="absolute inset-x-0 bottom-0 px-5 pb-4 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
              <p className="text-white/70 text-xs mt-0.5">{member.role}</p>
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn Profile"
                className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-[#0A66C2] backdrop-blur-sm transition-all flex items-center justify-center text-white/80 hover:text-white"
                onClick={e => e.stopPropagation()}
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="px-6 py-5 sm:px-8 sm:py-6 space-y-6">
            {displaySections.length > 0 ? displaySections.map((section, i) => (
              <div key={section.label}>
                {i > 0 && <div className="border-t border-gray-100 mb-5" />}
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#2563eb] mb-2">{section.label}</p>
                <div className="space-y-2.5">
                  {section.text.map((para, j) => (
                    <p key={j} className="text-gray-500 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )) : (
              <p className="text-gray-400 text-sm text-center py-8">Story coming soon.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────
function TeamSection() {
  const [selected, setSelected] = useState<typeof teamMembers[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map(member => (
          <button
            key={member.name}
            onClick={() => setSelected(member)}
            className="group text-left rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 bg-white"
          >
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const parent = t.parentElement!;
                    parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center"><span style="color:white;font-weight:700;font-size:2.5rem">${member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span></div>`;
                  }}
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="text-white font-bold text-5xl">{member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  onClick={e => e.stopPropagation()}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
            <div className="px-5 pt-3 pb-4 text-center">
              <h3 className="font-bold text-gray-900 text-base leading-tight">{member.name}</h3>
              <p className="text-[#2563eb] text-xs font-semibold mt-0.5">{member.role}</p>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">{member.short}</p>
              <p className="text-[#2563eb] text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read story →
              </p>
            </div>
          </button>
        ))}
      </div>
      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

// ─── Navbar wrapper ───────────────────────────────────────────────────────────
function NavbarWrapper() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const isMobile = () => window.innerWidth < 1024;
    const update = () => { if (isMobile()) setVisible(true); else setVisible(window.scrollY > 60); };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out' }}>
      <Navbar />
    </div>
  );
}

// ─── App Badges ───────────────────────────────────────────────────────────────
function AppBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative cursor-not-allowed">
        <AppStoreBadge className={['h-[46px] w-auto opacity-50', dark ? '' : ''].join(' ').trim()} />
        <div className="absolute inset-0 flex items-center justify-center rounded-[5px] bg-black/60 backdrop-blur-[1px]">
          <span className="text-white text-[11px] font-bold uppercase tracking-widest">Soon</span>
        </div>
      </div>
      <div className="relative cursor-not-allowed">
        <GooglePlayBadge className="h-[46px] w-auto opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center rounded-[5px] bg-black/60 backdrop-blur-[1px]">
          <span className="text-white text-[11px] font-bold uppercase tracking-widest">Soon</span>
        </div>
      </div>
    </div>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <NavbarWrapper />

      {/* ── HERO ── */}
      <section id="hero" className="scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start -mb-10 lg:-mb-14">
                <Image src="/para-logo.png" alt="PARA Logo" width={600} height={200} priority className="w-auto max-w-full h-56 sm:h-64 lg:h-72 object-contain object-left lg:-ml-20" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
                Find the best<br />Jeepney Route<br /><span className="text-[#2563eb]">Instantly</span>
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 text-lg text-gray-500 mt-4">Your Jeepney Route Companion for the Philippines</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <a
                  href="/para.apk"
                  download
                  className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-[#1e40af] transition-all text-white font-semibold text-base px-7 py-4 rounded-2xl shadow-lg active:scale-95 group"
                >
                  {/* Android icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.523 15.341a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-11.046 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM.82 8.516l2.01 3.48A3.745 3.745 0 0 0 2 14v5.25A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V14a3.745 3.745 0 0 0-.83-2.004l2.01-3.48a.75.75 0 0 0-1.3-.752l-1.954 3.384A3.737 3.737 0 0 0 18 10.5H6a3.737 3.737 0 0 0-1.926.648L2.12 7.764a.75.75 0 1 0-1.3.752ZM6 12h12a2.25 2.25 0 0 1 2.25 2.25v5a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 19.25v-5A2.25 2.25 0 0 1 6 12Z"/>
                  </svg>
                  <span>Download for Android</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 opacity-60 group-hover:translate-y-0.5 transition-transform">
                    <path d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="text-gray-400 text-xs self-center">APK · Android 8.0+</span>
              </div>
              <div className="mt-6 flex justify-center lg:justify-start"><AppBadges /></div>
            </div>
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px] lg:ml-auto lg:pl-8 xl:pl-16">
              <div className="relative bg-black rounded-[52px] border-[14px] border-black shadow-2xl overflow-hidden aspect-[9/19]">
                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30" />
                <div className="absolute inset-[6px] bg-zinc-950 rounded-[38px] overflow-hidden">
                  <video autoPlay loop muted playsInline poster="/para-poster.jpg" className="w-full h-full object-cover object-top">
                    <source src="https://res.cloudinary.com/da4k3yxhu/video/upload/v1776781251/para-onboarding1_1_1_xuhzjz.mp4" type="video/mp4" />
                  </video>
                  {/* Mask status bar at top */}
                  <div className="absolute top-0 left-0 right-0 h-[4%] bg-black z-10 pointer-events-none" />
                  {/* Mask bottom nav bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-black z-10 pointer-events-none" />
                </div>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-br from-[#2563eb]/10 to-transparent blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section id="mission" className="bg-[#2563eb] py-20 px-6 scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">Our Mission</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">Making every commute smarter, faster, and less stressful</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">Millions of Filipinos ride jeepneys every day — yet there&apos;s no simple way to know which one to take. PARA exists to change that. We&apos;re building the most complete, community-powered jeepney route database in the Philippines so you can get from A to B with confidence.</p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <StatsBar />

      {/* ── KEY FEATURES ── */}
      <section id="features" className="py-24 px-6 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full">Key Features</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Everything you need to commute smarter</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Designed for the real chaos of Philippine roads — not some idealized transit system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const IconComponent = FEATURE_ICONS[i];
              return <FeatureCard key={f.title} title={f.title} desc={f.desc} IconComponent={IconComponent} highlight={f.highlight} />;
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full">How It Works</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Ride in 3 simple steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-blue-100 z-0" />
            {[
              { step: '01', title: 'Enter your destination', desc: "Type where you're headed — street, landmark, or barangay." },
              { step: '02', title: 'Get your route',         desc: 'PARA shows the best jeepney combinations with fares and stops.' },
              { step: '03', title: 'Ride with confidence',   desc: 'Track your ride live and know exactly when to get off.' },
            ].map((s, i) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
                {i > 0 && <div className="md:hidden w-0.5 h-8 bg-blue-100 mb-0" />}
                <div className="w-20 h-20 rounded-full bg-[#2563eb] text-white text-2xl font-bold flex items-center justify-center shadow-lg mb-5 mt-5 md:mt-0">{s.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" className="bg-gray-50 scroll-mt-16">
        <div className="bg-[#2563eb] w-full py-16 px-6 text-center mb-14">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">City Expansion Road Map</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">Now Available in Iloilo</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            We started in Iloilo. Now we&apos;re expanding across Visayas, one city at a time.
          </p>
        </div>
        <div className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />
              <div className="space-y-8">
                {roadmapItems.map(item => (
                  <div key={item.city} className="relative flex gap-6 pl-14">
                    <div className={['absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm border-2',
                      item.status === 'current'    ? 'bg-[#2563eb] border-[#2563eb] text-white' :
                      item.status === 'inprogress' ? 'bg-[#2563eb] border-[#2563eb] text-white' :
                                                     'bg-white border-gray-200 text-gray-400'].join(' ')}>
                      {item.status === 'current' ? '✓' : item.status === 'inprogress' ? '→' : '·'}
                    </div>
                    <div className={['rounded-2xl border flex-1 overflow-hidden',
                      item.status === 'current'
                        ? 'bg-[#2563eb] border-[#2563eb] shadow-lg'
                        : item.status === 'inprogress'
                          ? 'bg-white border-[#2563eb] shadow-md'
                          : 'bg-white border-gray-100 shadow-sm'].join(' ')}>
                      <div className="p-5">
                        <span className={['text-xs font-semibold uppercase tracking-wider',
                          item.status === 'current'    ? 'text-blue-200' :
                          item.status === 'inprogress' ? 'text-[#2563eb]' :
                                                         'text-gray-400'].join(' ')}>
                          {item.city}
                          {item.status === 'inprogress' && (
                            <span className="ml-2 bg-blue-100 text-[#2563eb] rounded-full px-2 py-0.5 text-xs">In Progress</span>
                          )}
                        </span>
                        <h3 className={['font-semibold mt-1 mb-1',
                          item.status === 'current' ? 'text-white' : 'text-gray-900'].join(' ')}>{item.title}</h3>
                        <p className={['text-sm',
                          item.status === 'current' ? 'text-blue-100' : 'text-gray-500'].join(' ')}>{item.desc}</p>
                        {item.status === 'current' && <IloiloRouteDropdown />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM / OUR STORY ── */}
      <section id="team" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full">Our Story</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Meet the team behind PARA</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Click on any card to read their story.</p>
          </div>
          <TeamSection />
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6 bg-[#f0f7ff] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-50 text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full">Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">What commuters are saying</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                  {Array.from({ length: 5 - r.rating }).map((_, i) => <span key={i} className="text-gray-200 text-sm">★</span>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── FOOTER ── */}
      <footer className="bg-[#0f172a] text-white">
        <div className="border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 xl:px-16 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Ready to commute smarter?</p>
              <h3 className="text-2xl font-bold text-white">Download PARA for free.</h3>
            </div>
            <AppBadges dark />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 xl:px-16 pt-14 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/5">
            <div>
              <a href="#hero" className="inline-block mb-5">
                <Image src="/para-logo.png" alt="PARA" width={180} height={60} className="h-12 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-7">The Philippines&apos; most complete jeepney route companion. Open to all commuters, built by Filipinos.</p>
              <div className="flex gap-2.5">
                {[
                  { href: 'https://facebook.com', label: 'Facebook',  icon: <FacebookIcon />,  hover: 'hover:bg-[#1877F2]' },
                  { href: 'https://x.com',         label: 'X',         icon: <TwitterXIcon />,  hover: 'hover:bg-white/10'  },
                  { href: 'https://instagram.com', label: 'Instagram', icon: <InstagramIcon />, hover: 'hover:bg-[#E1306C]' },
                  { href: 'https://linkedin.com',  label: 'LinkedIn',  icon: <LinkedInIcon />,  hover: 'hover:bg-[#0A66C2]' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className={`w-8 h-8 rounded-md border border-white/10 bg-white/5 ${s.hover} text-white/50 hover:text-white flex items-center justify-center transition-all duration-200`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Product</p>
              <ul className="space-y-3">
                {[
                  { label: 'Features',     id: 'features'     },
                  { label: 'How It Works', id: 'how-it-works' },
                  { label: 'Roadmap',      id: 'roadmap'      },
                  { label: 'FAQ',          id: 'faq'          },
                  { label: 'Download',     id: 'hero'         },
                ].map(l => (
                  <li key={l.label}><button onClick={() => scrollTo(l.id)} className="text-white/55 hover:text-white text-sm transition-colors text-left">{l.label}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3">
                {[
                  { label: 'Our Mission', id: 'mission' },
                  { label: 'Blog',        id: null      },
                  { label: 'Careers',     id: null      },
                ].map(l => (
                  <li key={l.label}>
                    {l.id
                      ? <button onClick={() => scrollTo(l.id!)} className="text-white/55 hover:text-white text-sm transition-colors text-left">{l.label}</button>
                      : <a href="#" className="text-white/55 hover:text-white text-sm transition-colors">{l.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3">
                {[
                  { label: 'hello@paraapp.ph',    href: 'mailto:hello@paraapp.ph' },
                  { label: 'Support Center',       href: '#' },
                  { label: 'Report a Route Issue', href: 'https://forms.gle/1nnmYjyXAJ2Qb9b6A' },
                  { label: 'Partner with Us',      href: '#' },
                ].map(l => (
                  <li key={l.label}><a href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© {new Date().getFullYear()} PARA App. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
