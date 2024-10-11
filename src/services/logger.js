import { apiRequest } from '../utils/request';

export const logWhatsappClick = async () => {
  const business = 'AutoTrafic';
  const accountingType = 'Contacto WhatsApp';

  await apiRequest('logs/accounting', { business, accountingType }, 'POST');
};
