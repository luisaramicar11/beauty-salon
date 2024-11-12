"use client"

import NavLink from '../../atoms/Links/Link';
import LogoutButton from '../../atoms/Buttton/Button';
import  {NavbarContainer, Title, LinksContainer} from "./NavbarStyles";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useTheme } from 'styled-components'; 
const Navbar = () => {
  const router = useRouter();  
  const theme = useTheme();
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
      <Title>Beauty Salon</Title>
      <LinksContainer>
        <NavLink href="/dashboard/services">Servicios</NavLink>
        <NavLink href="/dashboard/clients">Clientes</NavLink>
        <LogoutButton  onClick={handleLogout} textColorIcon={theme.colors.buttonPink} icon={<RiLogoutCircleRFill />}/>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
