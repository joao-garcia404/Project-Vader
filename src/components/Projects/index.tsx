import { useTranslation } from "react-i18next";

import { Project } from "./Project";

import { Container } from "./styles";

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      link: "https://github.com/joao-garcia404/GoBarber-web",
      title: "GoBarber",
      description: t("barberProject"),
    },
    {
      link: "https://github.com/joao-garcia404/dtmoney",
      title: "dtmoney",
      description: t("dtProject"),
    },
    {
      link: "https://github.com/joao-garcia404/GoStack-Github-Explorer",
      title: "GitHub Explorer",
      description: t("dtProject"),
    },
    {
      link: "https://github.com/joao-garcia404/Clone-app-banco-Inter",
      title: "Banco Inter",
      description: t("interProject"),
    },
    {
      link: "https://github.com/joao-garcia404/dtmoney-mobile",
      title: "dtmoney mobile",
      description: t("dtMobileProject"),
    },
    {
      link: "https://github.com/joao-garcia404/DashGo",
      title: "DashGo",
      description: t("dashProject"),
    },
  ];

  return (
    <Container id="projects">
      <h2>{t("projects")}</h2>

      <main>
        {projects.map((project) => (
          <Project
            key={project.title}
            link={project.link}
            title={project.title}
            description={project.description}
          />
        ))}
      </main>
    </Container>
  );
}
