import styled from "styled-components";

export const CityContainer = styled.div`
  /* border: 2px solid green; */
  /* background: #1b6ca8; */
  background: #85d7ea;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const MaxWidth = styled.div`
  max-width: 992px;
  margin: 0 auto;
`;

export const Description = styled.div`
  /* border: 2px solid yellow; */
  margin: 10px;
  color: #fff;
  text-align: left;

  @media screen and (min-width: 992px) {
    margin-left: 25px;
  }
`;

export const Title = styled.h3`
  /* border: 2px solid yellow; */
`;

export const Text = styled.p`
  /* border: 2px solid yellow; */
`;

export const Picture = styled.div`
  margin: 10px auto;

  img {
    border-radius: 5px;
    width: 95%;
  }
`;
