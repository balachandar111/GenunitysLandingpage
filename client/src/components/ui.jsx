import { ArrowRight } from 'lucide-react';

export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-image" viewBox="140 115 1590 460" role="img" aria-label="Genunitys">
        <image href="/logo.png" width="1952" height="691" />
      </svg>
    </span>
  );
}
export function Button({ href = '#contact', variant = 'primary', children, arrow = true, ...rest }) {
  return (
    <a href={href} className={`btn btn-${variant}`} {...rest}>
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

