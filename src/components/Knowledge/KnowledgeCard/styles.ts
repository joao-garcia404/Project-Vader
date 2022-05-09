import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 230px;
  height: 360px;
  border-radius: 12px;
  background: var(--shape);
  border: 3px solid var(--shape);
  box-shadow: 0px 50px 70px -20px rgba(0, 0, 0, 0.15);

  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    border: 3px solid var(--green);
    transform: translateY(-10px);
  }

  div {
    display: flex;
    gap: 26px;

    img {
      width: 60px;
      height: 60px;
    }

    .react_icon {
      animation: ${cardAnimation} 2s linear infinite;
    }
  }

  .card_title {
    margin-top: 38px;
    font-size: 16px;
    font-weight: 400;
  }

  .card_experience {
    width: 110px;
    margin-top: 34px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;
