import { createContext, useContext, useState } from "react";

const OpenContext = createContext();

export const OpenBagProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  function handleOpen(state = null) {
    if (state === null) {
      setOpen((prevOpen) => !prevOpen); 
    } else {
      setOpen(state); 
    }
  }

  return (
    <OpenContext.Provider value={{ open, handleOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpenBag = () => {
  return useContext(OpenContext);
};
