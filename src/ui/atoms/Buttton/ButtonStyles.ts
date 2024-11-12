import styled from 'styled-components';

export const StyledButton = styled.button<{ textColor?: string; bgColor?: string;  textHoverColorIcon?: string; width?: string | number}>`
  padding: 8px;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '50px')};
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.bgInactiveTabs};;
  border: none;
  text-align: center;
  color: ${({ textColor, theme }) => textColor || theme.colors.textBlack};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background-color: ${({ bgColor, theme }) => bgColor || theme.colors.textWhite};
    color: ${({  textHoverColorIcon, theme }) =>  textHoverColorIcon || theme.colors.textWhite};
  }
`;