"use client";
import React from 'react';
import Title from '../../atoms/Text/Title/Title';
import Paragraph from '../../atoms/Text/Parragraph/Parragraph';
import ActionButtons from '../ButtonsCard/ButtonsCard';
import { CardContainer } from './CardStyles';

interface CardProps {
  name: string;
  description: string;
  price: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ name, description, price, onEdit, onDelete }) => {
  return (
    <CardContainer>
      <Title size="medium">{name}</Title>
      <Paragraph size="small">{description}</Paragraph>
      <Paragraph size="small">Precio: {price}</Paragraph>
      <ActionButtons onEdit={onEdit} onDelete={onDelete} />
    </CardContainer>
  );
};

export default Card;