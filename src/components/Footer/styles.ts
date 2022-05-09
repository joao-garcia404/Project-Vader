import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 60px;
  background: var(--green);
  margin-top: 30px;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span {
      color: var(--text-white);
    }

    a {
      /* margin-top: 20px; */
      text-decoration: none;
      color: var(--text-white);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;
