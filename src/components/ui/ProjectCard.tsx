import * as motion from "motion/react-client";
import { Github, Code2 } from "lucide-react";
import { Project } from "@/src/types";

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

        <div className="flex flex-wrap xl:flex-nowrap justify-between gap-2 my-5 px-7">
          <button className="flex gap-2 items-center justify-center w-full xl:w-36 text-sm px-3 py-1 rounded-md font-semibold cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all">
            Repositorio
            <Github className="h-5 w-5" />
          </button>
          <button className="flex gap-2 items-center justify-center border border-gray-500  text-gray-500 text-sm w-full xl:w-36 px-3 py-1 rounded-md font-semibold cursor-pointer hover:bg-gray-200 transition-all">
            Demo
            <Code2 className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </>
  )
}
