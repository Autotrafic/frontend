import React, { createContext, useState, useEffect } from "react";
import { fetchRegisterLog } from "../services/logs";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const generateId = () => "id" + Math.random().toString(16).slice(2);
  const ipdata = new IPData(IPDATA_KEY);

  const [ipDetails, setIpDetails] = useState();
  const [userInfo, setUserInfo] = useState({ sessionId: generateId() });

  useEffect(() => {
    (async () => {
      const receivedIpDetails = await ipdata.lookup();
      if (receivedIpDetails) setIpDetails(receivedIpDetails);
    })();
  }, []);

  const registerLog = async (message) => {
    if (userInfo.sessionId && ipDetails?.region)
      await fetchRegisterLog(message, userInfo.sessionId, ipDetails?.region);
  };

  return <UserContext.Provider value={{ userInfo, registerLog }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
