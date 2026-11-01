export interface Service {
  slug: string;
  name: string;
  short: string;
  icon: string;
  intro: string;
  steps?: { title: string; text: string }[];
  points: { title: string; text: string }[];
}

export const services: Service[] = [
  {
    slug: 'global-sourcing',
    name: 'Global sourcing',
    short: 'One supplier for HVAC parts from many makers and many countries.',
    icon: 'tabler:world-search',
    intro:
      'Your maintenance team should not need twenty supplier accounts to keep one HVAC system running. Send us a mixed list of parts. We source each item from the original maker, an authorised distributor or a qualified alternative, and we return one consolidated quote.',
    steps: [
      { title: 'Send your list', text: 'Part numbers, nameplate photos, drawings or a spares list in any format.' },
      { title: 'We identify each item', text: 'We check every line against maker data and ask questions where data is missing.' },
      { title: 'We source and compare', text: 'We approach the maker and authorised channels first, then qualified alternatives if you approve them.' },
      { title: 'You get one quote', text: 'One document with price, lead time, origin and documents for each line.' },
    ],
    points: [
      { title: 'Mixed-maker lists', text: 'Compressors, valves, motors and filters on one purchase order.' },
      { title: 'Authorised channels first', text: 'We tell you the source of every part before you order.' },
      { title: 'Clear lead times', text: 'We quote real lead times, and we tell you quickly when they change.' },
    ],
  },
  {
    slug: 'obsolete-parts',
    name: 'Obsolete parts and cross-reference',
    short: 'Equivalent parts for discontinued items, checked against the original data.',
    icon: 'tabler:arrows-exchange',
    intro:
      'Many plants, mines and offshore facilities run HVAC equipment that is twenty or thirty years old. When the original part is no longer made, we find remaining stock or an engineered equivalent, and we document the differences so your engineers can approve the change.',
    steps: [
      { title: 'Collect the data', text: 'Nameplates, drawings, datasheets and photos of the installed part.' },
      { title: 'Search for remaining stock', text: 'We check makers, distributors and surplus stock worldwide.' },
      { title: 'Propose an equivalent', text: 'If no stock exists, we propose a replacement that fits form, fit and function.' },
      { title: 'Document the change', text: 'We give you a comparison sheet to support your management of change.' },
    ],
    points: [
      { title: 'Form, fit and function', text: 'Dimensions, connections, ratings and certifications compared line by line.' },
      { title: 'Support for change approval', text: 'Clear comparison records for your engineering authority.' },
      { title: 'Upgrade options', text: 'Where it makes sense, we propose a modern part with better efficiency or support.' },
    ],
  },
  {
    slug: 'hazardous-area-supply',
    name: 'Hazardous-area (Ex) supply',
    short: 'ATEX and IECEx certified motors, compressors, heaters, actuators and instruments for Zone 1 and Zone 2.',
    icon: 'tabler:alert-triangle',
    intro:
      'An Ex part is only safe if it matches the area classification and its certificate matches the item. We check zone, gas group, temperature class and equipment protection level on every hazardous-area line before we quote.',
    points: [
      { title: 'Certification check', text: 'We confirm IECEx or ATEX certificates match the exact model supplied.' },
      { title: 'Marking review', text: 'We review the Ex marking against your area classification before dispatch.' },
      { title: 'Complete records', text: 'Certificates of conformity and instructions travel with the part.' },
      { title: 'Australian requirements', text: 'We understand AS/NZS 60079 requirements for equipment used in Australia.' },
      { title: 'Hydrogen and IIC areas', text: 'We source equipment rated for gas group IIC and IIB+H2 for hydrogen sites.' },
      { title: 'Zone 1 and Zone 2', text: 'Parts for gas and dust hazardous areas, matched to the equipment protection level.' },
    ],
  },
  {
    slug: 'shutdown-support',
    name: 'Shutdown and turnaround support',
    short: 'Spares planned, kitted and delivered before your outage window opens.',
    icon: 'tabler:calendar-event',
    intro:
      'A shutdown has a fixed window. Parts that arrive late cost more than parts that cost more. We work from your work packs to plan, expedite and kit HVAC spares so they arrive on site before the first permit is issued.',
    steps: [
      { title: 'Review the scope', text: 'We review the HVAC work packs and spares lists with your planners.' },
      { title: 'Order early', text: 'We place long-lead items first and track them weekly.' },
      { title: 'Kit and label', text: 'We pack parts by work order, so each crew gets what it needs.' },
      { title: 'Deliver to site', text: 'We deliver to the site, the laydown yard or the supply base on the agreed date.' },
    ],
    points: [
      { title: 'Weekly expediting reports', text: 'Status of every line, every week, until delivery.' },
      { title: 'Kits by work order', text: 'Less time searching, more time working.' },
      { title: 'Contingency spares', text: 'Advice on extra items to hold in case of findings during inspection.' },
    ],
  },
  {
    slug: 'logistics-export',
    name: 'Logistics and export',
    short: 'Door-to-site delivery worldwide, with export documents and dangerous goods handling.',
    icon: 'tabler:truck-delivery',
    intro:
      'We deliver to offshore supply bases, remote plants and vessel agents around the world. We prepare the export documents, packing and labels so your parts clear customs and reach site without delay.',
    points: [
      { title: 'Air, sea and road freight', text: 'Urgent air freight or consolidated sea freight, as the job needs.' },
      { title: 'Export documents', text: 'Commercial invoices, packing lists and certificates of origin.' },
      { title: 'Dangerous goods', text: 'Correct packing and declarations for refrigerants and other dangerous goods.' },
      { title: 'Offshore-ready packing', text: 'Packing and labelling to your supply base requirements.' },
    ],
  },
  {
    slug: 'spares-programmes',
    name: 'Spares programmes',
    short: 'Critical spares lists, stock holding and repeat-order agreements.',
    icon: 'tabler:list-check',
    intro:
      'For parts you cannot afford to wait for, we help you build and keep a critical spares strategy. We review your installed equipment, agree a spares list and, where it suits you, hold stock for call-off.',
    points: [
      { title: 'Critical spares review', text: 'We help identify the parts whose failure would stop a system.' },
      { title: 'Stock holding', text: 'Agreed items held for your site and released on call-off.' },
      { title: 'Fixed-price agreements', text: 'Agreed prices and lead times for repeat items.' },
      { title: 'Obsolescence watch', text: 'We tell you when a part on your list is about to be discontinued.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
