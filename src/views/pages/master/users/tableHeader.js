import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const headeLabel = [
    { label: 'Nama', name: 'name' },
    { label: 'Username', name: 'username' }
];

const TableHeader_ = ({ handleOnSort, sortField, sort }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>No</TableCell>
                {headeLabel.map((value) => (
                    <TableCell title={`Sort by ${value.name}`}>
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
