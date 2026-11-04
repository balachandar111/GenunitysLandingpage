import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHead } from './ui.jsx';
import { FAQ as C } from '../data/content.js';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <SectionHead eyebrow={C.eyebrow} title={C.title} />
        <div className="faq">
          {C.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`faq-item reveal ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{it.q}</span>
                  <ChevronDown size={20} />
                </button>
                <div id={`faq-a-${i}`} className="faq-a" role="region">
                  <div>
                    {it.a.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
