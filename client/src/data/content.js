// All page copy lives here (sourced from GENUNITYS_LP.docx). Edit text here, not in components.

export const BRAND = {
  name: 'Genunitys',
  tagline: 'AI-Powered Product Authentication & Customer Engagement',
  poweredBy: 'Bling Tech Connect OPC Pvt. Ltd.',
  website: 'www.genunitys.com',
};

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  eyebrow: 'AI-POWERED PRODUCT AUTHENTICATION & CUSTOMER ENGAGEMENT',
  title: 'Protect Your Products. Prove Their Authenticity. Build Customer Trust.',
  body: [
    'Counterfeit products can damage more than your sales. They can weaken customer confidence, erode brand value and make it harder to understand what is happening across your product ecosystem.',
    'Genunitys helps brands connect product authentication with customer engagement through QR-based verification, scan intelligence and digital reward experiences.',
    'Give customers a way to verify products while giving your business new opportunities to identify suspicious scan activity, understand customer interactions and build stronger brand relationships.',
  ],
  pills: ['Product Authentication', 'Anti-Counterfeit Intelligence', 'Customer Engagement'],
  primaryCta: 'Book a Product Demo',
  secondaryCta: 'Discuss Your Brand Protection Needs',
  audience: 'For manufacturers, brand owners and businesses looking to strengthen product authenticity and customer trust.',
};

export const PROBLEM = {
  title: 'Every Counterfeit Product Puts Your Brand Reputation at Risk.',
  intro:
    'Your business invests in product quality, packaging, distribution and customer experience. But when counterfeit products enter the market, customers may struggle to distinguish genuine products from imitations.',
  sub: 'The consequences can extend beyond lost sales.',
  items: [
    { icon: 'heartCrack', title: 'Lost Customer Trust', text: "Customers may associate poor-quality counterfeit products with your genuine brand, damaging the trust you've worked to build." },
    { icon: 'trendingDown', title: 'Revenue and Marketplace Pressure', text: 'Counterfeit products can compete with genuine goods, undermine pricing and create challenges for authorised distribution channels.' },
    { icon: 'eyeOff', title: 'Limited Visibility Into Product Interactions', text: 'Without appropriate authentication and monitoring mechanisms, businesses may lack useful visibility into suspicious scan activity and potential misuse of product identifiers.' },
    { icon: 'link', title: 'Missed Customer Engagement Opportunities', text: 'A product purchase often marks the end of the transaction. Yet the product itself can provide an opportunity to connect with customers digitally.' },
    { icon: 'alert', title: 'Difficulty Identifying Suspicious Activity', text: 'Repeated code usage, unusual scan patterns and unexpected geographic activity may indicate a need for further investigation.' },
  ],
  closing: "The challenge isn't simply selling a genuine product. It's helping customers recognise authenticity while giving your business better visibility and more ways to engage.",
  cta: 'Explore Genunitys',
};

export const INTRO = {
  eyebrow: 'Introducing Genunitys',
  title: 'Make Every Product a Digital Touchpoint for Trust.',
  body: [
    'Genunitys is a product authentication and customer engagement platform designed to help brands connect physical products with digital verification and customer experiences.',
    'By connecting QR-based product interactions with scan intelligence, analytics and engagement capabilities, Genunitys helps businesses explore a more connected approach to brand protection.',
  ],
  pillars: [
    { icon: 'shield', title: 'Authenticate', text: 'Give customers a digital route to verify product authenticity through a configured QR-based experience.' },
    { icon: 'radar', title: 'Monitor', text: 'Analyse scan activity and identify patterns that may warrant investigation.' },
    { icon: 'chart', title: 'Understand', text: 'Use available scan and interaction insights to gain a clearer view of customer engagement.' },
    { icon: 'gift', title: 'Engage', text: 'Connect product verification with configured rewards, offers and customer engagement experiences.' },
  ],
  closing: 'One product. A digital identity. More opportunities to build trust.',
  cta: 'See Genunitys in Action',
};

