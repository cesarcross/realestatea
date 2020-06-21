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
import styled from "styled-components";
import { Nav as NavItem, Navbar as NavbarBootstrap } from "react-bootstrap";

export const NavbarContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Navbar = styled(NavbarBootstrap)`
  margin: 0;
  padding: 0;

  .logo-mobile {
    width: 52px;
    margin-left: 10px;
  }

  .logo {
    display: none;
  }

  .navbar-toggler {
    margin-right: 10px;
    border-color: #85d7ea;

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(133, 215, 234, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }

  @media screen and (min-width: 768px) {
    .logo-mobile {
      display: none;
    }

    .logo {
      display: block;
      width: 130px;
      margin-top: 5px;
      margin-left: 45px;
    }
  }
`;

export const Nav = styled(NavItem)`
  background: #85d7ea;

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

  a {
    .icon-mobile {
      width: 37px;
      margin: 5px;
      margin-bottom: 30px;
    }
    .icon {
      display: none;
    }
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

    a {
      .icon-mobile {
        display: none;
      }
      .icon {
        display: inline;
      }
    }

    .icons-container {
      .icon {
        position: absolute;
        top: 20px;
      }

      .fb {
        right: 95px;
      }

      .inst {
        right: 45px;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    span {
      margin: 0 20px;
    }
  }
`;
