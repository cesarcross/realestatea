import styled from "styled-components";

export const ContactContainer = styled.div`
  border: 2px solid green;
`;

export const Title = styled.h3`
  border: 2px solid yellow;
`;

export const Whatsapp = styled.div`
  border: 2px solid yellow;
`;

export const Form = styled.div`
  margin: 5px auto 0;
  width: 80%;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    color: #fff;

    span {
      display: block;
    }
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    display: flex;
    border-radius: 10px;
    width: 100%;
    margin: 15px auto;
    padding: 20px;
    border: none;
  }

  input:last-of-type {
    background: #242f62;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
  }

  @media screen and (min-width: 992px) {
    width: 40%;

    textarea {
      height: 255px;
    }

    input:last-of-type {
      width: 50%;
      padding: 5px 100px;
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
    margin: 0 5px;
    margin-left: 20px;

    h3 {
      text-align: left;
      margin: 0 0 60px;
    }
  }
`;
