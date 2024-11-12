import styled from 'styled-components';
export interface TableCellProps {
    children: React.ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    borderColor?: string;
    padding?: string;
  }

export const StyledTableCell = styled.th<TableCellProps>`
  border: 1px solid ${(props) => props.borderColor || '#d1d5db'}; /* color por defecto gris */
  padding: ${(props) => props.padding || '8px 16px'};
  text-align: ${(props) => props.textAlign || 'center'};
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: #374151; /* text-gray-700 */
`;