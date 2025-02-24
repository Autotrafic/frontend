import { logWhatsappClick } from "../services/logger";

export const onWhatsappClick = (e) => {
  e.preventDefault();

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  window.open('https://wa.me/34643219297', isIOS ? '_self' : '_blank');

  logWhatsappClick().catch((error) => {
    console.error('Failed to log WhatsApp click:', error);
  });
};
