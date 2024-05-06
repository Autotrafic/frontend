import { apiRequest } from "../utils/request";

export const fetchRegisterLog = async (message, sessionId) => {
  await apiRequest("logs/register", { message, sessionId }, "POST");
};
