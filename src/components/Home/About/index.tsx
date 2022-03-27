import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function HomeAbout() {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <main>
        <img src="/code-guy.svg" alt="Code guy" />
        <div>
          <h2>{t("aboutMe")}</h2>
          <p>{t("aboutMeText")}</p>
          <a href="/cv/cv-joao-garcia.pdf" download>
            <button>{t("downloadCv")}</button>
          </a>
        </div>
      </main>
    </Container>
  );
}
