/**
 * Company details and global settings.
 *
 * IMPORTANT: Values marked CONFIRM are placeholders. Replace them with the
 * correct company information before the site goes live.
 */
export const site = {
  name: 'Primelink Australia',
  legalName: 'Primelink Australia Pty Ltd', // CONFIRM legal entity name
  abn: '', // CONFIRM, for example '12 345 678 901'. Hidden when empty.
  tagline: 'HVAC spare parts for industry and hazardous areas',
  description:
    'Primelink Australia supplies HVAC and refrigeration spare parts worldwide for oil and gas, mining, power, hydrogen, defence, telecoms and industry. Safe-area and Zone 1 hazardous-area parts, ATEX and IECEx, with full documentation.',
  url: 'https://www.primelinkaustralia.com.au', // CONFIRM domain

  contact: {
    salesEmail: 'sales@primelinkaustralia.com.au', // CONFIRM
    generalEmail: 'info@primelinkaustralia.com.au', // CONFIRM
    careersEmail: 'careers@primelinkaustralia.com.au', // CONFIRM
    phone: '', // CONFIRM, for example '+61 3 0000 0000'. Hidden when empty.
    whatsapp: '', // CONFIRM optional, digits only, for example '61400000000'
    addressLines: ['Australia'], // CONFIRM street address, city, state, postcode
    hours: 'Monday to Friday, 8:00 to 17:30 AEST', // CONFIRM
    linkedin: '', // CONFIRM company LinkedIn URL. Hidden when empty.
  },

  /** Target time to send a quote. CONFIRM this is a promise you can keep. */
  quoteResponse: 'one business day',

  /**
   * Certifications the company holds (for example 'ISO 9001:2015').
   * Leave empty until each certificate is confirmed. Badges show only when set.
   */
  certifications: [] as string[],

  /**
   * Form handling. Set PUBLIC_FORM_ENDPOINT in the hosting environment
   * (Formspree, Web3Forms, Basin, a Cloudflare Worker, etc.). When it is not
   * set, the forms open the visitor's email app with the request filled in.
   */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '/api/enquiry',
};

/** Equipment makes we source parts for. Text only, no logos. CONFIRM list. */
export const platforms = [
  'Bitzer',
  'Copeland',
  'Danfoss',
  'Carrier',
  'Trane',
  'York',
  'Daikin',
  'ABB',
  'WEG',
  'Siemens',
  'Belimo',
  'Honeywell',
  'Alfa Laval',
  'Ziehl-Abegg',
  'ebm-papst',
  'Johnson Controls',
];

export const nav = {
  main: [
    { label: 'Products', href: '/products/', menu: 'products' },
    { label: 'Industries', href: '/industries/', menu: 'industries' },
    { label: 'Services', href: '/services/', menu: 'services' },
    { label: 'Quality', href: '/quality/' },
    { label: 'Company', href: '/about/', menu: 'company' },
  ],
  company: [
    { label: 'About Primelink', href: '/about/', text: 'Who we are and how we work' },
    { label: 'Global reach', href: '/global-reach/', text: 'Where we ship and how' },
    { label: 'Insights', href: '/insights/', text: 'Guides for buyers and engineers' },
    { label: 'Careers', href: '/careers/', text: 'Work with us' },
    { label: 'Contact', href: '/contact/', text: 'Talk to the sales team' },
  ],
};
