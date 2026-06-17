"use client";

import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  /** Force the dropdown to open in a specific direction.
   *  "left"  → always opens left-aligned
   *  "right" → always opens right-aligned
   *  default → responsive (left on mobile, right on desktop)
   */
  dropdownAlign?: "left" | "right";
}

export default function LanguageSwitcher({ dropdownAlign }: LanguageSwitcherProps = {}) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  // LanguageDetector might set tr-TR, we only want the primary code
  const currentLangCode = (i18n.language || "tr").split('-')[0];
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-[300]" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 border border-black/10 hover:border-black transition-all bg-white shadow-sm font-sans text-xs uppercase tracking-wider"
      >
        <Globe className="w-4 h-4 text-black" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
      </button>

      {open && (
        <div className={`absolute mt-2 w-40 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto hide-scrollbar ${
          dropdownAlign === "left"
            ? "left-0 origin-top-left"
            : dropdownAlign === "right"
            ? "right-0 origin-top-right"
            : "left-0 md:left-auto md:right-0 origin-top-left md:origin-top-right"
        }`}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-xs font-sans tracking-widest uppercase hover:bg-gray-50 transition-colors ${
                  currentLangCode === lang.code ? "text-[#735c00] font-semibold bg-gray-50/50" : "text-gray-600"
                }`}
              >
                <span className="text-sm">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
