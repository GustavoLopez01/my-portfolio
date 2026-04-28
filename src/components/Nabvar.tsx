import { Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Nabvar() {
  const { setTheme, theme } = useTheme()
  const test = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="bg-background drop-shadow-md fixed w-full h-16 z-100">
      <div className="h-full grid grid-cols-1 px-20">
        <div className="h-full flex justify-end items-center gap-5 ">
          <button className="rounded-full flex gap-2 p-2 cursor-pointer transition-all hover:bg-white/20">
            <span>
              EN
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
      </div>
    </nav>
  )
}
