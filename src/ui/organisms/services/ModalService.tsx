"use client";
import React from "react";
import {ServiceForm} from "./ServiceForm"
import { ModalOverlay, ModalContent } from "./ModalStyles";
import { IContent } from "@/app/core/application/dto";
import CloseButton from "@/ui/atoms/Buttton/Modal/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: IContent | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose} iconColor="#000" />
        <ServiceForm initialData = {service} onClose={onClose}/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;