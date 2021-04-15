import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 30px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h2 {
    font-weight: bold;
    font-size: 28px;
  }

  main {
    width: 100%;
    margin-top: 30px;

    display: flex;
    justify-content: space-between;

    img {
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 20px;

    main {
      margin-top: 30px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
