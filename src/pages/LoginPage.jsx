import { useState } from "react";
import { IoLockClosed, IoPerson } from "react-icons/io5";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import { login } from "../auth.js";

export default function LoginPage({ onLogin }) {
  const { t, language, setLanguage } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (login(username.trim(), password)) {
      onLogin();
      return;
    }

    setError(t("login.error"));
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gd-page p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <img
            src="/images/icon-white.png"
            alt="GD France"
            className="mx-auto mb-6 h-8 w-auto object-contain"
          />
          <h1 className="text-2xl font-bold text-zinc-100 md:text-3xl">{t("app.title")}</h1>
          <p className="mt-2 text-sm text-gd-muted">{t("login.subtitle")}</p>
        </div>

        <form
          className="rounded-2xl border border-gd-line bg-gd-shell p-6 shadow-2xl sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">{t("login.username")}</span>
              <span className="relative flex items-center">
                <IoPerson className="pointer-events-none absolute left-4 text-gd-muted" size={20} />
                <input
                  className="w-full rounded-xl border border-gd-line bg-gd-panel py-3 pl-12 pr-4 text-zinc-100 placeholder:text-zinc-500"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder={t("login.usernamePlaceholder")}
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">{t("login.password")}</span>
              <span className="relative flex items-center">
                <IoLockClosed className="pointer-events-none absolute left-4 text-gd-muted" size={20} />
                <input
                  className="w-full rounded-xl border border-gd-line bg-gd-panel py-3 pl-12 pr-4 text-zinc-100 placeholder:text-zinc-500"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={t("login.passwordPlaceholder")}
                  required
                />
              </span>
            </label>
          </div>

          {error && (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          <button
            className="mt-6 w-full rounded-xl border border-black bg-black py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]"
            type="submit"
          >
            {t("login.submit")}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2">
          {[
            { code: "fr", label: "FR" },
            { code: "en", label: "EN" },
            { code: "tr", label: "TR" }
          ].map((option) => (
            <button
              key={option.code}
              type="button"
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                language === option.code
                  ? "bg-red-600 text-white shadow-md"
                  : "border border-gd-line bg-gd-panel text-zinc-400 hover:text-white"
              }`}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
