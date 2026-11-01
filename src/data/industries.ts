export interface Industry {
  slug: string;
  name: string;
  short: string;
  intro: string;
  conditions: { title: string; text: string }[];
  supply: string[]; // product category slugs
  focus: string[];
}

export const industries: Industry[] = [
  {
    slug: 'offshore-platforms',
    name: 'Offshore platforms',
    short: 'HVAC parts for fixed platforms, wellhead platforms and accommodation modules.',
    intro:
      'Offshore HVAC keeps control rooms pressurised, equipment rooms cool and people safe. A missing part can mean a helicopter seat, a shutdown or a safety case deviation. We supply the right part, with the right papers, to the supply base on time.',
    conditions: [
      { title: 'Hazardous areas', text: 'Motors, heaters, actuators and instruments must match the zone, gas group and temperature class of the installation.' },
      { title: 'Salt-laden air', text: 'Coils, fans and enclosures need marine-grade materials and coatings to survive.' },
      { title: 'Limited deck space and lift windows', text: 'Parts must arrive complete, correctly packed and labelled for the next vessel or flight.' },
    ],
    supply: ['fans-motors', 'dampers-airflow', 'heaters-electrical', 'coils-heat-exchangers', 'controls-instrumentation'],
    focus: ['Fire, blast and gas-tight dampers', 'Ex-rated fan motors and duct heaters', 'Control room pressurisation parts', 'Salt-air intake filtration'],
  },
  {
    slug: 'fpso-marine',
    name: 'FPSO and marine',
    short: 'Parts for FPSOs, FSOs, drilling rigs and offshore support vessels.',
    intro:
      'Floating facilities combine marine class rules with process safety. We supply HVAC and refrigeration parts that meet both, and we deliver to the port, the supply base or the vessel agent.',
    conditions: [
      { title: 'Class society rules', text: 'Some parts need type approval or certificates accepted by the vessel’s class society.' },
      { title: 'Motion and vibration', text: 'Mounts, bearings and fixings must suit continuous movement.' },
      { title: 'Port and agent logistics', text: 'Deliveries must align with vessel schedules and customs rules in each port.' },
    ],
    supply: ['refrigeration-components', 'compressors', 'coils-heat-exchangers', 'fans-motors', 'filters-air-quality'],
    focus: ['Provision and accommodation refrigeration', 'Seawater-cooled condensers', 'Marine-coated coils', 'Vessel agent and port deliveries'],
  },
  {
    slug: 'lng-gas-processing',
    name: 'LNG and gas processing',
    short: 'Parts for LNG trains, gas plants, compressor stations and pipelines.',
    intro:
      'Gas plants run large HVAC systems for substations, control buildings and analyser houses. We supply the parts that keep them running through long operating campaigns and planned outages.',
    conditions: [
      { title: 'Remote sites', text: 'Plants are often far from major cities, so deliveries need careful planning and tracking.' },
      { title: 'High ambient temperatures', text: 'Condensers and electrical rooms must cope with extreme heat and dust.' },
      { title: 'Planned outages', text: 'Spares must arrive before the outage window, not during it.' },
    ],
    supply: ['compressors', 'coils-heat-exchangers', 'controls-instrumentation', 'filters-air-quality', 'heaters-electrical'],
    focus: ['Substation and analyser house HVAC', 'Sand trap louvres and intake filters', 'Packaged unit compressors', 'Outage spares kits'],
  },
  {
    slug: 'refining-petrochemical',
    name: 'Refining and petrochemical',
    short: 'Parts for refineries, chemical plants and storage terminals.',
    intro:
      'Refineries and chemical plants need HVAC systems that protect control rooms against toxic and flammable gases. We supply the components for those systems with full traceability.',
    conditions: [
      { title: 'Toxic gas protection', text: 'Gas-tight dampers and carbon filters protect occupied buildings from H₂S and other gases.' },
      { title: 'Corrosive atmospheres', text: 'Materials must resist sulphur compounds and chemical vapours.' },
      { title: 'Strict documentation', text: 'Each part needs records that satisfy the site’s management of change process.' },
    ],
    supply: ['dampers-airflow', 'filters-air-quality', 'controls-instrumentation', 'fans-motors', 'heaters-electrical'],
    focus: ['Blast-resistant building HVAC', 'Activated carbon filtration', 'Gas-tight isolation dampers', 'Ex instruments and switches'],
  },
  {
    slug: 'mining-minerals',
    name: 'Mining and minerals',
    short: 'Parts for mine site HVAC, processing plants and remote accommodation.',
    intro:
      'Mine sites share many conditions with oil and gas: remote locations, dust, heat and hazardous areas in some processes. We bring the same supply discipline to these sites.',
    conditions: [
      { title: 'Heavy dust', text: 'Filters and coils need frequent change-out and robust grades.' },
      { title: 'Remote camps', text: 'Accommodation HVAC and cool rooms must stay running far from service centres.' },
      { title: 'Mixed fleets', text: 'Sites run equipment from many makers and eras.' },
    ],
    supply: ['filters-air-quality', 'compressors', 'refrigeration-components', 'fans-motors', 'coils-heat-exchangers'],
    focus: ['Camp and cool room refrigeration', 'Pressurisation filters for E-houses', 'Condenser coils for high-dust sites', 'Obsolete part replacement'],
  },
  {
    slug: 'power-utilities',
    name: 'Power and utilities',
    short: 'Parts for gas-fired power stations, substations and utility control rooms.',
    intro:
      'Power stations and substations depend on HVAC to keep switchgear, batteries and control systems within temperature limits. We supply the parts that protect that equipment.',
    conditions: [
      { title: 'Critical cooling', text: 'Electrical and battery rooms cannot overheat, so redundancy and quick spares matter.' },
      { title: 'Long asset life', text: 'Plants run for decades, so many original parts are now obsolete.' },
      { title: 'Fuel gas areas', text: 'Gas turbine enclosures and fuel gas skids include hazardous areas.' },
    ],
    supply: ['controls-instrumentation', 'compressors', 'fans-motors', 'heaters-electrical', 'dampers-airflow'],
    focus: ['Switch room and battery room cooling', 'Turbine enclosure ventilation', 'Controller replacements', 'Critical spares lists'],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
