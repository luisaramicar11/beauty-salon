import { IAllServicesRequest } from '@/app/core/application/dto'
import { ServicesService } from '@/app/infrastructure/services';
import ServicesTemplate from '@/ui/template/Services/Services';
import React from 'react'

interface IProps{
  searchParams: IAllServicesRequest
}

export const generateMetadata = async({searchParams}: IProps) =>{
  const page = searchParams.page ?? 1;
  return {
      title: `Services List - Page ${page}`,
      description: `List of services on page ${page}`,
      meta: [
          { name: 'description', content: `List of services on page ${page}` },
          { property: 'og:title', content: `Service List - Page ${page}` },
          { property: 'og:description', content: `List of services on page ${page}` },
      ],
  }
}

const serviceService = new ServicesService();
export default async function ServicesPage({searchParams}: IProps) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const data = await serviceService.findAll({page, size:8});
  return (
    <ServicesTemplate data={data} pagination={data.pageable}/>
  )
}
