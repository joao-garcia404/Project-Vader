import { Project } from "./Project";
import { Container } from "./styles";

export function Projects() {
  return (
    <Container id="projects">
      <h2>Projetos</h2>

      <main>
        <Project link="https://github.com/joao-garcia404/GoBarber-web" title="GoBarber" description="Aplicação de agendamentos de serviços de barbearia" />

        <Project link="https://github.com/joao-garcia404/dtmoney" title="dtmoney" description="Aplicação de gestão de transações bancárias" />

        <Project link="https://github.com/joao-garcia404/GoStack-Github-Explorer" title="GitHub Explorer" description="Aplicação de busca de repositórios no GitHub" />

        <Project link="https://github.com/joao-garcia404/Clone-app-banco-Inter" title="Banco Inter" description="Aplicativo do banco Inter" />

        <Project link="https://github.com/joao-garcia404/dtmoney-mobile" title="dtmoney mobile" description="Versão mobile da aplicação de gestão de transações bancárias" />

        <Project link="https://github.com/joao-garcia404/DashGo" title="DashGo" description="Dashboard administrativo" />
      </main>
    </Container>
  );
};
