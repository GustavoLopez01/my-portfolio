import * as motion from "motion/react-client";
import SkillCard from "./ui/SkillCard";
import { SOFT_SKILLS } from "../constants";
import Technologies from "./Technologies";


export default function About() {
  return (
    <>
      <motion.div
        className="py-10 h-auto sm:h-full flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-black text-center text-xl font-bold py-2">
          Acerca de mí
        </h1>

        <p className="w-3/4 text-sm text-center text-gray-500">
          Desarrollador de software con más de 2 años de experiencia en el
          desarrollo de aplicaciones web. Apasionado por crear soluciones
          innovadoras y escalables, y por mantenerme en aprendizaje continuo de
          nuevas tecnologías para contribuir al éxito de cada proyecto.
        </p>

        <div className="grid @max-xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-10 mt-5">
          {SOFT_SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}
