import { Globe, Moon } from "lucide-react";

export default function Nabvar() {
  return (
    <nav className="absolute w-full h-16 top-3 right-20 z-10">
      <div className="h-full grid grid-cols-1">
        <div className="h-full flex justify-end items-center gap-5 text-white">
          <button className="rounded-full flex gap-2 p-2 cursor-pointer transition-all hover:bg-white/20">
            <span>
              EN
            </span>
            <Globe />
          </button>
          <button className="rounded-full p-2 cursor-pointer transition-all hover:bg-white/20">
            <Moon className="" />
          </button>
        </div>
      </div>
    </nav>
  )
}
