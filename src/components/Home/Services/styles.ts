import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 60px 0;
  background: var(--shape);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: var(--green);
  }

  main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 60px;
    padding: 0 20px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-weight: 500;
        font-size: 18px;
      }

      img {
        margin-top: 30px;
      }
    }
  }

  @media (max-width: 725px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        margin-bottom: 20px;

        img {
          margin-top: 10px;
        }
      }
    }
  }
`;
