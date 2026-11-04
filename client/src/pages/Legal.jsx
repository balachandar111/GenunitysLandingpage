import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'This page is a placeholder. Replace this text with the Genunitys privacy policy approved by Bling Tech Connect OPC Pvt. Ltd.',
      'Enquiry form information is used to respond to your enquiry in accordance with the Genunitys privacy policy.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'This page is a placeholder. Replace this text with the Genunitys terms and conditions approved by Bling Tech Connect OPC Pvt. Ltd.',
    ],
  },
};

export default function Legal({ page }) {
  const p = PAGES[page];
  useEffect(() => window.scrollTo(0, 0), [page]);
  return (
    <main className="legal section">
      <div className="container narrow">
        <h1>{p.title}</h1>
        {p.body.map((t, i) => <p key={i} className="lead">{t}</p>)}
        <Link to="/" className="btn btn-ghost">← Back to home</Link>
      </div>
    </main>
  );
}
