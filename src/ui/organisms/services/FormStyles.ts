import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 0.5rem; 
  padding: 16px;
  width: 100%;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonPurpleHover};
    color: ${({ theme }) => theme.colors.textWhite};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

export const Div = styled.div`
width: 100%;
`