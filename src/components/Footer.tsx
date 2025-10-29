import * as motion from "motion/react-client";
import Link from "next/link";
import { Linkedin, GithubIcon } from "lucide-react";
import { URL_GITHUB, URL_LINKEDIN } from "../constants";

export default function Footer() {
  return (
    <>
      <motion.div
        className="h-[8vh] z-10 border border-gray-200 flex flex-col gap-2 justify-center items-center bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados
        </span>
      </motion.div>
    </>
  )
}
