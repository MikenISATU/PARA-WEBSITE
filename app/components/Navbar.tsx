'use client';

// components/Navbar.tsx

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Mission',      href: '#mission' },
  { label: 'Features',     href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Roadmap',      href: '#roadmap' },
  { label: 'Team',         href: '#team' },
  { label: 'Reviews',      href: '#reviews' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={[
      'fixed top-0 inset-x-0 z-50 transition-all duration-500',
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-transparent',
    ].join(' ')}>
      <div className="max-w-screen-2xl mx-auto px-8 xl:px-16 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="shrink-0">
          <Image src="/para-logo.png" alt="PARA" width={110} height={36} className="h-7 w-auto object-contain" />
        </button>

        {/* Desktop nav — sits between logo and CTA, left-aligned not centered */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 pl-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="#" className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563eb] hover:text-[#1e40af] transition-colors">
            Download
          </a>
          <a href="#"
            className="hidden lg:inline-flex items-center bg-[#2563eb] hover:bg-[#1e40af] text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-all active:scale-95 shadow-sm"
          >
            Get Started →
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-md hover:bg-gray-100 transition"
          >
            <span className="block w-[18px] h-[1.5px] bg-gray-800 rounded-full transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}} />
            <span className="block w-[18px] h-[1.5px] bg-gray-800 rounded-full transition-all duration-300"
              style={open ? { opacity: 0 } : {}} />
            <span className="block w-[18px] h-[1.5px] bg-gray-800 rounded-full transition-all duration-300 origin-center"
              style={open ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '480px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-6 py-5 flex flex-col">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-gray-700 hover:text-[#2563eb] transition-colors border-b border-gray-50 last:border-0"
              >
                {link.label}
                <span className="text-gray-300 text-xs">→</span>
              </button>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-2.5">
            <a href="#" className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900 py-2.5 border border-gray-200 rounded-lg transition-colors">
              Download App
            </a>
            <a href="#" className="w-full text-center bg-[#2563eb] hover:bg-[#1e40af] text-white text-sm font-semibold py-3 rounded-lg transition-all">
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
