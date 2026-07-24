import Label from "./ui/Label";
import SkillItem from "./ui/SkillItem";

const SKILLS: Record<string, string[]> = {
  Core: ['HTML5 & Semantics', 'CSS3 & Animations', 'JavaScript ES2024+', 'TypeScript 5'],
  Frameworks: ['React 19', 'Next.js 14', 'Astro 4', 'Vue 3'],
  Styling: ['Tailwind CSS v4', 'CSS Modules', 'Framer Motion', 'Figma'],
  Tools: ['Vite 8', 'Git & GitHub', 'Node.js', 'REST & GraphQL'],
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '128px 48px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal section-hidden" style={{ marginBottom: '64px' }}>
          <Label n="03">Habilidades</Label>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              lineHeight: '1.08',
              letterSpacing: '-0.035em',
              marginTop: '18px',
            }}
          >
            Herramientas en
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(240,237,230,0.32)' }}>
              mi arsenal.
            </span>
          </h2>
        </div>

        <div
          className="reveal section-hidden"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '52px' }}
        >
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {cat}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {items.map((s) => (
                  <SkillItem key={s} name={s} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
