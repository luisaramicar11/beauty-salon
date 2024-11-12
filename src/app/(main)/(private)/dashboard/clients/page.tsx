import { IAllClientsRequest } from '@/app/core/application/dto/clients'
import { ClientService } from '@/app/infrastructure/services';
import ClientsTemplate from '@/ui/template/Clients/Clients';
import React from 'react'

interface IProps{
  searchParams: IAllClientsRequest
}

export const generateMetadata = async({searchParams}: IProps) =>{
    const page = searchParams.page ?? 1;
    return {
        title: `Clients List - Page ${page}`,
        description: `List of clients on page ${page}`,
        meta: [
            { name: 'description', content: `List of clients on page ${page}` },
            { property: 'og:title', content: `Client List - Page ${page}` },
            { property: 'og:description', content: `List of clients on page ${page}` },
        ],
    }
  }

const clientService = new ClientService();

export default async function ClientPage({searchParams}: IProps){
    const page = searchParams.page ? parseInt(searchParams.page.toString()): 1;
    const data = await clientService.findAll({page, size:8});
    return (
        <ClientsTemplate data={data} pagination={data.pageable}/>
    )
}
