"use client";

import { IAllClients, IContent } from "@/app/core/application/dto/clients";
import { EndpointClients } from "@/app/core/application/model/clients.enum";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { StyledTable } from "./TableClientsStyles";
import TableHeaderRow from "@/ui/molecules/TableRows/TableHeaderRow";
import TableRow from "@/ui/molecules/TableRows/TableDataRow";
import Modal from "../clients/ModalClient";

interface ITableProps {
    data: IAllClients;
}
const Table = ({data}: ITableProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState<IContent | null>(null);

    const router = useRouter();

    const handleDelete = async (id: number) => {
        console.log("ID a eliminar:", id); // Imprime el id para verificar
      
        // Convertimos el id a string, ya que la URL espera un string
        const idString = id.toString();
        console.log("ID en string:", idString); // Verifica que el ID esté convertido a string
      
        const isConfirmed = confirm("¿Estás seguro que deseas borrar el cliente?");
        if (!isConfirmed) return;
      
        try {
          const res = await fetch(`${EndpointClients.DELETE_CLIENT.replace(":id", idString)}`, {
            method: "DELETE",
          });
      
          if (!res.ok) {
            throw new Error("Error borrando el cliente");
          }
          console.log("Cliente eliminado");
          router.refresh();
        } catch (error) {
          console.log("Error al eliminar el cliente", error);
        }
      };

      const handleEdit = (client: IContent) => {
        setSelectedClient(client);
        setIsModalOpen(true);
      };
      
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedClient(null);  
      };

      return (
        <StyledTable>
          <TableHeaderRow/>
          <tbody>
            {data.content.map((client) => (
              <TableRow
                key={client.id}
                name={client.firstName}
                lastName={client.lastName}
                email={client.email}
                phone={client.phone}
                onDelete={()=> handleDelete(client.id)}
                onEdit={()=> handleEdit(client)}
              />
                
              
            ))}
          </tbody>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} client={selectedClient}/>
        </StyledTable>
      );
      
}

export default Table;