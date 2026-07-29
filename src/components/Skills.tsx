import SkillItem from './ui/SkillItem';
import TitleSection from './ui/TitleSection';

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
      className="grid justify-center items-center py-32! px-12!"
    >
      <div className="max-w-7xl m-auto reveal section-hidden">
        <TitleSection
          label="Habilidades"
          number="03"
          firstLine="Herramientas en"
          secondLine="mi arsenal."
        />

        <div className="w-full reveal grid grid-cols-2 md:grid-cols-4 gap-30">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p
                className="font-jetbrains text-xs text-accent leading-[0.12em] uppercase mb-4.5! pb-3.5! border-b border-accent"
              >
                {category}
              </p>
              <ul
                className="list-none p-0 flex flex-col gap-3.5">
                {items.map((item) => (
                  <SkillItem key={item} name={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
