import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  h2 {
    text-align: center;
  }

  main {
    display: flex; 
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 700px) {
    main {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;