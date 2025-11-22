import axios from "axios";

export const createApi = (token?: string) => {
  const API = axios.create({
    baseURL: "http://192.168.243.112:5000",
  });

  API.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return API;
};
