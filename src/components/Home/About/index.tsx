import { Container } from "./styles";

export function HomeAbout() {
  return (
    <Container id="about">
      <main>
        <img src="/code-guy.svg" alt="Code guy"/>
        <div>
          <h2>Sobre mim</h2>
          <p>
            Tenho formação de nível técnico em mecatrônica pela escola SENAI
            “Roberto Simonsen” e estudo programação web e mobile de forma 
            auto-didata há cerca de 1 ano, desde então essa área de 
            desenvolvimento tem sido meu foco e venho desenvolvendo muitos 
            projetos para o aprimoramento do meu conhecimento.
          </p>
          <a href="/cv/cv-joao-garcia.pdf" download>
            <button>Baixar CV</button>
          </a>
        </div>
      </main>
    </Container>
  );
};
