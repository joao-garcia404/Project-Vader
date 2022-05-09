import { ReactNode } from "react";
import { Container } from "./styles";

interface KnowledgeCardProps {
  images: ReactNode[];
  title: string;
  experience: string;
}

export function KnowledgeCard({
  title,
  images,
  experience,
}: KnowledgeCardProps) {
  return (
    <Container>
      <div>{images}</div>

      <span className="card_title">{title}</span>
      <span className="card_experience">{experience}</span>
    </Container>
  );
}
