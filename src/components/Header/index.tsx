import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

import { Container } from "./styles";

export function Header() {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset;

    setVisible(scrollPosition > position);
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, visible]);

  return (
    <Container style={{ top: visible ? -0 : -98 }}>
      <div>
        <Link to="home" smooth={true} duration={1000}>
          <p>{t("headerHome")}</p>
          <span></span>
        </Link>
        <Link to="knowledge" smooth={true} duration={1000}>
          <p>{t("headerKnowledge")}</p>
          <span></span>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <p>{t("headerProjects")}</p>
          <span></span>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <p>{t("headerContacts")}</p>
          <span></span>
        </Link>
      </div>
    </Container>
  );
}
