import { FileText } from 'lucide-react';
import LegalLayout from '../components/LegalLayout.jsx';

const COMPANY = 'Bling Tech Connect OPC Pvt. Ltd.';
const PLATFORM = 'Genunitys';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    body: [
      `These Terms & Conditions (“Terms”) are a legally binding agreement between you (whether an individual user, manufacturer, brand owner, distributor or enterprise) and ${COMPANY} (“${PLATFORM}”, “we”, “us”, “our”). By accessing our website, requesting a product demo, onboarding products, configuring QR authentication or using the ${PLATFORM} platform and associated services, you agree to these Terms and to our Privacy Policy.`,
      `If you access or use ${PLATFORM} on behalf of a company, corporate brand, partnership or legal entity, you confirm and warrant that you have the full legal authority to bind that entity to these Terms. If you do not agree to these Terms, please refrain from using our platform and services.`,
    ],
  },
  {
    id: 'services',
    title: 'Our services',
    body: [
      `${PLATFORM} provides an enterprise software platform and digital product identity infrastructure designed for brands, manufacturers and product-based businesses. Our services include:`,
      {
        list: [
          'Cryptographic and dynamic QR code product authentication and tamper-evident digital identity generation.',
          'Holographic and secure digital token verification experiences accessible through smartphone cameras and scanners.',
          'AI-assisted scan intelligence, geo-distribution mapping, anomaly tracking and repeat-scan monitoring to detect suspicious counterfeit activity.',
          'Customer engagement touchpoints, digital authenticity certificates, warranty activations and configured reward experiences linked to product scans.',
          'Enterprise analytics, brand protection dashboards and supply chain interaction insights.',
        ],
      },
      'Features, service tiers, pricing, scan thresholds and implementation workflows may vary by subscription plan and are subject to technical evolution. Certain capabilities rely on third-party cloud infrastructure, telecom gateways or payment networks and are subject to partner availability.',
    ],
  },
  {
    id: 'accounts',
    title: 'Accounts, onboarding and eligibility',
    body: [
      {
        list: [
          'You must be at least 18 years of age and legally competent to enter into enforceable contracts under Indian law.',
          'You are responsible for ensuring that all business details, tax identifiers (GST/PAN), brand authorization proofs and representative details provided during onboarding are accurate, complete and current.',
          'You are strictly responsible for maintaining the confidentiality of your administrative credentials, API access keys and dashboard logins.',
          'You must immediately inform our security desk at support@blingreward.com if you discover or suspect any unauthorized access or security breach involving your account.',
        ],
      },
    ],
  },
  {
    id: 'use',
    title: 'Acceptable use',
    body: [
      'You agree not to misuse or facilitate the misuse of the platform. Specifically, you agree not to:',
      {
        list: [
          'Use the platform for any illegal, fraudulent, deceptive or unauthorized purpose, or in violation of intellectual property rights.',
          'Clone, falsify, duplicate, reverse engineer or illicitly generate Genunitys QR codes, security tokens or authenticity certificates.',
          'Attempt to authenticate counterfeit, stolen, grey-market, diverted or unauthorized goods through legitimate brand identifiers.',
          'Transmit malicious software, scripts, automated web scrapers, bots or denial-of-service traffic into the scan or verification endpoints.',
          'Send unsolicited spam, deceptive messages or non-consensual promotional SMS, WhatsApp or email communications through the platform.',
          'Decompile, disassemble, rent, lease, resell, sublicense or build a competitive product based on Genunitys proprietary software architecture.',
        ],
      },
    ],
  },
  {
    id: 'brands',
    title: 'Brand & manufacturer responsibilities',
    body: [
      `If you are a brand owner, licensee or manufacturer implementing ${PLATFORM} on physical goods, packaging or labels, you are solely responsible for:`,
      {
        list: [
          'Ensuring that you own or possess valid licenses for all trademarks, logos, brand names, product imagery and packaging artwork uploaded to the platform.',
          'The physical quality, durability, correct placement and readability of QR codes and tamper-evident tags applied to your product packaging.',
          'Funding, configuring and legally honoring any customer rewards, points, cashback, warranties or promotional claims linked to your product scans.',
          'Obtaining all requisite legal consents from consumers before collecting personal data or sending transactional and promotional communications.',
          'Complying with all applicable consumer protection, legal metrology, packaging regulations, trade mark laws, tax requirements (such as GST), and statutory disclosures across all sales jurisdictions.',
        ],
      },
    ],
  },
  {
    id: 'verification',
    title: 'Product verification results & scan intelligence',
    body: [
      `${PLATFORM} provides real-time verification processing based on algorithmic verification models, digital token matching, cryptographic checks and historical scan distribution records.`,
      {
        note: 'While Genunitys delivers cutting-edge scan intelligence and anomaly detection indicators, no digital authentication system alone guarantees the absolute absence of physical counterfeit goods in the market. Brands must use verification insights as a key component of their broader quality control, legal enforcement and supply chain oversight.',
      },
      'We do not accept liability for business disruptions, grey market diversion, packaging replication by sophisticated counterfeiters, or consumer disputes arising from product quality issues beyond our digital verification layer.',
    ],
  },
  {
    id: 'rewards',
    title: 'Rewards, digital certificates and payouts',
    body: [
      'Where product verification experiences are configured with loyalty rewards, digital certificates of authenticity or promotional points:',
      {
        list: [
          'All rewards, eligibility rules, redemption caps and validity periods are established directly by the brand deploying the campaign.',
          'Where financial cashback or UPI incentives are offered by a brand, payouts are executed via authorized third-party payment gateways. Payout delays can occur due to bank downtimes, incorrect UPI IDs or network interruptions.',
          'Genunitys and the sponsoring brand reserve the right to withhold, cancel or reverse any incentive if duplicate scan attempts, bot activity, geolocation spoofing or breach of campaign terms are detected.',
        ],
      },
    ],
  },
  {
    id: 'messaging',
    title: 'Customer messaging and communications',
    body: [
      'Automated messaging features (such as verification confirmation, warranty registration and campaign notifications) utilize third-party communication channels including official WhatsApp Business API providers, SMS gateways and SMTP relays.',
      'Brands must adhere strictly to applicable telecommunication regulations (including TRAI / DLT guidelines in India and Meta WhatsApp Business Policies), including verifiable opt-in compliance and opt-out mechanisms. Message delivery rates can be impacted by telecommunication network filters, carrier downtimes or user device availability.',
    ],
  },
  {
    id: 'fees',
    title: 'Commercial fees, subscriptions and taxes',
    body: [
      'Commercial fees for Genunitys plans, QR code generation blocks, enterprise API access and custom integrations are set forth in the applicable proposal, order form or enterprise agreement.',
      'Unless explicitly stated otherwise in writing, fees are billed in advance, are non-refundable except where mandated by law, and are exclusive of applicable statutory taxes (including Goods and Services Tax – GST). Failure to pay outstanding balances may result in temporary suspension of verification API endpoints and analytics dashboards.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual property rights',
    body: [
      `${PLATFORM}, its underlying software, machine learning scan models, proprietary algorithms, database schemas, user interfaces, branding, patents and documentation are the exclusive property of ${COMPANY} and its licensors. You are granted a limited, revocable, non-exclusive, non-transferable license to access and use the platform during your active subscription.`,
      'The brand retains full ownership of its trademarks, logos, registered product identifiers and proprietary catalog data. By uploading content, you grant us a worldwide, royalty-free license to host, display, process and analyze such data solely to deliver and optimize the authentication and engagement services.',
    ],
  },
  {
    id: 'privacy',
    title: 'Data privacy and regulatory compliance',
    body: [
      `Our collection, processing and safeguarding of personal data is governed by our Privacy Policy. In relation to end-consumer scans, ${COMPANY} acts primarily as a Data Processor on behalf of the respective brand (Data Fiduciary / Data Controller), processing scan interactions according to the brand’s instructions and in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act).`,
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimers and warranties',
    body: [
      'The platform, verification endpoints and scan analytics are provided on an “as is” and “as available” basis without warranties of any kind, whether express, statutory or implied.',
      'To the fullest extent permitted by applicable law, we disclaim all warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted service availability or that the system will detect every conceivable form of sophisticated physical packaging forgery. Case studies and metrics shown on our marketing website represent historical results and do not constitute a guarantee of identical commercial outcomes.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: [
      `To the maximum extent permitted under applicable law, ${COMPANY}, its directors, officers, employees and affiliates shall not be liable for any indirect, special, incidental, punitive or consequential damages, including loss of business profits, sales revenue, brand reputation, commercial goodwill or data loss.`,
      `Our cumulative aggregate liability for all claims arising out of or related to these Terms or the service shall be limited to the total fees actually received by us from you for the specific service in the three (3) months immediately preceding the event giving rise to liability.`,
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    body: [
      `You agree to indemnify, defend and hold harmless ${COMPANY}, its parent, subsidiaries, officers, directors and employees from and against any third-party claims, liabilities, damages, losses, costs and legal fees arising out of: (a) your breach of these Terms; (b) the physical products, packaging or promotions you distribute; (c) your violation of consumer rights, trademark laws or applicable statutory regulations; or (d) unauthorized misuse of your account credentials.`,
    ],
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    body: [
      'You may terminate your account at any time pursuant to the notice terms of your commercial agreement. We reserve the right to suspend or terminate your access immediately if: (a) you breach these Terms; (b) you fail to cure payment defaults; (c) fraudulent or illegitimate scan activities are detected under your brand; or (d) required by legal or government authorities.',
      'Provisions that by their nature survive termination (including intellectual property, disclaimers, limitation of liability, indemnity and governing law) will continue in full force.',
    ],
  },
  {
    id: 'law',
    title: 'Governing law and jurisdiction',
    body: [
      'These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India.',
      'Subject to mutual efforts at amicable resolution, the courts of competent jurisdiction located at Chennai, Tamil Nadu, India shall have exclusive jurisdiction over all legal disputes arising out of these Terms.',
    ],
  },
  {
    id: 'changes',
    title: 'Modifications to these Terms',
    body: [
      'We may update or revise these Terms periodically to reflect product upgrades, regulatory amendments or commercial adjustments. The updated revision will be indicated by the “Last updated” date at the top of this document. Continued use of the platform after revised Terms become effective constitutes your binding acceptance of the changes.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact information & corporate address',
    body: [
      `For questions, corporate clarifications or legal notices regarding these Terms, please contact ${COMPANY}:`,
      {
        list: [
          'Company Name: Bling Tech Connect OPC Pvt. Ltd.',
          'Brand / Product: Genunitys (www.genunitys.com)',
          'Registered Office: Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032, India.',
          'Phone: 88257 51903',
          'Email: support@blingreward.com',
        ],
      },
    ],
  },
];

export default function TermsConditions() {
  return (
    <LegalLayout
      crumbs="Terms & Conditions"
      badge={{ icon: <FileText size={14} />, text: "Legal Documentation" }}
      title={
        <>
          Terms &amp; <span className="grad">Conditions</span>
        </>
      }
      description="The official terms, operational rules and legal responsibilities that govern your use of the Genunitys product authentication platform, verification scanning and brand protection solutions."
      updated="11 November 2026"
      sections={sections}
      other={{
        title: "Curious how we safeguard your data?",
        text: "Our Privacy Policy outlines how product scans, customer data and brand records are securely handled.",
        to: "/privacy",
        label: "Read Privacy Policy",
      }}
    />
  );
}

