"use client";
import React from 'react';
import { Container } from "./ServicesStyles";
import { useTheme } from 'styled-components'; 
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import Button from '@/ui/atoms/Buttton/Button';
import { Title } from '../Navbar/NavbarStyles';
import { IContent } from '@/app/core/application/dto/clients';
import Modal from '@/ui/organisms/clients/ModalClient';

interface sectionProps {
  client: IContent | null;
}

const Section = ({client}: sectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const theme = useTheme();
  return (
    <Container>
      <Title>Clientes</Title>
      <Button
            onClick={openModal}
            textColor={theme.colors.textWhite}
            textColorIcon={theme.colors.textWhite}
            bgColor={theme.colors.buttonPink}
            icon={<IoIosAddCircleOutline />}
            width={200}
          >
            Agregar Cliente
          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal} client={client} />
    </Container>
  )
}

export default Section