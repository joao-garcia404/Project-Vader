import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-top: 70px;

  @media (max-width: 615px) {
    gap: 40px;
    margin-top: 40px;
  }
`;
