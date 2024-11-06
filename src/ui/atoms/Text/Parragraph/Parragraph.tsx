"use client";
import React from 'react';
import { ParagraphStyled } from './ParragraphStyles';

interface ParagraphProps {
  children: React.ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large'; 
  className?: string; 
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size = 'medium',
  className,
}) => {
  return (
    <ParagraphStyled size={size} className={className}>
      {children}
    </ParagraphStyled>
  );
};

export default Paragraph;