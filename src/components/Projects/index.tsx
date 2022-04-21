import { useTranslation } from "react-i18next";

import { Project } from "./Project";

import { Container } from "./styles";

export function Projects() {
  const { t } = useTranslation();

  return (
    <Container id="projects">
      <h2>{t("projects")}</h2>

      <main>
        <Project
          link="https://github.com/joao-garcia404/GoBarber-web"
          title="GoBarber"
          description={t("barberProject")}
        />

        <Project
          link="https://github.com/joao-garcia404/dtmoney"
          title="dtmoney"
          description={t("dtProject")}
        />

        <Project
          link="https://github.com/joao-garcia404/GoStack-Github-Explorer"
          title="GitHub Explorer"
          description={t("githubProject")}
        />

        <Project
          link="https://github.com/joao-garcia404/Clone-app-banco-Inter"
          title="Banco Inter"
          description={t("interProject")}
        />

        <Project
          link="https://github.com/joao-garcia404/dtmoney-mobile"
          title="dtmoney mobile"
          description={t("dtMobileProject")}
        />

        <Project
          link="https://github.com/joao-garcia404/DashGo"
          title="DashGo"
          description={t("dashProject")}
        />
      </main>
    </Container>
  );
}
