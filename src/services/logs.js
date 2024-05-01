import { apiRequest } from "../utils/request";

export const fetchRegisterLog = async (message, sessionId, userId) => {
  await apiRequest("logs/register", { message, sessionId, userId }, "POST");
};
