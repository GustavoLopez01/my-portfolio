
interface Project {
  id: number
  title: string
  description: string
  longDesc: string
  tags: string[]
  image: string
  year: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Orbitly — SaaS Dashboard',
    description: 'Analytics platform for product teams tracking user behavior in real time.',
    longDesc:
      'Built with React 19, TypeScript, and D3.js. Features custom charting, WebSocket live updates, and a fully accessible component library. Reduced time-to-insight by 60%.',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    year: '2024',
  },
  {
    id: 2,
    title: 'Folio — Design System',
    description: 'Component library and design-token system used across 3 production apps.',
    longDesc:
      '60+ accessible components, dark/light modes, Storybook documentation, and a Figma-to-code sync pipeline. Reduced design–dev handoff time by 40%.',
    tags: ['React', 'CSS Modules', 'Storybook', 'Figma'],
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop&auto=format',
    year: '2024',
  },
  {
    id: 3,
    title: 'Tidal — E-Commerce Frontend',
    description: 'High-performance storefront for a lifestyle brand, 98 Lighthouse score.',
    longDesc:
      'Next.js 14 App Router with image optimization, edge caching, and skeleton loading. Cart state in Zustand. Integrated with Shopify Storefront API. 2.1 s LCP on 3G.',
    tags: ['Next.js', 'Zustand', 'Shopify API', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop&auto=format',
    year: '2023',
  },
]
