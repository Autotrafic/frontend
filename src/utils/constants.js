export const BASE_API_URL = "https://api.autotrafic.es";

export const TERMS_URL = "https://autotrafic.es/terminos-generales/";
export const PRIVACY_URL = "https://autotrafic.es/politica-de-privacidad/";

export const sectionPadding = "2.5em 0";
export const sectionBackgroundColor = "#f7f9fd";

export const FAQ = [
  {
    question: "¿Qué documentos se requieren?",
    answer:
      "Solamente necesitamos el DNI / NIE del comprador y vendedor, la Ficha técnica, el Permiso de circulación, y el contrato de compraventa (nosotros podemos ofrecer uno gratis).",
  },
  {
    question: "¿Es seguro hacer el trámite online?",
    answer:
      "Sí, nuestra plataforma utiliza tecnología de encriptación para proteger tus datos y está autorizada por la DGT.",
  },
  {
    question:
      "¿Cuál es el precio total de la transferencia en Gestoria AutoTrafic?",
    answer:
      "Coches y motos: 129,95€. Ciclomotores: 95€. Si tu vehículo tiene que pagar ITP (Impuesto de Transmisiones Patrimoniales), éste va íntegramente a Hacienda y Gestoria AutoTrafic sólo intermedia el pago sin sobre coste.",
  },
  {
    question:
      "¿Cuánto se tarda y cuánto demora en llegar el nuevo permiso de circulación?",
    answer:
      "El proceso completo puede hacerse en 5 minutos. Una vez se presenta la transferencia del vehículo a la DGT, normalmente se demora entre 5 y 14 días, dependiendo de la Comunidad Autónoma.",
  },
  {
    question: "¿Necesito solicitar el informe del vehículo en tráfico?",
    answer:
      "Solicitar el informe del vehículo en la DGT no es obligatorio, pero sí muy recomendable, pues así puedes asegurarte del estado del mismo, que no tenga cargas, ni reserva de dominio.",
  },
  {
    question: "¿Tengo que enviar la documentación físicamente?",
    answer:
      "No, no debes preocuparte de nada. Una foto del documento es válida mientras se aprecie bien la información que contiene.",
  },
];

export const TRANSFERENCE_ID = "transference-page";
export const PROCESS_SECTION_ID = "process-section";
export const PRICES_SECTION_ID = "prices-section";
export const FAQ_SECTION_ID = "faq-section";
export const CONTACT_SECTION_ID = "contact-section";
export const PROFESSIONAL_SECTION_ID = "professional-section";

export const NAVBAR_ROUTES = [
  { title: "Inicio", route: "https://autotrafic.es/" },
  { title: "Transferencia de vehículo", route: "/" },
  { title: "Noticias", route: "https://autotrafic.es/noticias/" },
  { title: "Contacto", route: "https://autotrafic.es/contacto/" },
];

export const TRANS_NAVBAR_ROUTES = [
  { title: "Cómo funciona", scrollTo: PROCESS_SECTION_ID },
  { title: "Precios", scrollTo: PRICES_SECTION_ID },
  { title: "Preguntas frecuentes", scrollTo: FAQ_SECTION_ID },
  { title: "Contacto", scrollTo: CONTACT_SECTION_ID },
  { title: "Para profesionales", scrollTo: PROFESSIONAL_SECTION_ID },
];
