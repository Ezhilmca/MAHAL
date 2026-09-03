import React from 'react';
import { Building2, MapPin, Users, Clock } from 'lucide-react';
import { QUICK_INFO_BAR } from '../data/venueData';

const iconMap = {
  Building2: Building2,
  MapPin: MapPin,
  Users: Users,
  Clock: Clock
};

export default function InfoBar() {
  return (
    <section id="infobar" className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-mahal-darkcard/95 border border-mahal-gold/30 rounded-2xl shadow-2xl backdrop-blur-xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-mahal-gold/15">
          {QUICK_INFO_BAR.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Building2;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 sm:gap-4 ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mahal-maroon to-mahal-maroon-dark flex items-center justify-center text-mahal-gold shadow-md shrink-0 border border-mahal-gold/30">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-mahal-gold">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base font-serif font-medium text-white">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
