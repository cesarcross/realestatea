import styled from "styled-components";
import Slider from "react-slick";

export const CarouselContainer = styled.div``;

export const TemporaryImage = styled.div`
  /* border: 2px solid red; */
  img {
    width: 90%;
    border-radius: 5px;
  }
`;

export const SliderContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CarouselSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
`;

export const Item = styled.div`
  img {
    width: 100%;
  }
`;
