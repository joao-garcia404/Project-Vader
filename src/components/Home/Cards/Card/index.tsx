import { useTranslation } from "react-i18next";

import { Container, Formation } from "./styles";

export function Card() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <h2>{t("formation")}</h2>

        <main>
          <aside />
          <div>
            <Formation>
              <div />
              <main>
                <h3>{t("college")}</h3>
                <p>{t("collegeCourse")}</p>
                <p>2021 - {t("studying")}</p>
              </main>
            </Formation>

            <Formation>
              <div />
              <main>
                <h3>{t("technical")}</h3>
                <p>{t("technicalCourse")}</p>
                <p>2019-2020</p>
              </main>
            </Formation>

            <Formation>
              <div />
              <main>
                <h3>{t("highSchollInstitution")}</h3>
                <p>{t("highSchool")}</p>
                <p>2018 - 2020</p>
              </main>
            </Formation>

            <Formation>
              <div />
              <main>
                <h3>{t("englishSchool")}</h3>
                <p>{t("english")}</p>
                <p>2016 - {t("studying")}</p>
              </main>
            </Formation>
          </div>
        </main>
      </Container>

      <Container>
        <h2>{t("professionalExperience")}</h2>

        <main>
          <aside />
          <div>
            <Formation>
              <div />
              <main>
                <h3>{t("plinCompany")}</h3>
                <p>{t("plinJobTitle")}</p>
                <p>
                  {t("april")} 2021 - {t("currently")}
                </p>
              </main>
            </Formation>

            <Formation>
              <div />
              <main>
                <h3>{t("fixCompany")}</h3>
                <p>{t("fixSecJobTitle")}</p>
                <p>
                  {t("february")} 2022 - {t("currently")}
                </p>
              </main>
            </Formation>

            <Formation>
              <div />
              <main>
                <h3>{t("fixCompany")}</h3>
                <p>{t("fixJobTitle")}</p>
                <p>
                  {t("june")} 2021 - {t("february")} 2022
                </p>
              </main>
            </Formation>
          </div>
        </main>
      </Container>
    </>
  );
}
