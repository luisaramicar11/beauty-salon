"use client";
import React from 'react';
import { Container } from "./ServicesStyles";
import { useTheme } from 'styled-components'; 
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import Button from '@/ui/atoms/Buttton/Button';
import { Title } from '../Navbar/NavbarStyles';
import Modal from '@/ui/organisms/services/ModalService';
import { IContent } from '@/app/core/application/dto';

interface sectionProps {
  service: IContent | null;
}

const Section = ({service}: sectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const theme = useTheme();
  return (
    <Container>
      <Title>Servicios</Title>
      <Button
            onClick={openModal}
            textColor={theme.colors.textWhite}
            textColorIcon={theme.colors.textWhite}
            bgColor={theme.colors.buttonPink}
            icon={<IoIosAddCircleOutline />}
            width={200}
          >
            Agregar Servicio
          </Button>
          <Modal isOpen={isModalOpen} onClose={closeModal} service={service} />
    </Container>
  )
}

export default Section