import React, { createContext } from "react";
import useFriends from "./useFriends";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const value = useFriends();
  return (
    <div>
      <MyContext.Provider value={value}>{children} </MyContext.Provider>
    </div>
  );
};

export default ContextProvider;
