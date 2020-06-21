import React from "react";

import {
  DescriptionContainer,
  Item,
  RuleIcon,
  BedIcon,
  ShowerIcon,
  CarIcon,
  BuildingIcon,
  CouchIcon,
  MountainIcon,
  MapIcon,
  PetIcon,
  Nearby,
} from "./Description.style";

export const Description = () => (
  <DescriptionContainer>
    <Item>
      <ul>
        <li>
          <RuleIcon />
          <p>90 m²</p>
        </li>
        <li>
          <BedIcon />
          <p>3 quartos</p>
        </li>
        <li>
          <ShowerIcon />
          <p>2 banheiros</p>
        </li>
      </ul>
      <ul>
        <li>
          <CarIcon />
          <p>1 vaga</p>
        </li>
        <li>
          <BuildingIcon />
          <p>3 andar</p>
        </li>
        <li>
          <CouchIcon />
          <p>Mobiliado</p>
        </li>
      </ul>
      <ul>
        <li>
          <MountainIcon />
          <p>Vista livre</p>
        </li>
        <li>
          <PetIcon />
          <p>Aceita animais</p>
        </li>
        <li>
          <MapIcon />
          <p>Excelente localização</p>
        </li>
      </ul>
    </Item>
    <Nearby>Cidades próximas: Monte Sião, Lindóia, Serra Negra</Nearby>
  </DescriptionContainer>
);

export default Description;
