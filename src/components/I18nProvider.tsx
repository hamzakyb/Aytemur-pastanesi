"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Determine language after hydration to prevent SSR mismatch
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && savedLang !== "tr") {
      i18n.changeLanguage(savedLang);
    } else if (!savedLang) {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang && browserLang !== "tr" && i18n.hasResourceBundle(browserLang, "common")) {
        i18n.changeLanguage(browserLang);
        localStorage.setItem("i18nextLng", browserLang);
      }
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
