import { Container } from "./styles";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export function Project({ title, description, link }: ProjectProps) {
  return (
    <Container>
      <span className="project_title">{title}</span>
      <span className="project_description">{description}</span>
      <a href={link} target="_blank">
        <button type="button">Ver projeto</button>
      </a>
    </Container>
  );
}
