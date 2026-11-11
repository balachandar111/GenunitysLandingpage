import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui.jsx';
import { NAV } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const hash = href.replace(/^\/?#/, '');
    const isHome = location.pathname === '/';

    if (isHome) {
      if (!hash || hash === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', '/');
      } else {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', `#${hash}`);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      // If we are on a subpage (e.g., /privacy or /terms), navigate back to Home
      if (!hash || hash === 'home') {
        navigate('/');
      } else {
        navigate(`/#${hash}`);
      }
    }
  };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a
          href="/#home"
          aria-label="Genunitys home"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <Logo />
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={`/${n.href}`}
              onClick={(e) => handleNavClick(e, n.href)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="btn btn-primary btn-sm nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Book a Demo
          </a>
        </nav>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
