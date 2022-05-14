import { FormEvent, useState } from "react";

import { useTranslation } from "react-i18next";

import { Input } from "../Input";
import { Loader } from "../Loader";
import { Textarea } from "../Textarea";

import { Container } from "./styles";
import { api } from "../../services/api";

export function Contact() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    try {
      setLoading(true);

      const body = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await api.post("/clients", body);

      console.log("executou depois do api");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container id="contact">
      <h2>{t("contact")}</h2>

      <main>
        <img src="/send.svg" alt="Enviar" />

        <form onSubmit={handleSubmitForm}>
          <Input
            type="text"
            placeholder={t("namePlaceholder")}
            onChange={(event) => {
              setFormData((prevState) => ({
                ...prevState,
                name: event.target.value,
              }));
            }}
            value={formData.name}
            icon={<img src="/name.svg" alt={t("namePlaceholder")} />}
          />

          <Input
            type="email"
            placeholder={t("emailPlaceholder")}
            onChange={(event) => {
              setFormData((prevState) => ({
                ...prevState,
                email: event.target.value,
              }));
            }}
            value={formData?.email}
            icon={<img src="/email.svg" alt="E-mail" />}
          />

          <Textarea
            placeholder={t("messagePlaceholder")}
            onChange={(event) => {
              setFormData((prevState) => ({
                ...prevState,
                message: event.target.value,
              }));
            }}
            value={formData.message}
          />

          <button type="submit">{loading ? <Loader /> : t("send")}</button>
        </form>
      </main>
    </Container>
  );
}
