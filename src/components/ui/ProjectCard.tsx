import * as motion from "motion/react-client";
import { Github } from "lucide-react";
import { Project } from "@/src/types";
import Link from "next/link";

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({
  project,
  index
}: ProjectCardProps) {
  return (
    <>
      <motion.div
        className="w-[18em] sm:w-[15em] xl:w-[20em] border border-slate-200 rounded-md transition-all hover:shadow-xl shadow-xs bg-white flex flex-col justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="aspect-video overflow-hidden">
          <motion.img
            className="rounded-md object-cover"
            src={project.src}
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <p className="text-[1.1em] text-black font-bold flex flex-col gap-1 mt-6 px-7">
          {project.title}
          <span className="text-[.8em] text-gray-500 font-normal">
            {project.description}
          </span>
        </p>

        <div className="px-7">
          {project.tools.map(tool => (
            <Tools
              key={`${project.id}-tool-${tool}`}
              tool={tool}
            />
          ))}
        </div>

        <div className="flex justify-center px-2 py-4">
          <Link
            className="w-full flex justify-center gap-2 text-sm px-3 py-2 rounded-md font-semibold cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all"
            href={project.repositoryUrl}
            target="_blank"
          >
            Repositorio
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    </>
  )
}


const Tools = ({
  tool
}: { tool: string }) => {
  return (
    <>
      <div className="h-5 w-5 bg-red-400 rounded-full">
      </div>
    </>
  )
}