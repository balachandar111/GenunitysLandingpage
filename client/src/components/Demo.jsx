import { Check, ClipboardList } from 'lucide-react';
import { SectionHead, Closing } from './ui.jsx';
import { DEMO as C } from '../data/content.js';

export default function Demo() {
  return (
    <section id="demo" className="section alt">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />
        <div className="grid g2">
          <article className="card reveal">
            <h3>{C.exploreTitle}</h3>
            <ul className="checks col">
              {C.explore.map((x) => <li key={x}><Check size={16} /> {x}</li>)}
            </ul>
          </article>
          <article className="card reveal glow">
            <span className="icon-box"><ClipboardList /></span>
            <h3>{C.bringTitle}</h3>
            <ul className="checks col">
              {C.bring.map((x) => <li key={x}><Check size={16} /> {x}</li>)}
            </ul>
          </article>
        </div>
        <Closing text={C.closing} cta={C.cta} />
      </div>
    </section>
  );
}
