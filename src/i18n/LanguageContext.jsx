import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

const STORAGE_KEY = "gd-lead-lang";
const LanguageContext = createContext(null);

function resolveTranslation(language, key) {
  const value = key.split(".").reduce((node, part) => node?.[part], translations[language]);
  return typeof value === "string" ? value : undefined;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : "tr";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (translations[nextLanguage]) {
      setLanguageState(nextLanguage);
    }
  };

  const t = (key) => resolveTranslation(language, key) ?? resolveTranslation("tr", key) ?? key;

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      locale: language === "tr" ? "tr-TR" : language === "fr" ? "fr-FR" : "en-US"
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}
