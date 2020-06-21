import React from "react";

import { NavbarContainer, NavItem } from "./Navbar.style";

export const Navbar = () => (
  <NavbarContainer>
    <NavItem>
      <button>Fotos</button>
    </NavItem>
    <NavItem>
      <button>Descrição</button>
    </NavItem>
    <NavItem>
      <button>Águas de Lindóia</button>
    </NavItem>
    <NavItem>
      <button>Contato</button>
    </NavItem>
  </NavbarContainer>
);

export default Navbar;
