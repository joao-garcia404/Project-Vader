import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

import { Container } from "./styles";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      
      setVisible(scrollPosition > position);
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, visible]);
  
  return (
    <Container style={{ top: visible ? - 0 : - 98 }}>
      <div>
        <Link to="home" smooth={true} duration={1000}>
          <p>Home</p>
          <span></span>
        </Link>
        <Link to="knowledge" smooth={true} duration={1000}>
          <p>Conhecimentos</p>
          <span></span>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <p>Projetos</p>
          <span></span>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <p>Contato</p>
          <span></span>
        </Link>
      </div>
    </Container>
  );
};
