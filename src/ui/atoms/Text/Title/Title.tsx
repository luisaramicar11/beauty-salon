"use client";
import React from 'react';
import { TitleStyled } from './TitleStyles';

interface TitleProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xlarge'; 
  className?: string; 
}

const Title: React.FC<TitleProps> = ({
  children,
  size = 'medium',
  className,
}) => {
  return (
    <TitleStyled size={size} className={className}>
      {children}
    </TitleStyled>
  );
};

export default Title;