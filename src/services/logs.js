import { apiRequest } from "../utils/request";

export const fetchRegisterLog = async (message, sessionId, region) => {
  await apiRequest("logs/register", { message, sessionId, region }, "POST");
};
