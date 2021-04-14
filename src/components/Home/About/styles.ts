import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: var(--shape);

  main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      h2 {
        font-size: 34px;
        font-weight: 600;
        color: var(--green);
      }

      p {
        width: 430px;
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

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  @media (max-width: 850px) {
    main {
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
          margin-top: 20px;
        }

        p {
          width: 300px;
          margin-top: 20px;
          font-size: 16px;
          text-align: justify;
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