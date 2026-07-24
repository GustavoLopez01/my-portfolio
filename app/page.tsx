"use client";
import { useState } from "react";
import ChangeTabContext from "@/src/context/ChangeTabContext";
import { Language } from "@/src/types";
import { SECTIONS } from "@/src/constants";
import LandingPage from "@/src/components/LandingPage";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(SECTIONS[0]);
  const [language, setLanguage] = useState<Language>("es");

  return (
    <ChangeTabContext.Provider
      value={{
        currentSection
      }}
    >
      <div className="relative min-h-screen bg-background text-foreground">
        <LandingPage />
      </div>
    </ChangeTabContext.Provider>
  );
}
