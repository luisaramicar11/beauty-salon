import TableCell from '@/ui/atoms/Th/Th';
import React from 'react';

const TableHeaderRow: React.FC = () => {
  return (
    <thead>
      <tr>
        <TableCell>Nombre</TableCell>
        <TableCell>Apellido</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Acciones</TableCell>
      </tr>
    </thead>
  );
};

export default TableHeaderRow;