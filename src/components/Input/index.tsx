import { useState, ReactNode, InputHTMLAttributes } from "react";

import { Container, IconContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

export function Input({ icon, ...rest }: InputProps) {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <Container focused={inputFocused}>
      <IconContainer>{icon}</IconContainer>

      <input
        {...rest}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </Container>
  );
}
