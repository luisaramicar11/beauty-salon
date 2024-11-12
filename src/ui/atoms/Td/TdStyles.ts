import styled from 'styled-components';

export interface TableDataCellProps {
  children: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  borderColor?: string;
  padding?: string;
}

export const StyledTableDataCell = styled.td<TableDataCellProps>`
  border: 1px solid ${(props) => props.borderColor || '#d1d5db'}; /* color gris #d1d5db */
  padding: ${(props) => props.padding || '8px 16px'}; /* py-2 px-4 */
  text-align: ${(props) => props.textAlign || 'left'};
`;