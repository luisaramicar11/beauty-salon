"use client";
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import { useTheme } from 'styled-components';
import { NavigationContainer } from "./PageNavigationStyles";
import Button from '../../atoms/Buttton/Button'; 
import Paragraph from '../../atoms/Text/Parragraph/Parragraph'; 
import { IPageable } from '../../../app/core/application/dto/services/service-pageable.dto';

interface PageNavigationProps {
  pagination: IPageable;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PageNavigation = ({
  pagination,
  totalPages,
  onNext,
  onPrevious,
}: PageNavigationProps) => {
  const theme = useTheme(); 
  const currentPage = pagination.pageNumber + 1;

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <NavigationContainer>
      <Button
        onClick={onPrevious}
        icon={<BsChevronLeft />}
        bgColor={isPreviousDisabled ? theme.colors.bgInactiveTabs : theme.colors.bgPaginationButtons}
        textColorIcon={theme.colors.textMediumGray}
        disabled={isPreviousDisabled}
        borderRadius={50}
        width={40}
      />
      <Paragraph>
        Página {currentPage} de {totalPages}
      </Paragraph>
      <Button
        onClick={onNext}
        icon={<BsChevronRight />}
        bgColor={isNextDisabled ? theme.colors.bgInactiveTabs : theme.colors.bgPaginationButtons}
        textColorIcon={theme.colors.textMediumGray}
        disabled={isNextDisabled}
        width={40}
        borderRadius={50}
      />
    </NavigationContainer>
  );
};

export default PageNavigation;