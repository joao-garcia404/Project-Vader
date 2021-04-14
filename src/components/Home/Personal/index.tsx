import { Container } from "./styles";

export function HomePersonal() {
  return (
    <Container>
      <main>
        <div>
          <h1>João Garcia</h1>
          <h2>Desenvolvedor Front-end</h2>
          <p>
            Olá, me chamo João, tenho 18 anos e sou um
            desenvolvedor Front-end. Bem vindo ao meu 
            site pessoal.
          </p>

          <button type="button">Mais sobre mim</button>
        </div>
        <img src="/guy-coding.svg" alt="João Vitor"/>
      </main>
    </Container>
  );
};
