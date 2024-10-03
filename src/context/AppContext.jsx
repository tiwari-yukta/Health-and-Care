import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    //now u can accesee these in any component
    currencySymbol,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
