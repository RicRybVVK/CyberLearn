import React, { createContext, useState } from "react";

export const DashboardSearchContext = createContext();

export function DashboardSearchProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <DashboardSearchContext.Provider value={{ search, setSearch }}>
      {children}
    </DashboardSearchContext.Provider>
  );
}