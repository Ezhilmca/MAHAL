import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Experience() {
  const occasionTags = ['Wedding', 'Reception', 'Engagement', 'Family Celebrations'];

  return (
    <section className="relative py-28 overflow-hidden bg-mahal-dark text-white">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop" alt="Indian Wedding Celebration Experience" className="w-full h-full object-cover object-center brightness-75 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-mahal-dark via-mahal-dark/85 to-mahal-dark/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mahal-maroon/80 border border-mahal-gold/40 text-mahal-gold text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /><span>VENUE EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">Made for Moments <br /><span className="gold-gradient-text italic font-normal">That Matter</span></h2>
          <p className="text-lg sm:text-xl text-stone-200 font-light leading-relaxed max-w-2xl">From the first welcome to the final celebration, create beautiful memories with your family and guests at Rajan Rajan Mahal.</p>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {occasionTags.map((tag, idx) => <div key={idx} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-mahal-gold/30 text-stone-100 text-xs sm:text-sm font-medium hover:bg-mahal-gold hover:text-mahal-dark transition-all duration-300 cursor-default">✨ {tag}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
