"use client"

import NavLink from '../../atoms/Links/Link';
import LogoutButton from '../../atoms/Buttton/Button';
import  {NavbarContainer, Title, LinksContainer} from "./NavbarStyles";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
const Navbar = () => {
  const router = useRouter();  
  const handleLogout = async () => {
    console.log('Cerrando session');
    try {
        await signOut({redirect: false})
        router.push('/login')
    } catch (error) {
        console.log("Error al cerrar la session", error)
    }

  };

  return (
    <NavbarContainer>
      <Title>Bauty Salon</Title>
      <LinksContainer>
        <NavLink href="/servicios">Servicios</NavLink>
        <NavLink href="/clientes">Clientes</NavLink>
        <NavLink href="/empleados">Empleados</NavLink>
        <NavLink href="/citas">Citas</NavLink>
        <LogoutButton onClick={handleLogout} icon={<RiLogoutCircleRFill />}/>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
