"use client";
import { useState } from "react";
import ChangeTabContext from "@/src/context/ChangeTabContext";
import RenderTab from "@/src/components/RenderTab";
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
    <ChangeTabContext.Provider
      value={{
        handleNextSection,
        handlePrevSection,
        setCurrentSection,
        currentSection
      }}
    >
      <RenderTab />
    </ChangeTabContext.Provider>
  );
}
