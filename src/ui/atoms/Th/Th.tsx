"use client";
import React from 'react';
import { StyledTableCell} from "./ThStyles"
import { TableCellProps } from './ThStyles';

const TableCell: React.FC<TableCellProps> = ({ children, textAlign, borderColor, padding }) => {
  return (
    <StyledTableCell textAlign={textAlign} borderColor={borderColor} padding={padding}>
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
