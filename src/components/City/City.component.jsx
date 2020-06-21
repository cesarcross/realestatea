import React from "react";

import {
  CityContainer,
  Description,
  Title,
  Text,
  Picture,
  MaxWidth,
} from "./City.style";

import city from "../../assets/images/city.jpg";
import city1 from "../../assets/images/city1.png";
import city2 from "../../assets/images/city2.jpg";
import city3 from "../../assets/images/city3.jpeg";
import city4 from "../../assets/images/city4.jpeg";

export const City = () => (
  <CityContainer>
    <MaxWidth>
      <Description>
        <Title>Conheça Águas de Lindóia</Title>
        <Text>
          Localizada a x km de sao paulo e com fontes de aguas termais distante
          do apocalipse zumbi e belas plantaçoes de acerola com capivaras ao
          redor do lago e gnomos tocando violino, é a cidade perfeita para quem
          gosta de uma boa torta de palmito
        </Text>
      </Description>
      <Picture>
        <img src={city} alt=""></img>
      </Picture>
      <Picture>
        <img src={city1} alt=""></img>
      </Picture>
      <Picture>
        <img src={city2} alt=""></img>
      </Picture>
      <Picture>
        <img src={city3} alt=""></img>
      </Picture>
      <Picture>
        <img src={city4} alt=""></img>
      </Picture>
    </MaxWidth>
  </CityContainer>
);

export default City;
