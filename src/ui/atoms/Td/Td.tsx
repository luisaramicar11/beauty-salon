"use client"
import React from 'react';
import { TableDataCellProps } from './TdStyles';
import { StyledTableDataCell } from './TdStyles';

const TableDataCell: React.FC<TableDataCellProps> = ({ children, textAlign, borderColor, padding }) => {
  return (
    <StyledTableDataCell textAlign={textAlign} borderColor={borderColor} padding={padding}>
      {children}
    </StyledTableDataCell>
  );
};

export default TableDataCell;
