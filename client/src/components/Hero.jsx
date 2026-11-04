import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Gift,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Check,
} from 'lucide-react';
import { Button } from './ui.jsx';
import { HERO } from '../data/content.js';

function ProductIllustration() {
  return (
    <svg viewBox="0 0 140 220" className="product-art" aria-label="Product package with security seal">
      <defs>
        <linearGradient id="goldCap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="bottleGlass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#f0fdf4" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#dcfce7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="elixirGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#4ade80" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00bf15" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="holoShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00bf15" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="70" cy="204" rx="42" ry="8" fill="rgba(0, 191, 21, 0.16)" />

      {/* Dropper bulb / pump top */}
      <rect x="58" y="10" width="24" height="22" rx="7" fill="#0f172a" />
      <rect x="54" y="28" width="32" height="16" rx="4" fill="url(#goldCap)" stroke="#b45309" strokeWidth="0.8" />

      {/* Bottle Shoulder and Neck */}
      <path
        d="M 52 44 C 44 46, 34 56, 34 70 L 34 182 C 34 192, 42 198, 52 198 L 88 198 C 98 198, 106 192, 106 182 L 106 70 C 106 56, 96 46, 88 44 Z"
        fill="url(#bottleGlass)"
        stroke="rgba(0, 191, 21, 0.4)"
        strokeWidth="1.5"
      />

      {/* Elixir Liquid inside */}
      <path
        d="M 38 82 C 38 72, 44 64, 54 64 L 86 64 C 96 64, 102 72, 102 82 L 102 180 C 102 188, 96 194, 86 194 L 54 194 C 44 194, 38 188, 38 180 Z"
        fill="url(#elixirGrad)"
      />

      {/* Glass highlights */}
      <path d="M 40 70 L 40 180" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 45 74 L 45 176" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Front Label */}
      <rect
        x="44"
        y="86"
        width="52"
        height="84"
        rx="6"
        fill="#ffffff"
        stroke="rgba(0, 191, 21, 0.28)"
        strokeWidth="1.2"
      />

      {/* Label Brand & Details */}
      <text x="70" y="99" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#00870f" letterSpacing="0.8">
        GENUNITYS
      </text>
      <text x="70" y="108" textAnchor="middle" fontSize="6.2" fontWeight="700" fill="#0f172a">
        AURA BOTANICALS
      </text>
      <text x="70" y="115" textAnchor="middle" fontSize="4.2" fill="#64748b">
        PURE EXTRACT · 50 ML
      </text>

      {/* Holographic Security QR Seal */}
      <rect
        x="51"
        y="120"
        width="38"
        height="38"
        rx="5"
        fill="url(#holoShine)"
        stroke="#00bf15"
        strokeWidth="1.2"
      />

      {/* QR & Security icon overlay */}
      <rect x="54" y="123" width="32" height="32" rx="3" fill="#ffffff" fillOpacity="0.94" />

      {/* Mini QR modules */}
      <rect x="56" y="125" width="8" height="8" rx="1.5" fill="#0f172a" />
      <rect x="74" y="125" width="8" height="8" rx="1.5" fill="#0f172a" />
      <rect x="56" y="143" width="8" height="8" rx="1.5" fill="#0f172a" />
      <rect x="58" y="127" width="4" height="4" fill="#00bf15" />
      <rect x="76" y="127" width="4" height="4" fill="#00bf15" />
      <rect x="58" y="145" width="4" height="4" fill="#00bf15" />

      {/* QR matrix dots */}
      <rect x="66" y="126" width="2.5" height="2.5" fill="#0f172a" />
      <rect x="70" y="128" width="2.5" height="2.5" fill="#00bf15" />
      <rect x="66" y="132" width="2.5" height="2.5" fill="#00bf15" />
      <rect x="69" y="136" width="3.5" height="3.5" rx="1" fill="#00bf15" />
      <rect x="66" y="140" width="2.5" height="2.5" fill="#0f172a" />
      <rect x="74" y="140" width="3" height="3" fill="#00bf15" />
      <rect x="79" y="144" width="3" height="3" fill="#0f172a" />
      <rect x="74" y="148" width="3" height="3" fill="#00bf15" />

      {/* Security badge at bottom of label */}
      <rect x="47" y="161" width="46" height="6.5" rx="3" fill="rgba(0, 191, 21, 0.12)" />
      <text x="70" y="166" textAnchor="middle" fontSize="3.8" fontWeight="700" fill="#00870f">
        ● SECURE HOLOGRAM TAG #GN-8942
      </text>
    </svg>
  );
}

