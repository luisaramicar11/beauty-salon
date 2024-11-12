import React from 'react';
import { TableRowProps } from './TrStyles';
import { StyledTableRow } from './TrStyles';

const TableRow: React.FC<TableRowProps> = ({ children, hoverEffect = true, borderColor, transitionDuration }) => {
  return (
    <StyledTableRow hoverEffect={hoverEffect} borderColor={borderColor} transitionDuration={transitionDuration}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
