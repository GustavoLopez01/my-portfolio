import useChangeTab from "../hooks/useChangeTab";
import {
  ArrowLeft,
  ArrowRight
} from "lucide-react";

export default function NavigationButton() {

  const {
    handleNextSection,
    handlePrevSection
  } = useChangeTab();

  return (
    <>
      <div className="fixed z-100 top-1/2 bg-amber-200 w-full">
        <button
          className="absolute cursor-pointer left-5 bg-slate-500/10 p-1 rounded-full hover:bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={handlePrevSection}
        >
          <ArrowLeft className="text-gray-600 size-5" />
        </button>

        <button
          className="absolute cursor-pointer right-5 bg-slate-500/10 p-1 rounded-full hover:bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          onClick={handleNextSection}
        >
          <ArrowRight className="text-gray-600 size-5" />
        </button>
      </div>
    </>
  )
}
