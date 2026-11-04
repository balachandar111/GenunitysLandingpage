import { Link } from 'react-router-dom';
import { Logo } from './ui.jsx';
import { BRAND, FOOTER } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="muted">{BRAND.tagline}</p>
          <p className="muted small">Powered by {BRAND.poweredBy}</p>
          <p className="muted small">Website: <a href={`https://${BRAND.website}`}>{BRAND.website}</a></p>
          {/* Doc note: "Business contact details should be confirmed before publishing." */}
        </div>
        <nav className="footer-links" aria-label="Footer">
          {FOOTER.links.map((l) =>
            l.to ? <Link key={l.label} to={l.to}>{l.label}</Link> : <a key={l.label} href={l.href}>{l.label}</a>
          )}
        </nav>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Genunitys. All rights reserved.
      </div>
    </footer>
  );
}
