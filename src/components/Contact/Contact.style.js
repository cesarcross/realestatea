import styled from "styled-components";

export const ContactContainer = styled.div`
  /* border: 2px solid green; */
`;

export const Title = styled.h3`
  margin-top: 20px;
`;

export const Whatsapp = styled.div`
  /* border: 2px solid yellow; */
`;

export const Form = styled.div`
  width: 80vw;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #d3d3cb;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  textarea {
    resize: none;
    height: 200px;
  }

  input,
  textarea {
    border: none;
    margin: 20px 0;
    padding: 5px;
    border-radius: 1px;
    background: #ada7a7;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1rem;
    }

    ::placeholder {
      /* color: #3b0918; */
    }
  }

  input:last-of-type {
    border: none;
    color: #fff;
    background: #436f8a;
    width: 40%;
    margin: 5px auto;
    height: 40px;
    border-radius: 2px;
    font-size: 1rem;

    &:hover {
      background: #709fb0;
      transition: all 0.3s ease;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    max-width: 540px;
  }
`;
