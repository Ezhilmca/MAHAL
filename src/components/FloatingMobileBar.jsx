import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function FloatingMobileBar() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-mahal-dark/95 backdrop-blur-xl border-t border-mahal-gold/30 p-2.5 shadow-2xl animate-fadeIn">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a href={VENUE_INFO.phoneTel} className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-800 text-stone-100 hover:bg-stone-700 transition-colors border border-white/10">
          <Phone className="w-4 h-4 text-mahal-gold mb-0.5" />
          <span className="text-[10px] font-semibold">Call Now</span>
        </a>
        <a href={VENUE_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-700 text-white hover:bg-emerald-600 transition-colors">
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-mahal-maroon text-white hover:bg-mahal-maroon-light transition-colors border border-mahal-gold/30 shadow-md">
          <Calendar className="w-4 h-4 text-mahal-gold mb-0.5" />
          <span className="text-[10px] font-semibold">Enquire</span>
        </a>
      </div>
    </div>
  );
}
