import styled from 'styled-components';

export const StyledButton = styled.button<{ textColor?: string; bgColor?: string;  textHoverColorIcon?: string}>`
  padding: 8px;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: center;
  color: ${({ textColor, theme }) => textColor || theme.colors.textBlack};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ bgColor, theme }) => bgColor || theme.colors.textWhite};
    color: ${({  textHoverColorIcon, theme }) =>  textHoverColorIcon || theme.colors.textWhite};
  }
`;