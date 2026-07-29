import ProjectCard from './ui/ProjectCard';
import TitleSection from './ui/TitleSection';
import { PROJECTS } from '../constants/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex justify-center items-center py-32! px-12! bg-[rgba(255,255,255,0.018)]"
    >
      <div className="max-w-7xl m-auto">
        <TitleSection
          label="Proyectos"
          number="02"
          firstLine="Trabajo que habla"
          secondLine="por sí solo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
