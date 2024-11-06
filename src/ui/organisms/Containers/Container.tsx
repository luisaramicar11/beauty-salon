"use client";
import React from 'react';
import Card from '../../molecules/Cards/Card'; 
import { CardsContainer } from "./ContainerStyles";
import { IAllServicesResponse} from "../../../app/core/application/dto/services/all-services-response.dto";
//import { useState } from "react";
//import  Modal  from "../Modals/ModalCompany"
//import { ServicesService } from '../../../app/infrastructure/services/services.service';
//import { useRouter } from "next/navigation";

interface ICardProps {
  data: IAllServicesResponse;
}

const CardsGrid = ({data}: ICardProps) => {
  //const [ isModalOpen, setIsModalOpen] = useState(false);
  //const [ selectedCompany, setSelectedCompany] = useState<IContent | null>(null);

  //const serviceService = new ServicesService();
  //const router = useRouter();
  
  const handleDelete = async () => {
    console.log("delete")
    /* const isConfirmed = confirm("¿Estás seguro que deseas borrar la compañía?");
    if(!isConfirmed) return;
    try {
      await companyService.destroy(id);
      console.log("Compañia eliminada");
      router.refresh();
    } catch (error) {
      console.log("Error al eliminar la compañía", error);
    } */
  };

const handleEdit = () => {
    console.log("edit")
  //setSelectedCompany(company)
  //setIsModalOpen(true);
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
          onDelete={() => handleDelete()}  
          onEdit={() => handleEdit()}   
        />
      ))}
    </CardsContainer>
    
    </>
    
  );
};

export default CardsGrid;