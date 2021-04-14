import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 60px 20px;

  display: flex;
  align-items: center;

  > main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  @media (max-width: 825px) {
    > main {
      flex-direction: column-reverse;
    }
  }
`;
