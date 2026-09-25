export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  note: string;
  href?: string;
  offset?: boolean;
  colors: [string, string];
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const siteConfig = {
  name: '412.digital',
  descriptor: 'Independent Creative & Digital Studio',
  email: 'hello@412.digital',
  year: 2026,
};

export const navigation: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    title: 'Project 01',
    category: 'Digital Product',
    note: 'Temporary project placeholder',
    colors: ['#22d3ee', '#67e8f9'],
  },
  {
    title: 'Project 02',
    category: 'Brand & Web',
    note: 'Temporary project placeholder',
    offset: true,
    colors: ['#ef4444', '#22c55e'],
  },
  {
    title: 'Project 03',
    category: 'Automation',
    note: 'Temporary project placeholder',
    colors: ['#AA7A56', '#232F42'],
  },
  {
    title: 'Project 04',
    category: 'Creative Campaign',
    note: 'Temporary project placeholder',
    offset: true,
    colors: ['#6EC6D9', '#4ade80'],
  },
];

export const services: Service[] = [
  {
    title: 'BUILD',
    description: 'Websites, apps, AI, automation and custom digital products shaped around what your business actually needs.',
    tags: ['Web Development', 'Apps', 'AI & Agents', 'Automation', 'Internal Tools', 'E-commerce'],
  },
  {
    title: 'DESIGN',
    description: 'Brand identities and visual experiences that help businesses look clearer, feel stronger and communicate better.',
    tags: ['Branding', 'UI/UX', 'Graphic Design', 'Social Creatives', 'Marketing Collateral'],
  },
  {
    title: 'GROW',
    description: 'Content, digital presence and campaigns designed to help businesses reach more of the right people.',
    tags: ['Social Media', 'Content', 'Campaigns', 'SEO', 'Digital Strategy'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: "Bring us an idea, challenge or goal. You don't need to know the solution yet.",
  },
  {
    number: '02',
    title: 'We figure out the right approach',
    description: 'We define what needs to be designed, built or handled and put together the right people for it.',
  },
  {
    number: '03',
    title: 'We make it happen',
    description: 'We execute, iterate and deliver.',
  },
];

// Replace these URLs when the official social profiles are ready.
export const socialLinks = [
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
];
