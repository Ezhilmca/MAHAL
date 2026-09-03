import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import About from './components/About';
import Features from './components/Features';
import Experience from './components/Experience';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Enquiry from './components/Enquiry';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-mahal-bg text-mahal-charcoal flex flex-col font-sans selection:bg-mahal-maroon selection:text-white relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoBar />
        <About />
        <Features />
        <Experience />
        <Facilities />
        <Gallery />
        <Events />
        <Reviews />
        <Location />
        <Enquiry />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingMobileBar />
    </div>
  );
}
