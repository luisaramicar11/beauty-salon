"use client";
import React from 'react';
//import Section from '../molecules/Sections/Companies';
import CardsGrid from '../../organisms/Containers/Container';
import PageNavigation from '../../molecules/PageNavigation/PageNavigation';
import { TemplateContainer, ContentWrapper } from './ServicesStyles';
import { IPageable  } from "../../../app/core/application/dto/services/service-pageable.dto"
import { IAllServicesResponse} from "../../../app/core/application/dto/services/all-services-response.dto";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface IServicesProps {
  data: IAllServicesResponse,
  pagination: IPageable,
}

const ServicesTemplate = ({data, pagination}: IServicesProps) => {
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
        <CardsGrid data={data}/>
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

export default ServicesTemplate;