// src/ui/atoms/Links/LinkStyles.tsx
import styled from 'styled-components';
import React from 'react';

// Crear el componente estilizado sin usar `forwardRef` por ahora
const StyledLinkComponent = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

// Aquí estamos usando React.forwardRef de forma correcta para pasar la ref a `StyledLinkComponent`
const StyledLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof StyledLinkComponent>>(
  (props, ref) => {
    return <StyledLinkComponent ref={ref} {...props} />;
  }
);

// Hacer que el nombre del componente sea más claro para la depuración
StyledLink.displayName = 'StyledLink';

export { StyledLink };