export const HOW = {
  eyebrow: 'How Genunitys Works',
  title: 'From Product Packaging to Product Verification.',
  intro: 'Help customers move from uncertainty to a clearer understanding of product authenticity.',
  steps: [
    { title: 'Create a Digital Product Identity', text: ['Generate or configure QR codes for your products through the agreed implementation process.', 'Each code is associated with the relevant product or product record according to the system configuration.'] },
    { title: 'Apply the QR Code', text: ['Place the QR code on suitable product packaging, labels or other approved product materials.', 'The implementation can be planned around your packaging and production workflow.'] },
    { title: 'Customer Scans the Product', text: ['The customer scans the QR code using a compatible smartphone camera and follows the verification experience.'] },
    { title: 'Verify Product Authenticity', text: ['The platform processes the scan against the configured product authentication system and presents the applicable verification result.'] },
    { title: 'Monitor Scan Activity', text: ['Review available scan records and analytics. Patterns such as repeated code usage or unusual scan activity can help identify cases that require investigation.'] },
    { title: 'Engage the Customer', text: ['Where enabled, connect the verification experience with relevant product information, reward campaigns or customer engagement activities.'] },
    { title: 'Turn Insights Into Action', text: ['Use the available information to support brand protection reviews, campaign decisions and customer engagement planning.'] },
  ],
  closing: 'Product authentication becomes more valuable when verification, monitoring and customer engagement work together.',
  cta: 'Request a Product Walkthrough',
};

export const SOLUTIONS = {
  eyebrow: 'Core Solutions',
  title: 'One Platform for Product Authentication and Customer Engagement.',
  items: [
    {
      icon: 'qr',
      label: 'Solution 1',
      title: 'QR Code Product Authentication',
      headline: 'Help Customers Check Product Authenticity.',
      text: ['Give customers a digital verification experience associated with your products.'],
      listTitle: 'Potential applications include:',
      list: ['QR-based product verification', 'Digital product identification', 'Customer-facing authenticity checks', 'Product information access', 'Verification-linked customer experiences'],
      note: 'Ideal for: FMCG, electronics, apparel, personal care, healthcare products and other product-based businesses.',
      cta: 'Explore Product Authentication',
    },
    {
      icon: 'scan',
      label: 'Solution 2',
      title: 'AI-Assisted Scan Intelligence',
      headline: 'Identify Suspicious Patterns Before They Become Bigger Problems.',
      text: [
        'Product scan activity can provide useful signals about how verification codes are being used.',
        'Genunitys positions its scan intelligence capabilities around detecting suspicious patterns, including duplicate code usage and unusual scan behaviour.',
      ],
      listTitle: 'Potential applications include:',
      list: ['Identifying repeated or suspicious scan activity', 'Reviewing unusual geographic patterns', 'Monitoring authentication events', 'Analysing scan behaviour', 'Supporting further investigation into potential counterfeiting'],
      note: 'Detection results should be treated as intelligence signals for investigation, not as automatic proof that a product is counterfeit.',
      cta: 'Discuss Your Brand Protection Requirements',
    },
    {
      icon: 'chart',
      label: 'Solution 3',
      title: 'Real-Time Analytics & Reporting',
      headline: 'Turn Product Scans Into Business Intelligence.',
      text: ['Understand how customers interact with your product authentication experience through the analytics available in your implementation.'],
      listTitle: 'Potential insights include:',
      list: ['Product scan activity', 'Authentication event patterns', 'Geographic scan distribution', 'Customer interaction trends', 'Campaign engagement', 'Suspicious activity indicators'],
      note: 'Use these insights to support operational reviews, customer engagement planning and brand protection decisions.',
      cta: 'Explore Scan Analytics',
    },
    {
      icon: 'gift',
      label: 'Solution 4',
      title: 'Rewards & Customer Engagement',
      headline: 'Turn Product Verification Into an Opportunity to Build Loyalty.',
      text: ["Product authentication doesn't have to be the end of the customer journey.", 'Where configured, Genunitys can connect product interactions with reward and engagement experiences designed to encourage customers to interact with your brand.'],
      listTitle: 'Potential applications include:',
      list: ['Product-linked promotional rewards', 'Loyalty initiatives', 'Customer offers and incentives', 'Verification-linked engagement', 'Campaign-based customer interactions', 'Repeat-engagement initiatives'],
      cta: 'Explore Customer Engagement',
    },
    {
      icon: 'megaphone',
      label: 'Solution 5',
      title: 'Campaign Management',
      headline: 'Connect Authentication With Your Marketing Strategy.',
      text: ['Explore ways to coordinate customer engagement campaigns around product interactions and available platform capabilities.'],
      listTitle: 'Potential applications include:',
      list: ['Promotional campaign planning', 'Customer engagement initiatives', 'Reward campaign configuration', 'Campaign performance monitoring', 'Customer interaction analysis'],
      note: 'Specific campaign automation, targeting and integration capabilities can be confirmed during the product demonstration.',
      cta: 'Discuss Your Campaign',
    },
    {
      icon: 'plug',
      label: 'Solution 6',
      title: 'Integration & Product Workflows',
      headline: 'Explore an Implementation That Fits Your Business.',
      text: ['Product authentication works best when the solution fits the way your business manages products and information.', 'Discuss your existing systems, product data and operational requirements with the Genunitys team.'],
      listTitle: 'Potential discussion areas include:',
      list: ['Product database requirements', 'ERP or CRM integration', 'API and data exchange requirements', 'QR code generation and deployment', 'User access and reporting needs', 'Implementation and onboarding'],
      note: 'Integration methods, timelines and technical requirements depend on the proposed scope.',
      cta: 'Discuss Technical Requirements',
    },
  ],
};

