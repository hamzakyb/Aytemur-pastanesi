"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import tr from "./locales/tr/common.json";
import en from "./locales/en/common.json";
import de from "./locales/de/common.json";
import fr from "./locales/fr/common.json";
import es from "./locales/es/common.json";
import pt from "./locales/pt/common.json";
import ru from "./locales/ru/common.json";
import ar from "./locales/ar/common.json";
import zh from "./locales/zh/common.json";
import ja from "./locales/ja/common.json";
import ko from "./locales/ko/common.json";
import hi from "./locales/hi/common.json";
import id from "./locales/id/common.json";
import it from "./locales/it/common.json";

export const defaultNS = "common";
export const resources = {
  tr: { common: tr },
  en: { common: en },
  de: { common: de },
  fr: { common: fr },
  es: { common: es },
  pt: { common: pt },
  ru: { common: ru },
  ar: { common: ar },
  zh: { common: zh },
  ja: { common: ja },
  ko: { common: ko },
  hi: { common: hi },
  id: { common: id },
  it: { common: it },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Force Turkish on initial render to match SSR and avoid hydration mismatch
    fallbackLng: "tr",
    defaultNS,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
