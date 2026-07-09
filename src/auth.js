const AUTH_KEY = "gd-lead-auth";

const AUTH_USERNAME = import.meta.env.VITE_AUTH_USERNAME ?? "";
const AUTH_PASSWORD = import.meta.env.VITE_AUTH_PASSWORD ?? "";

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login(username, password) {
  const valid =
    username === AUTH_USERNAME &&
    password === AUTH_PASSWORD &&
    AUTH_USERNAME !== "" &&
    AUTH_PASSWORD !== "";

  if (valid) {
    localStorage.setItem(AUTH_KEY, "true");
  }

  return valid;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
