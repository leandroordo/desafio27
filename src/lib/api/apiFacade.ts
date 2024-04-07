import axios from "axios";

const instance = axios.create({
  baseURL: "https://6610c0360640280f219d5d01.mockapi.io/api/",
  timeout: 10000,
});

// Interceptores
instance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
    };
    return config;
  },
  function (error) {
    console.error("Error al llamar a la API: ", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
