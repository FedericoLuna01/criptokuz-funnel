window.HEW_CONFIG = {
  // Pegá aquí la URL pública del Web App de Google Apps Script.
  // Mientras quede vacío, el funnel funciona en modo demo y guarda localmente.
  submissionEndpoint:
    "https://script.google.com/macros/s/AKfycbzLd1WBbw9JO4PSgjyyT_sGd20_HVDpKRXN2bEpaL1NNS4OgWuPtgF_WWSRFstxwLJ11w/exec",

  // Rotación aleatoria 50/50 entre setters.
  whatsappSetters: [
    { name: "Sofia", number: "+54 2984 326722" },
    { name: "Nico", number: "+54 2984 504372" },
  ],
  whatsappMessage:
    "Hola, soy {name}. Completé el formulario del Plan HEW y quiero recibir mi plan personalizado.",

  // Enlaces legales. Reemplazar antes de publicar.
  privacyUrl: "#",
  termsUrl: "#",

  // Identificador interno para comparar versiones del funnel.
  landingVersion: "hew-v1",
};
