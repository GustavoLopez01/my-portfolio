"use client";
import { useState } from "react";
import ChangeTabContext from "@/src/context/ChangeTabContext";
import RenderTab from "@/src/components/RenderTab";
import { SECTIONS } from "@/src/constants";
import { Hero } from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Nabvar from "@/src/components/Nabvar";

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
    <ChangeTabContext.Provider
      value={{
        handleNextSection,
        handlePrevSection,
        setCurrentSection,
        currentSection
      }}
    >
      <div className="relative min-h-screen bg-background text-foreground">
        <Nabvar />
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </ChangeTabContext.Provider>
  );
}
