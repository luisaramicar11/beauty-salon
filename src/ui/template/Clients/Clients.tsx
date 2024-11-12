"use client";
import React from 'react';
import { TemplateContainer, ContentWrapper } from './ClientsStyles';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { IAllClients, IPageable } from '@/app/core/application/dto/clients';
import Section from '@/ui/molecules/Sections/Clients';
import Table from '@/ui/organisms/Table/TableClients';
import PageNavigation from '@/ui/molecules/PageNavigation/PageNavigationClients';

interface IServicesProps {
  data: IAllClients,
  pagination: IPageable,
}

const ClientsTemplate = ({data, pagination}: IServicesProps) => {
  const totalPages = data.totalPages; 

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleNext = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString()); // de url pasa a objeto
    if(nextPage <= totalPages){
      params.set('page', nextPage.toString());
      router.push(`?${params.toString()}`); // de objeto pasa a string
    }
  };

  const handlePrevious = (backPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if(backPage > 0){
      params.set('page', backPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const currentPage = pagination.pageNumber + 1;

  return (
    <TemplateContainer>
      <ContentWrapper>
        <Section client={null}/>
        <Table data={data}/>
      </ContentWrapper>
      <PageNavigation
        pagination={pagination}
        totalPages={totalPages}
        onNext={()=>handleNext(currentPage+1)}
        onPrevious={()=>handlePrevious(currentPage-1)}
      />
    </TemplateContainer>
  );
};

export default ClientsTemplate;