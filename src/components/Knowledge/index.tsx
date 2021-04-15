import { KnowledgeCards } from './KnowledgeCards';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container id="knowledge">
      <h2>Conhecimentos</h2>

      <main>
        <KnowledgeCards />
      </main>
    </Container>
  );
};
