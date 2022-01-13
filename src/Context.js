import React, { useReducer, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children, reducer, initialState }) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
