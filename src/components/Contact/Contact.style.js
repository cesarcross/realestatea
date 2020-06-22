import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 50px auto;
`;

export const Title = styled.h3`
  margin: 10px auto;
  width: 90%;
`;

export const Whatsapp = styled.div`
  margin: 30px auto;
`;

export const FormContainer = styled.div`
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
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
    background: #f7f4f4;

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
    border-radius: 5px;
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
