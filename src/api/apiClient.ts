import axios from "axios";

export const createApi = (token?: string) => {
  const API = axios.create({
    baseURL: "https://koinsaveapi.onrender.com",
  });

  API.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return API;
};
