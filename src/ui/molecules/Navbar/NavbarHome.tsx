"use client"

import NavLink from '../../atoms/Links/Link';
import  {NavbarContainer, Title, LinksContainer} from "./NavbarStyles";

const NavbarHome = () => {

  return (
    <NavbarContainer>
      <Title>Beauty Salon</Title>
      <LinksContainer>
        <NavLink href="/login">Login</NavLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default NavbarHome;
