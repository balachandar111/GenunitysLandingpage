import { useState } from 'react';
import { CheckCircle2, Loader2, Lock } from 'lucide-react';
import { SectionHead } from './ui.jsx';
import { FORM as C } from '../data/content.js';
import { submitLead } from '../lib/api.js';

const EMPTY = {
  fullName: '', email: '', phone: '', company: '', role: '', industry: '',
  requirement: '', skuVolume: '', challenge: '', website: '', // `website` = honeypot
};

function validate(v) {
  const e = {};
  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Please enter a valid business email';
  if (!/^[+()\d\s-]{7,20}$/.test(v.phone.trim())) e.phone = 'Please enter a valid contact number';
  if (v.company.trim().length < 2) e.company = 'Please enter your company / brand name';
  if (!v.role) e.role = 'Please select your role';
  if (!v.industry) e.industry = 'Please select your industry';
  if (!v.requirement) e.requirement = 'Please select your primary requirement';
  return e;
}

function Field({ name, label, required, error, children }) {
  return (
    <div className={`field ${error ? 'invalid' : ''}`}>
      <label htmlFor={name}>{label}{required && <em aria-hidden="true"> *</em>}</label>
      {children}
      {error && <span className="err" role="alert">{error}</span>}
    </div>
  );
}

export default function LeadForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [serverError, setServerError] = useState('');

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setServerError('');
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.querySelector('.field.invalid input, .field.invalid select')?.focus();
      return;
    }
    setStatus('sending');
    try {
      await submitLead(values);
      setStatus('done');
      setValues(EMPTY);
    } catch (err) {
      setStatus('idle');
      const data = err.response?.data;
      if (data?.errors) setErrors(data.errors);
      setServerError(data?.message || 'We could not send your enquiry. Please check your connection and try again.');
    }
  }

  const select = (name, options, placeholder) => (
    <select id={name} value={values[name]} onChange={set(name)}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
  const fieldProps = (name, label, required) => ({ name, label, required, error: errors[name] });

  return (
    <section id="contact" className="section form-section">
      <div className="container narrow">
        <SectionHead eyebrow={C.eyebrow} title={C.title} intro={C.intro} />

        <div className="card form-card reveal">
          {status === 'done' ? (
            <div className="success" role="status">
              <CheckCircle2 size={52} />
              <h3>{C.successTitle}</h3>
              {C.success.map((p, i) => <p key={i}>{p}</p>)}
              <p className="muted small">{C.privacy}</p>
              <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Submit another enquiry</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <Field {...fieldProps('fullName', 'Full Name', true)}>
                  <input id="fullName" autoComplete="name" value={values.fullName} onChange={set('fullName')} />
                </Field>
                <Field {...fieldProps('email', 'Business Email Address', true)}>
                  <input id="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} />
                </Field>
                <Field {...fieldProps('phone', 'Business Contact Number', true)}>
                  <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} />
                </Field>
                <Field {...fieldProps('company', 'Company / Brand Name', true)}>
                  <input id="company" autoComplete="organization" value={values.company} onChange={set('company')} />
                </Field>
                <Field {...fieldProps('role', 'Your Role', true)}>
                  {select('role', C.roles, 'Select your role')}
                </Field>
                <Field {...fieldProps('industry', 'Industry', true)}>
                  {select('industry', C.industries, 'Select your industry')}
                </Field>
                <Field {...fieldProps('requirement', 'What is your primary requirement?', true)}>
                  {select('requirement', C.requirements, 'Select a requirement')}
                </Field>
                <Field {...fieldProps('skuVolume', 'Approximate Product / SKU Volume', false)}>
                  {select('skuVolume', C.skuVolumes, 'Select (optional)')}
                </Field>
                <div className="full">
                  <Field {...fieldProps('challenge', 'Tell Us About Your Challenge', false)}>
                    <textarea id="challenge" rows="5" maxLength="2000" placeholder={C.challengePlaceholder} value={values.challenge} onChange={set('challenge')} />
                  </Field>
                </div>
                {/* Honeypot: hidden from people, bots fill it in */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" tabIndex="-1" autoComplete="off" value={values.website} onChange={set('website')} />
                </div>
              </div>

              {serverError && <p className="form-error" role="alert">{serverError}</p>}

              <button className="btn btn-primary btn-lg block" disabled={status === 'sending'}>
                {status === 'sending' ? (<><Loader2 size={18} className="spin" /> Sending…</>) : C.submit}
              </button>
              <p className="privacy muted small"><Lock size={14} /> {C.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
