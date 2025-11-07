import { createContext } from "react";
import { Section } from "../types";
import { SECTIONS } from "../constants";

const ChangeTabContext = createContext({
  handleNextSection: () => { },
  handlePrevSection: () => { },
  setCurrentSection: (section: Section) => { },
  currentSection: SECTIONS[0]
});

export default ChangeTabContext;