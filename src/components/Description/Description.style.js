import styled from "styled-components";

import {
  FaBed,
  FaShower,
  FaBuilding,
  FaRulerHorizontal,
  FaCouch,
  FaMountain,
  FaMapMarkerAlt,
  FaCar,
} from "react-icons/fa";

import { MdPets } from "react-icons/md";

export const DescriptionContainer = styled.div`
  margin: 40px auto;

  @media screen and (min-width: 992px) {
    margin: 80px auto;
  }
`;

export const Item = styled.div`
  display: flex;

  justify-content: space-evenly;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    width: 80px;
  }

  p {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 992px) {
    li {
      width: 155px;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const RuleIcon = styled(FaRulerHorizontal)`
  font-size: 25px;
  color: #85d7ea;
`;

export const BedIcon = styled(FaBed)`
  font-size: 25px;
  color: #85d7ea;
`;

export const ShowerIcon = styled(FaShower)`
  font-size: 25px;
  color: #85d7ea;
`;

export const CarIcon = styled(FaCar)`
  font-size: 25px;
  color: #85d7ea;
`;

export const BuildingIcon = styled(FaBuilding)`
  font-size: 25px;
  color: #85d7ea;
`;

export const CouchIcon = styled(FaCouch)`
  font-size: 25px;
  color: #85d7ea;
`;

export const MountainIcon = styled(FaMountain)`
  font-size: 25px;
  color: #85d7ea;
`;

export const PetIcon = styled(MdPets)`
  font-size: 25px;
  color: #85d7ea;
`;

export const MapIcon = styled(FaMapMarkerAlt)`
  font-size: 25px;
  color: #85d7ea;
`;

export const PriceText = styled.p`
  margin-top: 20px;
`;
export const Price = styled.h3`
  @media screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

// export const Nearby = styled.p`
//   margin: 20px;
//   font-size: 0.7rem;
//   flex-wrap: wrap;

//   @media screen and (min-width: 992px) {
//     font-size: 1rem;
//   }
// `;
