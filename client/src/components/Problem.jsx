import Icon from '../lib/icons.jsx';
import { SectionHead, Closing } from './ui.jsx';
import { PROBLEM as C } from '../data/content.js';

export default function Problem() {
  return (
    <section id="problem" className="section alt">
      <div className="container">
        <SectionHead title={C.title} intro={C.intro} />
        <p className="center sub reveal">{C.sub}</p>
        <div className="grid g3">
          {C.items.map((it, i) => (
            <article key={it.title} className="card reveal" style={{ '--d': `${i * 70}ms` }}>
              <span className="icon-box danger"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
        <Closing text={C.closing} cta={C.cta} />
      </div>
    </section>
  );
}
