import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Mail,
  Phone,
  ShieldCheck,
  BarChart3,
  Gift,
  Building2,
  Clock,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Users,
} from 'lucide-react';
import { BRAND } from '../data/content.js';

export default function ThankYou() {
  const location = useLocation();
  const state = location.state || {};
  const { fullName, company, email, requirement, industry } = state;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Thank You | Genunitys Demo Request';
  }, []);

  return (
    <main className="thankyou-page">
      <div className="container narrow">
        {/* Breadcrumb */}
        <nav className="legal-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="current">Thank You</span>
        </nav>

        {/* Hero Confirmation Card */}
        <div className="card thankyou-hero">
          <div className="thankyou-badge">
            <Sparkles size={14} />
            <span>Demo Request Confirmed</span>
          </div>

          <div className="thankyou-icon-wrap">
            <CheckCircle2 size={56} className="thankyou-check-icon" />
          </div>

          <h1>
            Thank You, <span className="grad">{fullName ? fullName.split(' ')[0] : 'there'}</span>!
          </h1>

          <p className="lead thankyou-lead">
            {company
              ? `We have successfully received your product demo request for ${company}.`
              : 'We have successfully received your product demo request.'}
            {' '}Our team is reviewing your requirements and will connect with you shortly.
          </p>

          {/* Submission Highlights Box (when submitted via form) */}
          {(company || requirement || email) && (
            <div className="thankyou-summary-box">
              <div className="thankyou-summary-title">Summary of Your Request</div>
              <div className="thankyou-summary-grid">
                {fullName && (
                  <div className="summary-item">
                    <span className="summary-label"><Users size={13} /> Contact Person</span>
                    <span className="summary-val">{fullName}</span>
                  </div>
                )}
                {company && (
                  <div className="summary-item">
                    <span className="summary-label"><Building2 size={13} /> Company / Brand</span>
                    <span className="summary-val">{company}</span>
                  </div>
                )}
                {email && (
                  <div className="summary-item">
                    <span className="summary-label"><Mail size={13} /> Business Email</span>
                    <span className="summary-val">{email}</span>
                  </div>
                )}
                {requirement && (
                  <div className="summary-item">
                    <span className="summary-label"><ShieldCheck size={13} /> Primary Need</span>
                    <span className="summary-val">{requirement}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Next Steps Timeline */}
          <div className="thankyou-next-steps">
            <h3>What to Expect Next</h3>
            <div className="next-steps-grid">
              <div className="next-step-card">
                <div className="step-badge">1</div>
                <div className="step-icon"><Clock size={20} /></div>
                <h4>Requirement Review</h4>
                <p>Our solutions architect evaluates your industry, product packaging, and SKU volume.</p>
              </div>

              <div className="next-step-card">
                <div className="step-badge">2</div>
                <div className="step-icon"><Calendar size={20} /></div>
                <h4>Demo Walkthrough</h4>
                <p>We demonstrate live QR authentication, real-time counterfeit alerts, and consumer rewards.</p>
              </div>

              <div className="next-step-card">
                <div className="step-badge">3</div>
                <div className="step-icon"><ShieldCheck size={20} /></div>
                <h4>Tailored Proposal</h4>
                <p>Receive a clear rollout plan with pricing, QR serialization guidelines, and pilot timelines.</p>
              </div>
            </div>
          </div>

          {/* Direct Support Strip */}
          <div className="thankyou-support-strip">
            <div>
              <strong>Need urgent assistance or have immediate questions?</strong>
              <p className="muted small">Our technical and business team is available Monday to Saturday (9:00 AM – 6:30 PM IST).</p>
            </div>
            <div className="support-links">
              <a href="mailto:business@genunitys.com" className="btn btn-ghost btn-sm">
                <Mail size={14} /> Email Us
              </a>
              <a href="tel:8825751903" className="btn btn-ghost btn-sm">
                <Phone size={14} /> 88257 51903
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="thankyou-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <ArrowLeft size={18} /> Return to Home
            </Link>
            <Link to="/#solutions" className="btn btn-ghost btn-lg">
              Explore Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* While You Wait - Explore Genunitys Modules */}
        <section className="thankyou-explore">
          <div className="center">
            <span className="eyebrow">Explore Genunitys</span>
            <h2>While You Wait, Discover Our Platform Capabilities</h2>
          </div>

          <div className="thankyou-feature-cards">
            <article className="card thankyou-feature">
              <div className="tf-icon"><ShieldCheck size={26} /></div>
              <h3>Anti-Counterfeiting</h3>
              <p>Cryptographically secure dual-layer QR codes that authenticate products in milliseconds with zero special app needed.</p>
              <Link to="/#solutions" className="link-arrow">Learn more <ArrowRight size={14} /></Link>
            </article>

            <article className="card thankyou-feature">
              <div className="tf-icon"><BarChart3 size={26} /></div>
              <h3>Scan Intelligence</h3>
              <p>Live geo-mapping, duplicate scan tracking, and automated anomaly detection to uncover counterfeit clusters immediately.</p>
              <Link to="/#solutions" className="link-arrow">Learn more <ArrowRight size={14} /></Link>
            </article>

            <article className="card thankyou-feature">
              <div className="tf-icon"><Gift size={26} /></div>
              <h3>Customer Rewards</h3>
              <p>Convert routine authentication scans into high-converting WhatsApp marketing, instant UPI cashback, and loyalty points.</p>
              <Link to="/#solutions" className="link-arrow">Learn more <ArrowRight size={14} /></Link>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

