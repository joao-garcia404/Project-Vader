import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-weight: 500;
  }

  > main {
    margin-top: 20px;
    padding: 34px 62px 34px 44px;
    border-radius: 20px;
    background: var(--shape);

    display: flex;
    align-items: flex-start;

    aside {
      width: 2px;
      height: 280px;
      background: var(--green);
    }
  }

  @media (max-width: 825px) {
    > h2 {
      margin-top: 20px;
    }
  }
`;

export const Formation = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 6px;
  margin-bottom: 20px;

  div {
    width: 12px;
    height: 12px;
    margin-top: 6px;
    border-radius: 50%;
    background: var(--green);

    position: relative;
    left: -7px;
  }

  main {
    h3 {
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 825px) {
    main {
      h3 {
        font-size: 14px;
      }
    }
  }
`;