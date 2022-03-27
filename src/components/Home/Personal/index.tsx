import { differenceInYears } from "date-fns";
import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

import { Container } from "./styles";

export function HomePersonal() {
  const { t } = useTranslation();

  return (
    <Container id="home">
      <main>
        <div>
          <h1>João Garcia</h1>
          <h2>{t("jobTitle")}</h2>
          <p>{t("personalResume")}</p>

          <Link to="about" smooth={true} duration={1000}>
            <button type="button">{t("moreAboutMe")}</button>
          </Link>
        </div>
        <img src="/guy-coding.svg" alt="João Vitor" />
      </main>
    </Container>
  );
}
