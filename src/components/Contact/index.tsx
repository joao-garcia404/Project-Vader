import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <h2>Contato</h2>

      <main>
        <img src="/send.svg" alt="Enviar"/>

        <form>
          <div className="nameInput">
            <img src="/name.svg" alt="Nome"/>
            <input type="text" placeholder="Nome" />
          </div>
          <div className="emailInput">
            <img src="/email.svg" alt="E-mail"/>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="messageInput">
            <textarea placeholder="Mensagem..."></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </main>
    </Container>
  );
};
