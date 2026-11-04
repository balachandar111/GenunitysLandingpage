import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui.jsx';
import { NAV } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="/#home" aria-label="Genunitys home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={`/${n.href}`} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="/#contact" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>
            Book a Demo
          </a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