export const INDUSTRIES = {
  eyebrow: 'Industries We Serve',
  title: 'Product Protection Across Industries.',
  intro: 'Different industries face different authenticity, traceability and customer trust challenges. Genunitys can be explored for product authentication and engagement use cases across multiple sectors.',
  items: [
    { icon: 'utensils', title: 'FMCG & Food Brands', text: 'Connect packaged products with digital verification and customer engagement experiences.' },
    { icon: 'pill', title: 'Pharmaceuticals & Healthcare', text: 'Explore product authenticity and verification workflows designed around the requirements of regulated product categories.', note: 'Implementation must be assessed against applicable regulatory, privacy and operational requirements.' },
    { icon: 'cpu', title: 'Electronics & Appliances', text: 'Support product verification experiences and explore opportunities to connect product identification with customer information.' },
    { icon: 'shirt', title: 'Textiles & Apparel', text: 'Help customers engage with product-linked authenticity experiences and support brand trust initiatives.' },
    { icon: 'sparkles', title: 'Beauty & Personal Care', text: 'Connect product verification with branded digital experiences and potential customer engagement campaigns.' },
    { icon: 'glass', title: 'Beverages', text: 'Explore product verification and engagement experiences for suitable packaged beverage products.' },
    { icon: 'car', title: 'Automotive & Spare Parts', text: 'Consider product authentication use cases for parts, components and branded accessories.' },
    { icon: 'sprout', title: 'Agriculture & Agro Products', text: 'Explore digital product identification and authenticity-related use cases across suitable agricultural products.' },
    { icon: 'paint', title: 'Paints, Plumbing & Building Materials', text: 'Help customers and distribution partners access configured product verification experiences.' },
    { icon: 'flask', title: 'Chemicals & Industrial Products', text: 'Discuss product identification and verification workflows suitable for your product category and operating environment.' },
    { icon: 'store', title: 'Retail & Distribution', text: 'Explore authentication-related scan insights and customer-facing verification experiences across relevant distribution channels.' },
    { icon: 'dumbbell', title: 'Sports, Fitness & Lifestyle Products', text: 'Connect products with authenticity experiences that reinforce customer confidence in genuine goods.' },
  ],
  outroTitle: "Don't see your industry listed?",
  outro: 'Tell us what you manufacture or distribute. Our team can assess whether Genunitys is suitable for your product authentication and customer engagement requirements.',
  cta: 'Discuss Your Industry',
};

export const BENEFITS = {
  eyebrow: 'Business Benefits',
  title: 'Protect Trust. Gain Visibility. Create Better Customer Connections.',
  items: [
    { icon: 'shield', title: 'Strengthen Customer Confidence', text: 'Provide customers with a digital route to check product authenticity and access the relevant verification experience.' },
    { icon: 'search', title: 'Support Counterfeit Investigation', text: 'Use available scan intelligence to identify suspicious activity that may require additional checks.' },
    { icon: 'qr', title: 'Connect Products to Digital Experiences', text: 'Give physical products a digital touchpoint that can support verification, product information and engagement.' },
    { icon: 'users', title: 'Understand Customer Interactions', text: 'Use available scan and campaign analytics to better understand how customers interact with your configured digital experiences.' },
    { icon: 'gift', title: 'Explore Customer Loyalty Opportunities', text: 'Where enabled, connect verification with reward and engagement campaigns that give customers a reason to interact with your brand.' },
    { icon: 'chart', title: 'Support Data-Informed Decisions', text: 'Bring available authentication and interaction insights into your brand protection and marketing discussions.' },
  ],
  closing: 'Genunitys brings product authentication and customer engagement into one connected proposition.',
  cta: 'Book a Demo for Your Business',
};

