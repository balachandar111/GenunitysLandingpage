import { ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-image" viewBox="140 115 1590 460" role="img" aria-label="Genunitys">
        <image href="/logo.png" width="1952" height="691" />
      </svg>
    </span>
  );
}

export function Button({ href = '#contact', variant = 'primary', children, arrow = true, onClick, ...rest }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (href && (href.startsWith('#') || href.startsWith('/#'))) {
      e.preventDefault();
      const targetId = href.replace(/^\/?#/, '');
      if (location.pathname === '/') {
        if (!targetId || targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.replaceState(null, '', '/');
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', `#${targetId}`);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={`btn btn-${variant}`} {...rest}>
      {children}
      {arrow && <ArrowRight size={18} />}
    </a>
  );
}

export function SectionHead({ eyebrow, title, intro, center = true }) {
  return (
    <div className={`section-head reveal ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function Closing({ text, cta, variant = 'primary' }) {
  return (
    <div className="closing reveal">
      <p>{text}</p>
      {cta && <Button variant={variant}>{cta}</Button>}
    </div>
  );
}
