'use client';

// app/page.tsx
// Prerequisites: npm install lottie-react
//
// Team photos → /public/team/andi-reyes.png etc.

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LOTTIE_URLS = [
  'https://assets6.lottiefiles.com/packages/lf20_UJNc2t.json',
  'https://assets3.lottiefiles.com/packages/lf20_tykyDQrs9Z.json',
  'https://assets5.lottiefiles.com/packages/lf20_ysrn2iwp.json',
  'https://assets9.lottiefiles.com/packages/lf20_jR229p.json',
  'https://assets4.lottiefiles.com/packages/lf20_xyadoh9h.json',
  'https://assets2.lottiefiles.com/packages/lf20_touohxv0.json',
];
const FALLBACK_EMOJIS = ['🗺️', '📍', '🔄', '📶', '🤝', '🇵🇭'];

const features = [
  { title: 'Instant Route Search',      desc: 'Type your destination and get the best jeepney routes in seconds — no guessing, no asking around.',   highlight: false },
  { title: 'Live Location Tracking',    desc: 'See your real-time position on the map as you ride, so you never miss your drop-off point.',           highlight: true  },
  { title: 'Smart Transfers',           desc: 'Multi-jeep routes with intelligent transfer points — PARA plans the full trip for you.',                highlight: false },
  { title: 'Offline Mode',              desc: 'Download routes for offline use. Commute confidently even with weak signal.',                           highlight: true  },
  { title: 'Community-Powered',         desc: 'Route data verified and updated by real commuters and drivers across the Philippines.',                 highlight: false },
  { title: 'Built for the Philippines', desc: 'Designed around how Filipinos actually commute — from Luzon to Mindanao.',                              highlight: false },
];

const teamMembers = [
  { name: 'Andi Reyes',        role: 'CEO & Co-Founder',     bio: 'Urban mobility advocate with 8 years in product strategy.',           photo: '/team/andi-reyes.png',        gradient: 'from-blue-500 to-blue-700'   },
  { name: 'Marco Santos',      role: 'CTO & Co-Founder',     bio: 'Full-stack engineer passionate about scalable systems.',              photo: '/team/marco-santos.png',      gradient: 'from-indigo-500 to-blue-600' },
  { name: 'Liza Cruz',         role: 'Head of Design',       bio: 'UX designer crafting intuitive experiences for everyday commuters.',  photo: '/team/liza-cruz.png',         gradient: 'from-blue-400 to-cyan-500'   },
  { name: 'Ryan Dela Torre',   role: 'Lead Developer',       bio: 'Mobile-first developer specializing in React Native & geolocation.', photo: '/team/ryan-dela-torre.png',   gradient: 'from-blue-600 to-indigo-700' },
  { name: 'Bianca Villanueva', role: 'Community Manager',    bio: 'Bridges PARA with local commuters and route contributors.',          photo: '/team/bianca-villanueva.png', gradient: 'from-cyan-500 to-blue-500'   },
  { name: 'Jerome Aquino',     role: 'Data & Maps Engineer', bio: 'GIS specialist mapping every route in the Philippines.',             photo: '/team/jerome-aquino.png',     gradient: 'from-indigo-600 to-blue-500' },
];

const reviews = [
  { name: 'Maria L.',  location: 'Makati City', rating: 5, text: 'Finally an app that gets the jeepney system! Saved me 30 mins on my daily commute.' },
  { name: 'Paolo R.',  location: 'Quezon City', rating: 5, text: 'Super intuitive. I used to ask strangers which jeep to take — not anymore.' },
  { name: 'Sarah M.',  location: 'Cebu City',   rating: 5, text: 'The route suggestions are surprisingly accurate. I love how simple the UI is.' },
  { name: 'Kuya Jun',  location: 'Pasay',       rating: 4, text: 'As a driver I appreciate that commuters finally know where to go. Great app!' },
];

const roadmapItems = [
  { quarter: 'Q1 2025', title: 'Beta Launch',         desc: 'Core route search, Metro Manila coverage, iOS & Android beta.',   status: 'done'     },
  { quarter: 'Q2 2025', title: 'Live Updates',         desc: 'Real-time jeepney tracking and crowd-sourced route corrections.',  status: 'done'     },
  { quarter: 'Q3 2025', title: 'Multi-City Expansion', desc: 'Cebu, Davao, and Iloilo city routes added.',                      status: 'current'  },
  { quarter: 'Q4 2025', title: 'Offline Mode',         desc: 'Full offline route access for low-connectivity areas.',           status: 'upcoming' },
  { quarter: 'Q1 2026', title: 'Community Hub',        desc: 'Route contributions, driver ratings, and commuter reports.',      status: 'upcoming' },
];

