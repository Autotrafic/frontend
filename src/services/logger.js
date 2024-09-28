import { apiRequest } from '../utils/request';

export const logWhatsappClick = async () => {
  await apiRequest('logs/whatsapp-click', {}, 'POST');
};