export default function Hero() {
  const [scanPhase, setScanPhase] = useState('scanning'); // 'scanning' | 'verifying' | 'genuine'
  const [scanProgress, setScanProgress] = useState(20);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    let timer1;
    let timer2;
    let timer3;
    let interval;

    setScanPhase('scanning');
    setScanProgress(20);

    interval = setInterval(() => {
      setScanProgress((prev) => (prev < 90 ? prev + 14 : 95));
    }, 280);

    timer1 = setTimeout(() => {
      clearInterval(interval);
      setScanProgress(100);
      setScanPhase('verifying');

      timer2 = setTimeout(() => {
        setScanPhase('genuine');

        timer3 = setTimeout(() => {
          setCycleKey((k) => k + 1);
        }, 4500); // Display popup for 4.5 seconds
      }, 700);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [cycleKey]);

  const restartScan = (e) => {
    e?.stopPropagation?.();
    setCycleKey((k) => k + 1);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{HERO.eyebrow}</span>
          <h1>
            Protect Your Products. <span className="grad">Prove Their Authenticity.</span> Build Customer Trust.
          </h1>
          {HERO.body.map((p, i) => (
            <p key={i} className={i === 1 ? 'lead strong' : 'lead'}>
              {p}
            </p>
          ))}
          <div className="pills">
            {HERO.pills.map((p) => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
          <div className="btn-row">
            <Button>{HERO.primaryCta}</Button>
            <Button variant="ghost" arrow={false}>{HERO.secondaryCta}</Button>
          </div>
          <p className="muted small">{HERO.audience}</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone" onClick={restartScan} title="Click to trigger product scan">
            <div className="phone-top-bar">
              <span>9:41</span>
              <div className="phone-notch">
                <span className="notch-camera" />
                <span className="notch-speaker" />
              </div>
              <span>5G 100%</span>
            </div>

            <div className="scanner-hud-bar">
              <span>
                <span className="hud-pulse" />
                {scanPhase === 'genuine' ? 'Authentication Complete' : 'AI Optical Scanner Active'}
              </span>
              <span>4K · 60fps</span>
            </div>

            <div className="scan-viewport">
              {/* Viewfinder corner brackets */}
              <span className="vf-bracket vf-tl" />
              <span className="vf-bracket vf-tr" />
              <span className="vf-bracket vf-bl" />
              <span className="vf-bracket vf-br" />

              {/* Product */}
              <div className={`product-showcase ${scanPhase === 'genuine' ? 'dimmed' : ''}`}>
                <ProductIllustration />

                {/* Reticle during scanning */}
                {scanPhase !== 'genuine' && (
                  <div className="target-reticle">
                    <div className="reticle-core" />
                  </div>
                )}
              </div>

              {/* Laser Beam during scanning and verifying */}
              {scanPhase !== 'genuine' && (
                <div className="laser-beam-container">
                  <span className="laser-line" />
                  <span className="laser-cone" />
                </div>
              )}

              {/* HUD scan status tag */}
              {scanPhase !== 'genuine' && (
                <div className="scan-hud-tag">
                  {scanPhase === 'verifying' ? (
                    <>
                      <Sparkles size={12} /> Verifying Secure Hologram...
                    </>
                  ) : (
                    <>
                      <span className="hud-pulse" /> Scanning Product Tag · {scanProgress}%
                    </>
                  )}
                </div>
              )}

              {/* THE "YOUR PRODUCT IS GENUINE" POPUP */}
              {scanPhase === 'genuine' && (
                <div className="genuine-popup-overlay">
                  <div className="genuine-popup-card">
                    <div className="genuine-badge-wrap">
                      <div className="genuine-badge-pulse" />
                      <div className="genuine-badge-pulse p2" />
                      <div className="genuine-badge-icon">
                        <CheckCircle2 size={32} />
                      </div>
                    </div>

                    <div className="genuine-tag">✓ 100% VERIFIED AUTHENTIC</div>
                    <h3 className="genuine-title">Your Product is Genuine</h3>
                    <p className="genuine-desc">
                      Official manufacturer record matched. Hologram security seal is 100% intact.
                    </p>

                    <div className="genuine-details">
                      <div className="g-row">
                        <span className="g-lbl">Product:</span>
                        <span className="g-val">Aura Botanical Elixir</span>
                      </div>
                      <div className="g-row">
                        <span className="g-lbl">Batch ID:</span>
                        <span className="g-val code">#GN-8942-VERIFIED</span>
                      </div>
                      <div className="g-row">
                        <span className="g-lbl">Status:</span>
                        <span className="g-val success-val">
                          <Check size={12} /> Seal Tamper-Free
                        </span>
                      </div>
                      <div className="g-row">
                        <span className="g-lbl">Scan Record:</span>
                        <span className="g-val">1st Scan · Safe Origin</span>
                      </div>
                    </div>

                    <div className="genuine-reward">
                      <Gift size={14} />
                      <span>Reward Unlocked: <strong>+50 Brand Points</strong></span>
                    </div>

                    <button className="rescan-btn" onClick={restartScan}>
                      <RefreshCw size={13} /> Scan Another Product
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom status verification card */}
            <div className={`verify-card ${scanPhase === 'genuine' ? 'genuine-card' : ''}`}>
              <ShieldCheck size={20} />
              <div>
                <strong>{scanPhase === 'genuine' ? 'Your product is genuine' : 'Scanning product...'}</strong>
                <span>
                  {scanPhase === 'genuine'
                    ? 'Authentic · Record matched on Genunitys'
                    : 'Analyzing cryptographic security tag'}
                </span>
              </div>
            </div>
          </div>

          <div className="float-card fc1">
            <ShieldCheck size={16} /> 100% Genuine Guaranteed
          </div>
          <div className="float-card fc2">
            <AlertTriangle size={16} /> Zero counterfeit signals
          </div>
          <div className="float-card fc3">
            <Gift size={16} /> Customer reward unlocked
          </div>
        </div>
      </div>
    </section>
  );
}
