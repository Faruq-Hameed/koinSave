import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:5000", // Android emulator
  // baseURL: "http://localhost:5000", // iOS simulator
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = "globalThis.authToken";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
