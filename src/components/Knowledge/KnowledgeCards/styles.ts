import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: 615px) {
    gap: 40px;
  }
`;

export const Container = styled.div`
  width: 230px;
  height: 360px;
  border-radius: 12px;
  background: var(--shape);
  border: 3px solid var(--shape);

  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 3px solid var(--green);
    transform: translateY(-10px);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      gap: 26px;
    }

    span {
      margin-top: 38px;
      font-size: 16px;
      font-weight: 400;
    }

    p {
      margin-top: 34px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;