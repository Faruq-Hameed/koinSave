import { createApi } from "./apiClient";

export const addMoney = async (token: string, amount: number) => {
  const API = createApi(token);
  const res = await API.post("/transactions/add", { amount });
  return res.data;
};

export const sendMoney = async (
  token: string,
  payload: { receiverEmail: string; purpose: string; amount: number }
) => {
  const API = createApi(token);
  const res = await API.post("/transactions/send", payload);
  return res.data;
};

export const getTransactions = async (token: string) => {
  const API = createApi(token);
  const res = await API.get("/transactions");
  return res.data;
};

export const getTransactionById = async (token: string, id: string) => {
  const API = createApi(token);
  const res = await API.get(`/transactions/${id}`);
  return res.data;
};
