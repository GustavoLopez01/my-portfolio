import { SOFT_SKILLS } from "../constants";
import SkillCard from "./ui/SkillCard";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-100 py-10">
        <h3 className="text-black text-center font-bold py-2">
          Sobre mí
        </h3>

        <p className="w-3/4 text-sm text-center text-gray-500">
          Desarrollador de software con más de 2 años de experiencia en el
          desarrollo de aplicaciones web. Apasionado por crear soluciones
          innovadoras y escalables, y por mantenerme en aprendizaje continuo de
          nuevas tecnologías para contribuir al éxito de cada proyecto.
        </p>

        <div className="grid grid-cols-3 gap-5 px-10 mt-5">
          {SOFT_SKILLS.map(skill => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </>
  )
}
