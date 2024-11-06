"use client"
import Link from 'next/link';
import {StyledLink} from "./LinkStyles"

type LinkProps = {
    href: string;
    children?: React.ReactNode; 
}

const NavLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
);

export default NavLink;
