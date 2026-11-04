import Icon from '../lib/icons.jsx';
import { SectionHead, Closing } from './ui.jsx';

// Shared 3-column icon-card section used by Benefits and Why Genunitys.
export default function FeatureGrid({ id, data, alt }) {
  return (
    <section id={id} className={`section ${alt ? 'alt' : ''}`}>
      <div className="container">
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <div className="grid g3">
          {data.items.map((it, i) => (
            <article key={it.title} className="card reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
              <span className="icon-box"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
        <Closing text={data.closing} cta={data.cta} />
      </div>
    </section>
  );
}
