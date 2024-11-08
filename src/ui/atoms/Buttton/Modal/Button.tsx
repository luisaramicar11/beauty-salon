"use client";
import React from 'react';
import { FiX } from 'react-icons/fi';
import { CloseButtonStyled } from "./ButtonStyles";

type CloseButtonProps = {
  onClick: () => void;
  iconColor?: string; 
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, iconColor }) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <FiX color={iconColor || '#000'} /> 
    </CloseButtonStyled>
  );
};

export default CloseButton;