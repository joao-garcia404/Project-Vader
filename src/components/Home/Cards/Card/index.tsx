import { Container, Formation } from "./styles";

export function Card() {
  return (
    <>
      <Container>
        <h2>Formação acadêmica</h2>

        <main>
          <aside></aside>
          <div>
            <Formation>
              <div></div>
              <main>
                <h3>Escola SENAI "Roberto Simonsen"</h3>
                <p>Técnico em mecatrônica</p>
                <p>2019-2020</p>
              </main>
            </Formation>

            <Formation>
              <div></div>
              <main>
                <h3>Centro Educacional SESI 032</h3>
                <p>Ensino médio</p>
                <p>2018-2020</p>
              </main>
            </Formation>

            <Formation>
              <div></div>
              <main>
                <h3>Escola Wizard</h3>
                <p>Inglês</p>
                <p>2016-2021</p>
              </main>
            </Formation>
          </div>
        </main>
      </Container>

      <Container>
        <h2>Experiência profissional</h2>

        <main>
          <aside></aside>
          <div>
            <Formation>
              <div></div>
              <main>
                <h3>Buscando primeira experiência</h3>
              </main>
            </Formation>
          </div>
        </main>
    </Container>
    </>
  );
};
