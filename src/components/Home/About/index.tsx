import { useTranslation, I18nContext } from "react-i18next";

import { Container } from "./styles";

export function HomeAbout() {
  const { t, i18n } = useTranslation();

  return (
    <Container id="about">
      <main>
        <img src="/code-guy.svg" alt="Code guy" />
        <div>
          <h2>{t("aboutMe")}</h2>
          <p>{t("aboutMeText")}</p>
          <a
            href={
              i18n.language === "pt-BR"
                ? "/cv/cv-joao-garcia.pdf"
                : "/cv/en-cv-joao-garcia.pdf"
            }
            download
          >
            <button>{t("downloadCv")}</button>
          </a>
        </div>
      </main>
    </Container>
  );
}
