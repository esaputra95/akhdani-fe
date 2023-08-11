import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const headeLabel = [
    { label: 'Kota Asal', name: 'originCity' },
    { label: 'Kota Tujuan', name: 'destinationCity' },
    { label: 'Tanggal Mulai', name: 'goDate' },
    { label: 'Tanggal Selesai', name: 'returnDate' },
    { label: 'Jarak', name: 'distance' },
    { label: 'Uang Saku', name: 'pocketMoney' },
    { label: 'Status', name: 'status' }
];

const TableHeader_ = ({ handleOnSort, sortField, sort }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>No</TableCell>
                {headeLabel.map((value, index) => (
                    <TableCell key={index} title={`Sort by ${value.name}`}>
                        <TableSortLabel
                            hideSortIcon={false}
                            onClick={() => handleOnSort(value.name)}
                            direction={sortField === value.name && sort === 'asc' ? 'asc' : 'desc'}
                        >
                            <Box component="span">{value.label}</Box>
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell align="right">Aksi</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader_;
