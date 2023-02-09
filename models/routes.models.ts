export const Route = {
  HOME: {
    path: "/",
    name: "HOME",
  },
  COLECCIONES: {
    path: "/Colecciones",
    name: "Colecciones",
  },
  PREGUNTAS: {
    path: "/preguntasFrecuentes",
    name: "Preguntas Frecuentes",
  },
};

export interface Route {
  path: string;
  name: string;
}
