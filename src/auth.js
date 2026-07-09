const AUTH_KEY = "gd-lead-auth";

export const STATIC_CREDENTIALS = {
  username: "admin",
  password: "gd2024"
};

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function login(username, password) {
  const valid =
    username === STATIC_CREDENTIALS.username &&
    password === STATIC_CREDENTIALS.password;

  if (valid) {
    localStorage.setItem(AUTH_KEY, "true");
  }

  return valid;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
