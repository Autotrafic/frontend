import React, { createContext, useState, useEffect } from "react";
import IPData from "ipdata";
import { fetchRegisterLog } from "../services/logs";

const UserContext = createContext();

const IPDATA_KEY = "6769dbaf0ff97602e3a9b4b33d7fc901f1e4d192711ee9da36db8e18";

const UserProvider = ({ children }) => {
  const generateId = () => "id" + Math.random().toString(16).slice(2);
  const ipdata = new IPData(IPDATA_KEY);

  const [ipDetails, setIpDetails] = useState();
  const [userInfo, setUserInfo] = useState({ sessionId: generateId() });

  useEffect(() => {
    (async () => {
      const receivedIpDetails = await ipdata.lookup();
      if (receivedIpDetails) {
        await registerLog("Accede a la página: Transferencia de vehículo");
        setIpDetails(receivedIpDetails);
      }
    })();
  }, []);

  const registerLog = async (message) => {
    if (userInfo.sessionId && ipDetails?.region)
      await fetchRegisterLog(message, userInfo.sessionId, ipDetails?.region);
  };

  return <UserContext.Provider value={{ userInfo, registerLog }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
