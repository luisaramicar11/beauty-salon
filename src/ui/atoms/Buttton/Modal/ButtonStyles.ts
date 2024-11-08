import styled from 'styled-components';

export const CloseButtonStyled = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLightGray};;
`;