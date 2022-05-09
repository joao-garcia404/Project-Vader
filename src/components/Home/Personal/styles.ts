import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 30px 20px 00px 20px;

  main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      animation: ${appearFromLeft} 1s;

      h1 {
        font-size: 34px;
        font-weight: 600;
        color: var(--green);
      }

      h2 {
        font-weight: 500;
      }

      p {
        width: 380px;
        margin-top: 10px;
        font-size: 16px;
      }

      button {
        width: 160px;
        height: 50px;
        margin-top: 20px;
        font-size: 16px;
        font-weight: 600;
        border: 0;
        border-radius: 10px;
        color: var(--text-white);
        background: var(--green);

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.2s;

        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    img {
      margin-top: 60px;
      animation: ${appearFromRight} 1s;
    }
  }

  @media (max-width: 850px) {
    padding-bottom: 30px;

    main {
      flex-direction: column-reverse;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          margin-top: 20px;
          text-align: center;
        }

        p {
          width: 350px;
          margin-top: 20px;
          font-size: 16px;
          text-align: center;
        }

        button {
          margin-top: 30px;
        }
      }

      img {
        width: 330px;
        height: 336px;
      }
    }
  }
`;
