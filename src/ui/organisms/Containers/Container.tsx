"use client";
import React from 'react';
import Card from '../../molecules/Cards/Card'; 
import { CardsContainer } from "./ContainerStyles";
import { useState } from "react";
import { IAllServicesResponse, IContent } from '@/app/core/application/dto';
import Modal from '../services/ModalService';
//import { EndpointService } from '@/app/core/application/model/services.enum';
//import { ServicesService } from '../../../app/infrastructure/services/services.service';
import { useRouter } from "next/navigation";
import { EndpointService } from '@/app/core/application/model/services.enum';

interface ICardProps {
  data: IAllServicesResponse;
}

const CardsGrid = ({data}: ICardProps) => {
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ selectedService, setSelectedService] = useState<IContent | null>(null);

  const router = useRouter();
  
  const handleDelete = async (id: number) => {
    console.log("ID a eliminar:", id); // Imprime el id para verificar
  
    // Convertimos el id a string, ya que la URL espera un string
    const idString = id.toString();
    console.log("ID en string:", idString); // Verifica que el ID esté convertido a string
  
    const isConfirmed = confirm("¿Estás seguro que deseas borrar el servicio?");
    if (!isConfirmed) return;
  
    try {
      const res = await fetch(`${EndpointService.DELETE_SERVICE.replace(":id", idString)}`, {
        method: "DELETE",
      });
  
      if (!res.ok) {
        throw new Error("Error borrando el servicio");
      }
      console.log("Servicio eliminado");
      router.refresh();
    } catch (error) {
      console.log("Error al eliminar el servicio", error);
    }
  };
  

const handleEdit = (service: IContent) => {
  setSelectedService(service);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedService(null);  
};

  return (
    <>
    <CardsContainer>
      {data.content.map((service) => (
        <Card
          key={service.id}
          name={service.name}
          description={service.description}
          price={(service.price).toString()}
          onDelete={() => handleDelete(service.id)}  
          onEdit={() => handleEdit(service)}   
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} service={selectedService}/>
    </CardsContainer>
    
    </>
    
  );
};

export default CardsGrid;