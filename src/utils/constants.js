export const BASE_API_URL = "https://api.autotrafic.es";

export const TERMS_URL = "https://autotrafic.es/terminos-generales/";
export const PRIVACY_URL = "https://autotrafic.es/politica-de-privacidad/";

export const FAQ = [
  {
    question: "¿Cuál es el precio total de la transferencia en Gestoria AutoTrafic?",
    answer:
      "Coches y motos: 119,95€. Ciclomotores: 95€. Si tu vehículo tiene que pagar ITP (Impuesto de Transmisiones Patrimoniales), éste va íntegramente a Hacienda y Gestoria AutoTrafic sólo intermedia el pago sin sobre coste.",
  },
  {
    question: "¿Cuánto demora en llegar el nuevo permiso de circulación?",
    answer:
      "Una vez se presenta la transferencia del vehículo a la DGT, normalmente se demora entre 5 y 14 días, dependiendo de la Comunidad Autónoma.",
  },
  {
    question: "¿Necesito solicitar el informe del vehículo en tráfico?",
    answer:
      "Solicitar el informe del vehículo en la DGT no es obligatorio, pero sí muy recomendable, pues así puedes asegurarte del estado del mismo, que no tenga cargas, ni reserva de dominio.",
  },
  {
    question: "¿Tengo que enviar la documentación físicamente?",
    answer:
      "No, no debes preocuparte de nada. Nos puedes adjuntar la documentación a través de un enlace que te enviaremos una vez termines el pago del cambio de nombre.",
  },
  {
    question: "¿Qué puedo hacer si mi vehículo tiene reserva de dominio?",
    answer:
      "Los vehículos que tienen reserva de dominio, son los que se han comprado a través de una financiación. Cuando el comprador liquida toda la deuda, la entidad financiera debe levantar la reserva de dominio del vehículo y para ello, el propietario debe pedir a la entidad financiera que cancele la reserva de dominio.",
  },
];

export const TRANSFERENCE_ID = "transference-page";
export const PROCESS_SECTION_ID = "process-section";
export const PRICES_SECTION_ID = "prices-section";
export const FAQ_SECTION_ID = "faq-section";
export const CONTACT_SECTION_ID = "contact-section";

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
];
