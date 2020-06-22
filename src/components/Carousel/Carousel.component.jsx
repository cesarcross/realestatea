import React from 'react';
import { Element } from 'react-scroll';

import {
  CarouselContainer,
  SliderContainer,
  CarouselSlider,
  Item,
  TemporaryImage,
} from './Carousel.style';

import fachada from '../../assets/images/fachada.jpeg';
import cozinha from '../../assets/images/cozinha.jpeg';

const Carousel = () => {
  const settings = {
    dots: true,
    acessibility: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element id="fotos" name="fotos">
      <CarouselContainer>
        <TemporaryImage>
          <img src={fachada} alt=""></img>
        </TemporaryImage>
        <SliderContainer>
          <CarouselSlider {...settings}>
            <Item>
              <img src={fachada} alt=""></img>
            </Item>
            <Item>
              <img src={cozinha} alt=""></img>
            </Item>
          </CarouselSlider>
        </SliderContainer>
      </CarouselContainer>
    </Element>
  );
};

export default Carousel;
