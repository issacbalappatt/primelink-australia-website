export interface Industry {
  slug: string;
  name: string;
  group: 'Energy and resources' | 'Infrastructure and industry';
  keywords: string[];
  short: string;
  intro: string;
  conditions: { title: string; text: string }[];
  supply: string[]; // product category slugs
  focus: string[];
}

export const industries: Industry[] = [
  {
    slug: 'offshore-platforms',
    group: 'Energy and resources',
    keywords: ['offshore HVAC spares', 'offshore platform HVAC parts', 'offshore module HVAC'],
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
    group: 'Energy and resources',
    keywords: ['FPSO HVAC parts', 'marine HVAC spares', 'drilling rig HVAC parts'],
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
    group: 'Energy and resources',
    keywords: ['LNG plant HVAC', 'gas processing HVAC spares', 'analyser house HVAC'],
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
    group: 'Energy and resources',
    keywords: ['refinery HVAC parts', 'petrochemical plant HVAC', 'blast-resistant building HVAC'],
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
    group: 'Energy and resources',
    keywords: ['mining HVAC parts', 'underground mine cooling', 'mine site refrigeration spares'],
    name: 'Mining and minerals',
    short: 'Parts for mine site HVAC, processing plants and remote accommodation.',
    intro:
      'Mine sites run HVAC and refrigeration far from service centres, in dust and heat, and sometimes in hazardous areas such as underground coal mines. We supply parts for surface plants, underground cooling and remote camps.',
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
    group: 'Energy and resources',
    keywords: ['power station HVAC parts', 'substation cooling', 'battery room cooling'],
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
  {
    slug: 'hydrogen-renewables',
    name: 'Hydrogen and renewables',
    group: 'Energy and resources',
    keywords: ['hydrogen hazardous area equipment', 'IIB+H2 HVAC parts', 'BESS cooling spares', 'electrolyser HVAC'],
    short: 'Parts for hydrogen production and storage, battery energy storage and wind and solar substations.',
    intro:
      'New energy sites bring new hazardous areas. Hydrogen needs equipment rated for gas group IIC or IIB+H2, and battery energy storage systems need reliable cooling. We supply HVAC parts that meet these requirements.',
    conditions: [
      { title: 'Hydrogen gas groups', text: 'Ex equipment near hydrogen must be certified for IIC or IIB+H2, which narrows the choice of motors, heaters and instruments.' },
      { title: 'Battery cooling', text: 'BESS containers and battery rooms need stable temperatures to protect cells and warranties.' },
      { title: 'Remote, unmanned sites', text: 'Wind and solar substations run unattended, so failures must be fixed with one site visit.' },
    ],
    supply: ['fans-motors', 'heaters-electrical', 'controls-instrumentation', 'compressors', 'dampers-airflow'],
    focus: ['IIC and IIB+H2 rated motors and heaters', 'BESS and battery room cooling parts', 'Substation HVAC spares', 'Gas detection interface relays'],
  },
  {
    slug: 'chemical-pharmaceutical',
    name: 'Chemical and pharmaceutical',
    group: 'Infrastructure and industry',
    keywords: ['chemical plant HVAC parts', 'pharmaceutical HVAC spares', 'cleanroom HVAC parts', 'laboratory ventilation parts'],
    short: 'Parts for chemical plants, solvent stores, laboratories and pharmaceutical production.',
    intro:
      'Chemical and pharmaceutical sites combine hazardous areas with strict control of temperature, humidity and air quality. We supply parts for process cooling, laboratory ventilation and Ex-rated air handling.',
    conditions: [
      { title: 'Solvent and dust zones', text: 'Solvent handling and powder processing create gas and dust hazardous areas that need Ex equipment.' },
      { title: 'Close control', text: 'Production and storage rooms need stable temperature and humidity to protect product quality.' },
      { title: 'Validated systems', text: 'Replacement parts must match the original so the system stays within its validated state.' },
    ],
    supply: ['filters-air-quality', 'controls-instrumentation', 'fans-motors', 'coils-heat-exchangers', 'dampers-airflow'],
    focus: ['HEPA and carbon filters', 'Temperature and humidity sensors', 'Ex-rated extract fans', 'Like-for-like replacements for validated systems'],
  },
  {
    slug: 'defence-dangerous-goods',
    name: 'Defence and dangerous goods',
    group: 'Infrastructure and industry',
    keywords: ['dangerous goods store cooling', 'munitions storage HVAC', 'defence HVAC spares', 'temperature-controlled storage'],
    short: 'Parts for dangerous goods stores, munitions storage, defence facilities and sensitive materials storage.',
    intro:
      'Dangerous goods and munitions must be stored within a set temperature range, often in a hazardous area. We supply parts for the packaged units, ventilation and controls that keep these stores safe and compliant.',
    conditions: [
      { title: 'Temperature limits', text: 'Stored goods have strict temperature limits, so cooling must not fail.' },
      { title: 'Hazardous atmospheres', text: 'Flammable liquids and explosives need Ex-rated electrical parts inside the store.' },
      { title: 'Security and access', text: 'Deliveries to secure sites need advance notice, correct paperwork and careful scheduling.' },
    ],
    supply: ['compressors', 'fans-motors', 'heaters-electrical', 'controls-instrumentation', 'refrigeration-components'],
    focus: ['Packaged unit compressors and fans', 'Ex-rated thermostats and controls', 'Ventilation fans for DG stores', 'Recommended spares lists'],
  },
  {
    slug: 'telecommunications-data-centres',
    name: 'Telecommunications and data centres',
    group: 'Infrastructure and industry',
    keywords: ['data centre cooling spares', 'telecom shelter HVAC parts', 'CRAC unit parts', 'communications room cooling'],
    short: 'Parts for data centres, communications rooms, satellite stations and remote telecom shelters.',
    intro:
      'Network and computing equipment stops when it overheats. We supply parts for precision cooling units, shelter air conditioners and free-cooling systems, so uptime is not lost while you wait for a part.',
    conditions: [
      { title: 'Continuous operation', text: 'Cooling runs every hour of the year, so wear parts need planned replacement.' },
      { title: 'Remote shelters', text: 'Telecom and satellite shelters are often in remote places with long travel times.' },
      { title: 'Redundancy', text: 'N+1 systems still need fast spares, because a second failure stops the site.' },
    ],
    supply: ['compressors', 'fans-motors', 'controls-instrumentation', 'refrigeration-components', 'filters-air-quality'],
    focus: ['EC fans and drives', 'Compressors for precision cooling units', 'Controllers and sensors', 'Filter change-out supply'],
  },
  {
    slug: 'water-wastewater',
    name: 'Water and wastewater',
    group: 'Infrastructure and industry',
    keywords: ['wastewater HVAC parts', 'H2S ventilation', 'pump station ventilation', 'biogas hazardous area'],
    short: 'Parts for treatment plants, pump stations and biogas facilities.',
    intro:
      'Treatment plants and pump stations contain H₂S, biogas and corrosive air. We supply ventilation, odour control and Ex-rated parts that survive these conditions.',
    conditions: [
      { title: 'Corrosive gases', text: 'H₂S attacks copper, electronics and fin stock, so materials and coatings matter.' },
      { title: 'Biogas zones', text: 'Digesters and gas holders create hazardous areas that need Ex equipment.' },
      { title: 'Many small sites', text: 'Pump stations are spread across a large area, so standard spares save travel.' },
    ],
    supply: ['fans-motors', 'filters-air-quality', 'dampers-airflow', 'heaters-electrical', 'controls-instrumentation'],
    focus: ['Corrosion-resistant fans', 'Activated carbon filters', 'Ex-rated motors for biogas areas', 'Switch room cooling parts'],
  },
  {
    slug: 'commercial-industrial',
    name: 'Manufacturing and commercial buildings',
    group: 'Infrastructure and industry',
    keywords: ['commercial HVAC spare parts', 'industrial HVAC parts', 'cold room parts', 'factory ventilation spares'],
    short: 'Parts for factories, warehouses, cold stores, hospitals, offices and campuses.',
    intro:
      'Not every critical HVAC system is in a hazardous area. Factories, cold stores, hospitals and large buildings also need the right part quickly. We supply the same makes and the same service to these sites.',
    conditions: [
      { title: 'Mixed equipment', text: 'Large sites run equipment from many makers and many years, so one supplier saves time.' },
      { title: 'Cold chain', text: 'A failed cold room can lose stock in hours, so refrigeration parts are urgent.' },
      { title: 'Energy upgrades', text: 'EC fans, VSDs and modern controls can cut energy use when old parts fail.' },
    ],
    supply: ['compressors', 'refrigeration-components', 'fans-motors', 'controls-instrumentation', 'filters-air-quality'],
    focus: ['Cold room and freezer parts', 'Chiller and AHU spares', 'EC fan retrofits', 'Filters and belts on schedule'],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
