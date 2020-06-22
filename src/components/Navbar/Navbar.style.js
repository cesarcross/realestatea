// import styled from "styled-components";

// export const NavbarContainer = styled.div`
//   /* border: 2px solid green; */
// `;

// export const NavItem = styled.div`
//   /* border: 2px solid yellow; */

//   button {
//     border: none;
//   }
// `;

// NEW NAV DOWN BELOW
import styled from 'styled-components';
import { Nav as NavItem, Navbar as NavbarBootstrap } from 'react-bootstrap';

export const NavbarContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Navbar = styled(NavbarBootstrap)`
  margin: 0;
  padding: 0;

  .navbar-toggler {
    margin-right: 10px;
    border-color: #85d7ea;

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(133, 215, 234, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }

  @media screen and (min-width: 768px) {
  }
`;

export const Nav = styled(NavItem)`
  background: #85d7ea;
  margin: 0 auto;

  button {
    font-weight: 500;
    color: #fff;
    background: transparent;
    border: none;
    margin: 5px;
  }
  span {
    display: none;
  }

  .first-nav-item {
    margin-top: 50px;
  }

  .last-nav-item {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    background: none;

    button {
      margin: 60px 0 0;
    }

    span {
      display: inline;
      margin: 0 5px;
    }

    button,
    span {
      color: #323232;
    }

    .nav-item {
      margin: 0;
    }

    .last-nav-item {
      button {
        margin-right: 40px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    span {
      margin: 0 20px;
    }
  }
`;
