"use client";
import {StyledIcon } from "./IconStyles";

interface IconProps {
  children: React.ReactNode;
  textColorIcon?: string; 
  textHoverColorIcon?: string;
}

const Icon: React.FC<IconProps> = ({ children, textColorIcon, textHoverColorIcon }) => {
  return(
  <StyledIcon 
  textColorIcon={textColorIcon}
  textHoverColorIcon={textHoverColorIcon}>
    {children}
  </StyledIcon>
  )
};

export default Icon;