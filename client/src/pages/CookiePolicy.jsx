import { Cookie } from 'lucide-react';
import LegalLayout from '../components/LegalLayout.jsx';

const COMPANY = 'Bling Tech Connect OPC Pvt. Ltd.';
const PLATFORM = 'Genunitys';

const sections = [
  {
    id: 'overview',
    title: 'What are cookies and why Genunitys uses them',
    body: [
      `Cookies are small text files that are stored on your computer, smartphone or mobile device when you visit a website or scan a digital product code. They allow the platform to recognize your browser, maintain security, remember your session state, and deliver a smooth verification experience.`,
      `This Cookie Policy explains how ${COMPANY} (“${PLATFORM}”, “we”, “us”) uses cookies and similar digital technologies (such as local storage, session storage, and web beacons) across our landing pages, enterprise dashboard, and product scanning verification portals.`,
      {
        note: 'We use cookies strictly to safeguard platform integrity, prevent fraudulent scanning manipulation, analyze system performance, and provide genuine product authentication. We do not use cookies to sell your browsing habits to third-party advertisers.',
      },
    ],
  },
  {
    id: 'categories',
    title: 'Categories of cookies we use',
    body: [
      { sub: '1. Essential & Security Cookies (Strictly Necessary)' },
      {
        list: [
          'Anti-Tamper & Security Tokens: Validate the authenticity of incoming verification scan requests and protect against replay attacks or counterfeit script injections.',
          'Form & CSRF Protection: Prevent Cross-Site Request Forgery (CSRF) when business visitors submit demo requests or contact enquiries.',
          'Session Management: Maintain active user and administrator sessions within authorized client portals.',
          'Rate-Limiting & Abuse Prevention: Monitor request thresholds to defend our scanning infrastructure against automated bots and denial-of-service traffic.',
        ],
      },
      { sub: '2. Scan Telemetry & Fraud Detection Cookies' },
      {
        list: [
          'Unique Scan Session Tracking: Differentiate between a genuine consumer scanning a physical product and automated bot scrapers.',
          'Anomaly & Duplicate Scan Detection: Help brand owners identify whether a single serial number is being simultaneously scanned across divergent geographic regions.',
        ],
      },
      { sub: '3. Performance & Analytics Cookies' },
      {
        list: [
          'Page Load Performance: Measure server response times, asset delivery speeds, and viewport rendering benchmarks.',
          'Aggregate Interaction Analytics: Gather anonymized visitor counts, referral sources, and feature interaction metrics to optimize the website layout.',
        ],
      },
      { sub: '4. Preference & Functional Cookies' },
      {
        list: [
          'User UI Preferences: Remember user selections, such as theme settings, dismissed modal alerts, and language preferences.',
          'Demo Form State: Temporarily cache non-sensitive form field status to prevent accidental data loss during navigation.',
        ],
      },
    ],
  },
  {
    id: 'third_party',
    title: 'Third-party cookies and cloud services',
    body: [
      'In certain instances, trusted third-party partners may place cookies or digital identifiers through our services:',
      {
        list: [
          'Content Delivery & Cloud Infrastructure: Edge hosting networks (such as Vercel or cloud CDN providers) utilize performance cookies to route traffic to the nearest global server.',
          'Typography & Asset Delivery: Services such as Google Fonts to render typography securely.',
          'Communication & Messaging Gateways: Third-party integration components that facilitate SMS, WhatsApp, or email verification notifications.',
        ],
      },
      'These third parties process technical metadata in accordance with their independent privacy and security policies.',
    ],
  },
  {
    id: 'managing',
    title: 'How to manage and disable cookies',
    body: [
      'You have the right to control how cookies are set on your device. Most modern web browsers allow you to review, block, or delete cookies through their settings menu:',
      {
        list: [
          'Google Chrome: Settings > Privacy and Security > Cookies and other site data.',
          'Apple Safari: Preferences > Privacy > Block all cookies (or Manage Website Data).',
          'Mozilla Firefox: Settings > Privacy & Security > Enhanced Tracking Protection / Cookies.',
          'Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies.',
        ],
      },
      {
        note: 'Please be aware: If you choose to block strictly necessary or security cookies, core functionalities of the Genunitys platform—such as real-time QR product authentication, anti-tamper validation, and demo form submissions—may not function properly.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Updates to this Cookie Policy',
    body: [
      'We may update this Cookie Policy from time to time to reflect operational, technological, or legal developments. When revisions occur, the updated date at the top of this page will be revised. We encourage you to review this page periodically to remain informed about our cookie practices.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us regarding cookies',
    body: [
      `If you have any questions or require additional technical information regarding our use of cookies and tracking technologies, please contact ${COMPANY}:`,
      {
        list: [
          'Company: Bling Tech Connect OPC Pvt. Ltd.',
          'Platform: Genunitys (www.genunitys.com)',
          'Registered Office: Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032, India.',
          'Phone: 88257 51903',
          'Email: support@blingreward.com',
        ],
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      crumbs="Cookie Policy"
      badge={{ icon: <Cookie size={14} />, text: "Cookie & Tracking Disclosure" }}
      title={
        <>
          Cookie <span className="grad">Policy</span>
        </>
      }
      description="Information on how Genunitys uses cookies, digital tokens, and session technologies to deliver secure product authentication, prevent scan tampering, and analyze performance."
      updated="11 November 2026"
      sections={sections}
      other={{
        title: "Want to know how we protect your personal data?",
        text: "Read our full Privacy Policy for detailed information on data collection, rights, and security standards.",
        to: "/privacy",
        label: "Read Privacy Policy",
      }}
    />
  );
}

