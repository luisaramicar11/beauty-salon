"use client";
import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; 
  background-image: url('https://impulsapopular.com/wp-content/uploads/2019/06/4504-Pasos-para-abrir-un-sal%C3%B3n-de-belleza.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.h1`
  color: ${({ theme }) => theme.colors.buttonPink};
  font-size: 6rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeroPage: React.FC = () => {
  const theme = useTheme();
  return (
    <HeroContainer>
      <HeroText>Bienvenido!</HeroText>
    </HeroContainer>
  );
};

export default HeroPage;
