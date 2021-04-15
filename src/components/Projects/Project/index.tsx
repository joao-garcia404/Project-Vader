import { Container } from "./styles";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export function Project({ title, description, link }: ProjectProps) {
  return (
    <Container>
      <span>{title}</span>
      <p>{description}</p>
      <a href={link}>
        <button type="button">Ver projeto</button>
      </a>
    </Container>
  );
};
