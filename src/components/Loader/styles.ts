import styled from "styled-components";

export const Container = styled.div`
  .loader {
    border: 2px solid var(--green);
    border-top: 2px solid var(--shape);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: load 0.3s linear infinite;
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
