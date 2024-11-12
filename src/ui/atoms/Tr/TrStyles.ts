import styled from 'styled-components';

export interface TableRowProps {
  children: React.ReactNode;
  hoverEffect?: boolean;
  borderColor?: string;
  transitionDuration?: string;
}

export const StyledTableRow = styled.tr<TableRowProps>`
  border-bottom: 1px solid ${(props) => props.borderColor || '#d1d5db'}; /* border-b */
  transition: background-color ${(props) => props.transitionDuration || '0.3s'} ease-in-out; /* transition-colors */
  
  ${(props) =>
    props.hoverEffect &&
    `
    &:hover {
      background-color: #f3f4f6; /* hover:bg-gray-100 */
    }
  `}
`;