import { useEffect, useState } from "react";

import { i18n } from "../translations/i18n";

import { MdImportExport } from "react-icons/md";

import { Container, LanguageText } from "./styles";

export function ChangeLanguage() {
  const [portuguese, setPortuguese] = useState(true);

  useEffect(() => {
    if (portuguese) {
      i18n.changeLanguage("pt-BR");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [portuguese]);

  // logica para setar a linguagem no localstorage

  // useEffect(() => {
  //   const currentLanguage = localStorage.getItem('@joao-portfolio-language');

  //   if (currentLanguage === false || currentLanguage === true) {

  //   }
  // }, []);

  return (
    <Container
      type="button"
      onClick={() => setPortuguese((prevState) => !prevState)}
    >
      <LanguageText>{portuguese ? "PT 🇧🇷" : "EN 🇺🇸"}</LanguageText>
      <MdImportExport size={20} />
    </Container>
  );
}
