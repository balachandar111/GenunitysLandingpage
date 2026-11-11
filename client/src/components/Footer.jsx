import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './ui.jsx';
import { BRAND, FOOTER } from '../data/content.js';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      e.preventDefault();
      const hash = href.replace(/^\/?#/, '');
      if (location.pathname === '/') {
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
        if (!hash || hash === 'home') {
          navigate('/');
        } else {
          navigate(`/#${hash}`);
        }
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted">{BRAND.tagline}</p>
          <p className="muted small">Powered by {BRAND.poweredBy}</p>
          <p className="muted small">
            Website: <a href={`https://${BRAND.website}`} target="_blank" rel="noopener noreferrer">{BRAND.website}</a>
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {FOOTER.links.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to}>
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            )
          )}
        </nav>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Genunitys. All rights reserved.
      </div>
    </footer>
  );
}
