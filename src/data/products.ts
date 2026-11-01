export interface Part {
  name: string;
  note: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  short: string;
  icon: string;
  intro: string;
  parts: Part[];
  sendUs: string[];
  standards: string[];
  makes: string[];
}

export const categories: ProductCategory[] = [
  {
    slug: 'compressors',
    name: 'Compressors and compressor parts',
    short: 'Reciprocating, scroll and screw compressors, plus the parts that keep them running.',
    icon: 'tabler:engine',
    intro:
      'A failed compressor stops a whole HVAC system. We source complete replacement compressors and the service parts for overhaul, for semi-hermetic, hermetic and open-drive units on offshore and onshore plant.',
    parts: [
      { name: 'Semi-hermetic reciprocating compressors', note: 'Like-for-like or approved equivalent' },
      { name: 'Scroll and tandem scroll compressors', note: 'Single units and manifolded sets' },
      { name: 'Screw compressors', note: 'Complete units and rotor sets' },
      { name: 'Valve plates and gasket sets', note: 'Overhaul kits by model and serial' },
      { name: 'Oil pumps and oil pressure safety switches', note: 'Mechanical and electronic types' },
      { name: 'Capacity control and unloader assemblies', note: 'Solenoid coils and valve bodies' },
      { name: 'Crankcase heaters', note: 'Belt and insertion types' },
      { name: 'Motor protection modules', note: 'Matched to compressor and supply voltage' },
    ],
    sendUs: ['Nameplate photo with model and serial number', 'Refrigerant type', 'Supply voltage, phase and frequency', 'Required documents (for example CoC, test report)'],
    standards: ['AS/NZS 5149 (refrigerating systems)', 'EN 378', 'Pressure Equipment Directive (PED) where required'],
    makes: ['Bitzer', 'Copeland', 'Danfoss', 'Carrier', 'Trane', 'York'],
  },
  {
    slug: 'coils-heat-exchangers',
    name: 'Coils and heat exchangers',
    short: 'DX, chilled water and condenser coils, brazed plate and shell-and-tube heat exchangers.',
    icon: 'tabler:temperature',
    intro:
      'Salt air and hydrocarbon atmospheres attack fin stock fast. We supply replacement coils built to the original geometry, with the material and coating you specify for marine and process environments.',
    parts: [
      { name: 'Direct expansion (DX) evaporator coils', note: 'Built to original dimensions and circuiting' },
      { name: 'Chilled water and hot water coils', note: 'Copper, cupronickel or stainless tube' },
      { name: 'Condenser coils', note: 'Air-cooled, with protective coatings' },
      { name: 'Brazed plate heat exchangers', note: 'Refrigerant and water applications' },
      { name: 'Shell-and-tube heat exchangers', note: 'Condensers, evaporators and oil coolers' },
      { name: 'Coil coatings', note: 'Epoxy and polyurethane systems for salt-laden air' },
    ],
    sendUs: ['Coil drawing or measured dimensions', 'Tube and fin material, fin spacing', 'Connection sizes and positions', 'Duty (capacity, fluid, temperatures) if known'],
    standards: ['NORSOK H-001 (HVAC for offshore)', 'AS/NZS 5149', 'ASME / PED for pressure vessels where required'],
    makes: ['Alfa Laval', 'Danfoss', 'Carrier', 'Trane', 'York', 'Daikin'],
  },
  {
    slug: 'fans-motors',
    name: 'Fans, motors and drives',
    short: 'Axial and centrifugal fans, EC fans, Ex-rated motors, belts, pulleys and drives.',
    icon: 'tabler:propeller',
    intro:
      'Air movement is the core of every HVAC system on a platform or plant. We supply fans and motors for safe and hazardous areas, matched to frame size, mounting, speed and certification.',
    parts: [
      { name: 'Axial and centrifugal fans', note: 'Impellers, complete fan sets and housings' },
      { name: 'EC fans and EC motor retrofits', note: 'For energy and control upgrades' },
      { name: 'Ex d, Ex db and Ex eb motors', note: 'Gas groups IIA to IIC, T1 to T6' },
      { name: 'Safe-area IE3 and IE4 motors', note: 'IEC and NEMA frames' },
      { name: 'Variable speed drives', note: 'Including drives for Ex motors' },
      { name: 'Belts, pulleys and taper-lock bushes', note: 'Matched sets for fan drives' },
      { name: 'Bearings and anti-vibration mounts', note: 'Motor and fan shaft bearings' },
    ],
    sendUs: ['Motor nameplate photo', 'Hazardous-area classification (zone, gas group, T-class)', 'Mounting type and frame size', 'Fan duty (airflow and pressure) if replacing the fan'],
    standards: ['IECEx and ATEX', 'AS/NZS 60079 series', 'IEC 60034 (rotating machines)'],
    makes: ['ABB', 'WEG', 'Siemens', 'Ziehl-Abegg', 'ebm-papst'],
  },
  {
    slug: 'controls-instrumentation',
    name: 'Controls and instrumentation',
    short: 'Controllers, sensors, transmitters, switches and thermostats for HVAC systems.',
    icon: 'tabler:gauge',
    intro:
      'Control parts go obsolete faster than mechanical parts. We find the original item, or an equivalent that fits the existing panel and wiring, and confirm the configuration with you before we ship.',
    parts: [
      { name: 'HVAC controllers and I/O modules', note: 'Original or approved replacement' },
      { name: 'Temperature and humidity sensors', note: 'Duct, room and immersion types' },
      { name: 'Pressure and differential pressure transmitters', note: 'Including Ex i and Ex d versions' },
      { name: 'Pressure switches and pressostats', note: 'High, low and dual pressure' },
      { name: 'Thermostats and frost protection', note: 'Mechanical and electronic' },
      { name: 'Airflow switches and monitors', note: 'For fan and damper proving' },
      { name: 'Gas detection interface relays', note: 'For HVAC shutdown logic' },
    ],
    sendUs: ['Part number from the device label', 'Signal type (for example 4–20 mA, 0–10 V)', 'Range and process connection', 'Hazardous-area rating if required'],
    standards: ['IECEx and ATEX for Ex i and Ex d devices', 'IEC 61010 (measurement equipment)'],
    makes: ['Honeywell', 'Siemens', 'Danfoss', 'Johnson Controls', 'Belimo'],
  },
  {
    slug: 'refrigeration-components',
    name: 'Valves and refrigeration components',
    short: 'Expansion valves, solenoid valves, filter driers, sight glasses and safety valves.',
    icon: 'tabler:snowflake',
    intro:
      'Small refrigeration components cause most callouts. We hold the knowledge to match each valve and fitting to its refrigerant, capacity and connection, so the part fits on the first attempt.',
    parts: [
      { name: 'Thermostatic expansion valves and orifices', note: 'Matched to refrigerant and capacity' },
      { name: 'Electronic expansion valves and drivers', note: 'Stepper and pulse-width types' },
      { name: 'Solenoid valves and coils', note: 'Including Ex-rated coils' },
      { name: 'Filter driers and replaceable cores', note: 'Liquid and suction line' },
      { name: 'Sight glasses and moisture indicators', note: 'Flare, solder and weld connections' },
      { name: 'Pressure relief valves', note: 'With set-pressure certificates' },
      { name: 'Ball valves and service valves', note: 'Refrigerant-rated' },
      { name: 'Liquid receivers and oil separators', note: 'With pressure equipment documents' },
    ],
    sendUs: ['Part number and maker', 'Refrigerant type', 'Connection type and size', 'Capacity or orifice size'],
    standards: ['AS/NZS 5149', 'EN 378', 'PED / AS 4343 for pressure equipment'],
    makes: ['Danfoss', 'Copeland', 'Bitzer', 'Carrier'],
  },
  {
    slug: 'dampers-airflow',
    name: 'Dampers and air distribution',
    short: 'Fire, blast and gas-tight dampers, actuators, louvres and air terminals.',
    icon: 'tabler:wind',
    intro:
      'On offshore installations, dampers are safety-critical. We supply fire, blast and gas-tight dampers and their actuators with the test and certification records your integrity team needs.',
    parts: [
      { name: 'Fire dampers', note: 'Rated to A-60 and H-class divisions where required' },
      { name: 'Blast dampers', note: 'Rated to the specified overpressure' },
      { name: 'Gas-tight and shut-off dampers', note: 'For HVAC isolation on gas detection' },
      { name: 'Damper actuators', note: 'Electric and pneumatic, safe-area and Ex' },
      { name: 'Weather and sand trap louvres', note: 'For air intakes in harsh climates' },
      { name: 'Grilles, diffusers and air valves', note: 'Stainless and aluminium' },
    ],
    sendUs: ['Damper type and size', 'Fire or blast rating required', 'Actuator type, voltage and fail-safe position', 'Hazardous-area rating if required'],
    standards: ['NORSOK H-001', 'IMO FTP Code (marine fire testing)', 'IECEx and ATEX for actuators'],
    makes: ['Belimo', 'Siemens', 'Johnson Controls'],
  },
  {
    slug: 'filters-air-quality',
    name: 'Filters and air treatment',
    short: 'Panel, bag and HEPA filters, salt-air separators and coalescers for air intakes.',
    icon: 'tabler:filter',
    intro:
      'Clean intake air protects people and equipment. We supply filters and air intake treatment for marine and desert environments, sized to your existing housings and grades.',
    parts: [
      { name: 'Panel and pleated filters', note: 'ISO 16890 grades' },
      { name: 'Bag and compact filters', note: 'Including high-temperature media' },
      { name: 'HEPA filters', note: 'For control rooms and laboratories' },
      { name: 'Vane separators and demisters', note: 'For salt-laden marine air' },
      { name: 'Coalescer filters', note: 'For mist and droplet removal' },
      { name: 'Activated carbon filters', note: 'For H₂S and odour control' },
    ],
    sendUs: ['Filter dimensions (width, height, depth)', 'Filter grade or efficiency', 'Housing type and frame material', 'Quantity per change-out'],
    standards: ['ISO 16890', 'EN 1822 (HEPA)', 'NORSOK H-001'],
    makes: ['Camfil', 'AAF', 'Donaldson'],
  },
  {
    slug: 'heaters-electrical',
    name: 'Heaters and electrical parts',
    short: 'Ex duct heaters, heating elements, thermal cut-outs, contactors and Ex enclosures.',
    icon: 'tabler:bolt',
    intro:
      'Electrical parts in hazardous areas must match their certification exactly. We supply Ex-rated heaters, enclosures and components with the certificates that match the item supplied.',
    parts: [
      { name: 'Ex duct heaters', note: 'Built to the required kW, zone and T-class' },
      { name: 'Heating elements', note: 'Replacement elements for existing heater banks' },
      { name: 'Thermal cut-outs and limit thermostats', note: 'Manual and automatic reset' },
      { name: 'Contactors, relays and overloads', note: 'For HVAC motor control centres' },
      { name: 'Ex e and Ex d enclosures', note: 'Junction boxes and control stations' },
      { name: 'Cable glands and accessories', note: 'Ex-certified, matched to cable type' },
      { name: 'Isolators and local control stations', note: 'Safe-area and Ex' },
    ],
    sendUs: ['Rating plate photo', 'Heater duty (kW, voltage, steps)', 'Hazardous-area classification', 'Duct or bank dimensions'],
    standards: ['IECEx and ATEX', 'AS/NZS 60079 series', 'IEC 60204 / AS/NZS 3000 as applicable'],
    makes: ['ABB', 'Siemens', 'Schneider Electric'],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
