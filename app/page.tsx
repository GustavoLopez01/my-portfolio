"use client";
import { useState } from "react";
import ChangeTabContext from "@/src/context/ChangeTabContext";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Nabvar from "@/src/components/Nabvar";
import Footer from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { Language } from "@/src/types";
import { SECTIONS } from "@/src/constants";

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
        <Nabvar
          language={language}
          setLanguage={setLanguage}
        />
        <Hero language={language} />
        <About />
        <Projects />
        <Experience 
          language={language}
        />
        <Footer />
      </div>
    </ChangeTabContext.Provider>
  );
}
