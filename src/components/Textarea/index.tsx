import { TextareaHTMLAttributes, useState } from "react";

import { Container } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: TextareaProps) {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <Container focused={inputFocused}>
      <textarea
        {...rest}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      ></textarea>
    </Container>
  );
}
