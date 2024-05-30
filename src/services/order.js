import { apiRequest } from "../utils/request";

export const getOrderById = async (orderId) => {
  const order = await apiRequest(`order/${orderId}`);
  return order;
};
