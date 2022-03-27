import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_PTBR } from "./pt-BR/translations";
import { TRANSLATIONS_ENUS } from "./en-US/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": {
        translation: TRANSLATIONS_PTBR,
      },
      "en-US": {
        translation: TRANSLATIONS_ENUS,
      },
    },
  });

i18n.changeLanguage("pt-BR");

export { i18n };
