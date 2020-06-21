import styled from "styled-components";

export const CarouselContainer = styled.div`
  border: 2px solid green;
`;

export const SliderContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: block;

    .slick-slider {
      margin: 0;

      .slick-prev {
        left: 15px;
      }

      .slick-next {
        right: 15px;
      }

      .slick-prev,
      .slick-next {
        z-index: 1;
      }

      .slick-arrow::before {
        /* color: #67267a; */
        color: #fff;
        opacity: 1;
      }

      /* .slick-dots {
        padding-bottom: 10px;

        button::before {
          font-size: 1rem;
          color: #67267a;
          opacity: 1;
        }

        .slick-active {
          button::before {
            color: #6dcfa8;
          }
        }
      } */
    }
  }
`;

export const Image = styled.div`
  img {
    /* width: 100%; */
    margin: 0 auto;
  }
`;
