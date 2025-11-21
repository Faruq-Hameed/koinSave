import { User } from "../model/User";
import { createApi } from "./apiClient";

export const signup = async (data: Partial<User>) => {
  const API = createApi();
  const res = await API.post("/auths/signup", data);
  return res.data;
};

export const login = async (data: Partial<User>) => {
  const API = createApi();
  const res = await API.post("/auths/login", data, {
    headers: { "Content-Type": "application/json" },
  });
  console.log(res.data)
  return res.data;

};

export const getMe = async (token: string) => {
  const API = createApi(token);
  const res = await API.get("/auths/me");
  return res.data;
};
