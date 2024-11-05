"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

export const Loader = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.buttonPink};; 
  border-top: 8px solid ${({ theme }) => theme.colors.buttonPinkHover};; 
  border-radius: 50%;
  width: 60px; 
  height: 60px; 
  animation: ${spin} 1s linear infinite; 
`;

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

export default Loading;