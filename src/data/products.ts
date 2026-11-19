import type { ImageMetadata } from 'astro';
import inventory from '../assets/screens/inventory.png';
import smTasks from '../assets/screens/sm-tasks.png';

// Products shown in the header's Solutions menu. To add one: create
// src/pages/industries/<slug>.astro (copy an existing product page), then add an entry here.
export interface Product {
  slug: string;
  name: string;       // product name, used in breadcrumbs and cards
  industry: string;   // who it is for, shown as the card eyebrow
  summary: string;
  img: ImageMetadata;
  alt: string;
  panel: string;      // background colour class for the screenshot
}

export const PRODUCTS: Product[] = [
  {
    slug: 'apparel-plm',
    name: 'Apparel PLM',
    industry: 'Fashion & apparel',
    summary: 'One shared record for every garment, from first sketch and sampling to supplier email, purchase orders and delivery.',
    img: inventory,
    alt: 'Apparel PLM design inventory: each design as a card with its sketch, status, supplier and delivery date.',
    panel: 'p-blue',
  },
  {
    slug: 'startupmode',
    name: 'StartupMode',
    industry: 'Startups',
    summary: 'Tasks, timesheets, token rewards, vesting and share certificates in one workspace for founder-led teams.',
    img: smTasks,
    alt: 'StartupMode task management: counts of active and completed tasks above a board of task cards.',
    panel: 'p-violet',
  },
];

export const productPath = (p: Product) => `/industries/${p.slug}/`;
