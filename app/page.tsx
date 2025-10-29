"use client";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import About from "@/src/components/About";
import Resume from "@/src/components/Resume";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";
import { SECTIONS } from "@/src/constants";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0]);

  const handleNextSection = () => {
    const index = currentSection.index;
    if (index >= SECTIONS.length) {
      setCurrentSection(SECTIONS[0])
    } else {
      const nextSection = SECTIONS.find(section => section.index === index + 1);
      setCurrentSection(nextSection!);
    }
  }

  const handlePrevSection = () => {
    const index = currentSection.index;
    if (index <= 1) {
      setCurrentSection(SECTIONS[SECTIONS.length - 1])
    } else {
      const nextSection = SECTIONS.find(section => section.index === index - 1);
      setCurrentSection(nextSection!);
    }
  }

  return (
    <>
      <section className="h-[92vh] bg-gray-50/10 overflow-auto flex flex-col items-center justify-center font-montserrat">
        <div className="w-full h-full relative">
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

          {currentSection.value === "presentation" && (
            <Resume />
          )}

          {currentSection.value === "about" && (
            <About />
          )}

          {currentSection.value === "projects" && (
            <Projects />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
