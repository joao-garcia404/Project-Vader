import { Link } from 'react-scroll';

import { Container } from "./styles";

export function HomePersonal() {
  return (
    <Container id="home">
      <main>
        <div>
          <h1>João Garcia</h1>
          <h2>Desenvolvedor Front-end</h2>
          <p>
            Olá, me chamo João, tenho 18 anos e sou um
            desenvolvedor Front-end. Bem vindo ao meu 
            site pessoal.
          </p>

          <Link to="about" smooth={true} duration={1000}>
          <button type="button">Mais sobre mim</button>
          </Link>
        </div>
        <img src="/guy-coding.svg" alt="João Vitor"/>
      </main>
    </Container>
  );
};
