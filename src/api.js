import axios from "axios";

const baseURL = "http://esp.local/light";

const Axios = axios.create({
  baseURL, // Dirección de servicio en segundo plano
  timeout: 10000, // El tiempo de espera de la solicitud es de 1 minuto
  responseType: "json",
  withCredentials: false, // si se permiten cookies
  // Las siguientes dos propiedades se utilizan para establecer el número de nuevas solicitudes automáticas y el tiempo de intervalo para el error o el tiempo de espera de la solicitud
  reintentar: 2, // número de solicitudes
  retryInterval: 1000, // Intervalo de reintento
});

export function changeStateLight(state) {
  return Axios.get(`${state ? "on" : "off"}`);
}
