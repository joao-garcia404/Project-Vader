import { useTranslation } from "react-i18next";

import { KnowledgeCards } from "./KnowledgeCards";

import { Container } from "./styles";

export function Knowledge() {
  const { t } = useTranslation();

  return (
    <Container id="knowledge">
      <h2>{t("knowledge")}</h2>

      <main>
        <KnowledgeCards />
      </main>
    </Container>
  );
}
