"use client";
import { StyledTableDataCell } from '@/ui/atoms/Td/TdStyles';
import { StyledTableRow } from '@/ui/atoms/Tr/TrStyles';
import React from 'react';
import ActionButtons from '../ButtonsCard/ButtonsCard';

interface TableRowProps {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    onEdit: () => void;
    onDelete: () => void;
  }

const TableRow: React.FC<TableRowProps> = ({ name, lastName, email, phone, onEdit, onDelete})  => {
    return (
        <StyledTableRow>
            <StyledTableDataCell>{name}</StyledTableDataCell>
            <StyledTableDataCell>{lastName}</StyledTableDataCell>
            <StyledTableDataCell>{email}</StyledTableDataCell>
            <StyledTableDataCell>{phone}</StyledTableDataCell>
            <StyledTableDataCell>
                <ActionButtons onEdit={onEdit} onDelete={onDelete}/>
            </StyledTableDataCell>
        </StyledTableRow>
    );
}

export default TableRow;