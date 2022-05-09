import styled from "styled-components";

type ContainerProps = {
  focused: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 185px;
  padding: 10px 14px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ focused }) =>
    focused ? "var(--green)" : "var(--inputBackground)"};
  background: var(--inputBackground);

  transition: border-color 0.2s;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    background: transparent;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }
`;
