import React, { createContext, useState } from "react";
import { fetchRegisterLog } from "../services/logs";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const generateId = () => "id" + Math.random().toString(16).slice(2);

  const [userInfo, setUserInfo] = useState({ sessionId: generateId() });

  const registerLog = async (message) => {
    await fetchRegisterLog(message, userInfo.sessionId);
  };

  return <UserContext.Provider value={{ userInfo, registerLog }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
