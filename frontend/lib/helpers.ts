import { AUTH_TOKEN } from "../constant";

export const getToken = () => {
  if (localStorage) {
    return localStorage.getItem(AUTH_TOKEN);
  }
  return ""
};

export const setToken = (token: any) => {
  if (token && localStorage) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  if (localStorage) {
    localStorage.removeItem(AUTH_TOKEN);
  }
};