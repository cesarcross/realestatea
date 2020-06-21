import React from "react";

import {
  CityContainer,
  Description,
  Title,
  Text,
  Pictures,
} from "./City.style";

export const City = () => (
  <CityContainer>
    <Description>
      <Title>Conheça Águas de Lindóia</Title>
      <Text>
        Localizada a x km de sao paulo e com fontes de aguas termais distante do
        apocalipse zumbi e belas plantaçoes de acerola com capivaras ao redor do
        lago e gnomos tocando violino, é a cidade perfeita para quem gosta de
        uma boa torta de palmito
      </Text>
    </Description>
    <Pictures />
  </CityContainer>
);

export default City;
