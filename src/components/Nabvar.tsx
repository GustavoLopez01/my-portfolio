import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Globe, Moon, Sun } from "lucide-react";
import { Language } from "../types";

type NabvarProps = {
  language: Language
  setLanguage: (language: 'es' | 'en') => void
}

export default function Nabvar({
  language,
  setLanguage
}: NabvarProps) {

  const { setTheme, theme } = useTheme()
  const test = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="fixed w-full h-16 z-100">
      <motion.div
        className="h-full grid grid-cols-1 px-5 md:px-20 bg-background drop-shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-full flex justify-end items-center gap-5">
          <button
            className="rounded-full flex gap-2 p-2 cursor-pointer transition-all hover:bg-white/20"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            <span>
              {language.toUpperCase()}
            </span>
            <Globe />
          </button>
          <button
            className="rounded-full p-2 cursor-pointer transition-all hover:bg-white/20"
            onClick={test}
          >
            {theme === "dark" ? (
              <Sun className="text-white" />
            ) : (
              <Moon className="text-black" />
            )}
          </button>
        </div>
      </motion.div>
    </nav>
  )
}
