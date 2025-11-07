import { useContext } from "react";
import NavigationContext from "../context/ChangeTabContext";

const useChangeTab = () => useContext(NavigationContext);

export default useChangeTab;