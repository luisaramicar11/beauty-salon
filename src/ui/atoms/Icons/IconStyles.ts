import styled from 'styled-components';

export const StyledIcon = styled.span<{ textColorIcon?: string; textHoverColorIcon?: string;}>`
  color: ${({ textColorIcon }) => textColorIcon || 'inherit'};
  display: flex;
  justify-content: center;
  font-size: 1rem;
  &:hover {
    color: ${({ textHoverColorIcon }) => textHoverColorIcon || 'inherit'};
  }
`;