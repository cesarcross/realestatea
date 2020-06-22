import styled from 'styled-components';
import Slider from 'react-slick';

export const CarouselContainer = styled.div``;

export const TemporaryImage = styled.div`
  /* border: 2px solid red; */
  img {
    width: 90%;
    border-radius: 5px;
  }
`;

export const SliderContainer = styled.div`
  /* display: none; */
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: block;

    .slick-slider {
      margin: 0;

      .slick-prev {
        /* left: 15px; */
      }

      .slick-next {
        /* right: 15px; */
      }

      .slick-prev,
      .slick-next {
        z-index: 1;
      }

      .slick-arrow::before {
        color: #000;
        opacity: 1;
      }
    }
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
