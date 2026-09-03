import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Clock3, ExternalLink, Heart, Instagram, MapPin, Menu, MessageCircle, Phone, Star, X } from 'lucide-react';
import { events, facilities, features, galleryImages, images, site } from '../data/siteData';

const navItems = ['Home', 'About', 'Facilities', 'Gallery', 'Events', 'Location', 'Contact'];

const iconForFeature = [Heart, CalendarDays, Star, Heart, MapPin, Check];
const iconForFacility = [Heart, ArrowRight, CalendarDays, Star, MapPin, Check, MapPin, Heart];

function SectionIntro({ eyebrow, title, text, light = false }) {
  return <div className={`section-intro ${light ? 'section-intro--light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function Navbar({ scrolled, open, setOpen }) {
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
    <div className="container nav-inner">
      <button className="brand" onClick={() => go('home')} aria-label="Rajan Rajan Mahal home">
        <span className="brand-mark">RR</span><span><strong>RAJAN RAJAN</strong><small>MAHAL · TINDIVANAM</small></span>
      </button>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Primary navigation">
        {navItems.map(item => <button key={item} onClick={() => go(item.toLowerCase())}>{item}</button>)}
        <button className="nav-cta" onClick={() => go('contact')}>Enquire Now <ArrowRight size={16} /></button>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <section id="home" className="hero">
    <img className="hero-bg" src={images.hero} alt="Elegant wedding celebration hall" />
    <div className="hero-overlay" />
    <div className="container hero-content">
      <div className="hero-copy">
        <div className="eyebrow eyebrow--gold">RAJAN RAJAN MAHAL</div>
        <h1>Celebrate Your <em>Special Moments</em> in Style</h1>
        <p>A comfortable and practical wedding venue in Tindivanam for weddings, receptions, engagements and family celebrations.</p>
        <div className="hero-actions"><button className="btn btn-gold" onClick={() => go('contact')}>Enquire Now <ArrowRight size={17} /></button><button className="btn btn-ghost" onClick={() => go('about')}>Explore Our Mahal</button></div>
        <div className="hero-location"><MapPin size={15} /> Tindivanam, Tamil Nadu</div>
      </div>
    </div>
    <button className="scroll-cue" onClick={() => go('about')}><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></button>
  </section>;
}

function InfoBar() {
  const items = [[Heart, 'Wedding Venue', 'Marriage & Functions'], [MapPin, 'Tindivanam', 'Tamil Nadu'], [Star, 'Guest Friendly', 'Practical Venue'], [Clock3, 'Open Until', '9:00 PM']];
  return <section className="info-bar"><div className="container info-grid">{items.map(([Icon, title, sub]) => <div className="info-item" key={title}><Icon size={20} /><div><strong>{title}</strong><span>{sub}</span></div></div>)}</div></section>;
}

function About() {
  return <section id="about" className="section about"><div className="container about-grid">
    <div className="about-media"><div className="gold-frame" /><img src={images.about} alt="Wedding venue interior prepared for a celebration" loading="lazy" /><div className="about-badge"><span>EST.</span><strong>RAJAN<br />RAJAN</strong><small>MAHAL</small></div></div>
    <div className="about-copy"><SectionIntro eyebrow="About Rajan Rajan Mahal" title="A Comfortable Setting for Your Most Important Celebrations" text="Rajan Rajan Mahal is a wedding and function venue located on Puducherry Road, Tindivanam. The venue is designed for families looking for a practical and comfortable space to host weddings, receptions, engagements and other special occasions." />
      <ul className="check-list">{['Convenient Tindivanam location', 'Wedding and reception functions', 'Practical event space', 'Family-friendly atmosphere'].map(x => <li key={x}><span><Check size={14} /></span>{x}</li>)}</ul>
      <a className="text-link" href={site.mapsHref} target="_blank" rel="noreferrer">View location <ArrowRight size={16} /></a>
    </div>
  </div></section>;
}

function Features() {
  return <section className="section features"><div className="container"><SectionIntro eyebrow="Why Choose Rajan Rajan Mahal" title="Everything You Need for a Memorable Celebration" text="A straightforward venue choice for families planning meaningful occasions in Tindivanam." /><div className="feature-grid">{features.map(([title, text], i) => { const Icon = iconForFeature[i]; return <article className="feature-card" key={title}><span className="card-number">0{i + 1}</span><Icon size={23} /><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowRight size={16} /></span></article>; })}</div></div></section>;
}

function Experience() {
  return <section className="experience"><img src={images.experience} alt="Warmly lit wedding celebration" loading="lazy" /><div className="experience-overlay" /><div className="container experience-content"><span className="eyebrow eyebrow--gold">THE VENUE EXPERIENCE</span><h2>Made for <em>Moments</em> That Matter</h2><p>From the first welcome to the final celebration, create beautiful memories with your family and guests.</p><div className="experience-tags">{['Wedding', 'Reception', 'Engagement', 'Family Celebrations'].map(x => <span key={x}>{x}</span>)}</div></div></section>;
}

function Facilities() {
  return <section id="facilities" className="section facilities"><div className="container"><SectionIntro eyebrow="Venue Facilities" title="Practical Details, Thoughtfully Presented" /><div className="facility-grid">{facilities.map(([title, text], i) => { const Icon = iconForFacility[i]; return <article className="facility-card" key={title}><div className="facility-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{text}</p></div></article>; })}</div><p className="fine-print">* Facility descriptions are intentionally general where specific capacity or equipment details have not been verified.</p></div></section>;
}

function Gallery() {
  const [filter, setFilter] = useState('ALL');
  const [active, setActive] = useState(null);
  const filtered = useMemo(() => filter === 'ALL' ? galleryImages : galleryImages.filter(x => x.category === filter), [filter]);
  const move = (dir) => { const index = filtered.findIndex(x => x.id === active?.id); const next = filtered[(index + dir + filtered.length) % filtered.length]; setActive(next); };
  useEffect(() => { const onKey = e => { if (!active) return; if (e.key === 'Escape') setActive(null); if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); });
  return <section id="gallery" className="section gallery"><div className="container"><SectionIntro eyebrow="Moments & Spaces" title="A Visual Feel for Your Celebration" text="Explore the atmosphere and style we envision for weddings, receptions and family occasions." /><div className="gallery-filters">{['ALL', 'VENUE', 'WEDDING', 'RECEPTION', 'DECORATION'].map(x => <button className={filter === x ? 'active' : ''} key={x} onClick={() => setFilter(x)}>{x}</button>)}</div><div className="masonry">{filtered.map(item => <button key={item.id} className={`gallery-card ${item.tall ? 'tall' : ''} ${item.wide ? 'wide' : ''}`} onClick={() => setActive(item)} aria-label={`Open ${item.title}`}><img src={item.src} alt={item.title} loading="lazy" /><span className="gallery-shade" /><span className="gallery-label">{item.category}<strong>{item.title}</strong></span><span className="view-icon">↗</span></button>)}</div></div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery viewer" onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close"><X /></button><button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); move(-1); }} aria-label="Previous"><ChevronLeft /></button><img src={active.src} alt={active.title} onClick={e => e.stopPropagation()} /><button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); move(1); }} aria-label="Next"><ChevronRight /></button><div className="lightbox-caption" onClick={e => e.stopPropagation()}>{active.category} · {active.title}</div></div>}
  </section>;
}

function Events() {
  return <section id="events" className="section events"><div className="container"><SectionIntro eyebrow="Celebrate Your Way" title="Occasions Worth Gathering For" /><div className="event-grid">{events.map(([title, text, src], i) => <article className="event-card" key={title}><div className="event-img"><img src={src} alt={`${title} celebration`} loading="lazy" /><span>0{i + 1}</span></div><div className="event-copy"><h3>{title}</h3><p>{text}</p><a href="#contact" className="text-link">Plan this event <ArrowRight size={15} /></a></div></article>)}</div></div></section>;
}

function Reviews() {
  return <section className="review-section"><div className="container review-inner"><div><span className="eyebrow eyebrow--gold">TRUST & EXPERIENCE</span><h2>What Guests Say</h2><p>Our public rating is presented honestly, without invented testimonials.</p></div><div className="rating"><strong>{site.rating}</strong><div><div className="stars">{[1,2,3,4,5].map(i => <Star key={i} size={19} fill={i <= 3 ? 'currentColor' : 'none'} />)}</div><span>Based on {site.reviewCount} Google reviews</span></div></div></div></section>;
}

function Location() {
  return <section id="location" className="section location"><div className="container location-grid"><div className="location-copy"><SectionIntro eyebrow="Find Rajan Rajan Mahal" title="Easy to Find in Tindivanam" text="30/55, Tindivanam, Viluppuram NH-66, Puducherry Road, Tindivanam, Tamil Nadu 604001" /><div className="contact-mini"><div><MapPin size={20} /><span><strong>Location</strong>{site.location}</span></div><div><Phone size={20} /><span><strong>Phone</strong>{site.phone}</span></div></div><div className="location-actions"><a className="btn btn-maroon" href={site.mapsHref} target="_blank" rel="noreferrer">Get Directions <ExternalLink size={16} /></a><a className="btn btn-outline" href={site.phoneHref}>Call Now <Phone size={16} /></a></div></div><div className="map-card"><div className="map-grid" /><div className="map-pin"><span><MapPin size={23} /></span><strong>Rajan Rajan Mahal</strong><small>Tindivanam, Tamil Nadu</small></div><a href={site.mapsHref} target="_blank" rel="noreferrer" className="map-open">Open in Google Maps <ExternalLink size={14} /></a></div></div></section>;
}

function Enquiry() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Wedding', date: '', guests: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setError(''); if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 10) { setError('Please enter your name and a valid 10-digit phone number.'); return; } setSent(true); };
  return <section id="contact" className="section enquiry"><div className="container enquiry-grid"><div className="enquiry-copy"><SectionIntro eyebrow="Start a Conversation" title="Plan Your Celebration" text="Tell us about your event and our team can help you with the next step." /><div className="direct-contact"><a href={site.phoneHref}><Phone size={19} /><span><small>Call</small>{site.phone}</span></a><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small>Message us</span></a></div></div><form className="enquiry-form" onSubmit={submit} noValidate>{sent ? <div className="form-success"><span><Check /></span><h3>Thank you for your enquiry.</h3><p>Your details are ready for the next step. Please call or WhatsApp us to continue.</p><div><a className="btn btn-maroon" href={site.phoneHref}>Call {site.phone}</a><a className="btn btn-outline" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp Us</a></div></div> : <><div className="form-row"><label>Full Name<input name="name" value={form.name} onChange={update} placeholder="Your name" required /></label><label>Phone Number<input name="phone" value={form.phone} onChange={update} inputMode="tel" placeholder="10-digit mobile number" required /></label></div><div className="form-row"><label>Event Type<select name="type" value={form.type} onChange={update}>{['Wedding','Reception','Engagement','Birthday','Family Function','Other'].map(x => <option key={x}>{x}</option>)}</select></label><label>Event Date<input name="date" value={form.date} onChange={update} type="date" /></label></div><label>Expected Guests<input name="guests" value={form.guests} onChange={update} inputMode="numeric" placeholder="Approximate number" /></label><label>Message<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Tell us a little about your celebration..." /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="btn btn-maroon btn-submit" type="submit">Send Enquiry <ArrowRight size={17} /></button><p className="form-note">Demo form · no information is sent to a server yet.</p></>}</form></div></section>;
}

function FinalCTA() {
  return <section className="final-cta"><img src={images.cta} alt="Elegant wedding venue ambience" loading="lazy" /><div className="final-overlay" /><div className="container final-content"><span className="eyebrow eyebrow--gold">MAKE IT MEMORABLE</span><h2>Your Special Day Deserves<br /><em>a Special Place</em></h2><p>Make your next celebration memorable at Rajan Rajan Mahal, Tindivanam.</p><div className="hero-actions"><a className="btn btn-gold" href="#contact">Enquire Now <ArrowRight size={17} /></a><a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a></div></div></section>;
}

function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <footer className="footer"><div className="container footer-grid"><div><button className="brand brand--footer" onClick={() => go('home')}><span className="brand-mark">RR</span><span><strong>RAJAN RAJAN</strong><small>MAHAL · TINDIVANAM</small></span></button><p>Wedding Venue & Marriage Hall in Tindivanam.</p></div><div><h4>Quick Links</h4><div className="footer-links">{navItems.map(x => <button key={x} onClick={() => go(x.toLowerCase())}>{x}</button>)}</div></div><div><h4>Contact</h4><a href={site.phoneHref}>{site.phone}</a><p>{site.address}</p></div></div><div className="container footer-bottom"><span>© 2026 Rajan Rajan Mahal. All Rights Reserved.</span><span>Tindivanam, Tamil Nadu</span></div></footer>;
}

export default function MahalSite() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <div className="site"><Navbar scrolled={scrolled} open={open} setOpen={setOpen} /><main><Hero /><InfoBar /><About /><Features /><Experience /><Facilities /><Gallery /><Events /><Reviews /><Location /><Enquiry /><FinalCTA /></main><Footer /><div className="mobile-bar"><a href={site.phoneHref}><Phone size={17} />Call</a><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp</a><a href="#contact"><CalendarDays size={17} />Enquire</a></div></div>;
}
