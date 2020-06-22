// import React from "react";

// import { NavbarContainer, NavItem } from "./Navbar.style";

// export const Navbar = () => (
//   <NavbarContainer>
//     <NavItem>
//       <button>Fotos</button>
//     </NavItem>
//     <NavItem>
//       <button>Descrição</button>
//     </NavItem>
//     <NavItem>
//       <button>Águas de Lindóia</button>
//     </NavItem>
//     <NavItem>
//       <button>Contato</button>
//     </NavItem>
//   </NavbarContainer>
// );

// export default Navbar;

// NEW NAV DOWN BELOW

import React from 'react';

import { NavbarContainer, Navbar, Nav } from './Navbar.style';
import Scroll from 'react-scroll';

const NavbarDefault = () => {
  const ScrollLink = Scroll.Link;

  return (
    <NavbarContainer>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ScrollLink to="fotos" spy={true} smooth={true} duration={500}>
              <Nav.Item className="first-nav-item">
                <button>Fotos</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="descricao" spy={true} smooth={true} duration={1000}>
              <Nav.Item>
                <button>Descrição</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink
              to="aguas de lindoia"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Nav.Item>
                <button>Águas de Lindóia</button>
                <span className="bar">|</span>
              </Nav.Item>
            </ScrollLink>
            <ScrollLink to="contato" spy={true} smooth={true} duration={1000}>
              <Nav.Item>
                <button>Contato</button>
              </Nav.Item>
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarDefault;
