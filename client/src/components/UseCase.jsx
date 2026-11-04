import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { SectionHead, Closing } from './ui.jsx';
import { USECASE as C } from '../data/content.js';

export default function UseCase() {
  return (
    <section id="use-case" className="section alt">
      <div className="container">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />
        <div className="grid g2 reveal">
          <article className="card">
            <span className="icon-box danger"><Target /></span>
            <h3>{C.challenge.title}</h3>
            <p>{C.challenge.text}</p>
          </article>
          <article className="card">
            <span className="icon-box"><Lightbulb /></span>
            <h3>{C.approach.title}</h3>
            <p>{C.approach.text}</p>
          </article>
        </div>

        <h3 className="center journey-title reveal">{C.journeyTitle}</h3>
        <div className="journey">
          {C.journey.map((j, i) => (
            <div key={j.title} className="j-step reveal" style={{ '--d': `${i * 80}ms` }}>
              <span className="j-num">{i + 1}</span>
              <h4>{j.title}</h4>
              <p>{j.text}</p>
            </div>
          ))}
        </div>

        <div className="callout reveal">
          <span className="icon-box"><TrendingUp /></span>
          <h3>{C.opportunity.title}</h3>
          <p>{C.opportunity.text}</p>
        </div>
        <p className="disclaimer center reveal">{C.disclaimer}</p>
        <Closing text="" cta={C.cta} />
      </div>
    </section>
  );
}
