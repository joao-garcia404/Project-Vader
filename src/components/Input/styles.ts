import styled, { css } from "styled-components";

type ContainerProps = {
  focused: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ focused }) =>
    focused ? "var(--green)" : "var(--inputBackground)"};
  background: var(--inputBackground);

  display: flex;
  align-items: center;
  gap: 10px;

  transition: border-color 0.2s;

  input {
    width: 100%;
    font-size: 16px;
    font-weight: 400;

    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
