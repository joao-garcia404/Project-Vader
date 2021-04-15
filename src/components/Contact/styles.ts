import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 60px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
  }

  main {
    width: 750px;
    height: 500px;
    margin-top: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 40px 60px;
    border-radius: 30px;
    background: var(--shape);
  }

  form {
    width: 300px;

    div {

      &.nameInput {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border-radius: 10px;
        background: #F0F0F0;

        display: flex;
        align-items: center;

        input {
          width: 100%;
          background: transparent;
          border: none;
          margin-left: 10px;
          font-size: 16px;
          font-weight: 400;
        }
      }

      &.emailInput {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        margin-top: 10px;
        border-radius: 10px;
        background: #F0F0F0;

        display: flex;
        align-items: center;

        input {
          width: 100%;
          background: transparent;
          border: none;
          margin-left: 10px;
          font-size: 16px;
          font-weight: 400;
        }
      }

      &.messageInput {
        width: 100%;
        height: 185px;
        padding: 10px 14px;
        margin-top: 10px;
        border-radius: 10px;
        background: #F0F0F0;

        textarea {
          width: 100%;
          height: 100%;
          resize: none;
          border: none;
          background: transparent;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    button {
      width: 100%;
      height: 34px;
      border-radius: 8px;
      background: var(--green);
      border: none;
      color: var(--text-white);
      font-size: 18px;
      font-weight: 500;
      margin-top: 16px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 770px) {
    main {
      > img {
        display: none;
      }

      width: 600px;
      height: 450px;
      margin-top: 60px;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 40px 60px;
      border-radius: 30px;
      background: var(--shape);
    }
  }

  @media (max-width: 630px) {
    main {
      width: 330px;
      height: 416px;
      border-radius: 16px;
      margin-top: 20px;
    }

    form {
      width: 290px;

      div {
        &.nameInput {

        width: 290px;
        height: 40px;
        padding: 0 10px;
        border-radius: 10px;
        background: #F0F0F0;

        display: flex;
        align-items: center;

        input {
          width: 100%;
          background: transparent;
          border: none;
          margin-left: 10px;
          font-size: 16px;
          font-weight: 400;
        }
      }
      }
    }
  }
`;