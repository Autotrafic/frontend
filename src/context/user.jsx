import React, { createContext, useState } from "react";
import {fetchRegisterLog} from "../services/logs";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const generateId = () => "id" + Math.random().toString(16).slice(2);

  const [userInfo, setUserInfo] = useState(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      return { userId, sessionId: generateId() };
    } else {
      const newUserId = generateId();
      localStorage.setItem("userId", newUserId);

      return { userId: newUserId, sessionId: generateId() };
    }
  });

  const registerLog = async (message) => {
    await fetchRegisterLog(message, userInfo.sessionId, userInfo.userId);
  };

  return <UserContext.Provider value={{ userInfo, registerLog }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
