/** Map origin. CONFIRM: move to the head office city when confirmed. */
export const origin = { name: 'Australia', lat: -25.5, lng: 134.5 };

/** Key energy, mining and industrial regions shown on the map as delivery destinations. */
type LabelPos = 'right' | 'left' | 'below';
export const destinations: { name: string; lat: number; lng: number; label?: LabelPos }[] = [
  { name: 'Singapore', lat: 1.35, lng: 103.8, label: 'left' as const },
  { name: 'Borneo', lat: 4.4, lng: 114.0 },
  { name: 'Middle East', lat: 25.3, lng: 51.5 },
  { name: 'Caspian', lat: 40.4, lng: 49.9 },
  { name: 'North Sea', lat: 58.9, lng: 5.7 },
  { name: 'West Africa', lat: 4.8, lng: 7.0, label: 'left' as const },
  { name: 'Gulf of Mexico', lat: 29.0, lng: -94.5 },
  { name: 'Brazil', lat: -22.4, lng: -41.8 },
  { name: 'Papua New Guinea', lat: -6.3, lng: 143.9, label: 'below' as const },
];

export const regionsDetail = [
  { region: 'Asia-Pacific', places: 'Australia, New Zealand, Papua New Guinea, Indonesia, Malaysia, Brunei, Singapore, Thailand, Vietnam' },
  { region: 'Middle East', places: 'United Arab Emirates, Qatar, Saudi Arabia, Oman, Kuwait, Bahrain' },
  { region: 'Europe and Caspian', places: 'Norway, United Kingdom, the Netherlands, Azerbaijan, Kazakhstan' },
  { region: 'Africa', places: 'Nigeria, Angola, Mozambique, Egypt' },
  { region: 'Americas', places: 'United States, Brazil, Guyana, Trinidad and Tobago' },
];
