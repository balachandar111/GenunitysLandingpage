import { SectionHead, Closing } from './ui.jsx';
import { HOW as C } from '../data/content.js';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section alt">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />
        <ol className="timeline">
          {C.steps.map((s, i) => (
            <li key={s.title} className="tl-item reveal">
              <span className="tl-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="card tl-card">
                <span className="step-label">Step {i + 1}</span>
                <h3>{s.title}</h3>
                {s.text.map((t, j) => <p key={j}>{t}</p>)}
              </div>
            </li>
          ))}
        </ol>
        <Closing text={C.closing} cta={C.cta} />
      </div>
    </section>
  );
}
