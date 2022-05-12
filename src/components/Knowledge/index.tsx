import { useTranslation } from "react-i18next";
import { KnowledgeCard } from "./KnowledgeCard";

import { Container, CardsContainer } from "./styles";

export function Knowledge() {
  const { t } = useTranslation();

  const knowledges = [
    {
      title: "HTML CSS",
      experience: `2 ${t("yearsOfExperience")}`,
      images: [
        <img src="/html.svg" alt="HTML" />,
        <img src="/css.svg" alt="CSS" />,
      ],
    },
    {
      title: "JavaScript TypeScript",
      experience: `2 ${t("yearsOfExperience")}`,
      images: [
        <img src="/js.svg" alt="JavaScript" />,
        <img src="/ts.svg" alt="TypeScript" />,
      ],
    },
    {
      title: "Next.JS",
      experience: `7 ${t("monthsOfExperience")}`,
      images: [
        <img
          style={{ width: "100px", height: "63px" }}
          src="/next.svg"
          alt="HTML"
        />,
      ],
    },
    {
      title: "ReactJS",
      experience: `1 ${t("yearOfExperience")}`,
      images: [<img className="react_icon" src="/react.svg" alt="ReactJS" />],
    },
    {
      title: "React Native",
      experience: `10 ${t("monthsOfExperience")}`,
      images: [
        <img className="react_icon" src="/react.svg" alt="React Native" />,
      ],
    },
    {
      title: "Node JS",
      experience: `5 ${t("monthsOfExperience")}`,
      images: [<img src="/node.svg" alt="NodeJS" />],
    },
  ];

  return (
    <Container id="knowledge">
      <h2>{t("knowledge")}</h2>

      <CardsContainer>
        {knowledges.map((knowledge, index) => (
          <KnowledgeCard
            key={index}
            title={knowledge.title}
            experience={knowledge.experience}
            images={knowledge.images}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