export const USECASE = {
  eyebrow: 'A Practical Use Case',
  title: 'Imagine a Customer Scanning Your Product.',
  intro: 'Consider a consumer brand that wants to strengthen authenticity checks while creating a direct digital interaction with its customers.',
  challenge: { title: 'The Challenge', text: 'The brand wants customers to have a straightforward way to check product authenticity and wants better visibility into how its product QR codes are being used.' },
  approach: { title: 'The Approach', text: 'The brand implements a QR-based product verification experience using the agreed Genunitys configuration.' },
  journeyTitle: 'The Customer Journey',
  journey: [
    { title: 'Purchase', text: 'A customer buys a product from an authorised or other retail channel.' },
    { title: 'Scan', text: 'The customer scans the QR code printed on the product or packaging.' },
    { title: 'Verify', text: "The customer follows the configured digital experience to check the product's authenticity status." },
    { title: 'Monitor', text: 'The brand reviews available scan information and checks for suspicious patterns that may require investigation.' },
    { title: 'Engage', text: 'If enabled, the brand can connect the verification journey to product information, a reward or another configured customer engagement experience.' },
  ],
  opportunity: { title: 'The Business Opportunity', text: 'The brand can connect product verification with better visibility into scan activity and an opportunity to engage with customers digitally.' },
  disclaimer: 'This example illustrates a potential workflow. Actual verification rules, alerts, analytics and reward functionality depend on the selected implementation.',
  cta: 'Discuss a Use Case for My Products',
};

export const WHY = {
  eyebrow: 'Why Genunitys?',
  title: 'More Than a QR Code. A Connected Product Experience.',
  items: [
    { icon: 'shield', title: 'Product Authentication', text: "Connect products to a digital verification experience designed around your brand's requirements." },
    { icon: 'radar', title: 'Scan Intelligence', text: 'Explore analytics and suspicious-pattern monitoring associated with product scan activity.' },
    { icon: 'gift', title: 'Customer Engagement', text: 'Connect authentication experiences with configured rewards and customer interactions.' },
    { icon: 'chart', title: 'Business Visibility', text: 'Use available dashboards and reports to understand product scan and engagement activity.' },
    { icon: 'layers', title: 'Flexible Use Cases', text: 'Discuss applications across consumer products, packaging, apparel, electronics and other suitable industries.' },
    { icon: 'target', title: 'A Business-Focused Implementation', text: 'Start with your product, your risks and your operational requirements to determine the right approach.' },
  ],
  closing: 'The right product authentication solution starts with understanding what you need to protect.',
  cta: 'Talk to a Genunitys Specialist',
};

export const WHO = {
  eyebrow: 'Who Should Consider Genunitys?',
  title: 'Built for Businesses That Need Greater Product Trust.',
  intro: 'Genunitys may be worth exploring if your business:',
  items: [
    'Manufactures or distributes branded consumer products.',
    'Wants customers to have a digital product verification experience.',
    'Is concerned about counterfeit products or suspicious code usage.',
    'Wants to understand product scan activity more effectively.',
    'Wants to connect product authentication with customer engagement.',
    'Is evaluating QR-based product identification and digital verification.',
    'Needs to explore integration with existing business systems.',
  ],
  closing: "If one or more of these challenges apply to your business, let's discuss your requirements.",
  cta: 'Assess Genunitys for My Business',
};

export const DEMO = {
  eyebrow: 'The Demo Offer',
  title: 'See How Genunitys Could Work With Your Products.',
  intro: 'A product demonstration is an opportunity to understand the platform in the context of your business rather than evaluate it through feature lists alone.',
  exploreTitle: 'During your discussion with our team, you can explore:',
  explore: ['The product verification journey', 'QR code generation and deployment options', 'Available scan intelligence and analytics', 'Suspicious activity monitoring', 'Reward and customer engagement options', 'Integration requirements', 'Implementation considerations'],
  bringTitle: 'Bring these details to your demo',
  bring: ['Your product category', 'Approximate number of products or SKUs', 'Your current product identification or verification process', 'Your primary concern: authenticity, suspicious scans, customer engagement or integration', 'Any existing ERP, CRM or product database requirements'],
  closing: "Let's identify a practical starting point for your business.",
  cta: 'Request My Genunitys Demo',
};