// ─── Social SVGs ──────────────────────────────────────────────────────────────
const FacebookIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const TwitterXIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.825 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
const LinkedInIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

// ─── Lottie loader ────────────────────────────────────────────────────────────
function LottieIcon({ url, fallback }: { url: string; fallback: string }) {
  const [animData, setAnimData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    fetch(url).then(r => { if (!r.ok) throw new Error(''); return r.json(); })
      .then(d => { if (!cancelled) setAnimData(d); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, [url]);
  if (failed || !animData) return <span className="text-3xl flex items-center justify-center w-full h-full select-none">{fallback}</span>;
  return <Lottie animationData={animData} loop autoplay style={{ width: '100%', height: '100%' }} />;
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ title, desc, lottieUrl, fallbackEmoji, highlight }: {
  title: string; desc: string; lottieUrl: string; fallbackEmoji: string; highlight: boolean;
}) {
  return (
    <div className={['relative rounded-3xl p-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 group',
      highlight
        ? 'bg-[#2563eb] shadow-2xl shadow-blue-200 scale-[1.02] hover:scale-[1.04]'
        : 'bg-white shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-blue-100',
    ].join(' ')}>
      {highlight && (
        <>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />
          <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 backdrop-blur-sm">Featured</span>
        </>
      )}
      <div className={['w-16 h-16 rounded-2xl flex items-center justify-center shrink-0', highlight ? 'bg-white/15' : 'bg-blue-50'].join(' ')}>
        <div className="w-12 h-12"><LottieIcon url={lottieUrl} fallback={fallbackEmoji} /></div>
      </div>
      <div>
        <h3 className={['text-lg font-bold mb-1.5', highlight ? 'text-white' : 'text-gray-900'].join(' ')}>{title}</h3>
        <p className={['text-sm leading-relaxed', highlight ? 'text-blue-100' : 'text-gray-500'].join(' ')}>{desc}</p>
      </div>
      <div className={['mt-auto text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200', highlight ? 'text-white' : 'text-[#2563eb]'].join(' ')}>
        Learn more →
      </div>
    </div>
  );
}

// ─── Team Card ────────────────────────────────────────────────────────────────
function TeamCard({ name, role, bio, photo, gradient }: {
  name: string; role: string; bio: string; photo: string; gradient: string;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full pointer-events-none" />
        <div className="absolute inset-0 flex items-end justify-center translate-y-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
            {!imgError ? (
              <Image src={photo} alt={name} width={96} height={96} className="w-full h-full object-cover" onError={() => setImgError(true)} />
            ) : (
              <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} text-white font-bold text-xl`}>{initials}</div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-14 pb-6 px-5 text-center">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">{name}</h3>
        <span className="inline-block text-[#2563eb] text-sm font-medium mt-0.5">{role}</span>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero" className="scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start -mb-10 lg:-mb-14">
                <Image src="/para-logo.png" alt="PARA Logo" width={600} height={200} priority
                  className="w-auto max-w-full h-56 sm:h-64 lg:h-72 object-contain object-left lg:-ml-20" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
                Find the best<br />Jeepney Route<br /><span className="text-[#2563eb]">Instantly</span>
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 text-lg text-gray-500 mt-4">Your Jeepney Route Companion for the Philippines</p>
              <div className="mt-6">
                <a href="#" className="inline-block bg-[#2563eb] hover:bg-[#1e40af] transition-all text-white font-medium text-lg px-10 py-4 rounded-2xl shadow-lg active:scale-95">Download the App</a>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
                <a href="#" className="transition hover:scale-105">
                  <Image src="/app-store-badge.svg" alt="App Store" width={180} height={60} className="h-12 w-auto" />
                </a>
                <a href="#" className="transition hover:scale-105">
                   <Image src="/google-play-badge.png" alt="Google Play" width={180} height={60} className="h-12 w-auto" />
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[340px]">
              <div className="relative bg-black rounded-[52px] border-[14px] border-black shadow-2xl overflow-hidden aspect-[9/19]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-zinc-900 rounded-full" />
                </div>
                <div className="absolute inset-[6px] bg-zinc-950 rounded-[38px] overflow-hidden">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/para-onboarding.mp4" type="video/mp4" />
                  </video>
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
            <span className="inline-block text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">Key Features</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to commute smarter</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Designed for the real chaos of Philippine roads — not some idealized transit system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {features.map((f, i) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} lottieUrl={LOTTIE_URLS[i]} fallbackEmoji={FALLBACK_EMOJIS[i]} highlight={f.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ride in 3 simple steps</h2>
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
      <section id="roadmap" className="py-20 px-6 bg-gray-50 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Where we&apos;re headed</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-8">
              {roadmapItems.map(item => (
                <div key={item.quarter} className="relative flex gap-6 pl-14">
                  <div className={['absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm border-2',
                    item.status === 'done' ? 'bg-[#2563eb] border-[#2563eb] text-white' :
                    item.status === 'current' ? 'bg-white border-[#2563eb] text-[#2563eb]' :
                    'bg-white border-gray-200 text-gray-400'].join(' ')}>
                    {item.status === 'done' ? '✓' : item.status === 'current' ? '→' : '·'}
                  </div>
                  <div className={['bg-white rounded-2xl p-5 border flex-1', item.status === 'current' ? 'border-[#2563eb] shadow-md' : 'border-gray-100 shadow-sm'].join(' ')}>
                    <span className={['text-xs font-semibold uppercase tracking-wider', item.status !== 'upcoming' ? 'text-[#2563eb]' : 'text-gray-400'].join(' ')}>
                      {item.quarter}{item.status === 'current' && <span className="ml-2 bg-blue-100 text-[#2563eb] rounded-full px-2 py-0.5 text-xs">In Progress</span>}
                    </span>
                    <h3 className="text-gray-900 font-semibold mt-1 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-20 px-6 bg-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">The Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built by commuters, for commuters</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We&apos;re a passionate team of Filipinos who&apos;ve experienced the chaos of commuting firsthand.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map(m => <TeamCard key={m.name} {...m} />)}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 px-6 bg-[#f0f7ff] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#2563eb] text-sm font-semibold uppercase tracking-widest mb-3">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What commuters are saying</h2>
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

        {/* Top CTA strip */}
        <div className="border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto px-8 xl:px-16 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Ready to commute smarter?</p>
              <h3 className="text-2xl font-bold text-white">Download PARA for free.</h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href="#" className="transition hover:scale-105">
                <Image src="/app-store-badge.svg" alt="App Store" width={140} height={47} className="h-10 w-auto brightness-90 hover:brightness-100 transition" />
              </a>
              <a href="#" className="transition hover:scale-105">
                <Image src="/google-play-badge.png" alt="Google Play" width={140} height={47} className="h-10 w-auto brightness-90 hover:brightness-100 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-screen-2xl mx-auto px-8 xl:px-16 pt-14 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/5">

            {/* Brand column — wider */}
            <div>
              <a href="#hero">
                <Image src="/para-logo.png" alt="PARA" width={130} height={44}
                  className="h-9 w-auto object-contain mb-5"
                  style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-7">
                The Philippines&apos; most complete jeepney route companion. Open to all commuters, built by Filipinos.
              </p>
              {/* Socials */}
              <div className="flex gap-2.5">
                {[
                  { href: 'https://facebook.com',  label: 'Facebook',  icon: <FacebookIcon />,  hover: 'hover:bg-[#1877F2]' },
                  { href: 'https://x.com',          label: 'X',         icon: <TwitterXIcon />,  hover: 'hover:bg-white/10 hover:border-white/20' },
                  { href: 'https://instagram.com',  label: 'Instagram', icon: <InstagramIcon />, hover: 'hover:bg-[#E1306C]' },
                  { href: 'https://linkedin.com',   label: 'LinkedIn',  icon: <LinkedInIcon />,  hover: 'hover:bg-[#0A66C2]' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className={`w-8 h-8 rounded-md border border-white/10 bg-white/5 ${s.hover} text-white/50 hover:text-white flex items-center justify-center transition-all duration-200`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Product</p>
              <ul className="space-y-3">
                {['Features', 'How It Works', 'Roadmap', 'Download'].map(l => (
                  <li key={l}><a href="#" className="text-white/55 hover:text-white text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3">
                {['Our Mission', 'Team', 'Blog', 'Careers'].map(l => (
                  <li key={l}><a href="#" className="text-white/55 hover:text-white text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3">
                {[
                  { label: 'hello@paraapp.ph', href: 'mailto:hello@paraapp.ph' },
                  { label: 'Support Center', href: '#' },
                  { label: 'Report a Route Issue', href: '#' },
                  { label: 'Partner with Us', href: '#' },
                ].map(l => (
                  <li key={l.label}><a href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
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
