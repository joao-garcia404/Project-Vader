import { useTranslation } from "react-i18next";

import { Textarea } from "../Textarea";
import { Input } from "./Input";

import { Container } from "./styles";

export function Contact() {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <h2>{t("contact")}</h2>

      <main>
        <img src="/send.svg" alt="Enviar" />

        <form>
          <Input
            type="text"
            placeholder={t("namePlaceholder")}
            icon={<img src="/name.svg" alt={t("namePlaceholder")} />}
          />

          <Input
            type="email"
            placeholder={t("emailPlaceholder")}
            icon={<img src="/email.svg" alt="E-mail" />}
          />

          <Textarea placeholder={t("messagePlaceholder")} />

          <button type="submit">{t("send")}</button>
        </form>
      </main>
    </Container>
  );
}
