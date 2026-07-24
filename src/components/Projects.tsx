import Label from './ui/Label';
import ProjectCard from './ui/ProjectCard';

interface Project {
  id: number
  title: string
  description: string
  longDesc: string
  tags: string[]
  image: string
  year: string
}

const PROJECTS: Project[] = [
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

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: '128px 48px', background: 'rgba(255,255,255,0.018)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal section-hidden" style={{ marginBottom: '64px' }}>
          <Label n="02">Proyectos</Label>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              lineHeight: '1.08',
              letterSpacing: '-0.035em',
              marginTop: '18px',
            }}
          >
            Trabajo que habla
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(240,237,230,0.32)' }}>
              por sí solo.
            </span>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
