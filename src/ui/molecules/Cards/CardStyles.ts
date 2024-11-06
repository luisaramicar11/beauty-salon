import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.textWhite};
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.textLightGray}; 
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  & > :last-child {
    align-self: flex-end;
  }
`;