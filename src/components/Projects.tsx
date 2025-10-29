import * as motion from "motion/react-client";
import ProjectCard from "./ui/ProjectCard";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <>
      <motion.div
        className="h-auto sm:h-full flex flex-col justify-center items-center px-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="pt-5 text-black text-xl font-bold">
          Mis proyectos
        </h1>

        <p className="w-3/4 text-sm text-center text-gray-500 py-2">
          Algunos de los proyectos en los que he trabajado recientemente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}
