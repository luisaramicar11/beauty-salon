"use client";
import React from "react";
import { ModalOverlay, ModalContent } from "./ModalStyles";
import CloseButton from "@/ui/atoms/Buttton/Modal/Button";
import { ClientForm } from "./ClientForm";
import { IContent } from "@/app/core/application/dto/clients";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: IContent | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, client }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose} iconColor="#000" />
        <ClientForm initialData = {client} onClose={onClose}/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;