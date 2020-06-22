import React from 'react';
import { Element } from 'react-scroll';

import {
  CityContainer,
  Description,
  Title,
  Text,
  Picture,
  MaxWidth,
} from './City.style';

import city from '../../assets/images/city.jpg';
import city1 from '../../assets/images/city1.png';
import city2 from '../../assets/images/city2.jpg';
import city3 from '../../assets/images/city3.jpg';
import city4 from '../../assets/images/city4.jpeg';

export const City = () => (
  <Element id="city" name="city">
    <CityContainer>
      <MaxWidth>
        <Description>
          <Title>Conheça Águas de Lindóia</Title>
          <Text>
            Águas de Lindóia é um dos onze municípios paulistas considerados
            estâncias hidrominerais. Localizada a 180km de São Paulo, é uma
            cidade tranquila, repleta de áreas verdes e com exuberantes
            paisagens que podem ser avistadas das trilhas e montanhas mais
            próximas.
          </Text>
          <Text>
            O charmoso centro da cidade conta com a praça Adhemar de Barros,
            onde feiras e jardins contornam o famoso lago. Próximo dali, a
            avenida principal contém comércios locais e ótimas opções de
            restaurante. O acesso ao Balneário também é fácil, a cerca de 10
            minutos de carro. Para quem deseja qualidade de vida, Águas de
            Lindóia é uma excelente opção.
          </Text>
          <Text>Cidades próximas: Monte Sião, Lindóia, Serra Negra</Text>
          <Text>
            Conheça mais através do site: https://aguasdelindoia.com.br/
          </Text>
        </Description>
        <Picture>
          <img src={city} alt=""></img>
        </Picture>
        <Picture>
          <img src={city3} alt=""></img>
        </Picture>
        <Picture>
          <img src={city4} alt=""></img>
        </Picture>
        <Picture>
          <img src={city1} alt=""></img>
        </Picture>
        <Picture>
          <img src={city2} alt=""></img>
        </Picture>
      </MaxWidth>
    </CityContainer>
  </Element>
);

export default City;
