import { createContext } from "react";
import { SECTIONS } from "../constants";

const ChangeTabContext = createContext({
  currentSection: SECTIONS[0]
});

export default ChangeTabContext;