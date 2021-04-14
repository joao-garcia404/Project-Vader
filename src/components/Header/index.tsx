import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <a href="#">
          <p>Home</p>
          <span></span>
        </a>
        <a href="#">
          <p>Conhecimentos</p>
          <span></span>
        </a>
        <a href="#">
          <p>Projetos</p>
          <span></span>
        </a>
        <a href="#">
          <p>Contato</p>
          <span></span>
        </a>
      </div>
    </Container>
  );
};
