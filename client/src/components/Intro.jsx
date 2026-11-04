import Icon from '../lib/icons.jsx';
import { SectionHead, Closing } from './ui.jsx';
import { INTRO as C } from '../data/content.js';

export default function Intro() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} />
        <div className="intro-body reveal">
          {C.body.map((p, i) => <p key={i} className="lead">{p}</p>)}
        </div>
        <div className="grid g4">
          {C.pillars.map((p, i) => (
            <article key={p.title} className="card pillar reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="icon-box"><Icon name={p.icon} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <Closing text={C.closing} cta={C.cta} />
      </div>
    </section>
  );
}
