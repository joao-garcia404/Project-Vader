import { useTranslation } from "react-i18next";
import { Container, Wrapper } from "./styles";

export function KnowledgeCards() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <main>
          <div>
            <img src="/html.svg" alt="HTML" />
            <img src="/css.svg" alt="CSS" />
          </div>

          <span>HTML e CSS</span>

          <p>2 {t("yearsOfExperience")}</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/js.svg" alt="JavaScript" />
            <img src="/ts.svg" alt="TypeScript" />
          </div>

          <span>JavaScript e TypeScript</span>

          <p>2 {t("yearsOfExperience")}</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/next.svg" alt="HTML" />
          </div>

          <span>Next.JS</span>

          <p>7 {t("monthsOfExperience")}</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img className="react_icon" src="/react.svg" alt="ReactJS" />
          </div>

          <span>ReactJS</span>

          <p>1 {t("yearOfExperience")}</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img className="react_icon" src="/react.svg" alt="React Native" />
          </div>

          <span>React Native</span>

          <p>10 {t("monthsOfExperience")}</p>
        </main>
      </Container>

      <Container>
        <main>
          <div>
            <img src="/styled.jpg" alt="Styled-components" />
          </div>

          <span>Styled-components</span>

          <p>1 {t("yearOfExperience")}</p>
        </main>
      </Container>
    </Wrapper>
  );
}
