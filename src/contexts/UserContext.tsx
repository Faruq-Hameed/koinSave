// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../model/User";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  resetUser: ()=>void;
};

//Default user just placeholder actually
const defaultUser: User = {
  firstName: "",
  email: "",
  lastName: "",
  balance: "0.00",
  token: "",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);
  const resetUser = ()=> setUser(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
