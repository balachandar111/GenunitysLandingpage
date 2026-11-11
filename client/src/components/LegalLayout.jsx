import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Clock, Info, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const LEGAL_TABS = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookies' },
];

export default function LegalLayout({
  crumbs,
  badge,
  title,
  description,
  updated = '11 November 2026',
  sections = [],
  other,
}) {
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const isCurrentTab = (tabPath) => {
    if (tabPath === '/privacy' && (pathname === '/privacy' || pathname === '/privacy-policy')) return true;
    if (tabPath === '/terms' && (pathname === '/terms' || pathname === '/terms-and-conditions')) return true;
    if (tabPath === '/cookies' && (pathname === '/cookies' || pathname === '/cookie-policy')) return true;
    return false;
  };

  return (
    <main className="legal-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Legal</span>
          <ChevronRight size={14} />
          <span className="current">{crumbs}</span>
        </nav>

        {/* Header */}
        <header className="legal-header">
          {badge && (
            <div className="eyebrow legal-badge">
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          )}
          <h1>{title}</h1>
          {description && <p className="lead">{description}</p>}
          <div className="legal-meta-row">
            <span className="legal-updated">
              <Clock size={13} /> Last updated: {updated}
            </span>
            <span className="legal-tagline">
              Official Legal Documentation · Genunitys & Bling Tech Connect
            </span>
          </div>
        </header>

        {/* Legal Switcher Tabs */}
        <div className="legal-tabs" role="tablist">
          {LEGAL_TABS.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`legal-tab ${isCurrentTab(tab.path) ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Grid: Sticky Table of Contents + Content */}
        <div className="legal-grid">
          <aside className="legal-sidebar" aria-label="Table of contents">
            <div className="legal-toc-title">Table of Contents</div>
            <nav className="legal-toc">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={activeId === sec.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveId(sec.id);
                  }}
                >
                  {sec.title}
                </a>
              ))}
            </nav>
            <div className="legal-sidebar-footer">
              <Link to="/#contact" className="btn btn-ghost btn-sm block">
                Have questions? Contact us
              </Link>
            </div>
          </aside>

          <div className="legal-content">
            {sections.map((sec) => (
              <article key={sec.id} id={sec.id} className="legal-section">
                <h3>{sec.title}</h3>
                <div className="legal-body">
                  {sec.body.map((item, idx) => {
                    if (typeof item === 'string') {
                      return <p key={idx}>{item}</p>;
                    }
                    if (item.sub) {
                      return (
                        <h4 key={idx} className="legal-subhead">
                          {item.sub}
                        </h4>
                      );
                    }
                    if (item.list) {
                      return (
                        <ul key={idx} className="legal-list">
                          {item.list.map((li, lIdx) => (
                            <li key={lIdx}>{li}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (item.note) {
                      return (
                        <div key={idx} className="legal-note">
                          <Info size={18} />
                          <div>{item.note}</div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </article>
            ))}

            {/* Other Document Link Card */}
            {other && (
              <div className="legal-other">
                <div>
                  <h4>{other.title}</h4>
                  <p>{other.text}</p>
                </div>
                <Link to={other.to} className="btn btn-primary">
                  {other.label} <ArrowRight size={16} />
                </Link>
              </div>
            )}

            <div className="legal-actions">
              <Link to="/" className="btn btn-ghost">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
