import { Check, Info } from 'lucide-react';
import Icon from '../lib/icons.jsx';
import { Button, SectionHead } from './ui.jsx';
import { SOLUTIONS as C } from '../data/content.js';

export default function Solutions() {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} />
        <div className="solutions">
          {C.items.map((s, i) => (
            <article key={s.title} className={`solution card reveal ${i % 2 ? 'flip' : ''}`}>
              <div className="sol-side">
                <span className="icon-box lg"><Icon name={s.icon} size={30} /></span>
                <span className="step-label">{s.label}</span>
                <h3>{s.title}</h3>
              </div>
              <div className="sol-main">
                <h4>{s.headline}</h4>
                {s.text.map((t, j) => <p key={j}>{t}</p>)}
                <p className="list-title">{s.listTitle}</p>
                <ul className="checks">
                  {s.list.map((li) => (
                    <li key={li}><Check size={16} /> {li}</li>
                  ))}
                </ul>
                {s.note && <p className="note"><Info size={16} /> <span>{s.note}</span></p>}
                <Button variant="ghost">{s.cta}</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
