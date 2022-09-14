import { createContext } from "react";

const DarkModeContext = createContext();

 const DarkModeProvider = ({ children, value }) => {
    return (
        <DarkModeContext.Provider value={value}>
          {children}
        </DarkModeContext.Provider>
    );
};

export { DarkModeContext, DarkModeProvider};