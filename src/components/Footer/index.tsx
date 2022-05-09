import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function Footer() {
  const { t } = useTranslation();

  return (
    <Container>
      <main>
        <span>{t("footerCredits")}</span>
        <a href="https://br.freepik.com/stories">{t("footerIllustrations")}</a>
      </main>
    </Container>
  );
}
