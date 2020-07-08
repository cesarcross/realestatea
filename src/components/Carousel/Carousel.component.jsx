import React from "react";
import Slider from "react-slick";
import { Element } from "react-scroll";

import { CarouselContainer, SliderContainer, Item } from "./Carousel.style";

import fachada from "../../assets/images/fachada.jpeg";
import cozinha from "../../assets/images/cozinha.jpeg";
import cozinha2 from "../../assets/images/cozinha2.jpeg";
import piscina from "../../assets/images/piscina.jpeg";
import quarto from "../../assets/images/quarto.jpeg";
import sala from "../../assets/images/sala.jpeg";
import sala2 from "../../assets/images/sala2.jpeg";
import sala3 from "../../assets/images/sala3.jpeg";
import salajantar from "../../assets/images/salajantar.jpeg";
import vista from "../../assets/images/vista.jpeg";

const Carousel = () => {
  const settings = {
    dots: true,
    acessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element id="fotos" name="fotos">
      <CarouselContainer>
        <SliderContainer>
          <Slider {...settings}>
            <Item>
              <img src={fachada} alt=""></img>
            </Item>
            <Item>
              <img src={cozinha} alt=""></img>
            </Item>
            <Item>
              <img src={cozinha2} alt=""></img>
            </Item>
            <Item>
              <img src={piscina} alt=""></img>
            </Item>
            <Item>
              <img src={quarto} alt=""></img>
            </Item>
            <Item>
              <img src={sala} alt=""></img>
            </Item>
            <Item>
              <img src={sala2} alt=""></img>
            </Item>
            <Item>
              <img src={sala3} alt=""></img>
            </Item>
            <Item>
              <img src={salajantar} alt=""></img>
            </Item>
            <Item>
              <img src={vista} alt=""></img>
            </Item>
          </Slider>
        </SliderContainer>
      </CarouselContainer>
    </Element>
  );
};

export default Carousel;
