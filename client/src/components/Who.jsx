import { CheckCircle2 } from 'lucide-react';
import { SectionHead, Closing } from './ui.jsx';
import { WHO as C } from '../data/content.js';

export default function Who() {
  return (
    <section id="who" className="section">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />
        <ul className="who-list">
          {C.items.map((t, i) => (
            <li key={t} className="reveal" style={{ '--d': `${i * 50}ms` }}>
              <CheckCircle2 size={22} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <Closing text={C.closing} cta={C.cta} />
      </div>
    </section>
  );
}
