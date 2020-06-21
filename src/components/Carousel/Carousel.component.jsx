import React from "react";
import Slider from "react-slick";

import { CarouselContainer, SliderContainer, Image } from "./Carousel.style";

import fachada from "../../assets/images/fachada.jpeg";
import cozinha from "../../assets/images/cozinha.jpeg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <SliderContainer>
        <Slider {...settings}>
          <Image>
            <img src={fachada} alt="" />
          </Image>
          <Image>
            <img src={cozinha} alt="" />
          </Image>
        </Slider>
      </SliderContainer>
    </CarouselContainer>
  );
};

export default Carousel;
