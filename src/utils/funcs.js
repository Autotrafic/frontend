import { logWhatsappClick } from "../services/logger";

export const onWhatsappClick = (e) => {
    e.preventDefault();
  
    window.open('https://wa.me/34643219297', '_blank');
  
    logWhatsappClick().catch((error) => {
      console.error('Failed to log WhatsApp click:', error);
    });
  };