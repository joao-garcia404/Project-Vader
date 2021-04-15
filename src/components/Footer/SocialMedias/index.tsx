import { Container } from "./styles";

export function SocialMedias() {
  return (
    <Container>
      <h2>Redes sociais</h2>

      <main>
        <a href="https://github.com/joao-garcia404">
          <img src="/github.svg" alt="Github"/>
        </a>

        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-garcia-89bba81b1/">
          <img src="/linkedin.svg" alt="Linkedin"/>
        </a>

        <a href="https://www.instagram.com/joaov_d3v/">
          <img src="/instagram.svg" alt="Instagram"/>
        </a>
      </main>
    </Container>
  );
};
