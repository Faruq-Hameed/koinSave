// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../model/User";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

//Default user just placeholder actually
const defaultUser: User = {
  firstName: "Faruq",
  lastName: "Hameed",
  balance: "7000",
  token: "",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
