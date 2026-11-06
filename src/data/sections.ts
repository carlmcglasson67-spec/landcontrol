// Section hubs for the guide collection. Folder name under src/content/guides = URL segment.
export interface Section { slug: string; name: string; eyebrow: string; h1: string; lede: string; title: string; description: string; }

export const SECTIONS: Section[] = [
  {
    slug: 'agreements', name: 'Agreements', eyebrow: 'Agreement types',
    h1: 'Which agreements the register catches, one type at a time.',
    lede: 'Options, conditional contracts, pre-emption rights and promotion agreements: how each one is treated under the 2026 Regulations, and the exemptions that take a right outside them.',
    title: 'Contractual Control Agreements by Type · LandControl',
    description: 'How options, conditional contracts, pre-emption rights and promotion agreements are treated under the 2026 Regulations, plus every exemption.',
  },
  {
    slug: 'compliance', name: 'Compliance', eyebrow: 'Deadlines and duties',
    h1: 'The deadlines, the triggers and what happens if you miss one.',
    lede: 'The 60-day rule, the 6 October 2027 transitional deadline, the events that start a clock, and the consequences of getting it wrong.',
    title: 'Contractual Control Deadlines and Compliance · LandControl',
    description: 'The 60-day deadline, the 6 October 2027 transitional deadline, assignments and variations, and the section 225 offence, for grantees and advisers.',
  },
  {
    slug: 'hmlr', name: 'HMLR', eyebrow: 'HM Land Registry',
    h1: 'What HM Land Registry has said, and what it means in practice.',
    lede: 'Practice Guide 84, the scenarios guidance, the information HMLR will ask for and who is allowed to submit it, read against the Regulations.',
    title: 'HMLR Contractual Control Guidance Explained · LandControl',
    description: 'Plain-English explainers on HMLR Practice guide 84, the nine scenarios, the information required and the regulated-conveyancer rule.',
  },
  {
    slug: 'spatial-data', name: 'Spatial data', eyebrow: 'Mapping the land',
    h1: 'Where only part of a title is caught, HMLR wants a file, not a scan.',
    lede: 'GeoJSON, Shapefile and British National Grid: what a contract plan has to become before your conveyancer can submit it.',
    title: 'Contractual Control Spatial Data for HMLR · LandControl',
    description: 'How to prepare GeoJSON or Shapefile data in British National Grid for HMLR contractual control submissions over part of a title.',
  },
  {
    slug: 'intelligence', name: 'Intelligence', eyebrow: 'The 2028 dataset',
    h1: 'From April 2028, the land market can see who controls what.',
    lede: 'What the public contractual control dataset will contain, what it will not, and how land teams, buyers and analysts will use it.',
    title: 'The 2028 Contractual Control Dataset · LandControl',
    description: 'What HMLR will publish about contractual control rights from April 2028, what stays private, and how the land market will use it.',
  },
  {
    slug: 'news', name: 'News', eyebrow: 'Regulatory news',
    h1: 'Every move on the contractual control regime, dated and sourced.',
    lede: 'Regulations, guidance, HMLR service updates and the commentary that matters, written up within days and linked to the primary source.',
    title: 'Contractual Control News and HMLR Updates · LandControl',
    description: 'News and analysis on the Contractual Control Regulations 2026 and HMLR guidance, each item dated and linked to its primary source.',
  },
];

export const sectionBySlug = (s: string) => SECTIONS.find((x) => x.slug === s);
