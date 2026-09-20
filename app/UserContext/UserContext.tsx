"use client";
import { createContext } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserContext.Provider value="Pizza">{children}</UserContext.Provider>
    </div>
  );
};

export default UserProvider;
