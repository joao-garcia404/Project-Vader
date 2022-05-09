import styled from "styled-components";

export const Container = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 100px;
  padding: 10px 0px;
  border: none;
  border-radius: 8px;
  background: var(--shape);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;
  transition: all 0.3s;

  svg {
    color: var(--text-dark);
    transition: all 0.3s;
  }

  &:hover {
    svg {
      color: var(--green);
    }

    div {
      color: var(--green);
    }
  }

  &:active {
    width: 80px;
    padding: 8px 0px;

    div {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }
`;

export const LanguageText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  transition: all 0.3s;

  &:hover {
    color: var(--green);
  }
`;
