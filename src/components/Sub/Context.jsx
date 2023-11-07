import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [selectedTab, setSelectedTab] = useState(1);

  const value = {
    selectedTab,
    setSelectedTab,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
