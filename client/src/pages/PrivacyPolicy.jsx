import { ShieldCheck } from 'lucide-react';
import LegalLayout from '../components/LegalLayout.jsx';

const COMPANY = 'Bling Tech Connect OPC Pvt. Ltd.';
const PLATFORM = 'Genunitys';

const sections = [
  {
    id: 'overview',
    title: 'Who we are and scope of this policy',
    body: [
      `${COMPANY} (“${PLATFORM}”, “we”, “us”, “our”) provides AI-powered product authentication, QR-based digital identity verification, anti-counterfeit scan intelligence and customer engagement solutions for consumer brands and manufacturers.`,
      `This Privacy Policy explains what personal information we collect, why we collect it, how it is processed and protected, and the legal rights available to you. It applies to our marketing website (www.genunitys.com), our client administration dashboards, and the customer-facing product verification and reward scanning experiences powered by ${PLATFORM}.`,
      {
        note: 'Important Note on Roles: For our website visitors and enterprise business clients, Bling Tech Connect OPC Pvt. Ltd. acts as the Data Fiduciary (Data Controller). When consumers scan QR codes on physical products in the market, the brand owner of that product is typically the primary Data Fiduciary determining the purpose of customer interaction, and Genunitys processes scan telemetry as a Data Processor on the brand’s behalf.',
      },
    ],
  },
  {
    id: 'collect',
    title: 'Information we collect',
    body: [
      { sub: '1. Information from Brand Owners, Enterprise Clients & Website Visitors' },
      {
        list: [
          'Contact and business identity details: full name, corporate email address, business phone number, company/brand name, role/designation, and website URL.',
          'Enquiry and requirement details: primary objective, product category/industry, estimated SKU volume, and descriptions of existing counterfeiting challenges submitted via our demo forms.',
          'Account credentials and billing records: administrative login credentials, subscription details, and tax identification (GST/PAN numbers) for commercial accounts.',
          'Direct communications, support tickets, and correspondence exchanged with our team.',
        ],
      },
      { sub: '2. Information from Consumers Scanning Product QR Codes' },
      {
        list: [
          'Verification scan metadata: exact timestamp of the scan, product SKU identifier, batch number, unique serial cryptographic token, and verification outcome (e.g. authentic, repeat scan, or flagged code).',
          'Approximate geographical location: derived from IP address or browser-consented GPS coordinates, utilized strictly to map scan distribution and alert brand owners to unexpected regional counterfeiting clusters.',
          'Device and browser telemetry: smartphone model, operating system version, browser type, and camera viewport parameters.',
          'Engagement & reward details (where applicable): mobile number or UPI details if you choose to claim a cashback reward, digital authenticity certificate or warranty registration provided by the brand.',
        ],
      },
      { sub: '3. Automatically Collected Telemetry' },
      {
        list: [
          'Internet Protocol (IP) address, network provider details, and server access logs.',
          'Session cookies and local storage tokens necessary for secure scan state management and anti-bot verification.',
        ],
      },
    ],
  },
  {
    id: 'use',
    title: 'How we use your information',
    body: [
      'We process collected information for legitimate business purposes and in compliance with applicable law:',
      {
        list: [
          'Product Authentication: Validating the authenticity of scanned goods against the brand’s cryptographic security records in real time.',
          'Anti-Counterfeit Intelligence: Analyzing scan patterns to detect repeat-scan anomalies, code copying, unauthorized geographic dispersion, and grey-market diversion.',
          'Demo Scheduling & Business Enquiries: Processing demo requests, qualifying enterprise requirements, and communicating with brand representatives.',
          'Customer Engagement & Rewards: Delivering digital authenticity certificates, loyalty reward points, warranty cards, or configured brand incentives to consumers.',
          'Platform Security & Abuse Prevention: Protecting our scanning APIs from automated bots, scraping, denial-of-service attacks, and fraudulent manipulation.',
          'Statutory Compliance: Fulfilling tax, legal reporting, accounting, and audit obligations under Indian regulations.',
        ],
      },
      'We do not sell, rent, or trade your personal information to third-party data brokers or advertisers.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing and disclosure of information',
    body: [
      'We share personal information strictly on a need-to-know basis under appropriate confidentiality safeguards:',
      {
        list: [
          'With the Brand Owner: Scan records, verification outcomes, timestamp history, and consumer-submitted warranty or reward claims are shared directly with the specific brand whose product was scanned.',
          'Authorized Service Providers: Trusted cloud hosting partners, enterprise database providers, SMS/WhatsApp messaging gateways, and payment/UPI processing partners who assist in platform operations under strict data processing agreements.',
          'Legal & Regulatory Authorities: When required by applicable Indian law, court order, search warrant, government investigation, or to enforce our legal rights and protect brand security.',
          'Corporate Restructuring: In the event of a merger, acquisition, corporate reorganization, or sale of company assets, subject to continued adherence to this Privacy Policy.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and digital tracking technologies',
    body: [
      `We use session cookies, security tokens, and local storage mechanisms to keep our scanning platform responsive, prevent fraudulent replay attacks, and analyze website engagement.`,
      'For comprehensive details regarding our cookie classifications, purpose, and instructions on how to manage your browser settings, please refer to our dedicated Cookie Policy.',
    ],
  },
  {
    id: 'security',
    title: 'Data security and encryption standards',
    body: [
      `We implement industry-standard technical, physical, and managerial security controls to protect your data:`,
      {
        list: [
          'Transport Layer Security (TLS 1.3 / SSL) encryption across all public scanning interfaces and administrative dashboards.',
          'Encrypted database storage with automated backups and firewall-protected endpoints.',
          'Strict role-based access controls (RBAC) and multi-factor authentication for internal systems.',
          'Regular vulnerability evaluations, rate-limiting algorithms, and automated intrusion monitoring.',
        ],
      },
      'While we maintain rigorous safeguards, no electronic transmission over the Internet can be guaranteed to be 100% impenetrable. We encourage brand administrators to utilize strong, unique passwords and maintain vigilance over account access.',
    ],
  },
  {
    id: 'retention',
    title: 'Data retention and deletion',
    body: [
      'We retain personal information only for as long as necessary to fulfill the purposes described in this policy, support the brand’s active contract duration, and satisfy applicable statutory, tax, or legal metrology retention periods.',
      'Upon expiration of the retention window or upon a valid deletion request from the relevant Data Fiduciary, data is either permanently deleted from active databases or irreversibly anonymized for longitudinal statistical research.',
    ],
  },
  {
    id: 'rights',
    title: 'Your rights under the Digital Personal Data Protection Act, 2023',
    body: [
      'Under applicable Indian data protection legislation (including the DPDP Act, 2023), you may have the following legal rights regarding your personal data:',
      {
        list: [
          'Right to Access: Request a summary of personal data being processed about you and the processing activities undertaken.',
          'Right to Correction & Erasure: Request the correction of inaccurate or misleading data, or the erasure of data that is no longer necessary.',
          'Right to Withdraw Consent: Withdraw consent at any time for non-essential communications (such as marketing SMS or WhatsApp messages).',
          'Right to Grievance Redressal: Access a designated Grievance Officer to address data protection concerns.',
          'Right to Nominate: Nominate another individual to exercise your rights in the event of incapacity.',
        ],
      },
      'Where we process your data on behalf of a brand owner, we may direct your request to the brand or collaborate with them to respond within statutory timelines.',
    ],
  },
  {
    id: 'children',
    title: 'Children’s privacy',
    body: [
      'Our services, websites, and commercial solutions are designed exclusively for individuals aged 18 and older. We do not knowingly collect or solicit personal data from minors. If you believe a child has provided us with personal information, please notify us immediately, and we will take prompt steps to delete such records.',
    ],
  },
  {
    id: 'links',
    title: 'Third-party integrations and external links',
    body: [
      'Our website and verification portals may provide links to external websites, manufacturer portals, or third-party digital channels (such as WhatsApp, Google, or payment applications). We have no control over the privacy practices of external entities, and you are advised to review their independent privacy notices.',
    ],
  },
  {
    id: 'changes',
    title: 'Modifications to this Privacy Policy',
    body: [
      'We may update this Privacy Policy from time to time to accommodate technological enhancements, platform updates, or regulatory revisions. Any modifications will be reflected with an updated “Last updated” date at the top. We encourage you to review this policy periodically.',
    ],
  },
  {
    id: 'contact',
    title: 'Grievance redressal officer and contact details',
    body: [
      `For any questions, clarifications, privacy inquiries, or grievances regarding the processing of your personal information, please contact our designated Grievance Officer:`,
      {
        list: [
          'Entity: Bling Tech Connect OPC Pvt. Ltd.',
          'Designation: Grievance Redressal Officer (Genunitys Platform)',
          'Office Address: Olympia Awfis Crystal, 11–14, 11th Avenue, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu – 600032, India.',
          'Phone: 88257 51903',
          'Email: support@blingreward.com',
          'Response Window: All grievances will be acknowledged within 48 hours and resolved in accordance with applicable statutory timelines.',
        ],
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      crumbs="Privacy Policy"
      badge={{ icon: <ShieldCheck size={14} />, text: "Data Protection & Privacy" }}
      title={
        <>
          Privacy <span className="grad">Policy</span>
        </>
      }
      description="How Genunitys and Bling Tech Connect collect, process, utilize, and protect personal data across our product authentication platform, verification portals, and brand protection services."
      updated="11 November 2026"
      sections={sections}
      other={{
        title: "Looking for the rules of using Genunitys?",
        text: "Review the terms, brand responsibilities, and guidelines that apply to our website and services.",
        to: "/terms",
        label: "Read Terms & Conditions",
      }}
    />
  );
}
