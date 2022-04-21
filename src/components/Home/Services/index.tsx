import { useTranslation } from "react-i18next";

import { Container } from "./styles";

export function Services() {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t("services")}</h2>
      <main>
        <div>
          <h3>{t("webDevelopment")}</h3>
          <img src="/web-developer.svg" alt="Desenvolvedor web" />
        </div>

        <div>
          <h3>{t("mobileDevelopment")}</h3>
          <img src="/mobile-developer.svg" alt="Desenvolvedor mobile" />
        </div>
      </main>
    </Container>
  );
}
