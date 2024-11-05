"use client";
import React from 'react';
import {StyledButton} from './ButtonStyles';
import Icon from '../Icons/Icon';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode; 
    icon?: React.ReactNode; 
    textColorIcon?: string;
    textHoverColorIcon?: string;  
    textColor?: string; 
    bgColor?: string;
  };
  
  const Button: React.FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    onClick,
    children,
    icon,
    textColorIcon,
    textHoverColorIcon,
    textColor,
     bgColor
  }) => {
    return (
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        bgColor={bgColor}
        textColor={textColor}
        textHoverColorIcon={textHoverColorIcon}
      >
        {children}
        {icon && <Icon textColorIcon={textColorIcon} textHoverColorIcon={textHoverColorIcon}>{icon} </Icon>} 
      </StyledButton>
    );
  };
  
  export default Button;