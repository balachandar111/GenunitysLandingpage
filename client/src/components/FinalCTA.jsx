import { Button } from './ui.jsx';
import { FINAL_CTA as C } from '../data/content.js';

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="hero-glow g1" />
      <div className="container narrow center reveal">
        <h2>{C.title}</h2>
        {C.body.map((p, i) => <p key={i} className="lead">{p}</p>)}
        <p className="lead strong">{C.closing}</p>
        <div className="btn-row center-row">
          <Button>{C.primary}</Button>
          <Button variant="ghost" arrow={false}>{C.secondary}</Button>
        </div>
        <p className="muted small">{C.note}</p>
      </div>
    </section>
  );
}