export const FAQ = {
  eyebrow: 'Frequently Asked Questions',
  title: 'Answers to Common Questions',
  items: [
    { q: 'What is Genunitys?', a: ['Genunitys is a product authentication and customer engagement platform designed to connect QR-based verification, scan intelligence, analytics and customer engagement experiences.'] },
    { q: 'How does Genunitys help with counterfeit products?', a: ['Genunitys is designed to support product verification and monitoring of scan activity. Depending on the implementation, suspicious patterns such as repeated code usage or unusual scan behaviour can be identified for further investigation.', 'No authentication system should be represented as guaranteeing the elimination of all counterfeit products.'] },
    { q: 'How do customers verify a product?', a: ['Customers scan the configured product QR code using a compatible smartphone and follow the verification experience provided by the platform.', 'The precise steps and verification result depend on the product configuration and implementation.'] },
    { q: 'Does Genunitys use AI?', a: ['The Genunitys website describes AI-assisted scan intelligence and fraud-pattern monitoring. During a demo, the team can explain the specific detection capabilities, data requirements and available reporting for your use case.'] },
    { q: 'Can Genunitys identify duplicate QR scans?', a: ['The platform is positioned around identifying suspicious scan patterns, including duplicate code usage. The detection rules, alerting behaviour and investigation workflow should be confirmed for your proposed implementation.'] },
    { q: 'Can we connect rewards to product authentication?', a: ['The platform describes rewards and customer engagement capabilities. The available reward types, eligibility rules and delivery methods should be discussed with the team.'] },
    { q: 'Which industries can use Genunitys?', a: ['Potential applications include FMCG, food and beverages, pharmaceuticals, electronics, apparel, personal care, automotive parts, industrial products and other suitable product categories.', 'The suitability of the solution depends on the specific product and operating requirements.'] },
    { q: 'Can Genunitys integrate with our ERP or CRM?', a: ['The website describes integration capabilities involving existing systems. Your technical team should review the available APIs, connectors, data requirements and implementation scope during the discovery process.'] },
    { q: 'Is Genunitys suitable for enterprise-scale businesses?', a: ['Enterprise suitability depends on expected product volume, authentication workload, infrastructure, security requirements and integration needs. These should be evaluated during a technical consultation.'] },
    { q: 'How much does Genunitys cost?', a: ['Pricing depends on the proposed solution, product volume, integrations, customisation and implementation scope. Contact the team to discuss your requirements and request a proposal.'] },
    { q: 'How do we get started?', a: ['Submit the enquiry form or contact the Genunitys team through the available business contact channels. Share your product category and primary objective so the team can arrange the appropriate discussion.'] },
  ],
};

export const FORM = {
  eyebrow: 'Get in Touch',
  title: "Let's Discuss Your Product Authentication Requirements.",
  intro: 'Tell us about your products, your challenges and what you want to achieve. Our team will use this information to understand your enquiry and discuss the next steps.',
  submit: 'Request a Product Demo',
  challengePlaceholder: 'Describe your product category, the issue you want to address and any specific requirements.',
  successTitle: 'Thank you for contacting Genunitys.',
  success: ['Your enquiry has been received. Our team can review your requirements and contact you to discuss the next steps.', 'If you have an urgent business enquiry, you can also contact our team through the available business contact channels.'],
  privacy: 'Your information will be used to respond to your enquiry in accordance with the Genunitys privacy policy.',
  roles: ['Business Owner / Founder', 'Director / Senior Management', 'Brand Protection / Security', 'Marketing', 'Quality / Compliance', 'Operations / Supply Chain', 'IT / Technology', 'Procurement', 'Other'],
  industries: ['FMCG / Food', 'Pharmaceuticals / Healthcare', 'Electronics / Appliances', 'Textile / Apparel', 'Beauty / Personal Care', 'Beverages', 'Automotive / Spare Parts', 'Chemicals / Industrial Products', 'Agriculture / Agro', 'Retail / Distribution', 'Other'],
  requirements: ['Product Authentication', 'Anti-Counterfeit Monitoring', 'QR Code Verification', 'Scan Analytics', 'Customer Engagement / Rewards', 'Product Identification / Traceability', 'System Integration', 'Multiple Requirements', 'Other'],
  skuVolumes: ['Under 1,000 SKUs', '1,000–10,000 SKUs', 'More than 10,000 SKUs', 'Not sure / Need guidance'],
};

export const FINAL_CTA = {
  title: 'Your Products Deserve to Be Trusted.',
  body: [
    'Counterfeiting, product verification and customer engagement are connected business challenges.',
    'Genunitys helps brands explore a more connected approach to product authentication, scan intelligence and customer engagement.',
    'Whether you are protecting FMCG products, apparel, electronics, healthcare products or another product category, start with a discussion about your business requirements.',
  ],
  closing: "Let's explore how Genunitys can support your product authentication strategy.",
  primary: 'Book a Product Demo',
  secondary: 'Discuss Your Requirements',
  note: 'For business and enterprise enquiries. Share your product category and primary objective to help us prepare for the discussion.',
};

export const FOOTER = {
  links: [
    { label: 'Home', href: '/#home' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Industries', href: '/#industries' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
  note: 'Business contact details should be confirmed before publishing.',
};
