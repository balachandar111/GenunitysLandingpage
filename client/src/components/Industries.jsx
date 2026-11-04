import Icon from '../lib/icons.jsx';
import { SectionHead, Closing } from './ui.jsx';
import { INDUSTRIES as C } from '../data/content.js';

export default function Industries() {
  return (
    <section id="industries" className="section alt">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />
        <div className="grid g4">
          {C.items.map((it, i) => (
            <article key={it.title} className="card industry reveal" style={{ '--d': `${(i % 4) * 60}ms` }}>
              <span className="icon-box"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              {it.note && <p className="note-sm">{it.note}</p>}
            </article>
          ))}
        </div>
        <div className="callout reveal">
          <h3>{C.outroTitle}</h3>
          <p>{C.outro}</p>
          <a href="#contact" className="btn btn-primary">{C.cta}</a>
        </div>
      </div>
    </section>
  );
}
