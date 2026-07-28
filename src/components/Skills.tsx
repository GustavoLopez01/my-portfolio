import SkillItem from "./ui/SkillItem";
import TitleSection from "./ui/TitleSection";

const SKILLS: Record<string, string[]> = {
  Core: ['HTML5 & Semantics', 'CSS3 & Animations', 'JavaScript ES2024+', 'TypeScript 5'],
  Frameworks: ['React 19', 'Next.js 14', 'Astro 4', 'Vue 3'],
  Styling: ['Tailwind CSS v4', 'CSS Modules', 'Framer Motion', 'Figma'],
  Tools: ['Vite 8', 'Git & GitHub', 'Node.js', 'REST & GraphQL'],
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="grid justify-center items-center"
      style={{ padding: '128px 48px' }}
    >
      <div className="max-w-7xl m-auto">
        <TitleSection
          label="Habilidades"
          number="03"
          firstLine="Herramientas en"
          secondLine="mi arsenal."
        />

        <div
          className="reveal grid grid-cols-2 md:grid-cols-4 gap-10"
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
