import { BASE_API_URL } from "./constants";

export const apiRequest = async (endpoint, data, method = "GET") => {
  const response = await fetch(`${BASE_API_URL}/${endpoint}`, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data && JSON.stringify({ ...data }),
  });

  const result = await response.json();

  return result;
};