/**
 * SEO keywords.
 *
 * Generic industry terms for HVAC spare parts and hazardous-area climate
 * control. No competitor brand names are used. Search engines give little
 * weight to the meta keywords tag, so these terms are also used in page
 * titles, descriptions, headings and body copy, which is where they count.
 */
export const siteKeywords = [
  'HVAC spare parts',
  'HVAC and refrigeration spare parts',
  'industrial HVAC parts',
  'hazardous area HVAC parts',
  'Zone 1 HVAC spares',
  'Zone 2 HVAC spares',
  'ATEX and IECEx certified parts',
  'explosion-proof HVAC parts',
  'Ex d compressors',
  'Ex-rated fan motors',
  'non-sparking fans',
  'packaged HVAC unit spares',
  'chiller spare parts',
  'air handling unit parts',
  'cabinet cooler spares',
  'enclosure cooler parts',
  'sample chiller parts',
  'drinking water cooler parts',
  'mobile cooling spares',
  'analyser house HVAC',
  'CEMS shelter cooling',
  'E-house HVAC',
  'battery room cooling',
  'dangerous goods store cooling',
  'offshore HVAC spares',
  'FPSO HVAC parts',
  'LNG plant HVAC',
  'mining HVAC parts',
  'hydrogen hazardous area equipment',
  'recommended spares lists',
  'obsolete HVAC parts',
  'certificate of conformity',
  'HVAC parts supplier Australia',
];

/** Merge page keywords with the site list, page terms first, no duplicates. */
export const withKeywords = (page: string[] = []) => Array.from(new Set([...page, ...siteKeywords])).join(', ');
