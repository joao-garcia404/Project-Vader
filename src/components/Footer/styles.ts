import styled from 'styled-components';

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

    span {
      color: var(--text-white);
    }

    a {
      margin-top: 20px;
      text-decoration: none;
      color: var(--text-white);
    }
  }
`;
