import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > main {
    margin-top: 70px;
  }

  @media (max-width: 615px) {
    > main {
      margin-top: 40px;
    }
  }
`;
