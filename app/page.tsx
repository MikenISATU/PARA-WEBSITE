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

// ─── Iloilo Route Lists ───────────────────────────────────────────────────────
const iloiloAvailable = [
  'Bo. Obrero–Iloilo City Proper Loop',
  'Calaparan Calumpang–Iloilo City Proper',
  'Ungka–Iloilo City Proper via CPU',
  'Ungka–Iloilo City via Diversion/Festive Walk',
  'Festive Walk–Iloilo City Proper via SM City',
  'Compania–Iloilo City Proper Loop',
  'Mohon–Infante Loop (Mohon)',
  'Jaro Liko–Tagbak Link from ICTTMO',
  'Jaro Liko NFA',
  'Hibao-an–Iloilo City Proper via Tabucan',
  'Hibao-an–Jaro via Abeto/Western/Festive',
  'Molo–Iloilo City Proper via Baluarte Loop',
  'Villa Baybay–City Proper via Bonifacio',
  'Tagbak–Festive Walk via SM City/Atria',
  'La Paz–Festive Walk via Nabitasan Loop',
  'Jaro CPU',
  'San Miguel (San Mig B to Festive)',
  'Hibao-an Mandurriao via Jaro',
];

// ─── Social SVGs ──────────────────────────────────────────────────────────────
const FacebookIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterXIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.825 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
const LinkedInIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

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
        <span>{open ? 'Hide routes' : `View ${iloiloAvailable.length} available routes`}</span>
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
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-3">
              Available Routes
            </p>
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
// Each section field accepts a string (single paragraph) or string[] (multiple paragraphs).
const teamMembers = [
  {
    name: 'Andi Reyes',
    role: 'CEO & Co-Founder',
    linkedin: 'https://linkedin.com/in/andi-reyes',
    avatar: 'https://ui-avatars.com/api/?name=Andi+Reyes&background=2563eb&color=fff&size=200&bold=true',
    gradient: 'from-blue-500 to-blue-700',
    short: 'Urban mobility advocate and the vision behind PARA.',
    whyJoined: [
      'Growing up in Iloilo, I rode jeepneys every day to school. I watched tourists and newcomers get completely lost — confused by a system with no map, no guide, no app. That frustration never left me.',
    ],
    theProblem: [
      'Millions of Filipinos depend on jeepneys daily, yet there\'s no simple way to know which one to take. That gap felt like a glaring blind spot for a country this connected.',
    ],
    myRole: [
      'I pitched the idea at a startup competition in 2024, then spent the next year turning a whiteboard sketch into a real product — recruiting the team, setting strategy, and driving every major decision.',
    ],
    whyItMatters: [
      'This isn\'t just a navigation app. It\'s infrastructure that never existed. When we get it right, it changes how an entire country moves.',
    ],
  },
  {
    name: 'Marco Santos',
    role: 'CTO & Co-Founder',
    linkedin: 'https://linkedin.com/in/marco-santos',
    avatar: 'https://ui-avatars.com/api/?name=Marco+Santos&background=4f46e5&color=fff&size=200&bold=true',
    gradient: 'from-indigo-500 to-blue-600',
    short: 'The engineer who turned the idea into a working app.',
    whyJoined: [
      'When Andi pitched PARA at the competition, I stayed after the session to talk. Two hours later, we were still at it. I flew to Iloilo that same month.',
    ],
    theProblem: [
      'The jeepney system had no data layer — no stops, no routes, no source of truth. Before we could build anything, we had to map everything from scratch.',
    ],
    myRole: [
      'I built the technical foundation: rode every route to log stops and timing, architected the data layer, and lead all engineering decisions from day one.',
    ],
    whyItMatters: [
      'Great software should be invisible — you shouldn\'t notice the tech, just the result. That\'s the standard I hold every line of code to.',
    ],
  },
  {
    name: 'Liza Cruz',
    role: 'Head of Design',
    linkedin: 'https://linkedin.com/in/liza-cruz',
    avatar: 'https://ui-avatars.com/api/?name=Liza+Cruz&background=0ea5e9&color=fff&size=200&bold=true',
    gradient: 'from-blue-400 to-cyan-500',
    short: 'The reason PARA looks and feels effortless to use.',
    whyJoined: [
      'I almost turned down the internship — too many startup ideas go nowhere. But PARA was solving something real and I knew I could make it feel that way too.',
    ],
    theProblem: [
      'Most transit apps are built for tech-savvy users. The people who need PARA most are everyday commuters — lolas, students, tricycle drivers — and the design had to work for all of them.',
    ],
    myRole: [
      'I redesigned the interface three times before I was satisfied. Every iteration started with the same question: if my lola had to use this, could she figure it out in 30 seconds?',
    ],
    whyItMatters: [
      'That question became our design north star. Simple, clear, and built for everyone — not just people who are comfortable with apps.',
    ],
  },
  {
    name: 'Ryan Dela Torre',
    role: 'Lead Developer',
    linkedin: 'https://linkedin.com/in/ryan-dela-torre',
    avatar: 'https://ui-avatars.com/api/?name=Ryan+Dela+Torre&background=1d4ed8&color=fff&size=200&bold=true',
    gradient: 'from-blue-600 to-indigo-700',
    short: 'The developer who made real-time tracking actually work.',
    whyJoined: [
      'I joined three months in, when the live location feature was broken and the launch was two weeks away. I stayed up four nights straight to rebuild it from scratch.',
    ],
    theProblem: [
      'Real-time location tracking sounds simple until you\'re dealing with inconsistent GPS signals, low-end devices, and spotty mobile data — which describes most commuter hardware in the Philippines.',
    ],
    myRole: [
      'I own the live tracking system and core app performance. When something breaks, I\'m the one everyone comes to — not because I said so, but because I usually find the root cause fastest.',
    ],
    whyItMatters: [
      'Outside of code, I collect old jeepney photos. It keeps me grounded in why the app matters — these aren\'t just data points, they\'re how people get to work every day.',
    ],
  },
  {
    name: 'Bianca Villanueva',
    role: 'Community Manager',
    linkedin: 'https://linkedin.com/in/bianca-villanueva',
    avatar: 'https://ui-avatars.com/api/?name=Bianca+Villanueva&background=06b6d4&color=fff&size=200&bold=true',
    gradient: 'from-cyan-500 to-blue-500',
    short: 'The bridge between PARA and the people who use it.',
    whyJoined: [
      'I was studying in Sydney when Andi reached out. I\'d grown up in Iloilo and still remembered the exact routes I used to take — and exactly how confusing they were for anyone who didn\'t grow up there.',
    ],
    theProblem: [
      'Route data goes stale fast. Jeepneys reroute, stops move, new lines appear — without a community constantly verifying the data, the app becomes unreliable within months.',
    ],
    myRole: [
      'I manage PARA\'s community remotely, coordinate with local drivers and commuters to verify routes, and built the in-app feedback system that lets users report wrong stops directly.',
    ],
    whyItMatters: [
      'I\'ll be back in the Philippines for good next year. I\'ve already mapped three new routes from memory. This is the app I wish I\'d had when I was commuting every day.',
    ],
  },
  {
    name: 'Alicia Amor',
    role: 'Marketing & Networking Head',
    linkedin: 'https://linkedin.com/in/alicia-amor',
    avatar: 'https://ui-avatars.com/api/?name=Alicia+Amor&background=db2777&color=fff&size=200&bold=true',
    gradient: 'from-pink-500 to-rose-600',
    short: 'Connecting PARA to the people and communities who need it most.',
    whyJoined: [
      'I am currently the Marketing and Networking Head of the PARA team.',
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
    myRole: [
      'For me, PARA is something that can transform the lives of every commuter — not just locals, but also travelers.',
    ],
    whyItMatters: [
      'I hope that as this system grows within Iloilo City and eventually expands across the Philippines, PARA becomes a way to make everyday commuting clearer, more efficient, and less stressful.',
      'It is built from real experiences — moments of confusion, waiting, and uncertainty that most commuters silently go through. I hope PARA becomes a platform that gives people clarity on where to go, what to ride, and how to get there with less stress.',
      'A system that saves time, reduces stress, and truly works for the people.',
      'Because Filipinos deserve a system that brings clarity — and I hope PARA can be that for us.',
    ],
  },
];

// ─── Team Modal ───────────────────────────────────────────────────────────────
function TeamModal({ member, onClose }: {
  member: typeof teamMembers[0];
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Reset tab when a different member is opened
  React.useEffect(() => { setActiveTab(0); }, [member]);

  const tabs: { label: string; text: string[] }[] = [
    { label: 'Why I Joined',    text: member.whyJoined },
    { label: 'The Problem',     text: member.theProblem },
    { label: 'My Role',         text: member.myRole },
    { label: 'Why It Matters',  text: member.whyItMatters },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[92vw] sm:max-w-lg md:max-w-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className={`bg-gradient-to-br ${member.gradient} px-6 pt-6 pb-5 relative overflow-hidden`}>
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/10 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Identity row */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-16 h-16 shrink-0 rounded-2xl border-2 border-white/30 overflow-hidden bg-white/20 shadow-lg">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                  const parent = t.parentElement!;
                  parent.style.background = 'rgba(255,255,255,0.2)';
                  parent.innerHTML = `<span style="color:white;font-weight:700;font-size:1.1rem;display:flex;align-items:center;justify-content:center;height:100%">${member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span>`;
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white leading-tight">{member.name}</h3>
              <p className="text-white/70 text-xs mt-0.5">{member.role}</p>
            </div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 transition-all flex items-center justify-center text-white/80 hover:text-white"
              onClick={e => e.stopPropagation()}
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Tabs — inside header */}
          <div className="flex gap-1 mt-4 relative z-10">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={[
                  'flex-1 text-[11px] font-semibold py-1.5 rounded-lg transition-all duration-150 truncate px-1',
                  activeTab === i
                    ? 'bg-white text-[#2563eb] shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/15',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content panel — fixed height, no scroll ── */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 h-52 overflow-y-auto">
          <div className="space-y-2.5">
            {tabs[activeTab].text.map((para, i) => (
              <p key={i} className="text-gray-500 text-sm leading-relaxed">{para}</p>
            ))}
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
            {/* Gradient banner */}
            <div className={`bg-gradient-to-br ${member.gradient} h-24 relative overflow-hidden`}>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full" />
            </div>
            {/* Avatar — centered, overlapping banner */}
            <div className="flex justify-center -mt-10 relative z-10">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const parent = t.parentElement!;
                    parent.style.background = 'linear-gradient(135deg,#2563eb,#1d4ed8)';
                    parent.innerHTML = `<span style="color:white;font-weight:700;font-size:1.25rem;display:flex;align-items:center;justify-content:center;height:100%">${member.name.split(' ').map((w: string) => w[0]).join('').slice(0,2)}</span>`;
                  }}
                />
              </div>
            </div>
            {/* Card body */}
            <div className="px-5 pt-3 pb-5 text-center">
              <h3 className="font-bold text-gray-900 text-base leading-tight">{member.name}</h3>
              <p className="text-[#2563eb] text-xs font-semibold mt-0.5">{member.role}</p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">{member.short}</p>
              <p className="text-[#2563eb] text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read story →
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
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
      <a href="https://test.com" target="_blank" rel="noopener noreferrer" className="transition hover:scale-105 hover:opacity-90">
        <GooglePlayBadge className="h-[46px] w-auto" />
      </a>
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
              <div className="mt-6">
                <a href="#" className="inline-block bg-[#2563eb] hover:bg-[#1e40af] transition-all text-white font-medium text-lg px-10 py-4 rounded-2xl shadow-lg active:scale-95">Download the App</a>
              </div>
              <div className="mt-6 flex justify-center lg:justify-start"><AppBadges /></div>
            </div>
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px] lg:ml-auto lg:pl-8 xl:pl-16">
              <div className="relative bg-black rounded-[52px] border-[14px] border-black shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-zinc-900 rounded-full" />
                </div>
                <div className="absolute inset-[6px] bg-zinc-950 rounded-[38px] overflow-hidden">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/para-onboarding.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 right-0 h-[1%] bg-zinc-950 z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2%] bg-zinc-950 z-10" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-blue-100 z-0" />
            {[
              { step: '01', title: 'Enter your destination', desc: "Type where you're headed — street, landmark, or barangay." },
              { step: '02', title: 'Get your route',         desc: 'PARA shows the best jeepney combinations with fares and stops.' },
              { step: '03', title: 'Ride with confidence',   desc: 'Track your ride live and know exactly when to get off.' },
            ].map(s => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#2563eb] text-white text-2xl font-bold flex items-center justify-center shadow-lg mb-5">{s.step}</div>
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
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Click on any card to read their full story.</p>
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
