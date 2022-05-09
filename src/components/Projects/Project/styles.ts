import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 330px;
  height: 170px;
  padding: 20px;
  border-radius: 16px;
  margin-top: 60px;
  background: var(--shape);
  box-shadow: 0px 50px 70px -20px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transition: 0.4s;

  &:hover {
    transform: translateY(-14px);
  }

  .project_title {
    font-size: 18px;
    font-weight: 600;
  }

  .project_description {
    font-size: 16px;
    font-weight: 300;
    margin-top: 8px;
  }

  button {
    width: 110px;
    height: 30px;
    border: none;
    border-radius: 6px;
    color: var(--text-white);
    font-weight: 500;
    font-size: 14px;
    background: var(--green);

    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
  }
`;
