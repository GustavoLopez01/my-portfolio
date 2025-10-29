import * as motion from "motion/react-client";
import Link from "next/link";
import { GithubIcon, Linkedin } from "lucide-react";
import { URL_GITHUB, URL_LINKEDIN } from "../constants";
import Photo from "@/src/images/me.svg";
import Image from "next/image";

export default function Resume() {
  return (
    <>
      <motion.article
        className="h-full flex flex-col space-y-3 justify-center items-center px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          className="border "
          src={Photo}
          alt="dev-image"
        />

        <motion.p
          className="text-black text-center text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hola, mi nombre es {""}
          <span className="text-indigo-600 pl-1 font-bold">
            Gustavo Alejandro López Zárate
          </span>
        </motion.p>

        <motion.h1
          className="max-sm:text-sm py-2 sm:py-0 text-md rounded-md text-white px-5 font-semibold box-decoration-slice bg-linear-to-r from-indigo-600 to-fuchsia-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Desarrollador de Software Full-Stack
        </motion.h1>

        <motion.p
          className="w-3/4 text-sm text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Actualmente tengo más de 2 años de experiencia en el
          desarrollo de aplicaciones web. Apasionado por crear soluciones
          innovadoras y escalables, y por mantenerme en aprendizaje continuo de
          nuevas tecnologías para contribuir al éxito de cada proyecto.
        </motion.p>

        <motion.div
          className="flex justify-center gap-2 mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-blue-500 font-semibold px-5 py-1 rounded-md cursor-pointer text-sm hover:bg-blue-600 transition-all">
            Proyectos
          </button>
          <button className="border border-blue-500 font-semibold px-5 py-1 rounded-md cursor-pointer text-blue-500 text-sm hover:bg-blue-200  delay-75 transition-all">
            Descarga mi CV
          </button>
        </motion.div>

        <motion.div
          className="flex gap-3 pt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            className="cursor-pointer"
            href={URL_GITHUB}
            target="_blank"
          >
            <Linkedin className="size-5 text-blue-500" />
          </Link>
          <Link
            className="cursor-pointer"
            href={URL_LINKEDIN}
            target="_blank"
          >
            <GithubIcon className="size-5 text-blue-500" />
          </Link>
        </motion.div>
      </motion.article>
    </>
  )
}
